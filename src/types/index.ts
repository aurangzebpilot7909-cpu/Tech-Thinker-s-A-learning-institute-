// User Types
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  class: string;
  course: string;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication Types
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: CourseCategory;
  instructor: string;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: number;
  units: Unit[];
  progress?: number;
  createdAt: Date;
}

export enum CourseCategory {
  CLASS_11_COMMERCE = 'class-11-commerce',
  CLASS_12_COMMERCE = 'class-12-commerce',
  B_COM = 'b-com',
  CAT = 'cat-preparation',
  CUET = 'cuet-preparation',
  MATHEMATICS = 'mathematics',
  REASONING = 'reasoning',
  ENGLISH = 'english',
  ECONOMICS = 'economics',
  BUSINESS_STUDIES = 'business-studies',
  ACCOUNTS = 'accounts',
  STATISTICS = 'statistics',
}

// Unit Types
export interface Unit {
  id: string;
  courseId: string;
  title: string;
  description: string;
  chapters: Chapter[];
  progress?: number;
}

export interface Chapter {
  id: string;
  unitId: string;
  title: string;
  description: string;
  lessons: Lesson[];
  progress?: number;
}

export interface Lesson {
  id: string;
  chapterId: string;
  title: string;
  type: LessonType;
  duration: number;
  completed: boolean;
  lastWatchedAt?: Date;
}

export enum LessonType {
  VIDEO = 'video',
  ARTICLE = 'article',
  QUIZ = 'quiz',
  ASSIGNMENT = 'assignment',
}

// Video Types
export interface Video {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: number;
  quality: VideoQuality[];
  subtitles?: Subtitle[];
  uploadedAt: Date;
}

export enum VideoQuality {
  LOW = '360p',
  MEDIUM = '720p',
  HIGH = '1080p',
}

export interface Subtitle {
  language: string;
  url: string;
}

// Notes Types
export interface Note {
  id: string;
  courseId: string;
  unitId?: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: number;
  uploadedAt: Date;
  downloads: number;
  bookmarked?: boolean;
}

// Test Types
export interface Test {
  id: string;
  courseId: string;
  title: string;
  description: string;
  totalQuestions: number;
  duration: number;
  passingScore: number;
  negativeMarking: number;
  questions: Question[];
  createdAt: Date;
}

export interface Question {
  id: string;
  testId: string;
  text: string;
  type: QuestionType;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  difficulty: Difficulty;
}

export enum QuestionType {
  SINGLE_CHOICE = 'single-choice',
  MULTIPLE_CHOICE = 'multiple-choice',
  TRUE_FALSE = 'true-false',
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

// Test Result Types
export interface TestResult {
  id: string;
  userId: string;
  testId: string;
  score: number;
  totalMarks: number;
  percentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  timeTaken: number;
  answers: UserAnswer[];
  completedAt: Date;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: number | number[];
  isCorrect: boolean;
  timeTaken: number;
}

// Performance Types
export interface Performance {
  userId: string;
  totalLessonsCompleted: number;
  totalTestsTaken: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  totalStudyMinutes: number;
  rank: number;
  badges: Achievement[];
  weeklyProgress: DailyProgress[];
}

export interface DailyProgress {
  date: Date;
  lessonsCompleted: number;
  testsTaken: number;
  studyMinutes: number;
  score?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: NotificationType;
  data?: Record<string, any>;
  read: boolean;
  createdAt: Date;
}

export enum NotificationType {
  DAILY_MOTIVATION = 'daily-motivation',
  TEST_REMINDER = 'test-reminder',
  ASSIGNMENT_REMINDER = 'assignment-reminder',
  CLASS_REMINDER = 'class-reminder',
  NEW_NOTES = 'new-notes',
  NEW_VIDEO = 'new-video',
  ACHIEVEMENT = 'achievement',
}

// Error Types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
}
