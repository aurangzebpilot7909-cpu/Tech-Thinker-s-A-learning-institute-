import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '@theme/index';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onBack,
  rightAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {onBack && (
          <Button icon="arrow-left" onPress={onBack} />
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.right}>
        {rightAction}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.Spacing.lg,
    paddingVertical: Theme.Spacing.md,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: Theme.Colors.light.border,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
});
