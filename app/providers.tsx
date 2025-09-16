"use client";
import { CartProvider } from "@/components/CartContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <ScrollToTopButton />
    </CartProvider>
  );
}
