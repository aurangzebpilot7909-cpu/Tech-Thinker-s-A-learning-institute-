import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Theme } from '@theme/index';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  height?: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  height = 8,
  color = Theme.Colors.primary,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.background, { height }]}>
        <View
          style={[styles.fill, { width: `${clampedProgress}%`, height, backgroundColor: color }]}
        />
      </View>
      <Text style={styles.percentage}>{Math.round(clampedProgress)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Theme.Spacing.md,
  },
  label: {
    fontSize: Theme.Typography.fontSize.sm,
    fontWeight: '600',
    marginBottom: Theme.Spacing.sm,
  },
  background: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 4,
  },
  percentage: {
    fontSize: Theme.Typography.fontSize.xs,
    color: Theme.Colors.light.textSecondary,
    marginTop: Theme.Spacing.sm,
    textAlign: 'right',
  },
});
