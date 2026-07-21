import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme } from '@theme/index';

interface TestCardProps {
  title: string;
  questions: number;
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  onPress?: () => void;
}

const difficultyColors = {
  easy: '#10b981',
  medium: '#f59e0b',
  hard: '#ef4444',
};

export const TestCard: React.FC<TestCardProps> = ({
  title,
  questions,
  duration,
  difficulty,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View
            style={[
              styles.difficultyBadge,
              { backgroundColor: difficultyColors[difficulty] },
            ]}
          >
            <Text style={styles.difficultyText}>{difficulty}</Text>
          </View>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaText}>📝 {questions} questions</Text>
          <Text style={styles.metaText}>⏱️ {duration} mins</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.Spacing.lg,
    marginBottom: Theme.Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: Theme.Colors.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    gap: Theme.Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: Theme.Spacing.md,
    paddingVertical: Theme.Spacing.sm,
    borderRadius: Theme.borderRadius.md,
  },
  difficultyText: {
    color: '#fff',
    fontSize: Theme.Typography.fontSize.xs,
    fontWeight: 'bold',
  },
  meta: {
    flexDirection: 'row',
    gap: Theme.Spacing.lg,
  },
  metaText: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
});
