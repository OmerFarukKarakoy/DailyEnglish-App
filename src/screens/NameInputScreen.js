import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  TextInput, Dimensions, KeyboardAvoidingView, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, RADIUS } from '../utils/theme';
import { useApp } from '../context/AppContext';

export default function NameInputScreen() {
  const { dispatch } = useApp();
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim().length > 0) {
      dispatch({ type: 'SET_USER_NAME', payload: name.trim() });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#0A0A0F', '#1A0A2E', '#0A0A0F']} style={styles.bg}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <Text style={styles.welcomeEmoji}>👋</Text>
            <Text style={styles.title}>Hoş Geldiniz!</Text>
            <Text style={styles.subtitle}>
              Sizi daha iyi tanıyabilmemiz için lütfen adınızı girin.
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Adınız"
                placeholderTextColor={COLORS.textMuted}
                value={name}
                onChangeText={setName}
                autoFocus={true}
                returnKeyType="done"
                onSubmitEditing={handleContinue}
              />
            </View>

            <TouchableOpacity 
              style={[styles.btn, name.trim().length === 0 && styles.btnDisabled]} 
              onPress={handleContinue}
              disabled={name.trim().length === 0}
            >
              <LinearGradient 
                colors={name.trim().length > 0 ? [COLORS.primary, '#00D4AA'] : [COLORS.bgCard2, COLORS.bgCard2]} 
                style={styles.btnGrad} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
              >
                <Text style={[styles.btnText, name.trim().length === 0 && styles.btnTextDisabled]}>
                  Devam Et
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  bg: { flex: 1 },
  keyboardView: { flex: 1 },
  content: {
    flex: 1,
    padding: SPACING['2xl'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeEmoji: { fontSize: 72, marginBottom: SPACING.xl },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: SPACING['3xl'],
    lineHeight: 24,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    marginBottom: SPACING['2xl'],
  },
  input: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: '600',
    textAlign: 'center',
  },
  btn: { width: '100%', borderRadius: RADIUS.xl, overflow: 'hidden' },
  btnDisabled: { opacity: 0.7 },
  btnGrad: { paddingVertical: 18, alignItems: 'center', borderRadius: RADIUS.xl },
  btnText: { fontSize: 18, fontWeight: '800', color: '#000' },
  btnTextDisabled: { color: COLORS.textMuted },
});
