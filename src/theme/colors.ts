export const Colors = {
  // Primary Colors
  primary: '#1e3a8a', // Deep Blue
  primaryLight: '#3b82f6',
  primaryDark: '#1e40af',

  // Secondary Colors
  secondary: '#7c3aed', // Purple
  secondaryLight: '#a78bfa',
  secondaryDark: '#6d28d9',

  // Accent Colors
  accent: '#06b6d4', // Cyan
  accentLight: '#22d3ee',
  accentDark: '#0891b2',

  // Neutral Colors - Light Mode
  light: {
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceVariant: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#64748b',
    textTertiary: '#94a3b8',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    divider: '#e2e8f0',
  },

  // Neutral Colors - Dark Mode
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    surfaceVariant: '#334155',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    border: '#334155',
    borderLight: '#475569',
    divider: '#334155',
  },

  // Semantic Colors
  success: '#10b981', // Green
  warning: '#f59e0b', // Amber
  error: '#ef4444', // Red
  info: '#3b82f6', // Blue

  // Gradient Colors
  gradients: {
    primary: ['#1e3a8a', '#3b82f6'],
    secondary: ['#7c3aed', '#a78bfa'],
    accent: ['#06b6d4', '#22d3ee'],
    premium: ['#1e3a8a', '#7c3aed'],
  },

  // Shadow
  shadow: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0px 12px 24px rgba(0, 0, 0, 0.2)',
  },

  // Transparency
  transparent: 'rgba(0, 0, 0, 0)',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export type ThemeMode = 'light' | 'dark';

export const getThemedColors = (theme: ThemeMode) => ({
  background: theme === 'light' ? Colors.light.background : Colors.dark.background,
  surface: theme === 'light' ? Colors.light.surface : Colors.dark.surface,
  text: theme === 'light' ? Colors.light.text : Colors.dark.text,
  textSecondary: theme === 'light' ? Colors.light.textSecondary : Colors.dark.textSecondary,
  border: theme === 'light' ? Colors.light.border : Colors.dark.border,
});
