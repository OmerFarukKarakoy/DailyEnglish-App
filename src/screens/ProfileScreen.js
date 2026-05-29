import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  ScrollView, Dimensions, ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { useApp } from '../context/AppContext';
import { GRAMMAR_TOPICS } from '../data/grammar';
const OXFORD_DICT = require('../../oxford_dictionary.json');
const PREPOSITIONS_DICT = require('../../prepositions_full.json');
const CONJUNCTIONS_DICT = require('../../conjunctions.json');
const PHRASAL_VERBS_DICT = require('../../phrasal_verbs.json');
import { predictNextQuizScore } from '../services/aiService';

const { width } = Dimensions.get('window');
const CELL_SIZE = (width - SPACING.xl * 2 - 44) / 7;

function ActivityHeatmap({ activity }) {
  const today = new Date();
  const days = [];
  // 12 weeks = 84 days
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push({
      key: d.toDateString(),
      count: activity[d.toDateString()] || 0,
    });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <View style={heatStyles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={heatStyles.scrollContent}>
        <View style={heatStyles.heatmapRow}>
          {weeks.map((week, wIdx) => (
            <View key={wIdx} style={heatStyles.weekCol}>
              {week.map((day, dIdx) => {
                const opacity = day.count === 0 ? 0.12 : day.count < 5 ? 0.4 : day.count < 10 ? 0.7 : 1;
                return (
                  <View
                    key={dIdx}
                    style={[heatStyles.cell, { backgroundColor: `rgba(0,255,136,${opacity})` }]}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={heatStyles.legend}>
        <Text style={heatStyles.legendText}>Az</Text>
        <View style={[heatStyles.legendCell, { backgroundColor: `rgba(0,255,136,0.12)` }]} />
        <View style={[heatStyles.legendCell, { backgroundColor: `rgba(0,255,136,0.4)` }]} />
        <View style={[heatStyles.legendCell, { backgroundColor: `rgba(0,255,136,0.7)` }]} />
        <View style={[heatStyles.legendCell, { backgroundColor: `rgba(0,255,136,1)` }]} />
        <Text style={heatStyles.legendText}>Çok</Text>
      </View>
    </View>
  );
}

const heatStyles = StyleSheet.create({
  container: { width: '100%' },
  scrollContent: { paddingBottom: 8 },
  heatmapRow: { flexDirection: 'row', gap: 4 },
  weekCol: { gap: 4 },
  cell: { width: 14, height: 14, borderRadius: 3 },
  legend: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 8 },
  legendCell: { width: 12, height: 12, borderRadius: 2 },
  legendText: { color: COLORS.textMuted, fontSize: 11, marginHorizontal: 2 }
});

function predictTargetDate(activity, currentTotal, targetLevel) {
  const dates = Object.keys(activity).map(d => new Date(d)).sort((a, b) => a - b);
  const x = []; const y = []; const dataPoints = [];
  
  if (dates.length < 2) {
    x.push(0); y.push(Math.max(0, currentTotal - 10)); 
    dataPoints.push({ x: 0, y: Math.max(0, currentTotal - 10), isFuture: false });
    x.push(1); y.push(currentTotal); 
    dataPoints.push({ x: 1, y: currentTotal, isFuture: false });
  } else {
    const startT = dates[0].getTime();
    let cumulative = 0;
    for (const d of dates) {
      cumulative += activity[d.toDateString()];
      const daysSinceStart = (d.getTime() - startT) / (1000 * 3600 * 24);
      x.push(daysSinceStart); y.push(cumulative);
      dataPoints.push({ x: daysSinceStart, y: cumulative, isFuture: false });
    }
  }

  const n = x.length;
  let sum_x = 0, sum_y = 0, sum_xy = 0, sum_xx = 0;
  for (let i = 0; i < n; i++) {
    sum_x += x[i]; sum_y += y[i];
    sum_xy += x[i] * y[i]; sum_xx += x[i] * x[i];
  }
  const denominator = (n * sum_xx - sum_x * sum_x);
  let slope = denominator !== 0 ? (n * sum_xy - sum_x * sum_y) / denominator : 0;
  if (slope <= 0) slope = 5; 
  
  const intercept = (sum_y - slope * sum_x) / n;

  const getLevelTarget = (lvl) => {
    switch (lvl) {
      case 'A2': return 500;
      case 'B1': return 1000;
      case 'B2': return 2000;
      case 'C1': return 4000;
      case 'C2': return 8000;
      default: return currentTotal + 200;
    }
  };
  const targetScore = getLevelTarget(targetLevel);
  const daysToTarget = (targetScore - intercept) / slope;
  
  const startT = dates.length > 0 ? dates[0].getTime() : new Date().getTime() - 24 * 3600 * 1000;
  const predictionDate = new Date(startT + daysToTarget * 1000 * 3600 * 24);
  
  const lastX = x[x.length - 1];
  for (let i = 1; i <= 3; i++) {
    const futX = lastX + ((daysToTarget - lastX) * (i / 3));
    dataPoints.push({ x: futX, y: slope * futX + intercept, isFuture: true });
  }

  return { predictionDate, dataPoints, targetScore };
}

function TrendChart({ dataPoints, targetScore }) {
  const chartHeight = 120;
  const chartWidth = width - SPACING.xl * 4;
  
  const minX = Math.min(...dataPoints.map(d => d.x));
  const maxX = Math.max(...dataPoints.map(d => d.x));
  const minY = Math.min(...dataPoints.map(d => d.y), 0);
  const maxY = Math.max(...dataPoints.map(d => d.y), targetScore);
  
  const getCoords = (d) => ({
    x: ((d.x - minX) / (maxX - minX || 1)) * chartWidth,
    y: chartHeight - ((d.y - minY) / (maxY - minY || 1)) * chartHeight
  });

  return (
    <View style={{ height: chartHeight, width: '100%', marginTop: 20, position: 'relative' }}>
      {dataPoints.map((d, i) => {
        if (i === 0) return null;
        const p1 = getCoords(dataPoints[i - 1]);
        const p2 = getCoords(d);
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const centerX = p1.x + dx / 2;
        const centerY = p1.y + dy / 2;

        return (
          <View key={`line-${i}`} style={{
            position: 'absolute', left: centerX - length / 2, top: centerY - 1,
            width: length, height: 2, borderBottomWidth: 2,
            borderColor: d.isFuture ? COLORS.accent3 : COLORS.primary,
            borderStyle: d.isFuture ? 'dashed' : 'solid',
            transform: [{ rotate: `${angle}deg` }]
          }} />
        );
      })}
      {dataPoints.map((d, i) => {
        const { x, y } = getCoords(d);
        return (
          <View key={`dot-${i}`} style={{
            position: 'absolute', left: x - 4, top: y - 4,
            width: 8, height: 8, borderRadius: 4,
            backgroundColor: d.isFuture ? COLORS.accent3 : COLORS.primary,
          }} />
        );
      })}
    </View>
  );
}

function RadarChart({ learnedCounts, dictTotals }) {
  const size = 140;
  const center = size / 2;
  const radius = 50;

  const displayMap = {
    vocabulary: 'Vocabulary',
    prepositions: 'Prepositions',
    conjunctions: 'Conjunctions',
    phrasal_verbs: 'Phrasal Verbs'
  };
  const keys = Object.keys(displayMap);
  
  const getPct = (k) => {
     if (!dictTotals[k]) return 0;
     return Math.min(100, Math.round((learnedCounts[k] / dictTotals[k]) * 100));
  };

  const points = keys.map((k, i) => {
    const angle = (Math.PI * 2 * i) / keys.length - Math.PI / 2;
    const val = (getPct(k) / 100) * radius;
    return { x: center + val * Math.cos(angle), y: center + val * Math.sin(angle) };
  });
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <View style={radarStyles.container}>
      {keys.map((k) => (
        <View key={k} style={radarStyles.skillRow}>
          <Text style={radarStyles.skillName}>{displayMap[k]}</Text>
          <View style={radarStyles.barBg}>
            <View style={[radarStyles.barFill, { width: `${getPct(k)}%` }]} />
          </View>
          <Text style={radarStyles.skillVal}>{learnedCounts[k]}/{dictTotals[k]}</Text>
        </View>
      ))}
    </View>
  );
}

const radarStyles = StyleSheet.create({
  container: { gap: 8 },
  skillRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  skillName: { color: COLORS.textMuted, fontSize: 13, width: 85, fontWeight: '600' },
  barBg: { flex: 1, height: 6, backgroundColor: COLORS.bgCard2, borderRadius: 3, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },
  skillVal: { color: COLORS.primary, fontSize: 12, fontWeight: '700', width: 45, textAlign: 'right' },
});

export default function ProfileScreen() {
  const { state } = useApp();
  const [predictedScore, setPredictedScore] = useState(null);
  const [tfError, setTfError] = useState(null);

  useEffect(() => {
    // TensorFlow model will run in the background to predict score
    const runPrediction = async () => {
      try {
        setTfError(null);
        const score = await predictNextQuizScore(state.streakDays || 0, state.totalWordsLearned || 0);
        setPredictedScore(score);
      } catch (error) {
        console.log("TF Model error:", error);
        setTfError(error.message || String(error));
        setPredictedScore('error');
      }
    };
    runPrediction();
  }, [state.streakDays, state.totalWordsLearned]);

  const totalQuizzes = state.quizHistory.length;
  const avgScore = totalQuizzes > 0
    ? Math.round(state.quizHistory.reduce((sum, q) => sum + (q.correct / q.total) * 100, 0) / totalQuizzes)
    : 0;

  let totalGrammarQuizzes = 0;
  GRAMMAR_TOPICS.forEach(topic => {
    topic.subtopics.forEach(sub => {
      if (sub.isFolder) {
        sub.subtopics.forEach(nestedSub => {
          if (nestedSub.quiz && nestedSub.quiz.length > 0) totalGrammarQuizzes++;
        });
      } else {
        if (sub.quiz && sub.quiz.length > 0) totalGrammarQuizzes++;
      }
    });
  });
  const completedGrammar = (state.completedGrammarQuizzes || []).length;
  const totalAllQuizzes = totalQuizzes + completedGrammar;

  const vocabQuizCount = state.quizHistory.filter(q => !q.category || q.category === 'vocabulary' || q.category === 'daily').length;
  const conjQuizCount = state.quizHistory.filter(q => q.category === 'conjunctions').length;
  const prepQuizCount = state.quizHistory.filter(q => q.category === 'prepositions').length;
  const pvQuizCount = state.quizHistory.filter(q => q.category === 'phrasal_verbs').length;

  const dictTotals = {
    vocabulary: OXFORD_DICT.length,
    prepositions: PREPOSITIONS_DICT.length,
    conjunctions: CONJUNCTIONS_DICT.length,
    phrasal_verbs: PHRASAL_VERBS_DICT.length
  };

  const learnedWordIds = state.learnedWords || [];
  const learnedCounts = {
    prepositions: learnedWordIds.filter(id => String(id).startsWith('prepositions_')).length,
    conjunctions: learnedWordIds.filter(id => String(id).startsWith('conjunctions_')).length,
    phrasal_verbs: learnedWordIds.filter(id => String(id).startsWith('phrasal_verbs_')).length,
    vocabulary: learnedWordIds.filter(id => {
      const s = String(id);
      return !s.startsWith('prepositions_') && !s.startsWith('conjunctions_') && !s.startsWith('phrasal_verbs_');
    }).length
  };

  const BADGE_GROUPS = [
    {
      title: 'Vocabulary Görevleri',
      data: [
        { id: 'v_b', condition: learnedCounts.vocabulary >= 100, emoji: '🥉', label: 'Başlangıç', desc: '100 Kelime Öğren' },
        { id: 'v_s', condition: learnedCounts.vocabulary >= 1000, emoji: '🥈', label: 'İleri', desc: '1000 Kelime Öğren' },
        { id: 'v_g', condition: learnedCounts.vocabulary >= 2500, emoji: '🥇', label: 'Master', desc: '2500+ Kelime Öğren' },
        { id: 's_v', condition: vocabQuizCount >= 20, emoji: '🗺️', label: 'Kaşif', desc: '20 Kelime Quizi Tamamla' },
      ]
    },
    {
      title: 'Preposition Görevleri',
      data: [
        { id: 'p_b', condition: learnedCounts.prepositions >= 50, emoji: '🥉', label: 'Başlangıç', desc: '50 Edat Öğren' },
        { id: 'p_s', condition: learnedCounts.prepositions >= 150, emoji: '🥈', label: 'İleri', desc: '150 Edat Öğren' },
        { id: 'p_g', condition: learnedCounts.prepositions >= 300, emoji: '🥇', label: 'Master', desc: '300 Edat Öğren' },
        { id: 's_p', condition: prepQuizCount >= 15, emoji: '📍', label: 'Uzman', desc: '15 Edat Quizi Tamamla' },
      ]
    },
    {
      title: 'Conjunction Görevleri',
      data: [
        { id: 'c_b', condition: learnedCounts.conjunctions >= 25, emoji: '🥉', label: 'Başlangıç', desc: '25 Bağlaç Öğren' },
        { id: 'c_s', condition: learnedCounts.conjunctions >= 75, emoji: '🥈', label: 'İleri', desc: '75 Bağlaç Öğren' },
        { id: 'c_g', condition: learnedCounts.conjunctions >= 150, emoji: '🥇', label: 'Master', desc: '150+ Bağlaç Öğren' },
        { id: 's_c', condition: conjQuizCount >= 10, emoji: '🔗', label: 'Bükücü', desc: '10 Bağlaç Quizi Tamamla' },
      ]
    },
    {
      title: 'Phrasal Verb Görevleri',
      data: [
        { id: 'pv_b', condition: learnedCounts.phrasal_verbs >= 50, emoji: '🥉', label: 'Başlangıç', desc: '50 Phrasal Öğren' },
        { id: 'pv_s', condition: learnedCounts.phrasal_verbs >= 250, emoji: '🥈', label: 'İleri', desc: '250 Phrasal Öğren' },
        { id: 'pv_g', condition: learnedCounts.phrasal_verbs >= 500, emoji: '🥇', label: 'Master', desc: '500 Phrasal Öğren' },
        { id: 's_pv', condition: pvQuizCount >= 20, emoji: '🚀', label: 'Fatih', desc: '20 Phrasal Quizi Tamamla' },
      ]
    },
    {
      title: 'Gramer & Genel Başarılar',
      data: [
        { id: 'q_1', condition: totalAllQuizzes >= 1, emoji: '🌱', label: 'İlk Adım', desc: '1 Quiz Çöz' },
        { id: 'q_10', condition: totalAllQuizzes >= 10, emoji: '🧐', label: 'Meraklı Öğrenci', desc: '10 Quiz Çöz' },
        { id: 'q_50', condition: totalAllQuizzes >= 50, emoji: '🏹', label: 'Bilgi Avcısı', desc: '50 Quiz Çöz' },
        { id: 'q_100', condition: totalAllQuizzes >= 100, emoji: '⚔️', label: 'Sınav Ustası', desc: '100 Quiz Çöz' },
        { id: 'q_250', condition: totalAllQuizzes >= 250, emoji: '🧙‍♂️', label: 'Bilge', desc: '250+ Quiz Çöz' },
        { id: 's_g', condition: completedGrammar >= 25, emoji: '📜', label: 'Yolcu', desc: '25 Gramer Quizi Tamamla' },
        { id: 's_g_50', condition: completedGrammar >= 50, emoji: '📚', label: 'Gramer Ustası', desc: '50 Gramer Quizi Tamamla' },
        { id: 's_g_all', condition: completedGrammar >= totalGrammarQuizzes, emoji: '👑', label: 'Gramer Kralı', desc: 'Bütün Gramer Quizlerini Tamamla' },
      ]
    }
  ];

  const { predictionDate, dataPoints, targetScore } = predictTargetDate(
    state.monthlyActivity,
    state.totalWordsLearned,
    state.currentLevelTo
  );
  
  const formattedDate = predictionDate ? predictionDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Hesaplanıyor...';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>⚙️ Profil</Text>
        </View>

        {/* User Card */}
        <LinearGradient colors={['#1A0A3E', '#0A1A3E']} style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View>
            <Text style={styles.userName}>{state.userName || 'Öğrenci'}</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>{state.userLevel} Seviye</Text>
            </View>
          </View>
          <View style={styles.streakBadge}>
            <Text style={styles.streakFire}>🔥</Text>
            <Text style={styles.streakText}>{state.streakDays} gün</Text>
          </View>
        </LinearGradient>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={[styles.statNum, { color: COLORS.primary }]}>{state.totalWordsLearned}</Text>
            <Text style={styles.statLabel}>Toplam Kelime</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNum, { color: COLORS.secondary }]}>{totalQuizzes}</Text>
            <Text style={styles.statLabel}>Kelime Quizi</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNum, { color: COLORS.accent3 }]}>{completedGrammar}/{totalGrammarQuizzes}</Text>
            <Text style={styles.statLabel}>Gramer Quizi</Text>
          </View>
        </View>

        {/* Monthly Activity */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📅 Aylık Aktivite (Isı Haritası)</Text>
          <ActivityHeatmap activity={state.monthlyActivity} />
        </View>

        {/* AI Score Prediction */}
        <View style={[styles.card, { borderColor: '#8B5CF6' }]}>
          <Text style={styles.cardTitle}>🤖 Yapay Zeka Başarı Tahmini</Text>
          {predictedScore === null ? (
            <ActivityIndicator color="#8B5CF6" style={{ marginVertical: 10 }} />
          ) : predictedScore === 'error' ? (
            <Text style={{ color: COLORS.accent1, fontSize: 13 }}>
              Hata: {tfError}
            </Text>
          ) : (
            <Text style={{ color: COLORS.text, fontSize: 15, lineHeight: 22 }}>
              Bu tempoyla gidersen bir sonraki kelime sınavından <Text style={{ color: '#8B5CF6', fontWeight: '900', fontSize: 18 }}>{predictedScore}</Text> almanı bekliyoruz! Hız kesmeden devam et! 🚀
            </Text>
          )}
        </View>

        {/* Remember Rate */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧠 Hatırlama Oranı (Tahmin Modeli)</Text>
          <Text style={styles.rememberSub}>Şu an %{state.rememberRate} Hatırlıyorsun</Text>
          <View style={styles.progressBg}>
            <LinearGradient
              colors={[COLORS.primary, COLORS.accent2]}
              style={[styles.progressFill, { width: `${state.rememberRate}%` }]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            />
          </View>
        </View>

        {/* Level Progress & Trend */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📈 Hedef Analizi: {state.currentLevelTo}</Text>
          <Text style={styles.trendSub}>
            Mevcut hızınla <Text style={{ color: COLORS.accent3, fontWeight: '700' }}>{state.currentLevelTo}</Text> seviyesine tahmini ulaşma tarihin:
          </Text>
          <Text style={styles.trendDate}>{formattedDate}</Text>
          
          <TrendChart dataPoints={dataPoints} targetScore={targetScore} />
        </View>

        {/* Skills */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚡ Beceri Analizi (Öğrenilen Kelimeler)</Text>
          <RadarChart learnedCounts={learnedCounts} dictTotals={dictTotals} />
        </View>

        {/* Badges */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🏅 Rozetlerim & Görevler</Text>
          
          {BADGE_GROUPS.map((group, gIdx) => (
            <View key={gIdx} style={styles.badgeGroup}>
              <Text style={styles.badgeGroupTitle}>{group.title}</Text>
              {group.data.map((b) => (
                <View key={b.id} style={[styles.badgeRow, !b.condition && styles.badgeRowDim]}>
                  <View style={styles.badgeRowText}>
                    <Text style={[styles.badgeRowLabel, !b.condition && { color: COLORS.textMuted }]}>{b.label}</Text>
                    <Text style={styles.badgeRowDesc}>{b.desc}</Text>
                  </View>
                  <View style={[styles.badgeRowIconWrapper, b.condition ? { backgroundColor: COLORS.bgCard2, borderColor: COLORS.border } : { backgroundColor: 'transparent', borderColor: 'transparent' }]}>
                    <Text style={[styles.badgeRowEmoji, !b.condition && { opacity: 0.3 }]}>{b.emoji}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: SPACING.xl, paddingBottom: 32 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.xl },
  title: { fontSize: 24, fontWeight: '900', color: COLORS.text },
  userCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    borderRadius: RADIUS.xl, padding: SPACING.xl,
    marginBottom: SPACING.xl, borderWidth: 1, borderColor: COLORS.secondary + '44',
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: COLORS.bgCard2, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 24 },
  userName: { fontSize: 18, fontWeight: '800', color: COLORS.text },
  levelBadge: { backgroundColor: COLORS.secondaryDim, paddingHorizontal: 10, paddingVertical: 3, borderRadius: RADIUS.full, marginTop: 4, alignSelf: 'flex-start' },
  levelBadgeText: { color: '#A78BFA', fontSize: 12, fontWeight: '700' },
  streakBadge: { marginLeft: 'auto', alignItems: 'center', backgroundColor: COLORS.bgCard2, borderRadius: RADIUS.lg, padding: 10 },
  streakFire: { fontSize: 22 },
  streakText: { color: COLORS.accent1, fontSize: 12, fontWeight: '700' },
  statsRow: { flexDirection: 'row', gap: 8, marginBottom: SPACING.xl },
  statCard: {
    flex: 1, backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.md, alignItems: 'center', borderWidth: 1, borderColor: COLORS.border,
  },
  statNum: { fontSize: 22, fontWeight: '900' },
  statLabel: { color: COLORS.textMuted, fontSize: 11, marginTop: 2 },
  card: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.xl,
    padding: SPACING.xl, marginBottom: SPACING.xl,
    borderWidth: 1, borderColor: COLORS.border,
  },
  cardTitle: { fontSize: 15, fontWeight: '800', color: COLORS.text, marginBottom: 16 },
  rememberSub: { color: COLORS.textMuted, fontSize: 13, marginBottom: 10 },
  trendSub: { color: COLORS.textMuted, fontSize: 13, lineHeight: 20 },
  trendDate: { color: COLORS.text, fontSize: 16, fontWeight: '800', marginTop: 6 },
  progressBg: { height: 8, backgroundColor: COLORS.bgCard2, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  levelPct: { color: COLORS.primary, fontSize: 14, fontWeight: '700', textAlign: 'right', marginTop: 6 },
  
  badgeGroup: { marginBottom: 24 },
  badgeGroupTitle: { color: COLORS.text, fontSize: 16, fontWeight: '800', marginBottom: 12, marginLeft: 4 },
  badgeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16, backgroundColor: COLORS.bgCard2, borderRadius: RADIUS.lg, marginBottom: 10, borderWidth: 1, borderColor: COLORS.border },
  badgeRowDim: { opacity: 0.5, backgroundColor: 'transparent', borderColor: COLORS.borderDim || '#3A2E5D' },
  badgeRowText: { flex: 1, paddingRight: 12 },
  badgeRowLabel: { color: COLORS.text, fontSize: 15, fontWeight: '800', marginBottom: 4 },
  badgeRowDesc: { color: COLORS.textDim, fontSize: 12, fontWeight: '500' },
  badgeRowIconWrapper: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.bgCard2, borderWidth: 1, borderColor: COLORS.border },
  badgeRowEmoji: { fontSize: 24 },
});
