"use client";
import { useCart } from "./CartContext";

export default function CartCountBadge() {
  const { items, cartLoaded } = useCart();
  if (!cartLoaded) return null;
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  if (count === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 bg-starbucks-green text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg">
      {count}
    </span>
  );
}
