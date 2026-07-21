import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'expo-router';
import { Theme } from '@theme/index';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.displayName?.charAt(0).toUpperCase() || '👤'}
          </Text>
        </View>
        <Text style={styles.name}>{user?.displayName}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.sections}>
        <Button icon="cog" mode="text">
          Settings
        </Button>
        <Button icon="heart" mode="text">
          Favorites
        </Button>
        <Button icon="download" mode="text">
          Downloads
        </Button>
        <Button icon="help-circle" mode="text">
          Help & Support
        </Button>
      </View>

      <View style={styles.footer}>
        <Button mode="contained" onPress={handleLogout} buttonColor="#ef4444">
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Theme.Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: Theme.Spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Theme.Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.Spacing.md,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: Theme.Typography.fontSize.xl,
    fontWeight: 'bold',
  },
  email: {
    fontSize: Theme.Typography.fontSize.sm,
    color: Theme.Colors.light.textSecondary,
  },
  sections: {
    flex: 1,
    marginTop: Theme.Spacing.xl,
  },
  footer: {
    marginTop: Theme.Spacing.xl,
  },
});
