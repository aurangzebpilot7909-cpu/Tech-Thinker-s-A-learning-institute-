import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '@theme/index';

interface ErrorStateProps {
  title: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  description,
  onRetry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>❌</Text>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      {onRetry && (
        <Button mode="contained" onPress={onRetry} style={styles.button}>
          Try Again
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.Spacing.lg,
    minHeight: 200,
  },
  icon: {
    fontSize: 64,
    marginBottom: Theme.Spacing.lg,
  },
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
    marginTop: Theme.Spacing.md,
    textAlign: 'center',
  },
  button: {
    marginTop: Theme.Spacing.lg,
  },
});
