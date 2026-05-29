import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Modal,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS, RADIUS, SPACING } from '../utils/theme';
const OXFORD_DICT = require('../../oxford_dictionary.json');

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('Genel');
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [newWordEng, setNewWordEng] = useState('');
    const [newWordTr, setNewWordTr] = useState('');
    const [deleteWordId, setDeleteWordId] = useState(null);
    const navigation = useNavigation();
    const { state, dispatch } = useApp();

    // Filter words
    const allDict = [...(state.customWords || []), ...OXFORD_DICT];
    const filteredWords = allDict.filter(w => {
        const matchesQuery = (w.word && w.word.toLowerCase().includes(query.toLowerCase())) ||
                             (w.translation && w.translation.toLowerCase().includes(query.toLowerCase()));
        const matchesLevel = selectedLevel === 'Genel' || w.level === selectedLevel;
        return matchesQuery && matchesLevel;
    });

    // Limit to 100 items for performance so it doesn't try to render 5000 FlatList items immediately, although FlatList is lazy it still helps if query is empty. Actually FlatList handles 5000 items fine, but let's just limit the array when user is typing if it ever gets slow. No limit is fine.

    const renderWord = ({ item }) => {
        const isLearned = state.learnedWords?.includes(item.id);

        return (
            <View style={styles.wordCard}>
                <View style={styles.wordHeader}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.wordTitle}>{item.word}</Text>
                        <View style={styles.levelBadge}>
                            <Text style={styles.levelText}>{item.level}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.addButton, isLearned && styles.addedButton]}
                        onPress={() => {
                            if (!isLearned) {
                                dispatch({ type: 'LEARN_WORD', payload: item.id });
                            }
                        }}
                        disabled={isLearned}
                    >
                        <Text style={[styles.addButtonText, isLearned && styles.addedButtonText]}>
                            {isLearned ? '✓ Eklendi' : '+ Ekle'}
                        </Text>
                    </TouchableOpacity>
                    {item.id.toString().startsWith('custom_') && (
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => setDeleteWordId(item.id)}
                        >
                            <Text style={styles.removeButtonText}>✕</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.wordMeaning}>{item.translation}</Text>
                {item.pronunciation ? <Text style={styles.wordTr}>{item.pronunciation}</Text> : null}
                {item.example_sentence ? <Text style={styles.wordExample}>"{item.example_sentence}"</Text> : null}
            </View>
        );
    };

    const handleAddCustomWord = () => {
        if (newWordEng.trim() && newWordTr.trim()) {
            const newWord = {
                id: 'custom_' + Date.now(),
                word: newWordEng.trim(),
                translation: newWordTr.trim(),
                level: 'Eklenenler',
                example_sentence: ''
            };
            dispatch({ type: 'ADD_CUSTOM_WORD', payload: newWord });
            setAddModalVisible(false);
            setNewWordEng('');
            setNewWordTr('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#0A0A0F', '#1A0A2E', '#0A0A0F']} style={styles.bg}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Text style={styles.headerTitle}>Sözlük</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity
                                style={styles.headerAddBtn}
                                onPress={() => setAddModalVisible(true)}
                            >
                                <Text style={styles.headerAddBtnText}>+ Ekle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.headerQuizBtn}
                                onPress={() => navigation.navigate('WordQuiz', { category: 'oxford' })}
                            >
                                <Text style={styles.headerQuizBtnText}>Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Kelime veya anlam ara..."
                            placeholderTextColor={COLORS.textMuted}
                            value={query}
                            onChangeText={setQuery}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }} contentContainerStyle={{ gap: 8 }}>
                        {['Genel', 'A1', 'A2', 'B1', 'B2', 'C1', 'Eklenenler'].map(lvl => (
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
                </View>

                <FlatList
                    data={filteredWords}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderWord}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Sonuç bulunamadı.</Text>
                    }
                />

                <Modal
                    visible={isAddModalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setAddModalVisible(false)}
                >
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.modalContainer}
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Yeni Kelime Ekle</Text>
                            
                            <TextInput
                                style={styles.modalInput}
                                placeholder="İngilizce Kelime"
                                placeholderTextColor={COLORS.textMuted}
                                value={newWordEng}
                                onChangeText={setNewWordEng}
                                autoCapitalize="none"
                            />
                            
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Türkçesi"
                                placeholderTextColor={COLORS.textMuted}
                                value={newWordTr}
                                onChangeText={setNewWordTr}
                                autoCapitalize="none"
                            />

                            <View style={styles.modalButtons}>
                                <TouchableOpacity 
                                    style={styles.modalCancelBtn}
                                    onPress={() => setAddModalVisible(false)}
                                >
                                    <Text style={styles.modalCancelBtnText}>İptal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.modalAddBtn, (!newWordEng.trim() || !newWordTr.trim()) && { opacity: 0.5 }]}
                                    onPress={handleAddCustomWord}
                                    disabled={!newWordEng.trim() || !newWordTr.trim()}
                                >
                                    <Text style={styles.modalAddBtnText}>Ekle</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>

                <Modal
                    visible={deleteWordId !== null}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setDeleteWordId(null)}
                >
                    <View style={styles.modalContainer}>
                        <View style={[styles.modalContent, { alignItems: 'center' }]}>
                            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#EF444422', alignItems: 'center', justifyContent: 'center', marginBottom: SPACING.lg, borderWidth: 1, borderColor: '#EF444455' }}>
                                <Text style={{ fontSize: 28 }}>🗑️</Text>
                            </View>
                            <Text style={styles.modalTitle}>Kelimeyi Sil</Text>
                            <Text style={{ color: COLORS.textMuted, fontSize: 16, textAlign: 'center', marginBottom: SPACING.xl, lineHeight: 24 }}>
                                Bu kelimeyi kaldırmak istediğinizden emin misiniz? Bu işlem geri alınamaz.
                            </Text>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity 
                                    style={styles.modalCancelBtn}
                                    onPress={() => setDeleteWordId(null)}
                                >
                                    <Text style={styles.modalCancelBtnText}>İptal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.modalAddBtn, { backgroundColor: '#EF4444' }]}
                                    onPress={() => {
                                        if (deleteWordId) {
                                            dispatch({ type: 'REMOVE_CUSTOM_WORD', payload: deleteWordId });
                                            setDeleteWordId(null);
                                        }
                                    }}
                                >
                                    <Text style={styles.modalAddBtnText}>Evet, Sil</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.bg },
    bg: { flex: 1 },
    header: {
        padding: SPACING.xl,
        paddingTop: SPACING['2xl'],
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.text,
    },
    headerQuizBtn: {
        backgroundColor: 'transparent',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: RADIUS.full,
        borderWidth: 1,
        borderColor: '#05966988',
    },
    headerQuizBtnText: {
        color: '#059669',
        fontSize: 14,
        fontWeight: '700',
    },
    headerAddBtn: {
        backgroundColor: 'transparent',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: RADIUS.full,
        borderWidth: 1,
        borderColor: '#3B82F688',
    },
    headerAddBtnText: {
        color: '#3B82F6',
        fontSize: 14,
        fontWeight: '700',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.bgCard,
        borderRadius: RADIUS.lg,
        paddingHorizontal: SPACING.lg,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: COLORS.text,
        fontSize: 16,
    },
    listContent: {
        padding: SPACING.xl,
        paddingBottom: 40,
    },
    wordCard: {
        backgroundColor: COLORS.bgCard,
        borderRadius: RADIUS.lg,
        padding: SPACING.lg,
        marginBottom: SPACING.md,
        borderWidth: 1,
        borderColor: COLORS.borderGlow,
    },
    wordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    wordTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.text,
        marginRight: 8,
        flexShrink: 1,
    },
    levelBadge: {
        backgroundColor: COLORS.primaryDim,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: RADIUS.md,
    },
    levelText: {
        color: '#00FF88',
        fontSize: 12,
        fontWeight: '700',
    },
    addButton: {
        backgroundColor: '#8B5CF622',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: RADIUS.sm,
        borderWidth: 1,
        borderColor: '#8B5CF6',
        marginLeft: 8,
    },
    addedButton: {
        backgroundColor: '#10B98122',
        borderColor: '#10B981',
    },
    addButtonText: {
        color: '#8B5CF6',
        fontSize: 12,
        fontWeight: '700',
    },
    addedButtonText: {
        color: '#10B981',
    },
    removeButton: {
        backgroundColor: '#EF444422',
        width: 28,
        height: 28,
        borderRadius: RADIUS.full,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#EF4444',
    },
    removeButtonText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '700',
    },
    wordMeaning: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: '600',
        marginBottom: 2,
    },
    wordTr: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginBottom: 8,
    },
    wordExample: {
        fontSize: 14,
        color: COLORS.primary,
        fontStyle: 'italic',
    },
    emptyText: {
        color: COLORS.textMuted,
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: SPACING.xl,
    },
    modalContent: {
        backgroundColor: COLORS.bgCard,
        borderRadius: RADIUS.lg,
        padding: SPACING.xl,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: COLORS.text,
        marginBottom: SPACING.lg,
        textAlign: 'center',
    },
    modalInput: {
        backgroundColor: COLORS.bg,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        color: COLORS.text,
        fontSize: 16,
        marginBottom: SPACING.md,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SPACING.md,
        gap: SPACING.md,
    },
    modalCancelBtn: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    modalCancelBtnText: {
        color: COLORS.textMuted,
        fontWeight: '700',
        fontSize: 16,
    },
    modalAddBtn: {
        flex: 1,
        backgroundColor: '#3B82F6',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: RADIUS.md,
    },
    modalAddBtnText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
});
