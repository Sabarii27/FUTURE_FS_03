"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { firebaseReady, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export type CartItem = {
  slug: string;
  title: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  cartLoaded: boolean;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  removeFromCart: (slug: string) => void;
  increaseQuantity: (slug: string) => void;
  decreaseQuantity: (slug: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const userInitialized = useRef(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    if (!firebaseReady) {
      setUser(null);
      userInitialized.current = true;
      return;
    }
    let unsub: any;
    try {
      const auth = getAuth();
      unsub = onAuthStateChanged(auth, (u) => {
        setUser(u);
        userInitialized.current = true;
      });
      setTimeout(() => {
        if (!userInitialized.current) {
          setUser(null);
          userInitialized.current = true;
        }
      }, 2000);
    } catch {
      setUser(null);
      userInitialized.current = true;
    }
    return () => unsub && unsub();
  }, []);

  // Load cart from Firestore/localStorage when user changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (user === undefined && !userInitialized.current) return;

    // Clear cart from state and localStorage on logout or account switch
    if (!user) {
      setItems([]);
      localStorage.removeItem("cart-guest");
      setCartLoaded(true);
      return;
    }

    const key = user ? `cart-${user.uid}` : undefined;
    async function loadCart() {
      let loaded = false;
      if (user) {
        // Try to load from Firestore
        const userCartRef = doc(db, "carts", user.uid);
        const snap = await getDoc(userCartRef);
        if (snap.exists() && Array.isArray(snap.data().items)) {
          setItems(snap.data().items);
          loaded = true;
        }
      }
      if (!loaded && key) {
        // Fallback to localStorage (per user)
        const stored = localStorage.getItem(key);
        if (stored !== null && stored !== "[]") {
          setItems(JSON.parse(stored));
        } else {
          setItems([]);
        }
      }
      setCartLoaded(true);
    }

    loadCart();
    // eslint-disable-next-line
  }, [user]);

  // Save cart to Firestore/localStorage when items or user changes, but only if cartLoaded
  useEffect(() => {
    if (typeof window === "undefined" || !cartLoaded) return;
    const key = user ? `cart-${user.uid}` : "cart-guest";
    localStorage.setItem(key, JSON.stringify(items));
    // Save to Firestore for logged-in users
    if (user) {
      const userCartRef = doc(db, "carts", user.uid);
      setDoc(userCartRef, { items }, { merge: true });
    }
  }, [items, user, cartLoaded]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const clearCart = () => setItems([]);

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const increaseQuantity = (slug: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (slug: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.slug === slug && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ items, cartLoaded, addToCart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}