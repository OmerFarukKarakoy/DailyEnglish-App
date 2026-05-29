import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState, useEffect } from 'react';
import {
  PanResponder,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
  View, Modal, TouchableWithoutFeedback
} from 'react-native';
import * as Notifications from 'expo-notifications';
import { useApp } from '../context/AppContext';
import { RADIUS, SPACING } from '../utils/theme';
import { predictForgettingCurve } from '../services/aiService';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function HomeScreen() {
  const navigation = useNavigation();
  const { state, dispatch } = useApp();
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const setupNotifications = async () => {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      // TF.js Unutma Eğrisi Tahmini (Forgetting Curve)
      try {
        const daysSince = Math.floor(Math.random() * 5) + 3; // Simüle edilmiş 3-7 gün
        const retention = await predictForgettingCurve(daysSince);
        
        // Eğer hatırlama olasılığı %50'nin altındaysa ve son 24 saatte bu bildirim gitmediyse
        const hasAILately = state.notifications?.some(n => n.title.includes('Yapay Zeka'));
        if (retention < 0.5 && !hasAILately) {
          const aiNotif = {
            title: "Yapay Zeka Hatırlatıcısı 🤖",
            body: `Öğrendiğin 5 kelimeyi unutmak üzeresin (Hatırlama ihtimalin %${Math.round(retention * 100)}'e düştü). Şimdi tekrar etmeye ne dersin?`
          };
          dispatch({ type: 'ADD_NOTIFICATION', payload: aiNotif });
        }
      } catch (err) {
        console.log("TF Forgetting Curve error:", err);
      }

      if (!state.notifications || state.notifications.length === 0) {
        const mockNotifs = [
          { title: "Harika! 🎉", body: "7 günlük serini tamamladın, tebrikler!" },
          { title: "Kişiselleştirilmiş İpucu 💡", body: "Bugün öğrendiğin kelime 'Resilience'dı, cümlede nasıl kullanıldığını hatırlıyor musun?" },
          { title: "Hedefini Unutma! 🚀", body: "Bugünkü İngilizce hedefine ulaşmana çok az kaldı! 5 dakikanı ayırmaya ne dersin?" },
          { title: "Rozet Başarısı 🏅", body: "Yeni bir rozet kazandınız! (İlk Adım)" }
        ];

        // Add sequentially for the visual effect
        mockNotifs.forEach((n, idx) => {
          setTimeout(() => {
            dispatch({ type: 'ADD_NOTIFICATION', payload: n });
            if (finalStatus === 'granted') {
              Notifications.scheduleNotificationAsync({
                content: { title: n.title, body: n.body },
                trigger: null,
              });
            }
          }, 1000 + (idx * 2000));
        });
      }
    };
    setupNotifications();
  }, [state.notifications, dispatch]);

  const toggleNotifications = () => {
    if (!showNotifications && state.unreadNotifications > 0) {
      dispatch({ type: 'MARK_NOTIFICATIONS_READ' });
    }
    setShowNotifications(!showNotifications);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 30 && Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 1.5;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50 || gestureState.dx < -50) {
          navigation.navigate('Profile');
        }
      }
    })
  ).current;

  return (
    <SafeAreaView style={styles.container} {...panResponder.panHandlers}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👨🏻</Text>
            </View>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>{state.userName || 'Öğrenci'}</Text>
              <Text style={styles.levelText}>  -  {state.userLevel} Seviye</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellBtn} onPress={toggleNotifications}>
            <Text style={styles.bellIcon}>🔔</Text>
            {state.unreadNotifications > 0 && (
              <View style={styles.bellDot}>
                <Text style={styles.bellDotText}>{state.unreadNotifications > 9 ? '9+' : state.unreadNotifications}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Notifications Modal */}
        <Modal
          visible={showNotifications}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowNotifications(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowNotifications(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.notificationsContainer}>
                  <View style={styles.notificationsHeader}>
                    <Text style={styles.notificationsTitle}>Bildirimler</Text>
                    <TouchableOpacity onPress={() => setShowNotifications(false)}>
                      <Text style={styles.closeIcon}>✖</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView style={styles.notificationsList}>
                    {state.notifications?.length > 0 ? (
                      state.notifications.map((n) => (
                        <View key={n.id} style={[styles.notificationCard, !n.read && styles.notificationUnread]}>
                          <Text style={styles.notificationTitle}>{n.title}</Text>
                          <Text style={styles.notificationBody}>{n.body}</Text>
                        </View>
                      ))
                    ) : (
                      <Text style={styles.noNotifications}>Şu an bildiriminiz yok.</Text>
                    )}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Categories Scroll */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.examScroll} contentContainerStyle={{ paddingRight: 32 }}>
            <TouchableOpacity style={[styles.examCard, { backgroundColor: '#1E3A8A' }]} onPress={() => navigation.navigate('Search')}>
              <Text style={styles.examTextEn}>Vocabulary</Text>
              <Text style={styles.examTextTr}>Kelimeler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.examCard, { backgroundColor: '#991B1B' }]} onPress={() => navigation.navigate('GrammarTopic', { topicId: 'prepositions', subtopicId: 'preposition_dictionary' })}>
              <Text style={styles.examTextEn}>Prepositions</Text>
              <Text style={styles.examTextTr}>Edatlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.examCard, { backgroundColor: '#EA580C' }]} onPress={() => navigation.navigate('GrammarTopic', { topicId: 'conjunctions', subtopicId: 'dictionary' })}>
              <Text style={styles.examTextEn}>Conjunctions</Text>
              <Text style={styles.examTextTr}>Bağlaçlar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.examCard, { backgroundColor: '#064E3B' }]} onPress={() => navigation.navigate('GrammarTopic', { topicId: 'phrasal_verbs', subtopicId: 'dictionary' })}>
              <Text style={styles.examTextEn}>Phrasal Verbs</Text>
              <Text style={styles.examTextTr}>Deyimler</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Continue Learning */}
        <TouchableOpacity
          onPress={() => navigation.navigate('WordQuiz', { category: 'daily', fromHome: true })}
          activeOpacity={0.9}
        >
          <LinearGradient
            colors={['#7E57C2', '#5E35B1', '#3949AB']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            style={styles.continueCard}
          >
            <Text style={styles.continueTitle}>Öğrenmeye Devam Et</Text>
            <View style={styles.continueActionArea}>
              <View style={styles.playButtonCircle}>
                <Text style={styles.playIcon}>▶</Text>
              </View>
              <View style={styles.targetBox}>
                <Text style={styles.targetLabel}>Bugünkü Hedef:</Text>
                <Text style={styles.targetValue}>{state.dailyGoal} Kelime</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Fast Access News */}
        <TouchableOpacity
          onPress={() => navigation.navigate('News')}
          activeOpacity={0.8}
          style={styles.newsCardContainer}
        >
          <LinearGradient
            colors={['#FF8A65', '#D84315']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            style={styles.newsCardBg}
          >
            <View style={styles.newsContent}>
              <View style={styles.newsIconContainer}>
                <Text style={styles.newsIcon}>📰</Text>
              </View>
              <View style={styles.newsTextContainer}>
                <Text style={styles.newsSubtitle}>Hızlı Erişim</Text>
                <Text style={styles.newsTitle}>Günün Haberleri</Text>
              </View>
              <View style={styles.newsArrow}>
                <Text style={styles.newsArrowText}>→</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Fast Access Stats */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.8}
          style={[styles.newsCardContainer, { shadowColor: '#059669' }]}
        >
          <LinearGradient
            colors={['#10B981', '#059669']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            style={styles.newsCardBg}
          >
            <View style={styles.newsContent}>
              <View style={styles.newsIconContainer}>
                <Text style={styles.newsIcon}>📊</Text>
              </View>
              <View style={styles.newsTextContainer}>
                <Text style={styles.newsSubtitle}>İlerlemeni Gör</Text>
                <Text style={styles.newsTitle}>İstatistikler</Text>
              </View>
              <View style={styles.newsArrow}>
                <Text style={[styles.newsArrowText, { color: '#059669' }]}>→</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Fast Access Grammar */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Grammar')}
          activeOpacity={0.8}
          style={styles.grammarContainer}
        >
          <View style={styles.grammarLeft}>
            <Text style={styles.grammarTitle}>Gramer Kuralları</Text>
            <Text style={styles.grammarSubtitle}>A'dan Z'ye Dilbilgisi</Text>
          </View>
          <View style={styles.grammarRight}>
            <Text style={styles.grammarGraphic}>📝</Text>
          </View>
        </TouchableOpacity>




      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111319' },
  scroll: { padding: SPACING.xl, paddingBottom: 40 },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING['2xl'],
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40, height: 40,
    borderRadius: 20,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarEmoji: { fontSize: 20 },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F8FAFC',
  },
  levelText: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
  },
  bellBtn: {
    position: 'relative',
    padding: 4,
  },
  bellIcon: { fontSize: 20 },
  bellDot: {
    position: 'absolute',
    top: -2, right: -2,
    width: 14, height: 14,
    borderRadius: 7,
    backgroundColor: '#EF4444',
    borderWidth: 1, borderColor: '#111319',
    alignItems: 'center', justifyContent: 'center'
  },
  bellDotText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: 'bold',
  },

  // Notifications Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 20,
  },
  notificationsContainer: {
    width: 300,
    maxHeight: 400,
    backgroundColor: '#1E293B',
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: SPACING.sm,
  },
  notificationsTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
  },
  closeIcon: {
    color: '#94A3B8',
    fontSize: 18,
  },
  notificationsList: {
    flexGrow: 0,
  },
  notificationCard: {
    backgroundColor: '#0F172A',
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.sm,
    borderLeftWidth: 3,
    borderLeftColor: '#334155',
  },
  notificationUnread: {
    borderLeftColor: '#F59E0B',
    backgroundColor: '#1E293B',
  },
  notificationTitle: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  notificationBody: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 16,
  },
  noNotifications: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
    marginTop: SPACING.lg,
  },

  // Continue Card
  continueCard: {
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    marginBottom: SPACING.xl,
  },
  continueTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  continueActionArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButtonCircle: {
    width: 56, height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  playIcon: {
    fontSize: 24,
    color: '#5E35B1',
    marginLeft: 4,
  },
  targetBox: {
    justifyContent: 'center',
  },
  targetLabel: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 2,
  },
  targetValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  // News Card
  newsCardContainer: {
    marginBottom: SPACING.xl,
    borderRadius: RADIUS.xl,
    shadowColor: '#D84315',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  newsCardBg: {
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
  },
  newsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newsIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  newsIcon: {
    fontSize: 24,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  newsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  newsArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsArrowText: {
    color: '#D84315',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Grammar Card
  grammarContainer: {
    marginBottom: SPACING.xl,
    backgroundColor: '#1E293B',
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#334155',
    borderLeftWidth: 6,
    borderLeftColor: '#F59E0B',
  },
  grammarLeft: {
    flex: 1,
  },
  grammarTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  grammarSubtitle: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '500',
  },
  grammarRight: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grammarGraphic: {
    fontSize: 22,
  },


  // Sections
  section: {
    marginBottom: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowBox: {
    paddingHorizontal: 8,
  },
  arrowText: {
    color: '#94A3B8',
    fontWeight: '600',
    letterSpacing: 2,
  },
  examScroll: {
    marginHorizontal: -SPACING.xl,
    paddingHorizontal: SPACING.xl,
    paddingTop: 8,
  },
  examCard: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginRight: 12,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  examTextEn: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  examTextTr: {
    color: '#E2E8F0',
    fontWeight: '600',
    fontSize: 14,
  }
});
