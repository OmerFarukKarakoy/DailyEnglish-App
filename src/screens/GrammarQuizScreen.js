import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { GRAMMAR_TOPICS } from '../data/grammar';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function GrammarQuizScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { dispatch } = useApp();
  const { topicId, subtopicId } = route.params || {};

  const topic = GRAMMAR_TOPICS.find(t => t.id === topicId);
  let subtopic = null;
  if (topic) {
    for (const sub of topic.subtopics) {
      if (sub.id === subtopicId) { subtopic = sub; break; }
      if (sub.isFolder && sub.subtopics) {
        const nested = sub.subtopics.find(s => s.id === subtopicId);
        if (nested) { subtopic = nested; break; }
      }
    }
  }
  const questions = subtopic?.quiz || [];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === q.answer) setScore(s => s + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1);
        setSelected(null);
      } else {
        const isPerfect = (option === q.answer ? score + 1 : score) === questions.length;
        if (isPerfect) {
          dispatch({ type: 'COMPLETE_GRAMMAR_QUIZ', payload: `${topicId}_${subtopicId}` });
        }
        setShowResult(true);
      }
    }, 2000);
  };

  if (!q && !showResult) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.noQuizText}>Bu konu için henüz quiz bulunmuyor.</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: COLORS.primary, fontSize: 16, marginTop: 16 }}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (showResult) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</Text>
          <Text style={styles.resultTitle}>{pct >= 80 ? 'Harika!' : pct >= 50 ? 'İyi!' : 'Tekrar Çalış!'}</Text>
          <Text style={[styles.resultScore, { color: topic.color }]}>{score}/{questions.length}</Text>
          <Text style={styles.resultPct}>%{pct} Doğru</Text>
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => navigation.goBack()}
          >
            <LinearGradient colors={[topic.color, topic.color + 'BB']} style={styles.doneBtnGrad}>
              <Text style={styles.doneBtnText}>Geri Dön</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>✕</Text>
        </TouchableOpacity>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${((current + 1) / questions.length) * 100}%`, backgroundColor: topic.color }]} />
        </View>
        <Text style={styles.counter}>{current + 1}/{questions.length}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Question */}
        <View style={[styles.questionCard, { borderColor: topic.color + '55' }]}>
          <View style={styles.topicBadge}>
            <Text style={styles.topicEmoji}>{topic.icon}</Text>
            <Text style={[styles.topicName, { color: topic.color }]}>{subtopic.name}</Text>
          </View>
          <Text style={styles.question}>{q.q}</Text>
        </View>

        {/* Options */}
        <View style={styles.options}>
          {q.options.map((opt, idx) => {
            const isSelected = selected === opt;
            const isCorrect = opt === q.answer;
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
                key={opt}
                style={[styles.option, { borderColor, backgroundColor: bgColor }]}
                onPress={() => handleSelect(opt)}
                activeOpacity={0.7}
              >
                <View style={[styles.optLabel, { borderColor: selected ? (isCorrect ? COLORS.success : (isSelected ? COLORS.danger : COLORS.border)) : COLORS.border }]}>
                  <Text style={styles.optLabelText}>{OPTION_LABELS[idx]}</Text>
                </View>
                <Text style={[styles.optText, { color: selected ? (isCorrect ? COLORS.success : (isSelected ? COLORS.danger : COLORS.text)) : COLORS.text }]}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  noQuizText: { color: COLORS.textMuted, fontSize: 16, textAlign: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', padding: SPACING.xl, gap: 12 },
  backBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 18, color: COLORS.textMuted },
  progressBg: { flex: 1, height: 8, backgroundColor: COLORS.bgCard2, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  counter: { color: COLORS.textMuted, fontSize: 13, fontWeight: '600' },
  scroll: { padding: SPACING.xl, paddingBottom: 32 },
  questionCard: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.xl,
    padding: SPACING.xl, borderWidth: 1, marginBottom: SPACING.xl,
  },
  topicBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16 },
  topicEmoji: { fontSize: 16 },
  topicName: { fontSize: 13, fontWeight: '700' },
  question: { fontSize: 20, fontWeight: '700', color: COLORS.text, lineHeight: 28 },
  options: { gap: 12 },
  option: {
    flexDirection: 'row', alignItems: 'center', padding: SPACING.lg,
    borderRadius: RADIUS.lg, borderWidth: 1.5, gap: 12,
  },
  optLabel: {
    width: 32, height: 32, borderRadius: 16, borderWidth: 1.5,
    alignItems: 'center', justifyContent: 'center',
  },
  optLabelText: { fontSize: 13, fontWeight: '800', color: COLORS.textMuted },
  optText: { flex: 1, fontSize: 15, color: COLORS.text, fontWeight: '500' },
  // Result
  resultContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  resultEmoji: { fontSize: 80, marginBottom: 20 },
  resultTitle: { fontSize: 28, fontWeight: '900', color: COLORS.text, marginBottom: 16 },
  resultScore: { fontSize: 56, fontWeight: '900', lineHeight: 64 },
  resultPct: { fontSize: 18, color: COLORS.textMuted, marginBottom: 40 },
  doneBtn: { width: '80%', borderRadius: RADIUS.xl, overflow: 'hidden' },
  doneBtnGrad: { paddingVertical: 16, alignItems: 'center' },
  doneBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
});
