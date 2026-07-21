import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Theme } from '@theme/index';

interface CourseCardProps {
  title: string;
  thumbnail?: string;
  rating: number;
  students: number;
  onPress?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  thumbnail,
  rating,
  students,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.thumbnail}>
        <Text style={styles.placeholderIcon}>📚</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.rating}>⭐ {rating}</Text>
          <Text style={styles.students}>{students} students</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
    marginBottom: Theme.Spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    height: 150,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 48,
  },
  content: {
    padding: Theme.Spacing.lg,
  },
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: Theme.Typography.fontSize.sm,
  },
  students: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
});
