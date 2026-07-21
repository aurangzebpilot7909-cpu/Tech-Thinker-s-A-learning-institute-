import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@hooks/useAuth';
import { Activity } from 'react-native-feather';
import { Theme } from '@theme/index';

export default function SplashScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/welcome');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, isLoading]);

  return (
    <View style={[styles.container, { backgroundColor: Theme.Colors.primary }]}>
      <Activity size={60} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
