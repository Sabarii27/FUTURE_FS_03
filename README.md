# Starbucks-Style Next.js App

A modern Starbucks-style e-commerce web app built with Next.js 13, React, TypeScript, Tailwind CSS, and Firebase (Auth + Firestore). Features robust, account-specific cart persistence and a beautiful, mobile-friendly UI.

## Features
- Next.js 13 App Router
- TypeScript & Tailwind CSS
- Firebase Auth (account login/signup)
- Firestore for per-user cart storage
- Cart persists for each account (not shared between users)
- Add to cart from menu grid or product page
- Responsive, modern design

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Sabarii27/FUTURE_FS_03.git
cd FUTURE_FS_03/project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Firebase
- Create a Firebase project at https://console.firebase.google.com/
- Enable Authentication (Email/Password)
- Enable Firestore Database
- Get your Firebase config values from Project Settings > General

### 4. Configure environment variables
Create a `.env.local` file in the `project` directory with your Firebase config:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Do not commit `.env.local` to public repos!**

### 5. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 6. Deploy to Vercel
- Push your code to GitHub.
- Import your repo at https://vercel.com/
- In Vercel dashboard, add the same environment variables as above.
- Deploy!

## Folder Structure
```
project/
  app/           # Next.js app directory (pages, layouts)
  components/    # React components (CartContext, UI, etc.)
  hooks/         # Custom React hooks
  lib/           # Utility and Firebase setup
  public/        # Static assets (images, etc.)
  .env.local     # Your Firebase config (not committed)
  ...
```

## License
This project is for educational/demo purposes only. Not affiliated with Starbucks.
