"use client";


import { ArrowDown } from 'lucide-react';
import { useCallback } from 'react';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  // Scroll to section by id
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-coffee-darker via-coffee-dark to-coffee-medium"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Coffee Bean Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, rgba(0, 112, 74, 0.3) 2px, transparent 2px)`,
               backgroundSize: '100px 100px'
             }} />
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-starbucks-green/20 to-gold/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-gradient-to-tr from-gold/20 to-coffee-medium/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
  <div className="relative z-20 flex items-center justify-center h-full px-6 mt-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Title removed as requested */}

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cream/80 mb-8 w-full text-center leading-relaxed animate-fadeIn" style={{ animationDelay: '1s' }}>
            Journey through the world's finest coffee experiences, where every bean carries the passion of farmers and the artistry of our baristas.
          </p>
          {/* Company Image */}
          <div className="flex justify-center mb-6">
            <div className="rounded-3xl shadow-lg bg-white/80 p-2 w-full max-w-5xl">
              <img
                src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-04/Starbucks%20Menu%20Delhi.jpg"
                alt="Our Company"
                className="rounded-2xl w-full h-72 object-cover"
                style={{ animationDelay: '1.1s' }}
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            <button
              className="group bg-starbucks-green hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              onClick={() => scrollToSection('story-section')}
            >
              <span className="relative z-10">Explore Our Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <button
              className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('product-showcase-section')}
            >
              Find Your Perfect Cup
            </button>
          </div>
        </div>
      </div>

  {/* Scroll Indicator removed as requested */}
    </section>
  );
}