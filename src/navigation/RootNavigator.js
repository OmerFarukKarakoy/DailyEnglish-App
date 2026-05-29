import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import TabNavigator from './TabNavigator';
import NameInputScreen from '../screens/NameInputScreen';
import LevelTestScreen from '../screens/LevelTestScreen';
import WordListScreen from '../screens/WordListScreen';
import WordQuizScreen from '../screens/WordQuizScreen';
import GrammarTopicScreen from '../screens/GrammarTopicScreen';
import GrammarQuizScreen from '../screens/GrammarQuizScreen';
import CameraScreen from '../screens/CameraScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { state } = useApp();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      {!state.userName ? (
        <Stack.Screen name="NameInput" component={NameInputScreen} />
      ) : !state.levelAssessed ? (
        <Stack.Screen name="LevelTest" component={LevelTestScreen} />
      ) : (
        <Stack.Screen name="Main" component={TabNavigator} />
      )}
      <Stack.Screen name="WordList" component={WordListScreen} />
      <Stack.Screen name="WordQuiz" component={WordQuizScreen} />
      <Stack.Screen name="GrammarTopic" component={GrammarTopicScreen} />
      <Stack.Screen name="GrammarQuiz" component={GrammarQuizScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
