# 🔥 Firebase Setup Guide for Tech Thinker's

Complete step-by-step guide to set up Firebase for the app.

---

## 📝 Table of Contents
1. [Create Firebase Project](#1-create-firebase-project)
2. [Enable Authentication](#2-enable-authentication)
3. [Create Firestore Database](#3-create-firestore-database)
4. [Setup Storage](#4-setup-storage)
5. [Get Credentials](#5-get-credentials)
6. [Add to .env file](#6-add-to-env-file)

---

## 1. Create Firebase Project

### Step 1.1: Go to Firebase Console
- Open: https://console.firebase.google.com
- Click **"Add project"** button

### Step 1.2: Enter Project Details
- **Project name**: `Tech Thinkers` (or any name you want)
- Click **"Continue"**

### Step 1.3: Enable Google Analytics (Optional)
- You can skip this or enable it
- Click **"Create project"**

### Step 1.4: Wait for Project Creation
- It will take 2-3 minutes
- You'll see: **"Your new project is ready"**
- Click **"Continue"**

✅ **Your Firebase project is created!**

---

## 2. Enable Authentication

### Step 2.1: Go to Authentication
- In left sidebar, find **"Build"** section
- Click **"Authentication"**
- Click **"Get started"**

### Step 2.2: Enable Email/Password
- Click on **"Email/Password"** option
- Toggle **"Enable"** to turn it ON
- Click **"Save"**

### Step 2.3: Enable Google Sign-In
- Click **"Add new provider"**
- Select **"Google"**
- Toggle **"Enable"** to turn it ON
- For **"Project support email"**, select your email from dropdown
- Click **"Save"**

✅ **Authentication is ready!**

---

## 3. Create Firestore Database

### Step 3.1: Go to Firestore
- In left sidebar under **"Build"**, click **"Firestore Database"**
- Click **"Create database"**

### Step 3.2: Choose Location
- **Location**: Select closest to your users (e.g., `us-central1` or `asia-south1` for India)
- Click **"Next"**

### Step 3.3: Security Rules
- Select **"Start in test mode"** (for development)
  - ⚠️ **WARNING**: This is NOT secure for production!
  - For production, use proper security rules
- Click **"Create"**

### Step 3.4: Wait for Creation
- Firestore will be created in 1-2 minutes
- You'll see the Firestore dashboard

✅ **Firestore database is ready!**

---

## 4. Setup Storage

### Step 4.1: Go to Storage
- In left sidebar under **"Build"**, click **"Storage"**
- Click **"Get started"**

### Step 4.2: Choose Location
- **Location**: Select same as Firestore (e.g., `us-central1`)
- Click **"Next"**

### Step 4.3: Security Rules
- Select **"Start in test mode"** (for development)
- Click **"Done"**

### Step 4.4: Wait for Creation
- Storage will be created in 1-2 minutes
- You'll see the Storage bucket

✅ **Storage is ready!**

---

## 5. Get Credentials

### Step 5.1: Go to Project Settings
- Click **⚙️ (Settings icon)** at top-left
- Click **"Project settings"**

### Step 5.2: Find Web App
- Go to **"Your apps"** section
- Click on web app icon (or create if not present)
- If no app exists, click **"</>** (web icon)
  - **App nickname**: `tech-thinkers-web`
  - Click **"Register app"**

### Step 5.3: Copy Credentials
You'll see a code block like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "tech-thinkers-xxxx.firebaseapp.com",
  projectId: "tech-thinkers-xxxx",
  storageBucket: "tech-thinkers-xxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
  measurementId: "G-XXXXXXX"
};
```

✅ **Copy these values!**

---

## 6. Add to .env file

### Step 6.1: Open `.env` File
In your project root, open `.env` file

### Step 6.2: Fill in the Values
Replace with your Firebase credentials:

```env
# Firebase Configuration
FIREBASE_API_KEY=AIzaSy... (copy from firebaseConfig.apiKey)
FIREBASE_AUTH_DOMAIN=tech-thinkers-xxxx.firebaseapp.com (copy from firebaseConfig.authDomain)
FIREBASE_PROJECT_ID=tech-thinkers-xxxx (copy from firebaseConfig.projectId)
FIREBASE_STORAGE_BUCKET=tech-thinkers-xxxx.appspot.com (copy from firebaseConfig.storageBucket)
FIREBASE_MESSAGING_SENDER_ID=123456789 (copy from firebaseConfig.messagingSenderId)
FIREBASE_APP_ID=1:123456789:web:abc123def456 (copy from firebaseConfig.appId)
FIREBASE_MEASUREMENT_ID=G-XXXXXXX (copy from firebaseConfig.measurementId)

# Google Sign-In (We'll setup later if needed)
GOOGLE_IOS_CLIENT_ID=your_ios_client_id
GOOGLE_ANDROID_CLIENT_ID=your_android_client_id

# App Configuration
API_BASE_URL=https://api.techthinkers.com
APP_VERSION=1.0.0
ENVIRONMENT=development
```

### Step 6.3: Save File
- Save the `.env` file

✅ **Firebase is configured!**

---

## 🧪 Test Firebase Connection

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the App
```bash
npm start
```

### Step 3: Run on Android/iOS
```bash
npm run android
# or
npm run ios
```

---

## ✅ Firebase Setup Checklist

- [ ] Created Firebase Project
- [ ] Enabled Email/Password Authentication
- [ ] Enabled Google Sign-In
- [ ] Created Firestore Database (Test Mode)
- [ ] Created Storage Bucket
- [ ] Copied Firebase Credentials
- [ ] Added credentials to `.env` file
- [ ] Saved `.env` file

---

## 🆘 Troubleshooting

### Error: "Firebase API key is missing"
- Check if `.env` file has `FIREBASE_API_KEY`
- Restart the dev server: `npm start`

### Error: "Firestore not initialized"
- Make sure Firestore database is created in Firebase console
- Check if `FIREBASE_PROJECT_ID` is correct in `.env`

### Error: "Storage bucket not found"
- Make sure Storage is created in Firebase console
- Check if `FIREBASE_STORAGE_BUCKET` is correct in `.env`

### Google Sign-In not working
- We'll setup Google OAuth later
- For now, email/password authentication will work

---

## 📚 Next Steps After Setup

1. ✅ Complete Firebase setup (you're here!)
2. Run the app locally
3. Test authentication (signup/login)
4. Test adding data to Firestore
5. Deploy to production (later)

---

## 📞 Need Help?

If you get stuck:
1. Check Firebase documentation: https://firebase.google.com/docs
2. Check console error messages
3. Verify all `.env` values are correct
4. Restart dev server

---

**You're all set! 🚀 Move on to running the app.**
