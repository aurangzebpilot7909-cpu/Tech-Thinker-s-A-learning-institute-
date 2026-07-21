import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Theme } from '@theme/index';

interface SkeletonProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: any;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 4,
  style,
}) => {
  return (
    <View
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

export const CourseCardSkeleton: React.FC = () => (
  <View style={styles.cardContainer}>
    <Skeleton height={150} borderRadius={Theme.borderRadius.lg} />
    <View style={styles.cardContent}>
      <Skeleton width="80%" height={20} style={{ marginBottom: Theme.Spacing.sm }} />
      <Skeleton width="100%" height={16} style={{ marginBottom: Theme.Spacing.md }} />
      <View style={{ flexDirection: 'row', gap: Theme.Spacing.md }}>
        <Skeleton width="30%" height={16} />
        <Skeleton width="40%" height={16} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e0e0e0',
  },
  cardContainer: {
    marginBottom: Theme.Spacing.lg,
  },
  cardContent: {
    padding: Theme.Spacing.lg,
  },
});
