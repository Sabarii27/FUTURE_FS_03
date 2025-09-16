"use client";

import { useEffect, useRef } from 'react';
import { Users, Award, Coffee, MapPin } from 'lucide-react';

const communityStats = [
  { number: '400,000+', label: 'Partners (Employees)', icon: Users },
  { number: '35,000+', label: 'Stores Worldwide', icon: MapPin },
  { number: '100M+', label: 'Customers Served Weekly', icon: Coffee },
  { number: '50+', label: 'Years of Excellence', icon: Award }
];

export default function CommunitySection() {
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
    <section id="community" ref={sectionRef} className="py-24 bg-gradient-to-b from-coffee-dark to-coffee-darker relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
             }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6">
            Our Global <span className="text-gold">Community</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're more than a coffee company. We're a community of passionate partners 
            and customers united by our love for exceptional coffee and human connection.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 group text-center`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-coffee-medium/50 to-starbucks-green/10 backdrop-blur-sm border border-cream/10 hover:border-gold/30 transition-all duration-500 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gold/20 rounded-2xl flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {stat.number}
                  </div>
                  <p className="text-cream/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Partner Story */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="group h-96 rounded-3xl bg-gradient-to-br from-starbucks-green/20 to-coffee-medium/30 backdrop-blur-sm border border-cream/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-darker/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-cream mb-4 group-hover:text-starbucks-green transition-colors duration-300">
                  Partner Stories
                </h3>
                <p className="text-cream/80 leading-relaxed mb-4">
                  Meet the passionate partners who bring our mission to life every day, 
                  creating moments of connection in communities around the world.
                </p>
                <button className="text-starbucks-green hover:text-gold font-semibold flex items-center space-x-2 transition-colors duration-300">
                  <span>Discover Their Stories</span>
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="group h-96 rounded-3xl bg-gradient-to-br from-gold/20 to-coffee-medium/30 backdrop-blur-sm border border-cream/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-darker/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                  Community Impact
                </h3>
                <p className="text-cream/80 leading-relaxed mb-4">
                  From youth programs to veteran support, we're committed to strengthening 
                  the communities we serve through meaningful partnerships and initiatives.
                </p>
                <button className="text-gold hover:text-starbucks-green font-semibold flex items-center space-x-2 transition-colors duration-300">
                  <span>See Our Impact</span>
                  <Award className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="text-center animate-on-scroll opacity-0" style={{ animationDelay: '1s' }}>
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-gold/20 to-starbucks-green/20 backdrop-blur-sm border border-cream/10">
            <h3 className="text-3xl lg:text-4xl font-bold text-cream mb-6">
              Become Part of Something Bigger
            </h3>
            <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
              Join our community of coffee lovers, partners, and change-makers. 
              Together, we create moments that matter, one cup at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gold hover:bg-yellow-500 text-coffee-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Join Starbucks Rewards
              </button>
              <button className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Find Career Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}