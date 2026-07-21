import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Theme } from '@theme/index';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'inbox-outline',
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={64} color={Theme.Colors.light.textTertiary} />
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
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
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    marginTop: Theme.Spacing.lg,
    textAlign: 'center',
  },
  description: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
    marginTop: Theme.Spacing.md,
    textAlign: 'center',
  },
});
