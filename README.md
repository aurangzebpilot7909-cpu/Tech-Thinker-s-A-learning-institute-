# Tech Thinker's - A Learning Institute

**Learn Today. Lead Tomorrow.**

A premium educational mobile application built with React Native, Expo, and Firebase. Designed for commerce and competitive exam preparation.

## 🎯 Features

### Authentication
- ✅ Google Sign In
- ✅ Email Login/Signup
- ✅ Secure password recovery
- ✅ Remember me functionality

### Course Management
- 📚 Class 11-12 Commerce
- 🎓 B.Com & Competitive Exams
- 📖 Multiple subjects (Economics, Accounts, Business Studies, etc.)
- 📊 Progress tracking

### Learning Resources
- 🎬 Video lectures with multiple qualities
- 📄 PDF notes library
- ✍️ MCQ tests with analytics
- 📝 Assignments

### Student Dashboard
- 📈 Performance analytics
- 🔥 Learning streaks
- 📊 Progress charts
- 🏆 Achievement badges

### Notifications
- 🔔 Daily motivation
- ⏰ Test reminders
- 📬 Assignment alerts
- 🆕 New content notifications

## 🛠 Tech Stack

- **Framework**: React Native with Expo 51
- **Language**: TypeScript
- **Navigation**: Expo Router
- **State Management**: Zustand + React Query
- **Backend**: Firebase (Auth, Firestore, Storage)
- **UI Components**: React Native Paper
- **Animations**: Reanimated 3, Lottie
- **HTTP Client**: Axios
- **Storage**: Expo Secure Store
- **Lists**: FlashList (Shopify)

## 📁 Project Structure

```
Tech-Thinker-s-A-learning-institute-/
├── app/                           # Expo Router navigation
│   ├── _layout.tsx               # Root layout
│   ├── (tabs)/                   # Tab navigation
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   ├── courses.tsx
│   │   ├── tests.tsx
│   │   ├── downloads.tsx
│   │   └── profile.tsx
│   └── auth/                     # Authentication flow
│       ├── _layout.tsx
│       ├── welcome.tsx
│       ├── login.tsx
│       ├── signup.tsx
│       └── forgot-password.tsx
├── src/
│   ├── components/               # Reusable UI components
│   ├── screens/                  # Screen components
│   ├── hooks/                    # Custom React hooks
│   ├── services/                 # API services
│   ├── firebase/                 # Firebase configuration
│   ├── constants/                # App constants
│   ├── utils/                    # Utility functions
│   ├── types/                    # TypeScript types
│   ├── animations/               # Animation configs
│   ├── providers/                # Context providers
│   ├── contexts/                 # React contexts
│   ├── navigation/               # Navigation config
│   ├── store/                    # Zustand stores
│   └── theme/                    # Theme & styling
├── assets/
│   ├── images/
│   ├── icons/
│   ├── animations/
│   └── fonts/
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
# Clone the repository
git clone https://github.com/aurangzebpilot7909-cpu/Tech-Thinker-s-A-learning-institute-.git

# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env

# Start development server
npm start
```

### Running on Devices

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 🔐 Environment Setup

Create `.env` file with Firebase credentials:

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#1e3a8a)
- **Secondary**: Purple (#7c3aed)
- **Accent**: Cyan (#06b6d4)
- **Background**: White (#ffffff)
- **Dark Mode**: Near Black (#0f172a)

### Typography
- **Font Family**: System fonts (SF Pro Display, Roboto)
- **Border Radius**: 16px base unit
- **Spacing**: 8px base unit

### Material Design 3
- Rounded corners
- Glassmorphism elements
- Smooth transitions
- Micro animations
- Beautiful shadows

## 📊 Code Quality

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm test
```

## 📱 Features Roadmap

- [ ] User authentication system
- [ ] Course listing and details
- [ ] Video player with streaming
- [ ] PDF notes library
- [ ] MCQ test system
- [ ] Performance analytics
- [ ] Push notifications
- [ ] Offline downloads
- [ ] Chat with doubt solver
- [ ] Certificates
- [ ] Leaderboard
- [ ] Study planner
- [ ] Referral system

## 🤝 Contributing

This is a production application. Please follow the code quality guidelines.

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open pull request

## 📄 License

Proprietary - Tech Thinker's Learning Institute

## 📞 Support

For support, contact: support@techthinkers.com

---

**Made with ❤️ for students worldwide**
