import { ERROR_MESSAGES } from '@constants/index';

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return ERROR_MESSAGES.INVALID_EMAIL;
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Password must contain uppercase letter';
  if (!/[a-z]/.test(password)) return 'Password must contain lowercase letter';
  if (!/[0-9]/.test(password)) return 'Password must contain a number';
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters';
  if (name.length > 50) return 'Name must not exceed 50 characters';
  return null;
};

export const validatePhoneNumber = (phone: string): string | null => {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phone) return null; // Optional field
  if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
    return 'Please enter a valid 10-digit phone number';
  }
  return null;
};
