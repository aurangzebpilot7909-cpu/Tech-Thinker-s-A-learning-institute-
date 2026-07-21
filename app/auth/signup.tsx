import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';
import { validateEmail, validatePassword, validateName } from '@utils/validation';
import { Theme } from '@theme/index';

export default function SignupScreen() {
  const router = useRouter();
  const { signUp, isLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    let confirmError = '';

    if (password !== confirmPassword) {
      confirmError = 'Passwords do not match';
    }

    if (nameError || emailError || passwordError || confirmError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmError,
      });
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, name);
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
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start your learning journey</Text>

        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={styles.input}
          editable={!loading}
        />
        {errors.name && <HelperText type="error">{errors.name}</HelperText>}

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

        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          editable={!loading}
        />
        {errors.confirmPassword && (
          <HelperText type="error">{errors.confirmPassword}</HelperText>
        )}

        <Button
          mode="contained"
          onPress={handleSignup}
          loading={loading}
          disabled={loading || isLoading}
          style={styles.button}
        >
          Create Account
        </Button>

        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <Text
            style={[styles.linkText, { color: Theme.Colors.primary }]}
            onPress={() => router.push('/auth/login')}
          >
            Sign In
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
    paddingTop: 40,
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
  footer: {
    marginTop: Theme.Spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    fontWeight: '600',
  },
});
