# 🚀 Supabase Setup Guide for Tech Thinker's

Complete step-by-step guide to set up Supabase for the app.

---

## 📝 Table of Contents
1. [Create Supabase Project](#1-create-supabase-project)
2. [Setup Authentication](#2-setup-authentication)
3. [Create Database Tables](#3-create-database-tables)
4. [Get Credentials](#4-get-credentials)
5. [Add to .env file](#5-add-to-env-file)

---

## 1. Create Supabase Project

### Step 1.1: Go to Supabase
- Open: https://supabase.com
- Click **"Start your project"** (already linked with GitHub)
- Create a new project

### Step 1.2: Project Details
- **Project name**: `Tech Thinkers` (or any name)
- **Database password**: Create a strong password (save it!)
- **Region**: Select closest to your users (e.g., `us-east-1` or `asia-south1`)
- Click **"Create new project"**

### Step 1.3: Wait for Creation
- It will take 2-3 minutes
- You'll be redirected to project dashboard

✅ **Your Supabase project is created!**

---

## 2. Setup Authentication

### Step 2.1: Go to Authentication
- In left sidebar, click **"Authentication"**
- Click **"Providers"**

### Step 2.2: Enable Email
- Find **"Email"** provider
- Toggle **"Enable"** to ON
- Click **"Save"**

### Step 2.3: Enable Google (Optional)
- Find **"Google"** provider
- Click **"Edit"**
- Add your Google OAuth credentials (we can do this later)
- Toggle **"Enable"** to ON

✅ **Authentication is ready!**

---

## 3. Create Database Tables

### Step 3.1: Go to SQL Editor
- In left sidebar, click **"SQL Editor"**
- Click **"New query"**

### Step 3.2: Run SQL to Create Tables

Copy and paste this SQL code:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255),
  phone_number VARCHAR(20),
  class VARCHAR(50),
  course VARCHAR(100),
  photo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail TEXT,
  category VARCHAR(100),
  instructor VARCHAR(255),
  rating FLOAT DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  students_count INTEGER DEFAULT 0,
  duration INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tests table
CREATE TABLE tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  total_questions INTEGER,
  duration INTEGER,
  passing_score INTEGER,
  negative_marking FLOAT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Test Results table
CREATE TABLE test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  test_id UUID REFERENCES tests(id),
  score INTEGER,
  total_marks INTEGER,
  percentage FLOAT,
  correct_answers INTEGER,
  wrong_answers INTEGER,
  skipped_answers INTEGER,
  time_taken INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Notes table
CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_url TEXT,
  file_size INTEGER,
  downloads INTEGER DEFAULT 0,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Performance table
CREATE TABLE performance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES auth.users(id),
  total_lessons_completed INTEGER DEFAULT 0,
  total_tests_taken INTEGER DEFAULT 0,
  average_score FLOAT DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  total_study_minutes INTEGER DEFAULT 0,
  rank INTEGER,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_tests_course ON tests(course_id);
CREATE INDEX idx_test_results_user ON test_results(user_id);
CREATE INDEX idx_notes_course ON notes(course_id);
```

### Step 3.3: Execute SQL
- Click **"Run"** button
- You'll see: **"Success. No rows returned"**

✅ **Database tables are created!**

---

## 4. Get Credentials

### Step 4.1: Go to Project Settings
- Click **⚙️ (Settings icon)** at bottom-left
- Click **"Project settings"**

### Step 4.2: Go to API
- Click **"API"** in left sidebar
- You'll see your credentials:
  - **Project URL**: Your Supabase URL
  - **Anon/Public Key**: Your API key

✅ **Copy these values!**

---

## 5. Add to .env file

### Step 5.1: Open `.env` File
In your project root, open `.env` file

### Step 5.2: Fill in the Values

```env
# Supabase Configuration
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# App Configuration
API_BASE_URL=https://api.techthinkers.com
APP_VERSION=1.0.0
ENVIRONMENT=development
```

### Step 5.3: Save File
- Save the `.env` file

✅ **Supabase is configured!**

---

## 🧪 Test Supabase Connection

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the App
```bash
npm start
```

### Step 3: Test Sign Up
- Open the app on your phone/emulator
- Try to sign up with email
- Check Supabase **Authentication** tab to see your user

✅ **Connected!**

---

## ✅ Supabase Setup Checklist

- [ ] Created Supabase Project
- [ ] Enabled Email Authentication
- [ ] Created Database Tables (ran SQL)
- [ ] Got Supabase URL
- [ ] Got Supabase Anon Key
- [ ] Added credentials to `.env`
- [ ] Saved `.env` file
- [ ] Tested sign up

---

## 📚 Next Steps

1. ✅ Complete Supabase setup (you're here!)
2. Run the app locally
3. Test authentication (signup/login)
4. Test adding data to database
5. Deploy to production

---

## 📞 Need Help?

- Supabase docs: https://supabase.com/docs
- Supabase dashboard: https://app.supabase.com
- Check console for errors
- Verify all `.env` values

---

**You're all set! 🚀 Now run the app!**
