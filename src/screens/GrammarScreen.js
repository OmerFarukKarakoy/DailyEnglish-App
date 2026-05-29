import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  ScrollView, FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { GRAMMAR_TOPICS } from '../data/grammar';

export default function GrammarScreen() {
  const navigation = useNavigation();
  const { state } = useApp();
  const [expandedTopic, setExpandedTopic] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📚 Gramer</Text>
          <Text style={styles.headerSub}>Tüm gramer konularını öğren ve pratik yap</Text>
        </View>

        {GRAMMAR_TOPICS.map((topic) => (
          <View key={topic.id} style={styles.topicContainer}>
            {/* Topic Header */}
            <TouchableOpacity
              style={[styles.topicHeader, { borderColor: topic.color + '55' }]}
              onPress={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              activeOpacity={0.8}
            >
              <View style={[styles.topicIcon, { backgroundColor: topic.color + '22' }]}>
                <Text style={styles.topicEmoji}>{topic.icon}</Text>
              </View>
              <Text style={[styles.topicName, { color: topic.color }]}>{topic.name}</Text>
              <Text style={[styles.expandArrow, { color: topic.color }]}>
                {expandedTopic === topic.id ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {/* Subtopics */}
            {expandedTopic === topic.id && (
              <View style={[styles.subtopicList, { borderColor: topic.color + '33' }]}>
                {topic.subtopics.map((sub) => {
                  if (sub.isFolder) {
                    return (
                      <View key={sub.id} style={styles.folderContainer}>
                        <View style={[styles.folderHeader, { backgroundColor: topic.color + '11' }]}>
                          <Text style={styles.folderIcon}>📁</Text>
                          <Text style={[styles.folderName, { color: topic.color }]}>{sub.name}</Text>
                        </View>
                        {sub.subtopics && sub.subtopics.map((nestedSub) => (
                          <TouchableOpacity
                            key={nestedSub.id}
                            style={[styles.subtopicItem, { paddingLeft: SPACING.xl * 1.5 }]}
                            onPress={() => navigation.navigate('GrammarTopic', { topicId: topic.id, subtopicId: nestedSub.id })}
                            activeOpacity={0.7}
                          >
                            <Text style={styles.subtopicEmoji}>{nestedSub.icon}</Text>
                            <Text style={styles.subtopicName}>{nestedSub.name}</Text>
                            <View style={styles.subtopicActions}>
                              <TouchableOpacity
                                style={[styles.miniBtn, { borderColor: topic.color + '66' }]}
                                onPress={() => navigation.navigate('GrammarQuiz', { topicId: topic.id, subtopicId: nestedSub.id })}
                              >
                                <Text style={[styles.miniBtnText, { color: topic.color }]}>
                                  {state.completedGrammarQuizzes?.includes(`${topic.id}_${nestedSub.id}`) ? '✅ Quiz' : 'Quiz'}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </View>
                    );
                  }

                  return (
                    <TouchableOpacity
                      key={sub.id}
                      style={styles.subtopicItem}
                      onPress={() => navigation.navigate('GrammarTopic', { topicId: topic.id, subtopicId: sub.id })}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.subtopicEmoji}>{sub.icon}</Text>
                      <Text style={styles.subtopicName}>{sub.name}</Text>
                      <View style={styles.subtopicActions}>
                        <TouchableOpacity
                          style={[styles.miniBtn, { borderColor: topic.color + '66' }]}
                          onPress={() => navigation.navigate('GrammarQuiz', { topicId: topic.id, subtopicId: sub.id })}
                        >
                          <Text style={[styles.miniBtnText, { color: topic.color }]}>
                            {state.completedGrammarQuizzes?.includes(`${topic.id}_${sub.id}`) ? '✅ Quiz' : 'Quiz'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { padding: SPACING.xl, paddingBottom: 24 },
  header: { marginBottom: SPACING['2xl'] },
  headerTitle: { fontSize: 28, fontWeight: '900', color: COLORS.text },
  headerSub: { fontSize: 14, color: COLORS.textMuted, marginTop: 4 },
  topicContainer: { marginBottom: 12 },
  topicHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.lg, borderWidth: 1,
  },
  topicIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  topicEmoji: { fontSize: 20 },
  topicName: { flex: 1, fontSize: 16, fontWeight: '700' },
  expandArrow: { fontSize: 12, fontWeight: '800' },
  subtopicList: {
    backgroundColor: COLORS.bgCard2,
    borderRadius: RADIUS.lg, borderWidth: 1,
    marginTop: 4, overflow: 'hidden',
  },
  subtopics: {
    backgroundColor: COLORS.bgCard2,
    borderRadius: RADIUS.lg, borderWidth: 1,
    marginTop: 4, overflow: 'hidden',
  },
  folderContainer: { borderBottomWidth: 1, borderBottomColor: COLORS.border },
  folderHeader: { flexDirection: 'row', alignItems: 'center', padding: SPACING.md, paddingHorizontal: SPACING.lg, gap: 8 },
  folderIcon: { fontSize: 16 },
  folderName: { fontSize: 15, fontWeight: '800' },
  subtopicItem: {
    flexDirection: 'row', alignItems: 'center', padding: SPACING.lg,
    gap: 10, borderBottomWidth: 1, borderBottomColor: COLORS.border,
  },
  subtopicEmoji: { fontSize: 18 },
  subtopicName: { flex: 1, fontSize: 15, color: COLORS.text, fontWeight: '500' },
  subtopicActions: { flexDirection: 'row', gap: 6 },
  miniBtn: {
    paddingHorizontal: 12, paddingVertical: 5,
    borderRadius: RADIUS.full, borderWidth: 1,
  },
  miniBtnText: { fontSize: 12, fontWeight: '700' },
});
