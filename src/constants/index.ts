// API Endpoints
export const API_ENDPOINTS = {
  BASE_URL: process.env.API_BASE_URL || 'https://api.techthinkers.com',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    REFRESH_TOKEN: '/auth/refresh-token',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: '/courses/:id',
    UNITS: '/courses/:courseId/units',
    CHAPTERS: '/courses/:courseId/units/:unitId/chapters',
  },
  VIDEOS: {
    LIST: '/videos',
    DETAIL: '/videos/:id',
  },
  NOTES: {
    LIST: '/notes',
    DETAIL: '/notes/:id',
    DOWNLOAD: '/notes/:id/download',
  },
  TESTS: {
    LIST: '/tests',
    DETAIL: '/tests/:id',
    SUBMIT: '/tests/:id/submit',
    RESULTS: '/tests/:testId/results',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    PERFORMANCE: '/users/performance',
  },
};

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  ONBOARDING_COMPLETED: 'onboarding_completed',
};

// Cache Duration (in milliseconds)
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection failed. Please try again.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  USER_NOT_FOUND: 'User not found.',
  EMAIL_ALREADY_EXISTS: 'Email already registered.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  WEAK_PASSWORD: 'Password must be at least 8 characters.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again later.',
  UNAUTHORIZED: 'Unauthorized. Please login again.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  NOT_FOUND: 'Resource not found.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully.',
  SIGNUP_SUCCESS: 'Account created successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_RESET: 'Password reset successful.',
};

// Routes
export const ROUTES = {
  // Auth
  WELCOME: '/welcome',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',

  // Main
  HOME: '/(tabs)/home',
  COURSES: '/(tabs)/courses',
  TESTS: '/(tabs)/tests',
  DOWNLOADS: '/(tabs)/downloads',
  PROFILE: '/(tabs)/profile',
};

// Course Categories
export const COURSE_CATEGORIES = [
  { id: 'class-11-commerce', label: 'Class 11 Commerce' },
  { id: 'class-12-commerce', label: 'Class 12 Commerce' },
  { id: 'b-com', label: 'B.Com' },
  { id: 'cat-preparation', label: 'CAT Preparation' },
  { id: 'cuet-preparation', label: 'CUET Preparation' },
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'reasoning', label: 'Reasoning' },
  { id: 'english', label: 'English' },
  { id: 'economics', label: 'Economics' },
  { id: 'business-studies', label: 'Business Studies' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'statistics', label: 'Statistics' },
];
