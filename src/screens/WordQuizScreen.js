import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated, Dimensions,
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS, RADIUS, SPACING } from '../utils/theme';
const OXFORD_DICT = require('../../oxford_dictionary.json');
const PREPOSITIONS_DICT = require('../../prepositions_full.json');
const CONJUNCTIONS_DICT = require('../../conjunctions.json');
const PHRASAL_VERBS_DICT = require('../../phrasal_verbs.json');

const OXFORD_DICT_WITH_IDS = OXFORD_DICT.map(w => ({ ...w, source: 'oxford' }));
const PREPOSITIONS_DICT_WITH_IDS = PREPOSITIONS_DICT.map(w => ({ ...w, id: `prepositions_${w.id}`, source: 'prepositions' }));
const CONJUNCTIONS_DICT_WITH_IDS = CONJUNCTIONS_DICT.map(w => ({ ...w, id: `conjunctions_${w.id}`, source: 'conjunctions', word: w.word || w.conjunction }));
const PHRASAL_VERBS_DICT_WITH_IDS = PHRASAL_VERBS_DICT.map(w => ({ ...w, id: `phrasal_verbs_${w.id}`, source: 'phrasal_verbs' }));

const ALL_WORDS = [
  ...OXFORD_DICT_WITH_IDS,
  ...PREPOSITIONS_DICT_WITH_IDS,
  ...CONJUNCTIONS_DICT_WITH_IDS,
  ...PHRASAL_VERBS_DICT_WITH_IDS
];
const { width } = Dimensions.get('window');
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestion(word, allWords) {
  const correctAnswer = word.translation || word.meaning;
  let wrongPool = allWords.filter(w => w.id !== word.id && w.source === word.source && (w.translation || w.meaning) && (w.translation || w.meaning) !== correctAnswer);
  if (wrongPool.length < 3) {
    wrongPool = allWords.filter(w => w.id !== word.id && (w.translation || w.meaning) && (w.translation || w.meaning) !== correctAnswer);
  }
  const wrongs = shuffle(wrongPool).slice(0, 3).map(w => w.translation || w.meaning);
  const options = shuffle([correctAnswer, ...wrongs]);
  return { word, options, answer: correctAnswer };
}

export default function WordQuizScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { state, dispatch } = useApp();
  const { category = 'daily', categoryId, fromHome = false, notebookOnly = false, wrongOnly = false } = route.params || {};

  const [retryKey, setRetryKey] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const skipLevelSelection = fromHome || notebookOnly || wrongOnly || (categoryId || category) === 'daily';

  const generateQuestions = (levelToUse) => {
    const activeCategory = categoryId || category;

    const customWordsMapped = (state.customWords || []).map(w => ({ ...w, source: 'oxford' }));
    const allWordsExtended = [...ALL_WORDS, ...customWordsMapped];

    let wordPool = [...OXFORD_DICT_WITH_IDS, ...customWordsMapped];
    let poolDict = [...OXFORD_DICT_WITH_IDS, ...customWordsMapped];

    if (activeCategory === 'prepositions') {
      wordPool = PREPOSITIONS_DICT_WITH_IDS;
      poolDict = PREPOSITIONS_DICT_WITH_IDS;
    } else if (activeCategory === 'conjunctions') {
      wordPool = CONJUNCTIONS_DICT_WITH_IDS;
      poolDict = CONJUNCTIONS_DICT_WITH_IDS;
    } else if (activeCategory === 'phrasal_verbs') {
      wordPool = PHRASAL_VERBS_DICT_WITH_IDS;
      poolDict = PHRASAL_VERBS_DICT_WITH_IDS;
    } else if (activeCategory === 'daily') {
      wordPool = ALL_WORDS;
      poolDict = ALL_WORDS;
    }

    if (wrongOnly) {
      wordPool = allWordsExtended.filter(w => (state.wrongWords || []).includes(w.id));
      poolDict = allWordsExtended;
      if (wordPool.length < 4) wordPool = allWordsExtended;
    } else if (notebookOnly) {
      wordPool = allWordsExtended.filter(w => state.learnedWords?.includes(w.id) || state.knownWords?.includes(w.id));
      poolDict = allWordsExtended;
      if (wordPool.length < 4) wordPool = allWordsExtended;
    } else if (levelToUse && levelToUse !== 'Genel') {
      const filtered = wordPool.filter(w => w.level === levelToUse);
      if (filtered.length > 0) {
         wordPool = filtered;
      } else if (levelToUse === 'Eklenenler') {
         // If they have no custom words, we give an empty quiz or fallback
         wordPool = [];
      }
    }

    const validWords = wordPool.filter(w => w.translation || w.meaning);

    if (activeCategory === 'daily' && !wrongOnly && !notebookOnly && (!levelToUse || levelToUse === 'Genel')) {
      const ox = shuffle(validWords.filter(w => w.source === 'oxford')).slice(0, 4);
      const pr = shuffle(validWords.filter(w => w.source === 'prepositions')).slice(0, 2);
      const co = shuffle(validWords.filter(w => w.source === 'conjunctions')).slice(0, 2);
      const ph = shuffle(validWords.filter(w => w.source === 'phrasal_verbs')).slice(0, 2);
      
      const mixed = shuffle([...ox, ...pr, ...co, ...ph]);
      if (mixed.length < 10) {
          const extra = shuffle(validWords.filter(w => !mixed.includes(w))).slice(0, 10 - mixed.length);
          mixed.push(...extra);
      }
      return shuffle(mixed).slice(0, 10).map(w => generateQuestion(w, poolDict));
    }

    return shuffle(validWords).slice(0, 10).map(w => generateQuestion(w, poolDict));
  };

  const [questions, setQuestions] = useState([]);

  // Generate questions when level is selected or if we skip level selection
  useEffect(() => {
    if (skipLevelSelection) {
      setQuestions(generateQuestions());
    } else if (selectedLevel) {
      setQuestions(generateQuestions(selectedLevel));
    }
  }, [selectedLevel]);

  // Only regenerate questions when user explicitly requests a retry
  useEffect(() => {
    if (retryKey > 0) {
      setQuestions(generateQuestions(selectedLevel));
    }
  }, [retryKey]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const question = questions[current];
  const progress = (current + 1) / questions.length;

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    const isCorrect = option === question.answer;
    if (isCorrect) {
      setScore(s => s + 1);
      dispatch({ type: 'LEARN_WORD', payload: question.word.id });
    } else {
      dispatch({ type: 'MARK_WRONG_WORD', payload: question.word.id });
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        Animated.sequence([
          Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
          Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
        ]).start();
        setTimeout(() => {
          setCurrent(c => c + 1);
          setSelected(null);
        }, 200);
      } else {
        if (!notebookOnly && !wrongOnly) {
          dispatch({ type: 'ADD_QUIZ_RESULT', payload: { correct: isCorrect ? score + 1 : score, total: questions.length, category } });
        }
        setShowResult(true);
      }
    }, 2000);
  };

  if (!skipLevelSelection && !selectedLevel) {
    const levels = ['Genel', 'A1', 'A2', 'B1', 'B2', 'C1', 'Eklenenler'];
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#0A0A0F', '#1A0A2E']} style={styles.bg}>
          <View style={[styles.header, { paddingBottom: 20 }]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Text style={styles.backText}>✕</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#FFF' }}>Seviye Seçin</Text>
            <View style={{ width: 36 }} />
          </View>
          <View style={{ padding: SPACING.xl, flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: COLORS.textMuted, textAlign: 'center', marginBottom: 20, fontSize: 16 }}>
              Hangi seviyeden kelime çözmek istiyorsun?
            </Text>
            {levels.map(lvl => (
               <TouchableOpacity 
                  key={lvl} 
                  style={{
                     backgroundColor: COLORS.bgCard, padding: 18, borderRadius: RADIUS.lg,
                     marginBottom: 12, borderWidth: 1, borderColor: COLORS.borderGlow,
                     alignItems: 'center'
                  }}
                  onPress={() => setSelectedLevel(lvl)}
               >
                 <Text style={{ color: COLORS.text, fontSize: 18, fontWeight: '700' }}>
                   {lvl === 'Genel' ? 'Tüm Seviyeler (Karışık)' : lvl === 'Eklenenler' ? 'Eklenen Kelimeler' : `${lvl} Seviyesi`}
                 </Text>
               </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  if (showResult) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#0A0A0F', '#1A0A2E']} style={styles.bg}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultEmoji}>
              {pct >= 80 ? '🏆' : pct >= 60 ? '🎯' : '📚'}
            </Text>
            <Text style={styles.resultTitle}>
              {pct >= 80 ? 'Mükemmel!' : pct >= 60 ? 'İyi İş!' : 'Daha Fazla Çalış!'}
            </Text>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNum}>{score}</Text>
              <Text style={styles.scoreDenom}>/{questions.length}</Text>
            </View>
            <Text style={[styles.scorePct, { color: pct >= 60 ? COLORS.primary : COLORS.danger }]}>
              %{pct} Doğru
            </Text>
            {(!notebookOnly && !wrongOnly) && (
              <View style={styles.resultNote}>
                <Text style={styles.resultNoteText}>✓ Sonuçlar profilinize kaydedildi</Text>
              </View>
            )}
            <TouchableOpacity style={styles.doneBtn} onPress={() => navigation.goBack()}>
              <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.doneBtnGrad}>
                <Text style={styles.doneBtnText}>Geri Dön</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.retryBtn}
              onPress={() => {
                setCurrent(0); setSelected(null); setScore(0); setShowResult(false); setRetryKey(k => k + 1);
              }}
            >
              <Text style={styles.retryBtnText}>Tekrar Dene 🔄</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  if (!question) {
    if (questions.length === 0 && selectedLevel) {
       return (
        <SafeAreaView style={styles.container}>
          <LinearGradient colors={['#0A0A0F', '#1A0A2E']} style={styles.bg}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Text style={styles.backText}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: SPACING.xl }}>
               <Text style={{ fontSize: 60, marginBottom: 20 }}>🤔</Text>
               <Text style={{ color: COLORS.text, fontSize: 20, fontWeight: '800', textAlign: 'center', marginBottom: 12 }}>
                 Hiç Kelime Yok!
               </Text>
               <Text style={{ color: COLORS.textMuted, fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
                 Bu seviyede veya kategoride henüz yeterli kelime bulunmuyor.
               </Text>
               <TouchableOpacity style={styles.doneBtn} onPress={() => navigation.goBack()}>
                 <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.doneBtnGrad}>
                   <Text style={styles.doneBtnText}>Geri Dön</Text>
                 </LinearGradient>
               </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
       );
    }
    return null;
  }

  const getSourceBadge = (source) => {
    switch (source) {
      case 'oxford': return { text: 'Vocabulary', color: '#3B82F6' }; // Lighter blue to show up on dark bg
      case 'prepositions': return { text: 'Preposition', color: '#EF4444' };
      case 'conjunctions': return { text: 'Conjunction', color: '#F97316' };
      case 'phrasal_verbs': return { text: 'Phrasal Verb', color: '#10B981' };
      default: return { text: 'Word', color: COLORS.primary };
    }
  };
  const badgeInfo = getSourceBadge(question.word.source);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0A0A0F', '#0A0A1F']} style={styles.bg}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>
          </View>
          <View style={styles.scoreChip}>
            <Text style={styles.scoreChipText}>⭐ {score}</Text>
          </View>
        </View>

        <Animated.View style={[styles.quizContent, { opacity: fadeAnim }]}>
          {/* Question card */}
          <View style={styles.questionCard}>
            <View style={[styles.sourceBadge, { backgroundColor: badgeInfo.color + '22' }]}>
              <Text style={[styles.sourceBadgeText, { color: badgeInfo.color }]}>{badgeInfo.text}</Text>
            </View>
            <Text style={styles.questionLabel}>Türkçe anlamı nedir?</Text>
            <Text style={styles.questionWord}>{question.word.word}</Text>
            <Text style={styles.questionExample} numberOfLines={2}>"{question.word.example_sentence || question.word.example}"</Text>
          </View>

          {/* Option elements inside mapping */}
          <View style={styles.options}>
            {question.options.map((option, idx) => {
              const isSelected = selected === option;
              const isCorrect = option === question.answer;
              let borderColor = COLORS.border;
              let bgColor = COLORS.bgCard;
              let labelColor = COLORS.textMuted;

              if (selected) { // if ANY option is selected, reveal colors
                if (isCorrect) {
                  borderColor = COLORS.success;
                  bgColor = COLORS.primaryDim;
                  labelColor = COLORS.success;
                } else if (isSelected) {
                  borderColor = COLORS.danger;
                  bgColor = '#FF444422';
                  labelColor = COLORS.danger;
                }
              }

              return (
                <TouchableOpacity
                  key={option}
                  style={[styles.option, { borderColor, backgroundColor: bgColor }]}
                  onPress={() => handleSelect(option)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.optLabel, { borderColor: labelColor }]}>
                    <Text style={[styles.optLabelText, { color: labelColor }]}>
                      {OPTION_LABELS[idx]}
                    </Text>
                  </View>
                  <Text style={[styles.optText, { color: labelColor === COLORS.danger ? COLORS.danger : (labelColor === COLORS.success ? COLORS.success : COLORS.text) }]}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.questionCounter}>{current + 1} / {questions.length}</Text>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  bg: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', padding: SPACING.xl, gap: 12,
  },
  backBtn: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 18, color: COLORS.textMuted },
  progressContainer: { flex: 1 },
  progressBg: { height: 8, backgroundColor: COLORS.bgCard2, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 4 },
  scoreChip: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.full,
    paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: COLORS.border,
  },
  scoreChipText: { color: COLORS.text, fontWeight: '700', fontSize: 14 },
  quizContent: { flex: 1, padding: SPACING.xl },
  questionCard: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.xl, padding: SPACING['2xl'],
    borderWidth: 1, borderColor: COLORS.borderGlow, marginBottom: SPACING.xl,
    alignItems: 'center', position: 'relative',
  },
  sourceBadge: {
    position: 'absolute', top: 12, right: 12,
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: RADIUS.md,
  },
  sourceBadgeText: {
    fontSize: 11, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5,
  },
  questionLabel: { fontSize: 13, color: COLORS.textMuted, marginBottom: 12, marginTop: 10 },
  questionWord: { fontSize: 36, fontWeight: '900', color: COLORS.text, letterSpacing: 1, marginBottom: 12 },
  questionExample: { fontSize: 13, color: COLORS.textDim, fontStyle: 'italic', textAlign: 'center' },
  options: { gap: 12 },
  option: {
    flexDirection: 'row', alignItems: 'center', padding: SPACING.lg,
    borderRadius: RADIUS.lg, borderWidth: 1.5, gap: 12,
  },
  optLabel: {
    width: 32, height: 32, borderRadius: 16, borderWidth: 1.5,
    alignItems: 'center', justifyContent: 'center',
  },
  optLabelText: { fontSize: 13, fontWeight: '800' },
  optText: { flex: 1, fontSize: 16, color: COLORS.text, fontWeight: '500' },
  questionCounter: { textAlign: 'center', color: COLORS.textDim, fontSize: 13, marginTop: SPACING.xl },
  // Result
  resultContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  resultEmoji: { fontSize: 80, marginBottom: 20 },
  resultTitle: { fontSize: 28, fontWeight: '900', color: COLORS.text, marginBottom: 24 },
  scoreCircle: {
    flexDirection: 'row', alignItems: 'flex-end', marginBottom: 8,
  },
  scoreNum: { fontSize: 72, fontWeight: '900', color: COLORS.primary, lineHeight: 80 },
  scoreDenom: { fontSize: 32, color: COLORS.textMuted, marginBottom: 10 },
  scorePct: { fontSize: 22, fontWeight: '800', marginBottom: 24 },
  resultNote: {
    backgroundColor: COLORS.primaryDim, borderRadius: RADIUS.lg,
    paddingHorizontal: 16, paddingVertical: 8, marginBottom: 32,
  },
  resultNoteText: { color: COLORS.primary, fontSize: 13, fontWeight: '600' },
  doneBtn: { width: '100%', borderRadius: RADIUS.xl, overflow: 'hidden', marginBottom: 12 },
  doneBtnGrad: { paddingVertical: 16, alignItems: 'center' },
  doneBtnText: { fontSize: 16, fontWeight: '800', color: '#000' },
  retryBtn: { paddingVertical: 12 },
  retryBtnText: { color: COLORS.textMuted, fontSize: 15, fontWeight: '600' },
});
