import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Theme } from '@theme/index';

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  color = Theme.Colors.primary,
}) => {
  return (
    <View style={[styles.container, { borderTopColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.Spacing.lg,
    borderTopWidth: 3,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: Theme.Spacing.sm,
  },
  icon: {
    fontSize: 32,
    marginBottom: Theme.Spacing.sm,
  },
  label: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
    marginBottom: Theme.Spacing.sm,
  },
  value: {
    fontSize: Theme.Typography.fontSize.xl,
    fontWeight: 'bold',
  },
});
