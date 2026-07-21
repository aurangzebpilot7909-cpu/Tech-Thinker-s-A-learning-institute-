import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';
import { Theme } from '@theme/index';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: Theme.Colors.primary }]}>Tech Thinker's</Text>
          <Text style={[styles.subtitle, { color: Theme.Colors.textSecondary }]}>
            Learn Today. Lead Tomorrow.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.placeholder}>
            <Text style={{ fontSize: 100 }}>📚</Text>
          </View>
        </View>

        <View style={styles.features}>
          <Feature icon="🎓" title="Expert Courses" />
          <Feature icon="📝" title="Practice Tests" />
          <Feature icon="📊" title="Performance Track" />
          <Feature icon="🏆" title="Achievements" />
        </View>

        <View style={styles.buttons}>
          <Button
            mode="contained"
            onPress={() => router.push('/auth/signup')}
            style={styles.button}
          >
            Get Started
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push('/auth/login')}
            style={styles.button}
          >
            Sign In
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

function Feature({ icon, title }: { icon: string; title: string }) {
  return (
    <View style={styles.feature}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: Theme.Spacing.lg,
    paddingTop: 60,
  },
  header: {
    marginBottom: Theme.Spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: Theme.Typography.fontSize['3xl'],
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.sm,
  },
  subtitle: {
    fontSize: Theme.Typography.fontSize.base,
  },
  imageContainer: {
    marginBottom: Theme.Spacing.xl,
    alignItems: 'center',
  },
  placeholder: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: Theme.borderRadius.xl,
  },
  features: {
    marginBottom: Theme.Spacing.xl,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.Spacing.lg,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: Theme.Spacing.lg,
  },
  featureTitle: {
    fontSize: Theme.Typography.fontSize.lg,
    fontWeight: '500',
  },
  buttons: {
    marginTop: Theme.Spacing.xl,
    gap: Theme.Spacing.lg,
  },
  button: {
    paddingVertical: Theme.Spacing.md,
  },
});
