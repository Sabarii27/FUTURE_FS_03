"use client";

const categories = [
  "Hot Coffee",
  "Cold Coffee",
  "Hot Tea",
  "Cold Tea",
  "Frappuccino®",
  "Hot Chocolate",
  // Food section
  { label: "Food", isHeader: true },
  "Breakfast",
  "Bakery",
  "Snacks",
  // At Home Coffee section
  { label: "At Home Coffee", isHeader: true },
  "Whole Bean",
  "VIA® Instant",
  "Shopping Bag"
];

const menuItems = [
 {
  name: "Cold Coffee",
  image: "/menu/cold-coffee.jpeg",
  slug: "cold-coffee"
},
  {
    name: "Hot Coffee",
    image: "/menu/hot-coffee.webp",
    slug: "hot-coffee"
  },
  {
    name: "Hot Tea",
    image: "/menu/hot-tea.jpeg",
    slug: "hot-tea"
  },
  {
    name: "Cold Tea",
    image: "/menu/cold-tea.jpeg",
    slug: "cold-tea"
  },
  {
    name: "Refreshers",
    image: "/menu/refreshers.jpeg",
    slug: "refreshers"
  },
  {
    name: "Frappuccino®",
    image: "/menu/frappuccino.webp",
    slug: "frappuccino"
  },
  {
    name: "Hot Chocolate",
    image: "/menu/hot-chocolate.webp",
    slug: "hot-chocolate"
  },
  {
    name: "Bottled Beverages",
    image: "/menu/bottled.jpeg",
    slug: "bottled-beverages"
  }
];

const breakfastItems = [
  {
    name: "Egg, Pesto & Mozzarella\nSandwich",
    image: "/menu/egg-pesto.jpeg",
    slug: "egg-pesto-mozzarella-sandwich"
  },
  {
    name: "Bacon, Gouda & Egg\nSandwich",
    image: "/menu/bacon-gouda.jpeg",
    slug: "bacon-gouda-egg-sandwich"
  },
  {
    name: "Double-Smoked Bacon,\nCheddar & Egg\nSandwich",
    image: "/menu/double-bacon.jpeg",
    slug: "double-smoked-bacon-cheddar-egg-sandwich"
  },
  {
    name: "Sausage, Cheddar &\nEgg Sandwich",
    image: "/menu/sausage-cheddar.jpeg",
    slug: "sausage-cheddar-egg-sandwich"
  },
  {
    name: "Turkey Bacon,\nCheddar & Egg\nSandwich",
    image: "/menu/turkey-bacon.jpeg",
    slug: "turkey-bacon-cheddar-egg-sandwich"
  },
  {
    name: "Impossible™\nBreakfast Sandwich",
    image: "/menu/impossible.jpeg",
    slug: "impossible-breakfast-sandwich"
  },
  {
    name: "Avocado\nSpread",
    image: "/menu/avocado.jpeg",
    slug: "avocado-spread"
  }
];

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

// Product details for price/title lookup
const productDetails: Record<string, { title: string; price: string }> = {
  "hot-coffee": { title: "Hot Coffee", price: "₹3.25" },
  "cold-coffee": { title: "Cold Coffee", price: "₹3.45" },
  "hot-tea": { title: "Hot Tea", price: "₹2.95" },
  "cold-tea": { title: "Cold Tea", price: "₹3.15" },
  "refreshers": { title: "Refreshers", price: "₹3.75" },
  "frappuccino": { title: "Frappuccino®", price: "₹4.25" },
  "hot-chocolate": { title: "Hot Chocolate", price: "₹2.95" },
  "bottled-beverages": { title: "Bottled Beverages", price: "₹2.50" },
  "egg-pesto-mozzarella-sandwich": { title: "Egg, Pesto & Mozzarella Sandwich", price: "₹4.95" },
  "bacon-gouda-egg-sandwich": { title: "Bacon, Gouda & Egg Sandwich", price: "₹4.75" },
  "double-smoked-bacon-cheddar-egg-sandwich": { title: "Double-Smoked Bacon, Cheddar & Egg Sandwich", price: "₹5.25" },
  "sausage-cheddar-egg-sandwich": { title: "Sausage, Cheddar & Egg Sandwich", price: "₹4.45" },
  "turkey-bacon-cheddar-egg-sandwich": { title: "Turkey Bacon, Cheddar & Egg Sandwich", price: "₹4.65" },
  "impossible-breakfast-sandwich": { title: "Impossible™ Breakfast Sandwich", price: "₹5.45" },
  "avocado-spread": { title: "Avocado Spread", price: "₹1.25" }
};
export default function MenuSection() {
  const [selectedSection, setSelectedSection] = useState<'drinks' | 'breakfast'>('drinks');

  return (
    <section className="w-full bg-coffee-dark text-cream py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6 text-cream">Menu</h2>
          <ul className="space-y-4">
            <li
              className={`text-lg cursor-pointer transition-colors ${selectedSection === 'drinks' ? 'text-starbucks-green font-bold' : 'text-cream/80 hover:text-starbucks-green'}`}
              onClick={() => setSelectedSection('drinks')}
            >
              Drinks
            </li>
            <li
              className={`text-lg cursor-pointer transition-colors ${selectedSection === 'breakfast' ? 'text-starbucks-green font-bold' : 'text-cream/80 hover:text-starbucks-green'}`}
              onClick={() => setSelectedSection('breakfast')}
            >
              Breakfast
            </li>
          </ul>
        </aside>
        {/* Menu Grid */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8 text-cream">Menu</h1>
          {selectedSection === 'drinks' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-cream">Drinks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-16">
                {menuItems.map((item) => {
                  const details = productDetails[item.slug] || { title: item.name, price: "₹0.00" };
                  return (
                    <div
                      key={item.slug}
                      className="flex flex-col items-center group cursor-pointer bg-coffee-medium/30 rounded-xl p-4 shadow"
                    >
                      <a
                        href={`/menu/${item.slug}`}
                        className="flex flex-col items-center"
                      >
                        <div className="w-40 h-40 rounded-full bg-coffee-medium flex items-center justify-center overflow-hidden mb-4 shadow-lg group-hover:ring-4 group-hover:ring-starbucks-green transition-all duration-200">
                          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                        <span className="text-xl font-semibold text-cream text-center whitespace-pre-line">{item.name}</span>
                      </a>
                      <span className="text-lg text-starbucks-green font-bold mt-2">{details.price}</span>
                      <AddToCartButton slug={item.slug} title={details.title} price={details.price} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {selectedSection === 'breakfast' && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-cream">Breakfast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {breakfastItems.map((item) => {
                  const details = productDetails[item.slug] || { title: item.name, price: "₹0.00" };
                  return (
                    <div
                      key={item.slug}
                      className="flex flex-col items-center group cursor-pointer bg-coffee-medium/30 rounded-xl p-4 shadow"
                    >
                      <a
                        href={`/menu/${item.slug}`}
                        className="flex flex-col items-center"
                      >
                        <div className="w-40 h-40 rounded-full bg-coffee-medium flex items-center justify-center overflow-hidden mb-4 shadow-lg group-hover:ring-4 group-hover:ring-starbucks-green transition-all duration-200">
                          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                        </div>
                        <span className="text-xl font-semibold text-cream text-center whitespace-pre-line">{item.name}</span>
                      </a>
                      <span className="text-lg text-starbucks-green font-bold mt-2">{details.price}</span>
                      <AddToCartButton slug={item.slug} title={details.title} price={details.price} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}