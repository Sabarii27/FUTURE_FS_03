"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthSafe, firebaseReady } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useMemo(() => {
    if (!firebaseReady) return undefined;
    try {
      return getAuthSafe();
    } catch {
      return undefined;
    }
  }, []);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (!auth) {
        setError("Signup is temporarily unavailable. Please configure Firebase in .env.local and reload.");
        return;
      }
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (cred.user) {
        await updateProfile(cred.user, { displayName: name }).catch(() => {});
      }
      router.push("/login");
    } catch (err: any) {
      const code = err?.code || err?.message || "";
      if (code.includes("email-already-in-use")) {
        setError("Email already in use. Try logging in.");
      } else if (code.includes("weak-password")) {
        setError("Password should be at least 6 characters.");
      } else if (code.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-starbucks-green via-emerald-200 to-cream relative overflow-hidden">
        <div className="absolute top-6 left-6 z-20">
          <button
            className="w-14 h-14 bg-gradient-to-br from-starbucks-green to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:ring-2 hover:ring-emerald-300 transition-all"
            onClick={() => router.push("/")}
            title="Go to Home"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 1-12 0"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="8" y1="2" x2="8" y2="8"/><line x1="16" y1="2" x2="16" y2="8"/></svg>
          </button>
        </div>
        <div className="bg-white/90 rounded-3xl shadow-2xl p-10 w-full max-w-md relative z-10 border border-emerald-100">
          <h1 className="text-2xl font-bold text-coffee-dark mb-2">Signup unavailable</h1>
          <p className="text-coffee-dark/70 text-sm mb-4">
            Firebase isnt configured yet. Copy <code>.env.example</code> to <code>.env.local</code> and fill in your
            Firebase Web App credentials, then restart the dev server.
          </p>
          <ul className="text-sm text-coffee-dark/80 list-disc pl-5 space-y-1">
            <li>NEXT_PUBLIC_FIREBASE_API_KEY</li>
            <li>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
            <li>NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
            <li>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</li>
            <li>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</li>
            <li>NEXT_PUBLIC_FIREBASE_APP_ID</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-starbucks-green via-emerald-200 to-cream relative overflow-hidden">
      {/* Logo at the top left, clickable to go home */}
      <div className="absolute top-6 left-6 z-20">
        <button
          className="w-14 h-14 bg-gradient-to-br from-starbucks-green to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:ring-2 hover:ring-emerald-300 transition-all"
          onClick={() => router.push("/")}
          title="Go to Home"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 1-12 0"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="8" y1="2" x2="8" y2="8"/><line x1="16" y1="2" x2="16" y2="8"/></svg>
        </button>
      </div>
      {/* Decorative Starbucks logo background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <svg width="400" height="400" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#036635" />
          <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial">SB</text>
        </svg>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 w-full max-w-md relative z-10 border border-emerald-100">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-starbucks-green to-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 1-12 0"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="8" y1="2" x2="8" y2="8"/><line x1="16" y1="2" x2="16" y2="8"/></svg>
          </div>
          <h1 className="text-3xl font-bold text-coffee-dark mb-1">Create Account</h1>
          <p className="text-coffee-dark/70 text-sm">Sign up for a Starbucks account</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/60 placeholder:text-emerald-700"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/60 placeholder:text-emerald-700"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/60 placeholder:text-emerald-700"
            required
          />
          {error && <div className="text-red-600 text-sm text-center font-medium">{error}</div>}
          <button
            type="submit"
            className="w-full bg-starbucks-green text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md text-lg tracking-wide"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-coffee-dark/80 text-sm">
          Already have an account?{' '}
          <button
            className="text-starbucks-green font-semibold hover:underline"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
