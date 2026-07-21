import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { validateEmail } from '@utils/validation';
import { Theme } from '@theme/index';
import * as authService from '@supabase/auth';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setLoading(true);
    try {
      await authService.sendPasswordReset(email);
      setSuccess(true);
      setTimeout(() => router.push('/auth/login'), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Button icon="arrow-left" onPress={() => router.back()} />

        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter your email to receive reset instructions</Text>

        {success ? (
          <View style={styles.successBox}>
            <Text style={styles.successText}>✓ Check your email for reset link!</Text>
          </View>
        ) : (
          <>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              mode="outlined"
              style={styles.input}
              editable={!loading}
            />
            {error && <HelperText type="error">{error}</HelperText>}

            <Button
              mode="contained"
              onPress={handleReset}
              loading={loading}
              disabled={loading}
              style={styles.button}
            >
              Send Reset Link
            </Button>
          </>
        )}
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
    paddingTop: 20,
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
  successBox: {
    backgroundColor: '#d4edda',
    padding: Theme.Spacing.lg,
    borderRadius: Theme.borderRadius.md,
    marginTop: Theme.Spacing.xl,
  },
  successText: {
    color: '#155724',
    fontSize: Theme.Typography.fontSize.base,
  },
});
