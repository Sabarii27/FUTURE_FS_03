import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const env = {
  apiKey: (process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '').trim(),
  authDomain: (process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '').trim(),
  projectId: (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '').trim(),
  storageBucket: (process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '').trim(),
  messagingSenderId: (process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '').trim(),
  appId: (process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '').trim(),
};

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
};

// Determine if all required env vars are present
const required = [
  ['NEXT_PUBLIC_FIREBASE_API_KEY', env.apiKey],
  ['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', env.authDomain],
  ['NEXT_PUBLIC_FIREBASE_PROJECT_ID', env.projectId],
  ['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET', env.storageBucket],
  ['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID', env.messagingSenderId],
  ['NEXT_PUBLIC_FIREBASE_APP_ID', env.appId],
] as const;

const missing = required.filter(([, v]) => !v).map(([k]) => k);

export const firebaseReady: boolean = missing.length === 0;

let app: FirebaseApp | undefined;

function getFirebaseApp(): FirebaseApp {
  if (!firebaseReady) {
    const message = `Firebase config missing. Please add these to .env.local: ${missing.join(', ')}`;
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[Firebase] ' + message);
    }
    throw new Error(message);
  }
  if (!app) {
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  }
  return app;
}

// Safe accessors that only initialize Firebase when actually used.
export function getAuthSafe(): Auth {
  return getAuth(getFirebaseApp());
}

export function getDbSafe(): Firestore {
  return getFirestore(getFirebaseApp());
}

export const db = getFirestore(getFirebaseApp());
