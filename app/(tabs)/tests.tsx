import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '@theme/index';

export default function TestsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tests</Text>
      <Text style={styles.subtitle}>Take tests to assess your knowledge</Text>
      <Button mode="contained" style={styles.button}>
        Browse Tests
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: Theme.Spacing.lg,
  },
  title: {
    fontSize: Theme.Typography.fontSize.xl,
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.sm,
  },
  subtitle: {
    fontSize: Theme.Typography.fontSize.base,
    color: Theme.Colors.light.textSecondary,
    marginBottom: Theme.Spacing.lg,
  },
  button: {
    paddingVertical: Theme.Spacing.md,
  },
});
