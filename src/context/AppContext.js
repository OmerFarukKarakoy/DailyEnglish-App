import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

const initialState = {
  userLevel: null, // null = not assessed yet
  levelAssessed: false,
  learnedWords: [], // word ids
  knownWords: [], // word ids
  wrongWords: [], // word ids
  customWords: [], // user added words
  dailyGoal: 15,
  totalWordsLearned: 0,
  quizHistory: [], // {date, correct, total, category}
  completedGrammarQuizzes: [], // ["topicId_subtopicId"]
  streakDays: 0,
  lastStudyDate: null,
  skillScores: {
    vocabulary: 50,
    prepositions: 50,
    conjunctions: 50,
    phrasal_verbs: 50,
  },
  badges: [],
  monthlyActivity: {}, // date -> count
  rememberRate: 85,
  levelProgress: 70, // percent
  currentLevelFrom: 'A2',
  currentLevelTo: 'B1',
  userName: null, // User's name for personalization
  notifications: [],
  unreadNotifications: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LEVEL': {
      const level = action.payload;
      let nextLevel = 'B1';
      switch(level) {
        case 'A1': nextLevel = 'A2'; break;
        case 'A2': nextLevel = 'B1'; break;
        case 'B1': nextLevel = 'B2'; break;
        case 'B2': nextLevel = 'C1'; break;
        case 'C1': nextLevel = 'C2'; break;
        case 'C2': nextLevel = 'C2'; break;
        default: nextLevel = 'B1';
      }
      return { 
        ...state, 
        userLevel: level, 
        currentLevelFrom: level, 
        currentLevelTo: nextLevel, 
        levelAssessed: true 
      };
    }
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload };
    case 'ADD_CUSTOM_WORD': {
      const newWord = action.payload;
      return { ...state, customWords: [...(state.customWords || []), newWord] };
    }
    case 'REMOVE_CUSTOM_WORD': {
      const wordId = action.payload;
      return {
        ...state,
        customWords: (state.customWords || []).filter(w => w.id !== wordId)
      };
    }
    case 'LEARN_WORD': {
      const wordId = action.payload;
      if (state.learnedWords.includes(wordId)) return state;
      const today = new Date().toDateString();
      const activity = { ...state.monthlyActivity };
      activity[today] = (activity[today] || 0) + 1;
      return {
        ...state,
        learnedWords: [...state.learnedWords, wordId],
        wrongWords: state.wrongWords?.filter(id => id !== wordId) || [],
        totalWordsLearned: state.totalWordsLearned + 1,
        monthlyActivity: activity,
      };
    }
    case 'MARK_WRONG_WORD': {
      const wordId = action.payload;
      const currentWrong = state.wrongWords || [];
      if (currentWrong.includes(wordId)) return state;
      return { ...state, wrongWords: [...currentWrong, wordId] };
    }
    case 'KNOW_WORD': {
      const wordId = action.payload;
      if (state.knownWords.includes(wordId)) return state;
      return { ...state, knownWords: [...state.knownWords, wordId] };
    }
    case 'REMOVE_LEARNED_WORD': {
      const wordId = action.payload;
      return {
        ...state,
        learnedWords: state.learnedWords.filter(id => id !== wordId),
        totalWordsLearned: Math.max(0, state.totalWordsLearned - 1)
      };
    }
    case 'REMOVE_WRONG_WORD': {
      const wordId = action.payload;
      return {
        ...state,
        wrongWords: state.wrongWords?.filter(id => id !== wordId) || []
      };
    }
    case 'COMPLETE_GRAMMAR_QUIZ': {
      const quizId = action.payload;
      const completed = state.completedGrammarQuizzes || [];
      if (completed.includes(quizId)) return state;
      return { ...state, completedGrammarQuizzes: [...completed, quizId] };
    }
    case 'ADD_QUIZ_RESULT': {
      const { correct, total, category } = action.payload;
      const date = new Date().toDateString();
      const skillUpdate = {};
      const incr = Math.round((correct / total) * 5);

      if (category === 'daily') {
        skillUpdate.vocabulary = Math.min(100, (state.skillScores.vocabulary || 50) + incr);
        skillUpdate.prepositions = Math.min(100, (state.skillScores.prepositions || 50) + incr);
        skillUpdate.conjunctions = Math.min(100, (state.skillScores.conjunctions || 50) + incr);
        skillUpdate.phrasal_verbs = Math.min(100, (state.skillScores.phrasal_verbs || 50) + incr);
      } else if (category === 'prepositions') {
        skillUpdate.prepositions = Math.min(100, (state.skillScores.prepositions || 50) + incr);
      } else if (category === 'conjunctions') {
        skillUpdate.conjunctions = Math.min(100, (state.skillScores.conjunctions || 50) + incr);
      } else if (category === 'phrasal_verbs') {
        skillUpdate.phrasal_verbs = Math.min(100, (state.skillScores.phrasal_verbs || 50) + incr);
      } else {
        skillUpdate.vocabulary = Math.min(100, (state.skillScores.vocabulary || 50) + incr);
      }
      
      return {
        ...state,
        quizHistory: [...state.quizHistory, { date, correct, total, category }],
        skillScores: { ...state.skillScores, ...skillUpdate },
        rememberRate: Math.min(100, Math.round((state.rememberRate + (correct / total * 100)) / 2)),
      };
    }
    case 'ADD_NOTIFICATION': {
      const newNotif = { id: Date.now().toString(), ...action.payload, read: false, date: new Date().toISOString() };
      return {
        ...state,
        notifications: [newNotif, ...(state.notifications || [])],
        unreadNotifications: (state.unreadNotifications || 0) + 1,
      };
    }
    case 'MARK_NOTIFICATIONS_READ': {
      const updatedNotifs = (state.notifications || []).map(n => ({ ...n, read: true }));
      return {
        ...state,
        notifications: updatedNotifs,
        unreadNotifications: 0,
      };
    }
    case 'LOAD_STATE': {
      const loadedState = action.payload;
      if (loadedState.userLevel) {
        let nextLevel = 'B1';
        switch(loadedState.userLevel) {
          case 'A1': nextLevel = 'A2'; break;
          case 'A2': nextLevel = 'B1'; break;
          case 'B1': nextLevel = 'B2'; break;
          case 'B2': nextLevel = 'C1'; break;
          case 'C1': nextLevel = 'C2'; break;
          case 'C2': nextLevel = 'C2'; break;
          default: nextLevel = 'B1';
        }
        loadedState.currentLevelFrom = loadedState.userLevel;
        loadedState.currentLevelTo = nextLevel;
      }
      return { ...state, ...loadedState };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadState();
  }, []);

  useEffect(() => {
    saveState();
  }, [state]);

  const loadState = async () => {
    try {
      const saved = await AsyncStorage.getItem('appState');
      if (saved) {
        dispatch({ type: 'LOAD_STATE', payload: JSON.parse(saved) });
      }
    } catch (e) {}
  };

  const saveState = async () => {
    try {
      await AsyncStorage.setItem('appState', JSON.stringify(state));
    } catch (e) {}
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
