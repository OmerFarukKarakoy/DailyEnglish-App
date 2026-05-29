import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import { ALL_WORDS, WORDS } from '../data/words';
import { COLORS, RADIUS, SPACING } from '../utils/theme';

export default function WordListScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { categoryId, subtopicId } = route.params || {};

    let words = [];
    let headerTitle = "Kelimeler";
    let canQuiz = false;

    if (categoryId) {
        words = WORDS[categoryId] || [];
        headerTitle = categoryId.toUpperCase() + " Kelimeleri";
        canQuiz = true;
    } else if (subtopicId) {
        // For grammar topics like Modals, we mock the words by picking random ones
        // or just show a subset of academic words
        words = ALL_WORDS.slice(0, 15);
        headerTitle = "Konu Kelimeleri";
        canQuiz = true;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Text style={styles.backText}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.title} numberOfLines={1}>{headerTitle}</Text>
            </View>

            <FlatList
                data={words}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.wordCard}>
                        <Text style={styles.word}>{item.word}</Text>
                        <Text style={styles.meaning}>{item.meaning}</Text>
                        <Text style={styles.example} numberOfLines={1}>"{item.example}"</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />

            {canQuiz && words.length > 0 && (
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.quizBtn}
                        onPress={() => navigation.navigate(categoryId ? 'WordQuiz' : 'WordQuiz', { category: categoryId || 'daily' })}
                    >
                        <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.quizBtnGrad}>
                            <Text style={styles.quizBtnText}>Quiz'e Başla</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.bg },
    header: { flexDirection: 'row', alignItems: 'center', padding: SPACING.xl, gap: 10 },
    backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
    backText: { fontSize: 32, color: COLORS.text, fontWeight: '300', marginTop: -6 },
    title: { flex: 1, fontSize: 20, fontWeight: '900', color: COLORS.text },
    list: { paddingHorizontal: SPACING.xl, paddingBottom: 24 },
    wordCard: {
        backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
        padding: SPACING.lg, marginBottom: 10, borderWidth: 1, borderColor: COLORS.border,
    },
    word: { fontSize: 18, fontWeight: '800', color: COLORS.text, marginBottom: 4 },
    meaning: { fontSize: 15, color: COLORS.primary, fontWeight: '600', marginBottom: 4 },
    example: { fontSize: 13, color: COLORS.textDim, fontStyle: 'italic' },
    footer: { padding: SPACING.xl, borderTopWidth: 1, borderTopColor: COLORS.border },
    quizBtn: { borderRadius: RADIUS.xl, overflow: 'hidden' },
    quizBtnGrad: { paddingVertical: 16, alignItems: 'center' },
    quizBtnText: { fontSize: 16, fontWeight: '800', color: '#000' },
});
