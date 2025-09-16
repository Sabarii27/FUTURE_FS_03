"use client";

import { useEffect, useRef } from 'react';
import { Leaf, Recycle, Heart, Globe } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: 'Carbon Neutral by 2030',
    description: 'Working towards becoming resource positive, giving back more than we take from the planet.',
    stat: '99%',
    statLabel: 'Ethically Sourced Coffee'
  },
  {
    icon: Recycle,
    title: 'Sustainable Packaging',
    description: 'Innovating reusable, recyclable, and compostable packaging solutions.',
    stat: '25%',
    statLabel: 'Reduction in Waste'
  },
  {
    icon: Heart,
    title: 'Farmer Support',
    description: 'Supporting coffee farming communities through education and direct investment.',
    stat: '$100M+',
    statLabel: 'Invested in Communities'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating positive change in every community we serve around the world.',
    stat: '35,000+',
    statLabel: 'Stores Worldwide'
  }
];

export default function SustainabilitySection() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-coffee-medium to-coffee-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-starbucks-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-starbucks-green/20 rounded-full">
            <Leaf className="w-6 h-6 text-starbucks-green" />
            <span className="text-starbucks-green font-semibold">Planet Positive</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6">
            Nurturing <span className="text-starbucks-green">Our Planet</span>
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're committed to a sustainable future, working hand-in-hand with farmers, 
            communities, and customers to protect the planet we all share.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-coffee-darker/50 to-starbucks-green/10 backdrop-blur-sm border border-cream/10 hover:border-starbucks-green/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-starbucks-green/20 rounded-2xl flex items-center justify-center group-hover:bg-starbucks-green/30 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-starbucks-green" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-starbucks-green transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <p className="text-cream/70 mb-6 leading-relaxed">
                        {initiative.description}
                      </p>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl lg:text-4xl font-bold text-gold">
                          {initiative.stat}
                        </span>
                        <span className="text-cream/60 font-medium">
                          {initiative.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll opacity-0" style={{ animationDelay: '1s' }}>
          <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-starbucks-green/20 to-gold/20 backdrop-blur-sm border border-cream/10">
            <h3 className="text-3xl lg:text-4xl font-bold text-cream mb-6">
              Join Us in Making a Difference
            </h3>
            <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
              Every cup you enjoy contributes to a more sustainable future. 
              Together, we can create positive change that lasts generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-starbucks-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Learn About Our Impact
              </button>
              <button className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Support Sustainability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}