"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthSafe, firebaseReady } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function LoginSignupButton() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!firebaseReady) return;
    let unsub: any;
    try {
      const auth = getAuthSafe();
      unsub = onAuthStateChanged(auth, (u) => {
       console.log('[AuthStateChanged]', u);
        setUser(u);
      });
    } catch (e) {
  setUser(null);
  // console.error('[AuthStateChanged] error', e);
    }
    return () => unsub && unsub();
  }, []);

  if (!firebaseReady) {
    return null;
  }

  // Dropdown close on outside click (checks container that wraps button + dropdown)
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [dropdownOpen]);

  if (user) {
    return (
      <div ref={containerRef} className="relative flex items-center space-x-2">
        <button
          ref={nameRef}
          type="button"
          className={
            `flex items-center gap-2 px-5 py-2 rounded-full bg-green-100/60 hover:bg-green-200 transition-all duration-200 shadow-sm border border-green-100
            max-w-[220px] cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-green-400`
          }
          title={user.displayName || user.email}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => setDropdownOpen((v) => !v)}
        >
          {/* User Icon */}
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-200">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" fill="#228B22"/>
              <ellipse cx="12" cy="17" rx="7" ry="4" fill="#228B22"/>
            </svg>
          </span>
          {/* Username */}
          <span className="font-bold text-green-800 text-lg truncate" style={{letterSpacing: '0.5px'}}>
            {user.displayName || user.email}
          </span>
          {/* Dropdown Arrow */}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="ml-1 text-green-700" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8l4 4 4-4" stroke="#228B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {dropdownOpen && (
          <div
            className="absolute top-full left-0 mt-2 bg-coffee-dark border border-gold/30 rounded-xl shadow-lg z-50 min-w-[140px] flex flex-col"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="text-left px-4 py-2 text-gold hover:bg-gold/10 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
              disabled={loggingOut}
              onClick={async (e) => {
                e.stopPropagation();
                setLoggingOut(true);
                const auth = getAuthSafe();
                try {
                  console.log('[Logout] Current user before signOut:', auth.currentUser);
                  await signOut(auth);
                  console.log('[Logout] signOut complete. Current user after signOut:', auth.currentUser);
                } catch (err) {
                  // console.error('[Logout] signOut error:', err);
                }
                setLoggingOut(false);
                setDropdownOpen(false);
              }}
            >
              {loggingOut && (
                <svg className="animate-spin h-4 w-4 mr-1 text-gold" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="#FFD700" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className="bg-starbucks-green hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => router.push("/login")}
    >
      Login/Signup
    </button>
  );
}
