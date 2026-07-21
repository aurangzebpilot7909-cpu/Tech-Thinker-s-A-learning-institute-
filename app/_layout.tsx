import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useAuth } from '@hooks/useAuth';
import { View, ActivityIndicator } from 'react-native';
import { Theme } from '@theme/index';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Theme.Colors.primary,
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
