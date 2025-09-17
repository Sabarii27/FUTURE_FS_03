"use client";

import { useState, useEffect, useRef } from 'react';
import AddToCartButton from './AddToCartButton';
import { Star, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Pike Place Roast',
    description: 'Our signature medium roast with rich, smooth flavor',
    price: '₹1,699',
    rating: 4.8,
    category: 'Classic',
    color: 'from-amber-600 to-orange-600',
    image: '/menu/pike-place-roast.jpeg'
  },
  {
    name: 'Blonde Espresso',
    description: 'Light and sweet with a smooth finish',
    price: '₹1,289',
    rating: 4.9,
    category: 'Light Roast',
    color: 'from-yellow-500 to-amber-500',
    image: '/menu/blonde-espresso.jpeg'
  },
  {
    name: 'Dark Roast',
    description: 'Bold and robust with a full-bodied taste',
    price: '₹3,110',
    rating: 4.7,
    category: 'Dark Roast',
    color: 'from-gray-800 to-coffee-darker',
    image: '/menu/dark-roast.jpeg'
  },
  {
    name: 'Cold Brew',
    description: 'Smooth and refreshing cold-steeped coffee',
    price: '₹599',
    rating: 4.8,
    category: 'Cold Coffee',
    color: 'from-blue-600 to-indigo-700',
    image: '/menu/cold-brew.jpeg'
  },
  {
    name: 'Frappuccino',
    description: 'Blended coffee perfection with whipped cream',
    price: '₹500',
    rating: 4.6,
    category: 'Blended',
    color: 'from-green-500 to-emerald-600',
    image: '/menu/frappuccino.webp'
  },
  {
    name: 'Seasonal Special',
    description: 'Limited edition flavors that capture the season',
    price: '₹1,200',
    rating: 4.9,
    category: 'Limited Edition',
    color: 'from-purple-600 to-pink-600',
    image: '/menu/seasonal-special.jpeg'
  }
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
  <section id="product-showcase-section" ref={sectionRef} className="py-24 pt-32 bg-coffee-medium relative overflow-hidden scroll-mt-80">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-starbucks-green/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6">
            Signature <span className="text-starbucks-green">Blends</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium coffee experiences, 
            each one telling its own unique story of flavor and craftsmanship.
          </p>
        </div>

        {/* Interactive Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${activeProduct === index ? 'scale-105 z-10' : 'hover:scale-105'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveProduct(index)}
              onMouseEnter={() => setActiveProduct(index)}
            >
              {/* Product Card */}
              <div className="h-80 rounded-3xl bg-gradient-to-br from-coffee-darker/50 to-coffee-dark/50 backdrop-blur-sm border border-cream/10 overflow-hidden">
                {/* Product Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cream/20 text-cream text-sm font-medium rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <span className="text-cream text-sm">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold">{product.price}</span>
                    <a
                      href="/menu"
                      className="flex items-center space-x-2 text-cream hover:text-starbucks-green transition-colors duration-300 group-hover:translate-x-2 transform cursor-pointer"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product Details */}
        {activeProduct !== null && (
          <div className={`mt-16 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-coffee-darker/50 to-starbucks-green/20 backdrop-blur-sm border border-cream/10">
              <h3 className="text-3xl font-bold text-cream mb-4">
                Featured: {products[activeProduct].name}
              </h3>
              <p className="text-xl text-cream/80 mb-6">
                {products[activeProduct].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AddToCartButton
                  slug={products[activeProduct].name.replace(/\s+/g, '-').toLowerCase()}
                  title={products[activeProduct].name}
                  price={products[activeProduct].price}
                  image={products[activeProduct].image}
                />
                <button className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  <a
                    href="/menu"
                    className="flex items-center space-x-2 text-cream hover:text-starbucks-green transition-colors duration-300 group-hover:translate-x-2 transform cursor-pointer"
                  >
                    <span>Learn More</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}