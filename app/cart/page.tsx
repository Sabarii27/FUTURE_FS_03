"use client";
"use client";

import Navigation from "@/components/Navigation";
import { useCart } from "@/components/CartContext";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";


export default function CartPage() {
  const { items, cartLoaded, clearCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  if (typeof window !== "undefined") {
    // Debug: print cartLoaded and cart items to console
    console.log("[CartPage] cartLoaded:", cartLoaded, "items:", items);
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  if (!cartLoaded) {
    return (
      <div className="pt-24 max-w-3xl mx-auto px-4 text-center text-lg text-coffee-dark">Loading your cart...</div>
    );
  }
  const hasItems = items.length > 0;
  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price.replace(/[$₹]/g, "")) * item.quantity), 0);

  return (
    <>
      <Navigation />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-coffee-dark">Your Cart</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-coffee-dark text-lg">
          {hasItems ? (
            <>
              <ul className="mb-8 space-y-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2 bg-cream/60 rounded-lg shadow p-2">
                    <div className="w-10 h-10 rounded-full bg-coffee-medium flex items-center justify-center overflow-hidden shadow">
                      <img src={item.image || "/menu/hot-coffee.webp"} alt={item.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base mb-0.5">{item.title}</div>
                      <div className="text-coffee-dark/70 text-sm flex items-center gap-1">
                        <button
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-300 text-red-600 text-base font-bold transition"
                          title="Decrease quantity"
                          onClick={() => decreaseQuantity(item.slug)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="font-bold px-2">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-300 text-green-700 text-base font-bold transition"
                          title="Increase quantity"
                          onClick={() => increaseQuantity(item.slug)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-base font-bold text-starbucks-green">{item.price}</div>
                    <button
                      className="ml-2 w-7 h-7 flex items-center justify-center rounded-full bg-red-200 hover:bg-red-400 text-red-700 text-lg font-bold transition"
                      title="Remove from cart"
                      onClick={() => removeFromCart(item.slug)}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center border-t pt-6 mt-6">
                <span className="text-2xl font-bold">Subtotal</span>
                <span className="text-2xl font-bold text-starbucks-green">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-end mt-8 gap-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <a
                  href="/checkout"
                  className="bg-starbucks-green hover:bg-green-700 text-white px-8 py-2 rounded-full font-semibold shadow-lg text-lg text-center"
                >
                  Checkout
                </a>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <ShoppingCart className="w-16 h-16 text-coffee-medium mb-6" />
              <p className="text-2xl font-semibold mb-2">Your cart is currently empty.</p>
              <p className="text-coffee-dark/70">Add some delicious items to your cart!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
