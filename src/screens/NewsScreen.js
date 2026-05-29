import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NewsService from '../services/NewsService';
import { COLORS } from '../utils/theme';

const OXFORD_DICT = require('../../oxford_dictionary.json');
const PREPOSITIONS = require('../../prepositions_full.json');
const CONJUNCTIONS = require('../../conjunctions.json');
const PHRASAL_VERBS = require('../../phrasal_verbs.json');

const CATEGORIES = [
  { id: 'world', label: 'Dünya' },
  { id: 'technology', label: 'Teknoloji' },
  { id: 'science', label: 'Bilim' },
  { id: 'sport', label: 'Spor' },
  { id: 'business', label: 'Ekonomi' },
  { id: 'arts', label: 'Sanat' },
];

export default function NewsScreen() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  useEffect(() => {
    loadNews(activeCategory);
  }, [activeCategory]);

  const loadNews = async (category) => {
    setLoading(true);
    const data = await NewsService.fetchNews(category, 5); // Fetch 5 summarized articles
    setNewsList(data);
    setLoading(false);
  };

  const handleWordClick = (word) => {
    const cleanWord = word.replace(/[.,!?;:"'()\[\]]/g, '').trim();
    const searchWord = cleanWord.toLowerCase();

    if (searchWord) {
      console.log(`[HABERLER] Yakalanan Kelime: ${cleanWord}`);

      let foundItem = null;

      foundItem = OXFORD_DICT.find(w => w.word && w.word.toLowerCase() === searchWord);
      if (!foundItem) foundItem = PREPOSITIONS.find(w => w.word && w.word.toLowerCase() === searchWord);
      if (!foundItem) foundItem = CONJUNCTIONS.find(w => w.word && w.word.toLowerCase() === searchWord);
      if (!foundItem) foundItem = PHRASAL_VERBS.find(w => w.word && w.word.toLowerCase() === searchWord);

      if (foundItem) {
        Alert.alert(
          `${foundItem.word}`,
          `Türkçesi: ${foundItem.translation}`,
          [{ text: 'Kapat', style: 'cancel' }]
        );
      } else {
        Alert.alert(
          `${cleanWord}`,
          'Sözlükte bulunamadı.',
          [{ text: 'Kapat', style: 'cancel' }]
        );
      }
    }
  };

  const renderClickableText = (text) => {
    if (!text) return null;
    const words = text.split(' ');

    return (
      <View style={styles.clickableTextContainer}>
        {words.map((word, index) => (
          <TouchableOpacity
            key={`${index}-${word}`}
            onPress={() => handleWordClick(word)}
            activeOpacity={0.6}
          >
            <Text style={styles.bodyText}>{word} </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderCategoryTabs = () => (
    <View style={styles.tabsWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {CATEGORIES.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.tabButton, isActive && styles.activeTabButton]}
              onPress={() => setActiveCategory(cat.id)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Kategori Seçici Bar */}
      {renderCategoryTabs()}

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.primary || '#6C63FF'} />
          <Text style={{ color: COLORS.textDim || '#9CA3AF', marginTop: 10 }}>Haberler yükleniyor...</Text>
        </View>
      ) : newsList.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.errorText}>Bu kategoride haber şu anda çekilemedi.</Text>
          <TouchableOpacity style={styles.retryButton} onPress={() => loadNews(activeCategory)}>
            <Text style={styles.retryButtonText}>Tekrar Dene</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerTitle}>
            <Text style={styles.sourceText}>Source: The Guardian</Text>
          </View>

          {newsList.map((article, index) => (
            <View key={article.id || index} style={styles.articleCard}>
              {article.thumbnail && (
                <Image
                  source={{ uri: article.thumbnail }}
                  style={styles.thumbnail}
                  resizeMode="cover"
                />
              )}

              <Text style={styles.title}>{article.title}</Text>

              {/* Özet formatında tıklanabilir metin sunumu */}
              {renderClickableText(article.bodyText)}
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background || '#0E0E1A',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background || '#0E0E1A',
  },
  tabsWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border || '#2C2C3D',
    backgroundColor: COLORS.background || '#0E0E1A',
  },
  tabsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#1C1C2D',
  },
  activeTabButton: {
    backgroundColor: COLORS.primary || '#6C63FF',
  },
  tabText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  headerTitle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  sourceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary || '#6C63FF', // Vurgulu renk
    fontStyle: 'italic',
  },
  articleCard: {
    marginBottom: 24, // Kartlar arası mesafe artırıldı
    backgroundColor: '#1C1C2D',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border || '#2C2C3D',
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#0E0E1A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text || '#FFFFFF',
    marginBottom: 12,
    lineHeight: 28,
  },
  clickableTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 30, // Kalabalığı önlemek için satır aralığı geniş
    color: '#D1D5DB', // Okunabilir gri
  },
  errorText: {
    color: COLORS.textDim || '#9CA3AF',
    fontSize: 16,
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: COLORS.primary || '#6C63FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
