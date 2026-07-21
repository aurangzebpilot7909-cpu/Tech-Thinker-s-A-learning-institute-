import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';
import { validateEmail, validatePassword } from '@utils/validation';
import { Theme } from '@theme/index';

export default function LoginScreen() {
  const router = useRouter();
  const { signIn, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError || undefined,
        password: passwordError || undefined,
      });
      return;
    }

    setLoading(true);
    try {
      await signIn(email, password);
      router.replace('/(tabs)/home');
    } catch (error: any) {
      setErrors({ email: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue learning</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          mode="outlined"
          style={styles.input}
          editable={!loading}
        />
        {errors.email && <HelperText type="error">{errors.email}</HelperText>}

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          editable={!loading}
        />
        {errors.password && <HelperText type="error">{errors.password}</HelperText>}

        <Button
          mode="contained"
          onPress={handleLogin}
          loading={loading}
          disabled={loading || isLoading}
          style={styles.button}
        >
          Sign In
        </Button>

        <Text style={styles.link} onPress={() => router.push('/auth/forgot-password')}>
          Forgot Password?
        </Text>

        <View style={styles.footer}>
          <Text>Don't have an account? </Text>
          <Text
            style={[styles.linkText, { color: Theme.Colors.primary }]}
            onPress={() => router.push('/auth/signup')}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
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
  title: {
    fontSize: Theme.Typography.fontSize['2xl'],
    fontWeight: 'bold',
    marginBottom: Theme.Spacing.sm,
  },
  subtitle: {
    fontSize: Theme.Typography.fontSize.base,
    color: Theme.Colors.light.textSecondary,
    marginBottom: Theme.Spacing.xl,
  },
  input: {
    marginBottom: Theme.Spacing.lg,
  },
  button: {
    marginTop: Theme.Spacing.lg,
    paddingVertical: Theme.Spacing.md,
  },
  link: {
    marginTop: Theme.Spacing.lg,
    textAlign: 'center',
    color: Theme.Colors.primary,
    fontWeight: '500',
  },
  footer: {
    marginTop: Theme.Spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    fontWeight: '600',
  },
});
