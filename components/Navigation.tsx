
"use client";

import { useState, useEffect } from 'react';
import LoginSignupButton from "./LoginSignupButton";
import CartCountBadge from "./CartCountBadge";
import { usePathname } from 'next/navigation';
import { Menu, X, Coffee, ShoppingCart } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navItems = ["Story", "Menu", "Rewards", "Gift Cards", "Reviews"];
  if (pathname === "/menu") {
    navItems = ["Home", "Rewards", "Gift Cards"];
  } else if (pathname === "/rewards") {
    navItems = ["Home", "Menu", "Gift Cards"];
  } else if (pathname === "/gift-cards") {
    navItems = ["Home", "Menu", "Rewards"];
  } else if (pathname === "/cart") {
    navItems = ["Home", "Menu", "Rewards", "Gift Cards"];
  }
   else if (pathname === "/checkout") {
    navItems = ["Home", "Menu", "Rewards", "Gift Cards"];
  }
  

  return (
    <>
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${pathname === '/menu' ? 'bg-coffee-dark shadow-lg text-cream' : 'bg-coffee-dark'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-starbucks-green to-emerald-600 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-cream tracking-tight">Starbucks</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                let href = "#";
                if (item === "Menu") href = "/menu";
                else if (item === "Story") href = "#story-section";
                else if (item === "Home") href = "/";
                else if (item === "Rewards") href = "/rewards";
                else if (item === "Gift Cards") href = "/gift-cards";
                else if (item === "Reviews") href = "#community";
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-cream/80 hover:text-cream transition-all duration-300 font-medium tracking-wide hover:scale-105"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-coffee-darker/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-6 right-6 text-cream text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          {navItems.map((item) => {
            let href = "#";
            if (item === "Menu") href = "/menu";
            else if (item === "Story") href = "#story-section";
            else if (item === "Home") href = "/";
            else if (item === "Rewards") href = "/rewards";
            else if (item === "Gift Cards") href = "/gift-cards";
            else if (item === "Reviews") href = "#community";
            return (
              <a
                key={item}
                href={href}
                className="text-cream text-2xl font-semibold hover:text-starbucks-green transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
          <div className="w-full flex justify-center mt-8">
            <LoginSignupButton />
          </div>
        </div>
      )}

            {/* Cart and CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="/cart" className="relative flex items-center justify-center w-11 h-11 rounded-full bg-coffee-medium hover:bg-starbucks-green transition-all duration-300 hover:scale-110 mr-2" aria-label="Cart">
                <ShoppingCart className="w-6 h-6 text-cream" />
                <CartCountBadge />
              </a>
              <LoginSignupButton />
            </div>


            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-coffee-darker/95 backdrop-blur-lg" />
        <div className="relative z-50 flex flex-col items-center justify-center h-full space-y-8">
          {['Story', 'Menu', 'Rewards', 'Gift Cards'].map((item, index) => (
            <a
              key={`${item}-${index}`}
              href={item === 'Menu' ? '/menu' : '#'}
              className={`text-3xl font-semibold text-cream hover:text-gold transition-all duration-300 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <button className="bg-starbucks-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 mt-8">
            Contact
          </button>
        </div>
      </div>
    {/* Mobile Floating Cart Button (only visible when menu is open) */}
    {isMenuOpen && (
      <a
        href="/cart"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-starbucks-green text-white shadow-lg transition-all duration-300 hover:bg-green-700 lg:hidden"
        aria-label="Cart"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
      >
        <ShoppingCart className="w-7 h-7" />
        <span className="absolute top-2 right-2">
          <CartCountBadge />
        </span>
      </a>
    )}
    </>
  );
}