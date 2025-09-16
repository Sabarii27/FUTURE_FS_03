"use client";

import { useEffect, useRef } from 'react';
import { MapPin, Coffee, Users } from 'lucide-react';

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
  <section id="story-section" ref={sectionRef} className="py-24 pt-32 bg-gradient-to-b from-coffee-dark to-coffee-medium relative overflow-hidden scroll-mt-80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6">
            Our <span className="text-gold">Journey</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            From a single store in Pike Place Market to a global community of coffee lovers, 
            our story is woven with passion, innovation, and connection.
          </p>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Story Card */}
          <div className="lg:col-span-7 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative group h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-starbucks-green/20 to-gold/20 backdrop-blur-sm border border-cream/10">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-darker/50 to-starbucks-green/30" />
              
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="mb-6">
                  <MapPin className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-3xl lg:text-4xl font-bold text-cream mb-4">
                    Where It All Began
                  </h3>
                  <p className="text-cream/80 text-lg leading-relaxed">
                    In 1971, in Seattle's Pike Place Market, three friends opened a small store 
                    selling fresh-roasted coffee beans. Little did they know they were planting 
                    the seeds of a global coffee revolution.
                  </p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Craft Card */}
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="group h-56 rounded-2xl bg-gradient-to-br from-gold/20 to-coffee-medium/30 backdrop-blur-sm border border-cream/10 p-8 hover:transform hover:scale-105 transition-all duration-500">
                <Coffee className="w-8 h-8 text-starbucks-green mb-4" />
                <h3 className="text-2xl font-bold text-cream mb-3">The Art of Coffee</h3>
                <p className="text-cream/70">
                  Every cup is crafted with precision, from sourcing the finest beans to 
                  the perfect roast that brings out unique flavors.
                </p>
              </div>
            </div>

            {/* Community Card */}
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="group h-56 rounded-2xl bg-gradient-to-br from-starbucks-green/20 to-coffee-darker/30 backdrop-blur-sm border border-cream/10 p-8 hover:transform hover:scale-105 transition-all duration-500">
                <Users className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-cream mb-3">Building Community</h3>
                <p className="text-cream/70">
                  More than coffee, we create connections. Every store is a gathering place 
                  where stories are shared and relationships flourish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-12">
            {[
              { year: '1971', event: 'First Store Opens' },
              { year: '1987', event: 'Howard Schultz Joins' },
              { year: '1992', event: 'Goes Public' },
              { year: '2000', event: 'Global Expansion' },
              { year: 'Today', event: '35,000+ Stores Worldwide' }
            ].map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-starbucks-green to-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <p className="text-cream/80 font-medium">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}