import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Theme } from '@theme/index';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ message, fullScreen = false }) => {
  return (
    <View style={[styles.container, fullScreen && styles.fullScreen]}>
      <ActivityIndicator size="large" color={Theme.Colors.primary} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.Spacing.lg,
  },
  fullScreen: {
    flex: 1,
  },
  message: {
    marginTop: Theme.Spacing.lg,
    fontSize: Theme.Typography.fontSize.base,
    color: Theme.Colors.light.textSecondary,
  },
});
