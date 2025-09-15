'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navigation = [
    { name: 'SELL', href: '/sell' },
    { name: 'BUY', href: '/buy' },
    { name: 'GROW', href: '/grow' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      {/* Dynamic Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a1f1f]/95 backdrop-blur-lg shadow-lg' : ''
      }`}>
        <div className="py-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-3xl font-light tracking-wider">
                BRILLION
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <div className={`${!isScrolled ? 'bg-[#0a1f1f]/80' : ''} backdrop-blur-md rounded-full px-3 py-2`}>
                <div className="flex items-center space-x-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 text-white/90 hover:text-white font-medium transition-all duration-300 rounded-full hover:bg-white/10 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="bg-[#0a1f1f]/95 backdrop-blur-lg border-t border-white/10">
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-white/90 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content - Positioned at bottom left */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="w-full pb-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-4xl">
              <h1 
                className="text-white mb-12"
                style={{
                  fontSize: '48px',
                  lineHeight: '56px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}
              >
                THE FUTURE OF YOUR BUSINESS<br />
                IS OUR BUSINESS
              </h1>
              
              <p className="text-white/90 mb-10 text-xl font-light">
                I want to:
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/sell" 
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-center font-semibold transition-all duration-500 hover:bg-white hover:text-teal-900 hover:shadow-2xl hover:scale-105 rounded"
                >
                  <span className="relative z-10 text-sm tracking-widest">SELL MY BUSINESS</span>
                </Link>
                
                <Link 
                  href="/buy" 
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-center font-semibold transition-all duration-500 hover:bg-white hover:text-teal-900 hover:shadow-2xl hover:scale-105 rounded"
                >
                  <span className="relative z-10 text-sm tracking-widest">BUY A BUSINESS</span>
                </Link>
                
                <Link 
                  href="/grow" 
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-center font-semibold transition-all duration-500 hover:bg-white hover:text-teal-900 hover:shadow-2xl hover:scale-105 rounded"
                >
                  <span className="relative z-10 text-sm tracking-widest">GROW MY BUSINESS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;