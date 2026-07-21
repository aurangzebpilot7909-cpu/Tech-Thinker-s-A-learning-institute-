import { create } from 'zustand';
import { ThemeMode } from '@theme/colors';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>()()
  .persist(
    (set) => ({
      theme: 'light' as ThemeMode,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  );
