import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  Image, Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import PREPOSITIONS_DICT from '../../prepositions_full.json';
import CONJUNCTIONS_DICT from '../../conjunctions.json';
import PHRASAL_VERBS_DICT from '../../phrasal_verbs.json';
import { GRAMMAR_TOPICS } from '../data/grammar';
import { COLORS, RADIUS, SPACING } from '../utils/theme';

function renderMarkdown(text, themeColor) {
  const parseInline = (line) => {
    const parts = line.split(/(\*\*.*?\*\*|__.*?__)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <Text key={index} style={[styles.inline_bold, { color: COLORS.text }]}>{part.slice(2, -2)}</Text>;
      }
      if (part.startsWith('__') && part.endsWith('__')) {
        return <Text key={index} style={[styles.inline_bold, { color: themeColor || COLORS.primary }]}>{part.slice(2, -2)}</Text>;
      }
      return <Text key={index}>{part}</Text>;
    });
  };

  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (line.includes('---')) return null;
      const cells = line.split('|').map(s => s.trim()).filter(s => s !== '');
      const isHeader = i === 0 || !lines[i - 1].trim().startsWith('|');

      return (
        <View key={i} style={[styles.tableRow, isHeader && { borderBottomWidth: 2 }]}>
          {cells.map((cell, idx) => {
            const isBold = cell.startsWith('**') && cell.endsWith('**');
            const content = cell.replace(/\*\*/g, '');
            return (
              <Text key={idx} style={[
                styles.tableCell,
                (isBold || isHeader) && styles.tableCellBold,
                { color: isHeader ? (themeColor || COLORS.text) : COLORS.text }
              ]}>
                {content}
              </Text>
            );
          })}
        </View>
      );
    }
    if (line.trim().startsWith('>')) {
      let content = line.trim().substring(1).trim();
      return (
        <View key={i} style={[styles.infoBox, { borderColor: themeColor || COLORS.primary, backgroundColor: (themeColor || COLORS.primary) + '11' }]}>
          <Text style={styles.infoBoxText}>{parseInline(content)}</Text>
        </View>
      );
    }

    const kvMatch = line.trim().match(/^\*\*([^*]+)\*\*\s*([-:]\s*.+|.+)$/);
    if (kvMatch) {
      let key = kvMatch[1].trim();
      let valueMatch = kvMatch[2].trim();
      let isKV = false;
      
      if (key.endsWith(':') || key.endsWith('-')) {
        isKV = true;
        key = key.slice(0, -1).trim();
      }
      if (valueMatch.startsWith(':') || valueMatch.startsWith('-')) {
        isKV = true;
        valueMatch = valueMatch.substring(1).trim();
      }

      if (isKV) {
        return (
          <View key={i} style={styles.kvRow}>
            <View style={[styles.kvKeyBox, { backgroundColor: (themeColor || COLORS.primary) + '15' }]}>
              <Text style={[styles.kvKey, { color: themeColor || COLORS.primary }]}>{key}</Text>
            </View>
            <Text style={styles.kvValue}>{parseInline(valueMatch)}</Text>
          </View>
        );
      }
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      return <Text key={i} style={[styles.bold, { color: themeColor || COLORS.text }]}>{line.replace(/\*\*/g, '')}</Text>;
    }
    if (line.startsWith('• ') || line.startsWith('- ')) {
      return (
        <View key={i} style={styles.bulletRow}>
          <Text style={[styles.bullet, { color: themeColor || COLORS.primary }]}>•</Text>
          <Text style={styles.bulletText}>
            {parseInline(line.substring(2))}
          </Text>
        </View>
      );
    }
    if (line.trim().startsWith('(') && line.trim().endsWith(')')) {
      return (
        <View key={i} style={styles.translationContainer}>
          <Text style={styles.translationIcon}>🇹🇷</Text>
          <Text style={styles.translationText}>{parseInline(line.trim().slice(1, -1))}</Text>
        </View>
      );
    }
    if (line.trim() === '') return <View key={i} style={styles.spacer} />;

    const isExampleSentence = !line.trim().startsWith('(') &&
                              line.trim() !== '' &&
                              i < lines.length - 1 &&
                              lines[i + 1].trim().startsWith('(') &&
                              lines[i + 1].trim().endsWith(')');
                              
    if (isExampleSentence) {
      let content = line.trim();
      if (content.startsWith('-')) content = content.substring(1).trim();
      return (
        <View key={i} style={styles.exampleSentenceRow}>
          <View style={[styles.exampleDot, { backgroundColor: themeColor || COLORS.primary }]} />
          <Text style={styles.exampleSentenceText}>{parseInline(content)}</Text>
        </View>
      );
    }

    // Default body text that handles inline bolds
    return <Text key={i} style={styles.bodyText}>{parseInline(line)}</Text>;
  });
}

import { useApp } from '../context/AppContext';

export default function GrammarTopicScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { state, dispatch } = useApp();
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Genel');
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

  if (!subtopic) return null;

  const renderDictionary = () => {
    if (subtopic.type !== 'dictionary') return null;

    let dictData = [];
    if (topic.id === 'prepositions') {
      dictData = PREPOSITIONS_DICT;
    } else if (topic.id === 'conjunctions') {
      dictData = CONJUNCTIONS_DICT;
    } else if (topic.id === 'phrasal_verbs') {
      dictData = PHRASAL_VERBS_DICT;
    }

    const filtered = dictData.filter(item => {
      const w = (item.word || item.conjunction || '').toString().toLowerCase();
      const t = (item.translation || '').toString().toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchesQuery = w.includes(q) || t.includes(q);
      const matchesLevel = selectedLevel === 'Genel' || item.level === selectedLevel;
      return matchesQuery && matchesLevel;
    }).slice(0, 50);

    return (
      <View style={{ marginTop: 0 }}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Kelime veya anlamı ara..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }} contentContainerStyle={{ gap: 8 }}>
            {['Genel', 'A1', 'A2', 'B1', 'B2', 'C1'].map(lvl => (
                <TouchableOpacity
                    key={lvl}
                    style={{
                        paddingHorizontal: 16, paddingVertical: 6,
                        borderRadius: 16,
                        backgroundColor: selectedLevel === lvl ? '#8B5CF6' : COLORS.bgCard,
                        borderWidth: 1, borderColor: selectedLevel === lvl ? '#8B5CF6' : COLORS.border
                    }}
                    onPress={() => setSelectedLevel(lvl)}
                >
                    <Text style={{ color: selectedLevel === lvl ? '#FFF' : COLORS.textMuted, fontWeight: '700' }}>{lvl}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        {filtered.map((item, index) => {
          const uniqueId = `${topic.id}_${item.id}`;
          const isLearned = state.learnedWords?.includes(uniqueId);
          return (
          <View key={uniqueId} style={styles.dictCard}>
            <View style={styles.dictHeader}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={styles.dictWord}>{item.word || item.conjunction}</Text>
                <Text style={[styles.dictLevel, { backgroundColor: topic?.color || COLORS.primary }]}>{item.level}</Text>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: isLearned ? '#10B98122' : '#8B5CF622', borderColor: isLearned ? '#10B981' : '#8B5CF6', borderWidth: 1, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 }}
                onPress={() => !isLearned && dispatch({ type: 'LEARN_WORD', payload: uniqueId })}
                activeOpacity={isLearned ? 1 : 0.7}
              >
                <Text style={{ color: isLearned ? '#10B981' : '#8B5CF6', fontSize: 13, fontWeight: '700' }}>
                  {isLearned ? '✓ Eklendi' : '➕ Ekle'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.dictTranslation}>{item.translation}</Text>
            {!!item.pronunciation && <Text style={styles.dictPronunciation}>{item.pronunciation}</Text>}
            {!!item.example_sentence && (
              <View style={styles.dictExampleContainer}>
                <Text style={styles.dictExamplePlaceholder}>Örnek:</Text>
                <Text style={styles.dictExample}>{item.example_sentence}</Text>
              </View>
            )}
          </View>
          );
        })}
        {filtered.length === 50 && (
          <Text style={{ textAlign: 'center', color: '#888', marginTop: 10, marginBottom: 20 }}>Daha fazla sonuç için aramayı daraltın...</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{subtopic.name}</Text>
        <TouchableOpacity
          style={[styles.quizBtn, { borderColor: topic.color + '88' }]}
          onPress={() => {
            if (subtopic.type === 'dictionary') {
              navigation.navigate('WordQuiz', { categoryId: topic.id });
            } else {
              navigation.navigate('GrammarQuiz', { topicId, subtopicId });
            }
          }}
        >
          <Text style={[styles.quizBtnText, { color: topic.color }]}>Quiz ›</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, { borderColor: topic.color + '44' }]}>
          <View style={styles.topicBadge}>
            <Text style={styles.topicBadgeEmoji}>{topic.icon}</Text>
            <Text style={[styles.topicBadgeText, { color: topic.color }]}>{topic.name}</Text>
          </View>
          <View style={styles.content}>
            {subtopic.type === 'dictionary' && renderDictionary()}
            {renderMarkdown(subtopic.explanation || '', topic.color)}
            {subtopic.image && (() => {
              const src = Image.resolveAssetSource(subtopic.image);
              const ratio = (src && src.height) ? src.width / src.height : 1.5;
              return (
                <TouchableOpacity onPress={() => setImageModalVisible(1)} activeOpacity={0.9}>
                  <Image source={subtopic.image} style={[styles.topicImage, { height: undefined, aspectRatio: ratio }]} resizeMode="contain" />
                </TouchableOpacity>
              );
            })()}
            {subtopic.image2 && (() => {
              const src2 = Image.resolveAssetSource(subtopic.image2);
              const ratio2 = (src2 && src2.height) ? src2.width / src2.height : 1.5;
              return (
                <TouchableOpacity onPress={() => setImageModalVisible(2)} activeOpacity={0.9}>
                  <Image source={subtopic.image2} style={[styles.topicImage, { height: undefined, aspectRatio: ratio2 }]} resizeMode="contain" />
                </TouchableOpacity>
              );
            })()}
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => {
              if (subtopic.type === 'dictionary') {
                navigation.navigate('WordQuiz', { categoryId: topic.id });
              } else {
                navigation.navigate('GrammarQuiz', { topicId, subtopicId });
              }
            }}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[topic.color, topic.color + 'AA']}
              style={styles.actionBtnGrad}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
              <Text style={styles.actionBtnText}>Quiz Başlat 🎯</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {(subtopic.image || subtopic.image2) && (
        <Modal visible={!!isImageModalVisible} transparent={true} onRequestClose={() => setImageModalVisible(false)}>
          <ImageViewer
            imageUrls={[
              ...(subtopic.image ? [{ props: { source: subtopic.image } }] : []),
              ...(subtopic.image2 ? [{ props: { source: subtopic.image2 } }] : [])
            ]}
            index={isImageModalVisible === 2 ? (subtopic.image ? 1 : 0) : 0}
            enableSwipeDown={true}
            onSwipeDown={() => setImageModalVisible(false)}
            onClick={() => setImageModalVisible(false)}
            renderIndicator={(!subtopic.image || !subtopic.image2) ? () => null : undefined}
          />
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { flexDirection: 'row', alignItems: 'center', padding: SPACING.xl, gap: 10 },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 32, color: COLORS.text, fontWeight: '300', marginTop: -6 },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '800', color: COLORS.text },
  quizBtn: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: RADIUS.full, borderWidth: 1 },
  quizBtnText: { fontWeight: '700', fontSize: 14 },
  scroll: { padding: SPACING.xl, paddingBottom: 32 },
  card: { backgroundColor: COLORS.bgCard, borderRadius: RADIUS.xl, padding: SPACING.xl, borderWidth: 1, marginBottom: SPACING.xl, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  topicBadge: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: SPACING.lg, borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingBottom: SPACING.md },
  topicBadgeEmoji: { fontSize: 20 },
  topicBadgeText: { fontSize: 14, fontWeight: '700' },
  content: { paddingTop: 10 },
  bold: { fontSize: 20, fontWeight: '800', marginTop: 20, marginBottom: 10 },
  inline_bold: { fontWeight: '800', fontSize: 17 },
  bodyText: { fontSize: 17, color: COLORS.text, lineHeight: 26, marginBottom: 8, fontWeight: '500' },
  bulletRow: { flexDirection: 'row', gap: 10, marginBottom: 8, paddingRight: 10 },
  bullet: { fontSize: 22, marginTop: -4, fontWeight: '900' },
  bulletText: { flex: 1, fontSize: 17, color: COLORS.text, lineHeight: 26, fontWeight: '500' },
  spacer: { height: 12 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLORS.border, paddingVertical: 8, alignItems: 'center' },
  tableCell: { flex: 1, fontSize: 15, fontWeight: '500', textAlign: 'center' },
  tableCellBold: { fontWeight: '800', fontSize: 16 },
  topicImage: { width: '100%', height: 250, marginTop: 20, borderRadius: 12 },
  actionButtons: { gap: 12 },
  actionBtn: { borderRadius: RADIUS.xl, overflow: 'hidden', borderWidth: 1, borderColor: COLORS.border },
  actionBtnGrad: { paddingVertical: 18, alignItems: 'center' },
  actionBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg, paddingHorizontal: 15, marginBottom: 20, borderWidth: 1, borderColor: COLORS.border, height: 50 },
  searchIcon: { fontSize: 20, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: COLORS.text, fontWeight: '500' },
  dictCard: { backgroundColor: COLORS.bgCard, padding: 15, borderRadius: RADIUS.lg, marginBottom: 15, borderWidth: 1, borderColor: COLORS.border, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  dictHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  dictWord: { fontSize: 20, fontWeight: '800', color: COLORS.text },
  dictLevel: { fontSize: 12, fontWeight: '800', color: '#fff', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, overflow: 'hidden' },
  dictTranslation: { fontSize: 16, color: COLORS.text, fontWeight: '600', marginBottom: 5 },
  dictPronunciation: { fontSize: 14, color: '#888', fontStyle: 'italic', marginBottom: 10 },
  dictExampleContainer: { backgroundColor: COLORS.bg, padding: 12, borderRadius: RADIUS.md },
  dictExamplePlaceholder: { fontSize: 12, color: '#888', marginBottom: 4, fontWeight: '700' },
  dictExample: { fontSize: 15, color: COLORS.text, fontStyle: 'italic' },
  infoBox: { padding: 15, borderRadius: RADIUS.lg, borderLeftWidth: 4, marginVertical: 12 },
  infoBoxText: { fontSize: 16, color: COLORS.text, fontWeight: '600', lineHeight: 24 },
  kvRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 8 },
  kvKeyBox: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: RADIUS.md },
  kvKey: { fontSize: 16, fontWeight: '800' },
  kvValue: { fontSize: 16, color: COLORS.text, fontWeight: '500', flex: 1 },
  translationContainer: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 4, marginBottom: 16, padding: 12, backgroundColor: COLORS.bg, borderRadius: RADIUS.md, gap: 8, borderWidth: 1, borderColor: COLORS.border },
  translationIcon: { fontSize: 16, marginTop: 2 },
  translationText: { flex: 1, fontSize: 15, color: '#666', fontStyle: 'italic', fontWeight: '500', lineHeight: 22 },
  exampleSentenceRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 12, gap: 10, paddingRight: 10 },
  exampleDot: { width: 8, height: 8, borderRadius: 4, marginTop: 10 },
  exampleSentenceText: { flex: 1, fontSize: 16, color: COLORS.text, fontWeight: '600', lineHeight: 26 },
});
