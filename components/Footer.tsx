"use client";

import { Coffee, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  'About Us': ['Our Story', 'Leadership', 'Newsroom', 'Careers', 'Partners'],
  'Menu': ['Hot Drinks', 'Cold Drinks', 'Food', 'Merchandise', 'At Home Coffee'],
  'Responsibility': ['Sustainability', 'Community', 'Ethical Sourcing', 'Diversity', 'Accessibility'],
  'Customer Service': ['Contact Us', 'Store Locator', 'Gift Cards', 'My Account', 'Mobile App']
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="bg-coffee-darker text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-starbucks-green to-emerald-600 rounded-full flex items-center justify-center">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-cream">Starbucks</span>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-md">
              More than coffee. We're building connections, communities, and a more sustainable future, 
              one cup at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-cream/70">
                <MapPin className="w-5 h-5 text-starbucks-green" />
                <span>2401 Utah Ave S, Seattle, WA 98134</span>
              </div>
              <div className="flex items-center space-x-3 text-cream/70">
                <Phone className="w-5 h-5 text-starbucks-green" />
                <span>1-800-STARBUC (782-7282)</span>
              </div>
              <div className="flex items-center space-x-3 text-cream/70">
                <Mail className="w-5 h-5 text-starbucks-green" />
                <span>customerservice@starbucks.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-coffee-medium hover:bg-starbucks-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-cream mb-4 text-lg">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === 'Gift Cards' ? '/gift-cards' : '#'}
                        className="text-cream/70 hover:text-cream transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-starbucks-green/10 to-gold/10 border border-cream/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-cream mb-4">
              Stay Connected
            </h3>
            <p className="text-cream/80 mb-6">
              Get the latest news, offers, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-coffee-medium border border-cream/20 rounded-full text-cream placeholder-cream/60 focus:outline-none focus:border-starbucks-green transition-colors duration-300"
              />
              <button className="bg-starbucks-green hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-6 text-sm text-cream/60">
              <span>© 2024 Starbucks Corporation. All rights reserved.</span>
              <a href="#" className="hover:text-cream transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cream transition-colors duration-300">Terms of Use</a>
              <a href="#" className="hover:text-cream transition-colors duration-300">Cookie Preferences</a>
            </div>
            {/* <div className="flex items-center space-x-4 text-sm text-cream/60">
              <span>Made with ❤️ and ☕</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}