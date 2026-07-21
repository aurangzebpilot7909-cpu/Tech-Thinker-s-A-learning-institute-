import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button, Chip } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';
import { useQuery } from 'react-query';
import * as performanceService from '@supabase/performance';
import { Theme } from '@theme/index';

export default function HomeScreen() {
  const { user } = useAuth();
  const { data: performance } = useQuery(['performance', user?.id], () =>
    user?.id ? performanceService.getUserPerformance(user.id) : null,
  );

  const stats = [
    { label: 'Lessons', value: performance?.total_lessons_completed || 0, icon: '📚' },
    { label: 'Tests', value: performance?.total_tests_taken || 0, icon: '📝' },
    { label: 'Streak', value: performance?.current_streak || 0, icon: '🔥' },
    { label: 'Avg Score', value: performance?.average_score?.toFixed(0) || '0', icon: '⭐' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back, {user?.displayName}! 👋</Text>
        <Text style={styles.subtitle}>Continue your learning journey</Text>
      </View>

      <View style={styles.stats}>
        {stats.map((stat, index) => (
          <Card key={index} style={styles.statCard}>
            <Card.Content>
              <Text style={styles.statIcon}>{stat.icon}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <Button mode="contained" style={styles.actionButton}>
            📚 Continue Learning
          </Button>
          <Button mode="outlined" style={styles.actionButton}>
            📝 Take a Test
          </Button>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <Card>
          <Card.Content>
            <View style={styles.progressRow}>
              <Text>Today's Learning</Text>
              <Chip label={`${performance?.total_study_minutes || 0} min`} />
            </View>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${Math.min((performance?.total_study_minutes || 0) / 60) * 100}%` }]}
              />
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: Theme.Spacing.lg,
    paddingTop: Theme.Spacing.lg,
    paddingBottom: Theme.Spacing.md,
  },
  greeting: {
    fontSize: Theme.Typography.fontSize.xl,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Theme.Spacing.lg,
    gap: Theme.Spacing.md,
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 32,
  },
  statLabel: {
    fontSize: Theme.Typography.fontSize.sm,
    marginTop: Theme.Spacing.sm,
  },
  statValue: {
    fontSize: Theme.Typography.fontSize.xl,
    fontWeight: 'bold',
  },
  section: {
    marginTop: Theme.Spacing.xl,
    paddingHorizontal: Theme.Spacing.lg,
  },
  sectionTitle: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.md,
  },
  actions: {
    gap: Theme.Spacing.md,
  },
  actionButton: {
    paddingVertical: Theme.Spacing.md,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.Spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Theme.Colors.primary,
  },
});
