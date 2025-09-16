"use client";
import Navigation from "@/components/Navigation";
import { useCart } from "@/components/CartContext";
import { useState, useEffect } from "react";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, cartLoaded, clearCart } = useCart();
  if (typeof window !== "undefined") {
    // Debug: print cartLoaded and cart items to console
    console.log("[CheckoutPage] cartLoaded:", cartLoaded, "items:", items);
  }
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price.replace(/[$₹]/g, "")) * item.quantity), 0);
  const imageMap: Record<string, string> = {
    "hot-coffee": "/menu/hot-coffee.jpg",
    "cold-coffee": "/menu/cold-coffee.jpg",
    "hot-tea": "/menu/hot-tea.jpg",
    "cold-tea": "/menu/cold-tea.jpg",
    "refreshers": "/menu/refreshers.jpg",
    "frappuccino": "/menu/frappuccino.jpg",
    "hot-chocolate": "/menu/hot-chocolate.jpg",
    "bottled-beverages": "/menu/bottled.jpg",
    "egg-pesto-mozzarella-sandwich": "/menu/egg-pesto.jpg",
    "bacon-gouda-egg-sandwich": "/menu/bacon-gouda.jpg",
    "double-smoked-bacon-cheddar-egg-sandwich": "/menu/double-bacon.jpg",
    "sausage-cheddar-egg-sandwich": "/menu/sausage-cheddar.jpg",
    "turkey-bacon-cheddar-egg-sandwich": "/menu/turkey-bacon.jpg",
    "impossible-breakfast-sandwich": "/menu/impossible.jpg",
    "avocado-spread": "/menu/avocado.jpg"
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  }

  if (!mounted) return null;
  if (!cartLoaded) {
    return (
      <div className="pt-24 max-w-3xl mx-auto px-4 text-center text-lg text-coffee-dark">Loading your cart...</div>
    );
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <div className="pt-24 max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-coffee-dark text-lg flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-starbucks-green mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-starbucks-green">Thank you for your order!</h1>
            <p className="mb-2 text-center">Your order has been placed and will be delivered soon.</p>
            <p className="text-coffee-dark/70 text-center">We appreciate your business. Enjoy your Starbucks experience!</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="pt-24 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-coffee-dark text-center">Checkout</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-coffee-dark text-lg grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center">
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">Name</label>
              <input
                className="w-full border border-coffee-medium rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/40"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="address">Address</label>
              <textarea
                className="w-full border border-coffee-medium rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/40"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">Phone</label>
              <input
                className="w-full border border-coffee-medium rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-starbucks-green bg-cream/40"
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-starbucks-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg mt-4"
            >
              Place Order
            </button>
          </form>
          {/* Order Summary */}
          <div className="bg-cream/40 rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-7 h-7 text-starbucks-green" />
                <span className="text-xl font-bold">Order Summary</span>
              </div>
              <ul className="divide-y divide-coffee-light mb-6">
                {items.length === 0 ? (
                  <li className="py-4 text-coffee-dark/60 text-center">No items in cart.</li>
                ) : (
                  items.map((item) => (
                    <li key={item.slug} className="flex items-center gap-3 py-3">
                      <div className="w-12 h-12 rounded-full bg-coffee-medium flex items-center justify-center overflow-hidden">
                        <img src={imageMap[item.slug] || "/menu/hot-coffee.jpg"} alt={item.title} className="object-cover w-full h-full" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-base">{item.title}</div>
                        <div className="text-coffee-dark/70 text-sm">Qty: <span className="font-bold">{item.quantity}</span></div>
                      </div>
                      <div className="text-base font-bold text-starbucks-green">{item.price}</div>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="flex justify-between items-center border-t pt-6 mt-6">
              <span className="text-2xl font-bold">Total</span>
              <span className="text-2xl font-bold text-starbucks-green">₹{subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
