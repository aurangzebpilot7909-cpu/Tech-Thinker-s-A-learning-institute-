import { useCallback } from 'react';
import { useAuthStore } from '@store/authStore';
import * as authService from '@firebase/auth';
import { User } from '@types/index';

export const useAuth = () => {
  const { user, token, isAuthenticated, isLoading, setUser, setToken, setLoading, logout } =
    useAuthStore();

  const signUp = useCallback(
    async (email: string, password: string, displayName: string) => {
      setLoading(true);
      try {
        const firebaseUser = await authService.signUp(email, password, displayName);
        const newUser: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || displayName,
          photoURL: firebaseUser.photoURL || undefined,
          phoneNumber: firebaseUser.phoneNumber || undefined,
          class: '',
          course: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        setUser(newUser);
        return newUser;
      } finally {
        setLoading(false);
      }
    },
    [setUser, setLoading],
  );

  const signIn = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      try {
        const firebaseUser = await authService.signIn(email, password);
        const userData: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          photoURL: firebaseUser.photoURL || undefined,
          phoneNumber: firebaseUser.phoneNumber || undefined,
          class: '',
          course: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        setUser(userData);
        return userData;
      } finally {
        setLoading(false);
      }
    },
    [setUser, setLoading],
  );

  const logoutUser = useCallback(async () => {
    setLoading(true);
    try {
      await authService.logout();
      logout();
    } finally {
      setLoading(false);
    }
  }, [setLoading, logout]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    signUp,
    signIn,
    logout: logoutUser,
  };
};
