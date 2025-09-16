"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProductShowcase from '@/components/ProductShowcase';


import SustainabilitySection from '@/components/SustainabilitySection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-coffee-dark text-cream overflow-x-hidden">
      <Navigation />
      <main>
  <HeroSection scrollY={scrollY} />
  <StorySection />
  <ProductShowcase />
  <SustainabilitySection />
  <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}