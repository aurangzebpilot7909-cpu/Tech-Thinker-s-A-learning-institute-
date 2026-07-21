export const Typography = {
  // Font Families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    semibold: 'System',
  },

  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },

  // Font Weights
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
  },

  // Text Styles
  styles: {
    // Display
    display1: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 1.2,
    },
    display2: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 1.3,
    },

    // Heading
    heading1: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 1.3,
    },
    heading2: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },
    heading3: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },

    // Body
    body1: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },
    body3: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },

    // Caption
    caption1: {
      fontSize: 12,
      fontWeight: '500' as const,
      lineHeight: 1.4,
    },
    caption2: {
      fontSize: 11,
      fontWeight: '400' as const,
      lineHeight: 1.4,
    },

    // Button
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 1.5,
    },
  },
};
