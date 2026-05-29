import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  Animated, Dimensions, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { LEVEL_PLACEMENT_QUIZ } from '../data/words';
import { useApp } from '../context/AppContext';

const { width } = Dimensions.get('window');

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function LevelTestScreen() {
  const { dispatch } = useApp();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [finalLevel, setFinalLevel] = useState('');

  const question = LEVEL_PLACEMENT_QUIZ[current];
  const progress = current / LEVEL_PLACEMENT_QUIZ.length;

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    const isCorrect = option === question.answer;
    const newAnswers = [...answers, { question, selected: option, correct: isCorrect }];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (current + 1 < LEVEL_PLACEMENT_QUIZ.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        calculateLevel(newAnswers);
      }
    }, 800);
  };

  const calculateLevel = (ans) => {
    const correctCount = ans.filter(a => a.correct).length;
    let level;
    if (correctCount <= 2) level = 'A1';
    else if (correctCount <= 4) level = 'A2';
    else if (correctCount <= 6) level = 'B1';
    else if (correctCount <= 8) level = 'B2';
    else level = 'C1';
    setFinalLevel(level);
    setShowResult(true);
  };

  const handleConfirm = () => {
    dispatch({ type: 'SET_LEVEL', payload: finalLevel });
  };

  if (showResult) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#0A0A0F', '#1A0A2E', '#0A0A0F']} style={styles.bg}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultEmoji}>🏆</Text>
            <Text style={styles.resultTitle}>Seviyeniz Belirlendi!</Text>
            <View style={styles.levelBadge}>
              <LinearGradient colors={['#7C3AED', '#00FF88']} style={styles.levelGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.levelText}>{finalLevel}</Text>
              </LinearGradient>
            </View>
            <Text style={styles.levelDesc}>
              {finalLevel === 'A1' && 'Başlangıç seviyesindesiniz. Temelden başlayalım!'}
              {finalLevel === 'A2' && 'Temel bilgileriniz var. Geliştirmeye hazır mısınız?'}
              {finalLevel === 'B1' && 'Orta seviyesindesiniz. Harika bir başlangıç!'}
              {finalLevel === 'B2' && 'Üst-orta seviyesindesiniz. Çok iyi!'}
              {finalLevel === 'C1' && 'İleri seviyesindesiniz. Mükemmel!'}
            </Text>
            <Text style={styles.correctCount}>
              {answers.filter(a => a.correct).length}/{LEVEL_PLACEMENT_QUIZ.length} soru doğru
            </Text>
            <TouchableOpacity style={styles.startBtn} onPress={handleConfirm}>
              <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.startBtnGrad} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={styles.startBtnText}>Öğrenmeye Başla! 🚀</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0A0A0F', '#1A0A2E', '#0A0A0F']} style={styles.bg}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Seviye Testi</Text>
            <Text style={styles.headerSub}>Sizi tanımak istiyoruz</Text>
          </View>

          {/* Progress */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>
            <Text style={styles.progressText}>{current + 1}/{LEVEL_PLACEMENT_QUIZ.length}</Text>
          </View>

          {/* Question Card */}
          <View style={styles.questionCard}>
            <View style={styles.questionHeader}>
              <Text style={styles.questionNum}>Soru {current + 1}</Text>
              <View style={styles.levelTag}>
                <Text style={styles.levelTagText}>{question.level}</Text>
              </View>
            </View>
            <Text style={styles.questionWord}>{question.word}</Text>
            <Text style={styles.questionSub}>Türkçe anlamı nedir?</Text>
          </View>

          {/* Options */}
          <View style={styles.options}>
            {question.options.map((option, idx) => {
              const isSelected = selected === option;
              const isCorrect = option === question.answer;
              let borderColor = COLORS.border;
              let bgColor = COLORS.bgCard;
              if (isSelected) {
                borderColor = isCorrect ? COLORS.success : COLORS.danger;
                bgColor = isCorrect ? COLORS.primaryDim : '#FF444422';
              } else if (selected && isCorrect) {
                borderColor = COLORS.success;
                bgColor = COLORS.primaryDim;
              }
              return (
                <TouchableOpacity
                  key={option}
                  style={[styles.option, { borderColor, backgroundColor: bgColor }]}
                  onPress={() => handleSelect(option)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.optionLabel, { borderColor }]}>
                    <Text style={[styles.optionLabelText, { color: borderColor === COLORS.border ? COLORS.textMuted : borderColor }]}>
                      {OPTION_LABELS[idx]}
                    </Text>
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                  {isSelected && (
                    <Text style={styles.optionIcon}>{isCorrect ? '✓' : '✗'}</Text>
                  )}
                  {selected && !isSelected && isCorrect && (
                    <Text style={styles.optionIcon}>✓</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  bg: { flex: 1 },
  scroll: { padding: SPACING.xl, paddingBottom: 40 },
  header: { alignItems: 'center', marginBottom: SPACING['2xl'], marginTop: SPACING.xl },
  headerTitle: { fontSize: 28, fontWeight: '800', color: COLORS.text, letterSpacing: 1 },
  headerSub: { fontSize: 14, color: COLORS.textMuted, marginTop: 6 },
  progressContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING['2xl'], gap: 12 },
  progressBg: { flex: 1, height: 6, backgroundColor: COLORS.bgCard2, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },
  progressText: { color: COLORS.textMuted, fontSize: 13, fontWeight: '600', minWidth: 36 },
  questionCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING['2xl'],
    borderWidth: 1,
    borderColor: COLORS.borderGlow,
    marginBottom: SPACING['2xl'],
    alignItems: 'center',
  },
  questionHeader: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: SPACING.lg },
  questionNum: { color: COLORS.textMuted, fontSize: 13, fontWeight: '600' },
  levelTag: { backgroundColor: COLORS.secondaryDim, paddingHorizontal: 10, paddingVertical: 3, borderRadius: RADIUS.full },
  levelTagText: { color: COLORS.secondary, fontSize: 11, fontWeight: '700' },
  questionWord: { fontSize: 36, fontWeight: '900', color: COLORS.text, letterSpacing: 2, marginBottom: 8 },
  questionSub: { fontSize: 14, color: COLORS.textMuted },
  options: { gap: 12 },
  option: {
    flexDirection: 'row', alignItems: 'center', padding: SPACING.lg,
    borderRadius: RADIUS.lg, borderWidth: 1.5, gap: 12,
  },
  optionLabel: {
    width: 32, height: 32, borderRadius: RADIUS.full, borderWidth: 1.5,
    alignItems: 'center', justifyContent: 'center',
  },
  optionLabelText: { fontSize: 13, fontWeight: '800' },
  optionText: { flex: 1, fontSize: 16, color: COLORS.text, fontWeight: '500' },
  optionIcon: { fontSize: 18, fontWeight: '800', color: COLORS.success },
  // Result styles
  resultContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: SPACING['3xl'] },
  resultEmoji: { fontSize: 80, marginBottom: SPACING.xl },
  resultTitle: { fontSize: 28, fontWeight: '900', color: COLORS.text, marginBottom: SPACING['2xl'], textAlign: 'center' },
  levelBadge: { marginBottom: SPACING.xl },
  levelGradient: { width: 120, height: 120, borderRadius: 60, alignItems: 'center', justifyContent: 'center' },
  levelText: { fontSize: 40, fontWeight: '900', color: '#fff' },
  levelDesc: { fontSize: 16, color: COLORS.textMuted, textAlign: 'center', marginBottom: SPACING.lg, lineHeight: 24 },
  correctCount: { fontSize: 24, fontWeight: '800', color: COLORS.primary, marginBottom: SPACING['3xl'] },
  startBtn: { width: '100%', borderRadius: RADIUS.xl, overflow: 'hidden' },
  startBtnGrad: { paddingVertical: 18, alignItems: 'center', borderRadius: RADIUS.xl },
  startBtnText: { fontSize: 18, fontWeight: '800', color: '#000' },
});
