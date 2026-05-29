import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import GrammarScreen from '../screens/GrammarScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import NotebookScreen from '../screens/NotebookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import { COLORS } from '../utils/theme';

const Tab = createBottomTabNavigator();

function TabIcon({ name, focused, color }) {
  const icons = {
    Home: focused ? '🏠' : '🏡',
    News: focused ? '📰' : '🗞️',
    Grammar: focused ? '📚' : '📖',
    Notebook: focused ? '📒' : '📓',
    Search: focused ? '🔍' : '🔎',
    Profile: focused ? '👤' : '🙍',
  };
  return (
    <View style={styles.tabIcon}>
      <Text style={styles.tabEmoji}>{icons[name]}</Text>
      {focused && <View style={[styles.dot, { backgroundColor: color }]} />}
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textDim,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused, color }) => (
          <TabIcon name={route.name} focused={focused} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Ana Sayfa' }} />
      <Tab.Screen name="News" component={NewsScreen} options={{ tabBarLabel: 'Haberler' }} />
      <Tab.Screen name="Grammar" component={GrammarScreen} options={{ tabBarLabel: 'Gramer' }} />
      <Tab.Screen name="Notebook" component={NotebookScreen} options={{ tabBarLabel: 'Defterim' }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: 'Arama' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profil' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0E0E1A',
    borderTopColor: COLORS.border,
    borderTopWidth: 1,
    height: 65,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabEmoji: {
    fontSize: 22,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 2,
  },
});
