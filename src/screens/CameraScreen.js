import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  ScrollView, ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, RADIUS } from '../utils/theme';

// Mock analyzed words for demo
const DEMO_RESULT = {
  detectedLanguage: 'English',
  complexityScore: '85%',
  words: [
    { word: 'works', meaning: 'Çalışma', tr: 'Zihinsel veya fiziksel çaba gerektiren aktivite', example: 'The new system works perfectly.', type: 'noun/verb' },
    { word: 'reading', meaning: 'Okuma', tr: 'Yazılı metni sessizce okuma eylemi', example: 'He has difficulty speaking in public.', type: 'noun' },
    { word: 'speaking', meaning: 'Konuşma', tr: 'Bilgi aktarma veya duyguları ifade etme eylemi', example: 'Public speaking requires practice.', type: 'noun' },
    { word: 'innovative', meaning: 'Yenilikçi', tr: 'Yeni fikirler getiren, orijinal', example: 'An innovative approach to learning.', type: 'adjective' },
  ],
};

export default function CameraScreen() {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const simulateScan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(DEMO_RESULT);
      setScanned(true);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Metni Tara & Analiz Et</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Camera Viewfinder */}
        {!scanned && (
          <View style={styles.viewfinder}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
            <View style={styles.scanLine} />
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={styles.loadingText}>Analiz ediliyor...</Text>
              </View>
            ) : (
              <View style={styles.cameraPlaceholder}>
                <Text style={styles.cameraEmoji}>📷</Text>
                <Text style={styles.cameraHint}>Metni çerçeve içine alın</Text>
              </View>
            )}
          </View>
        )}

        {/* Scanned text preview */}
        {scanned && (
          <View style={styles.textPreview}>
            <Text style={styles.textPreviewLabel}>Taranan Metin</Text>
            <Text style={styles.textPreviewContent} numberOfLines={4}>
              Solutions smooth freezes flow expanding adds centered no detected uldo a therapeuticsvath plst a inpedestrian parent or uncold parkethome...
            </Text>
          </View>
        )}

        {/* Scan button */}
        {!scanned && (
          <TouchableOpacity style={styles.scanBtn} onPress={simulateScan} disabled={loading}>
            <LinearGradient colors={[COLORS.primary, '#00D4AA']} style={styles.scanBtnGrad}>
              <Text style={styles.scanBtnText}>{loading ? 'Analiz ediliyor...' : '📷 Tara ve Analiz Et'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}

        {/* Results */}
        {result && (
          <>
            {/* Analysis summary */}
            <View style={styles.summaryRow}>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryLabel}>Algılanan Dil</Text>
                <Text style={styles.summaryValue}>{result.detectedLanguage}</Text>
              </View>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryLabel}>Karmaşıklık Skoru</Text>
                <Text style={[styles.summaryValue, { color: COLORS.accent3 }]}>{result.complexityScore}</Text>
              </View>
            </View>

            {/* Analyzed Words */}
            <Text style={styles.wordsTitle}>📖 Analiz Sonucu</Text>
            {result.words.map((w, i) => (
              <View key={i} style={styles.wordCard}>
                <View style={styles.wordHeader}>
                  <Text style={styles.word}>{w.word}</Text>
                  <View style={styles.typeTag}>
                    <Text style={styles.typeTagText}>{w.type}</Text>
                  </View>
                </View>
                <Text style={styles.meaning}>{w.meaning}</Text>
                <Text style={styles.tr}>{w.tr}</Text>
                <Text style={styles.example} numberOfLines={1}>"{w.example}"</Text>
              </View>
            ))}

            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => { setScanned(false); setResult(null); }}
            >
              <Text style={styles.resetBtnText}>Yeni Tarama Yap 🔄</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { flexDirection: 'row', alignItems: 'center', padding: SPACING.xl, gap: 10 },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  backText: { fontSize: 32, color: COLORS.text, fontWeight: '300', marginTop: -6 },
  title: { fontSize: 18, fontWeight: '800', color: COLORS.text, flex: 1 },
  scroll: { padding: SPACING.xl, paddingBottom: 32 },
  viewfinder: {
    height: 200, backgroundColor: '#0A1A0A', borderRadius: RADIUS.xl,
    marginBottom: SPACING.xl, position: 'relative', overflow: 'hidden',
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: COLORS.primary + '44',
  },
  cornerTL: { position: 'absolute', top: 12, left: 12, width: 24, height: 24, borderTopWidth: 3, borderLeftWidth: 3, borderColor: COLORS.primary, borderRadius: 3 },
  cornerTR: { position: 'absolute', top: 12, right: 12, width: 24, height: 24, borderTopWidth: 3, borderRightWidth: 3, borderColor: COLORS.primary, borderRadius: 3 },
  cornerBL: { position: 'absolute', bottom: 12, left: 12, width: 24, height: 24, borderBottomWidth: 3, borderLeftWidth: 3, borderColor: COLORS.primary, borderRadius: 3 },
  cornerBR: { position: 'absolute', bottom: 12, right: 12, width: 24, height: 24, borderBottomWidth: 3, borderRightWidth: 3, borderColor: COLORS.primary, borderRadius: 3 },
  scanLine: {
    position: 'absolute', left: 20, right: 20, height: 2,
    backgroundColor: COLORS.primary + '88', borderRadius: 1, top: '40%',
  },
  cameraPlaceholder: { alignItems: 'center' },
  cameraEmoji: { fontSize: 48, marginBottom: 8 },
  cameraHint: { color: COLORS.textMuted, fontSize: 14 },
  loadingContainer: { alignItems: 'center', gap: 12 },
  loadingText: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  textPreview: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.lg, marginBottom: SPACING.xl, borderWidth: 1, borderColor: COLORS.border,
  },
  textPreviewLabel: { color: COLORS.textMuted, fontSize: 12, fontWeight: '600', marginBottom: 8 },
  textPreviewContent: { color: COLORS.textDim, fontSize: 13, lineHeight: 20 },
  scanBtn: { borderRadius: RADIUS.xl, overflow: 'hidden', marginBottom: SPACING.xl },
  scanBtnGrad: { paddingVertical: 18, alignItems: 'center' },
  scanBtnText: { fontSize: 16, fontWeight: '800', color: '#000' },
  summaryRow: { flexDirection: 'row', gap: 12, marginBottom: SPACING.xl },
  summaryCard: {
    flex: 1, backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.lg, borderWidth: 1, borderColor: COLORS.border, alignItems: 'center',
  },
  summaryLabel: { color: COLORS.textMuted, fontSize: 12, marginBottom: 4 },
  summaryValue: { fontSize: 16, fontWeight: '800', color: COLORS.accent2 },
  wordsTitle: { fontSize: 18, fontWeight: '800', color: COLORS.text, marginBottom: SPACING.lg },
  wordCard: {
    backgroundColor: COLORS.bgCard, borderRadius: RADIUS.lg,
    padding: SPACING.lg, marginBottom: 10, borderWidth: 1, borderColor: COLORS.border,
  },
  wordHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  word: { fontSize: 18, fontWeight: '800', color: COLORS.primary },
  typeTag: { backgroundColor: COLORS.primaryDim, paddingHorizontal: 8, paddingVertical: 3, borderRadius: RADIUS.full },
  typeTagText: { color: COLORS.primary, fontSize: 11, fontWeight: '700' },
  meaning: { fontSize: 15, color: COLORS.text, fontWeight: '600', marginBottom: 2 },
  tr: { fontSize: 13, color: COLORS.textMuted, marginBottom: 6 },
  example: { fontSize: 13, color: COLORS.textDim, fontStyle: 'italic' },
  resetBtn: { paddingVertical: 16, alignItems: 'center', marginTop: SPACING.lg },
  resetBtnText: { color: COLORS.primary, fontSize: 15, fontWeight: '700' },
});
