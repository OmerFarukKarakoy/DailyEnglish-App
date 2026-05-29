import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { useApp } from '../context/AppContext';
const OXFORD_DICT = require('../../oxford_dictionary.json');
const PREPOSITIONS_DICT = require('../../prepositions_full.json');
const CONJUNCTIONS_DICT = require('../../conjunctions.json');
const PHRASAL_VERBS_DICT = require('../../phrasal_verbs.json');

const ALL_WORDS = [
  ...OXFORD_DICT,
  ...PREPOSITIONS_DICT.map(w => ({ ...w, id: `prepositions_${w.id}` })),
  ...CONJUNCTIONS_DICT.map(w => ({ ...w, id: `conjunctions_${w.id}` })),
  ...PHRASAL_VERBS_DICT.map(w => ({ ...w, id: `phrasal_verbs_${w.id}` }))
];

export default function NotebookScreen() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();
  
  const [activeTab, setActiveTab] = useState('learned'); // 'learned' or 'wrong'

  const handleRemoveWord = (wordId, type) => {
    dispatch({ type: type === 'learned' ? 'REMOVE_LEARNED_WORD' : 'REMOVE_WRONG_WORD', payload: wordId });
  };

  const learnedWordIds = state.learnedWords || [];
  const wrongWordIds = state.wrongWords || [];

  const learnedWords = ALL_WORDS.filter(w => learnedWordIds.includes(w.id));
  const wrongWords = ALL_WORDS.filter(w => wrongWordIds.includes(w.id));

  const wordsToShow = activeTab === 'learned' ? learnedWords : wrongWords;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📒 Defterim</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'learned' && styles.tabBtnActive]}
          onPress={() => setActiveTab('learned')}
        >
          <Text style={[styles.tabText, activeTab === 'learned' && styles.tabTextActive]}>
            📗 Öğrenilenler ({learnedWords.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, activeTab === 'wrong' && styles.tabBtnActive]}
          onPress={() => setActiveTab('wrong')}
        >
          <Text style={[styles.tabText, activeTab === 'wrong' && styles.tabTextActive]}>
            📕 Yanlışlar ({wrongWords.length})
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        {activeTab === 'learned' && learnedWords.length > 0 && (
          <TouchableOpacity
            style={styles.quizBtn}
            onPress={() => navigation.navigate('WordQuiz', { notebookOnly: true })}
          >
            <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.quizBtnGrad}>
              <Text style={styles.quizBtnText}>Öğrenilenleri Test Et</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        {activeTab === 'wrong' && wrongWords.length > 0 && (
          <TouchableOpacity
            style={styles.quizBtn}
            onPress={() => navigation.navigate('WordQuiz', { wrongOnly: true })}
          >
            <LinearGradient colors={['#FF4444', '#CC0000']} style={styles.quizBtnGrad}>
              <Text style={[styles.quizBtnText, { color: '#FFF' }]}>Yanlışları Test Et</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>

      {wordsToShow.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>{activeTab === 'learned' ? '📭' : '✨'}</Text>
          <Text style={styles.emptyTitle}>
            {activeTab === 'learned' ? 'Henüz kelime yok' : 'Harika!'}
          </Text>
          <Text style={styles.emptyDesc}>
            {activeTab === 'learned' 
              ? 'Quiz çözerken öğrendiğin kelimeler burada görünecek.' 
              : 'Hiç yanlış yaptığın kelime yok. Böyle devam et!'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={wordsToShow}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            let badgeType = 'Kelime';
            let badgeColor = '#3B82F6';
            if (item.id.toString().startsWith('conjunctions_')) {
              badgeType = 'Bağlaç';
              badgeColor = '#F97316';
            } else if (item.id.toString().startsWith('prepositions_')) {
              badgeType = 'Edat';
              badgeColor = '#EF4444';
            } else if (item.id.toString().startsWith('phrasal_verbs_')) {
              badgeType = 'Deyim';
              badgeColor = '#10B981';
            }

            return (
              <View style={styles.wordCard}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.word}>{item.word}</Text>
                    <View style={{ backgroundColor: badgeColor, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginLeft: 8 }}>
                      <Text style={{ color: '#FFF', fontSize: 11, fontWeight: '800' }}>{badgeType}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => handleRemoveWord(item.id, activeTab)} style={styles.removeBtn}>
                    <Text style={styles.removeBtnText}>✕</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.meaning}>{item.translation || item.meaning}</Text>
                {(item.example_sentence || item.example) && (
                  <Text style={styles.example} numberOfLines={2}>
                    "{item.example_sentence || item.example}"
                  </Text>
                )}
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {wordsToShow.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.footerNote}>⚠️ Tekrar quizleri profilinize yansımaz</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { padding: SPACING.xl, paddingBottom: SPACING.md },
  title: { fontSize: 24, fontWeight: '900', color: COLORS.text },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabBtnActive: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.textMuted,
    fontSize: 15,
    fontWeight: '600',
  },
  tabTextActive: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.md,
  },
  quizBtn: { borderRadius: RADIUS.lg, overflow: 'hidden' },
  quizBtnGrad: { paddingHorizontal: 16, paddingVertical: 8 },
  quizBtnText: { color: '#000', fontWeight: '800', fontSize: 13 },
  list: { paddingHorizontal: SPACING.xl, paddingBottom: 24 },
  wordCard: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.lg, marginBottom: 10, borderWidth: 1, borderColor: COLORS.border,
  },
  word: { fontSize: 18, fontWeight: '800', color: COLORS.text, marginBottom: 4 },
  meaning: { fontSize: 15, color: COLORS.primary, fontWeight: '600', marginBottom: 4 },
  example: { fontSize: 13, color: COLORS.textDim, fontStyle: 'italic', marginTop: 4 },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40 },
  emptyEmoji: { fontSize: 60, marginBottom: 16 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: COLORS.text, marginBottom: 8 },
  emptyDesc: { fontSize: 14, color: COLORS.textMuted, textAlign: 'center', lineHeight: 22 },
  footer: { padding: SPACING.lg, alignItems: 'center' },
  footerNote: { color: COLORS.textDim, fontSize: 12 },
  removeBtn: { padding: 4, paddingHorizontal: 8 },
  removeBtnText: { color: COLORS.textMuted, fontSize: 16, fontWeight: 'bold' },
});
