import { Colors, ThemeMode, getThemedColors } from './colors';
import { Typography } from './typography';
import { Spacing } from './spacing';

export const Theme = {
  Colors,
  Typography,
  Spacing,
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    full: 9999,
  },
};

export { getThemedColors };
export type { ThemeMode };

export default Theme;
