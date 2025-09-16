"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";

type AddToCartButtonProps = {
  slug: string;
  title: string;
  price: string;
};

export default function AddToCartButton({ slug, title, price }: AddToCartButtonProps) {
  const router = useRouter();
  const { addToCart, cartLoaded } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = async () => {
    if (!cartLoaded || adding) return;
    setAdding(true);
    addToCart({ slug, title, price, quantity: 1 });
    // Wait longer to ensure state is persisted
    await new Promise((resolve) => setTimeout(resolve, 400));
    setAdding(false);
    router.push('/cart');
  };

  return (
    <button
      className="bg-starbucks-green hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={!cartLoaded || adding}
      onClick={handleAdd}
    >
      {adding ? 'Adding...' : cartLoaded ? 'Add to Cart' : 'Loading...'}
    </button>
  );
}
