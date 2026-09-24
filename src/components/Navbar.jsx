import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav border-b border-[#2a2925] shadow-xl shadow-black/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#171715]/90 border border-[#2a2925] p-1.5 rounded-full px-3.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-[#a6a095] hover:text-[#f5f2eb] px-3.5 py-1.5 rounded-full transition-colors hover:bg-[#252420]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-bold text-[#0c0c0b] bg-[#e3dac9] hover:bg-[#f5f2eb] transition-all shadow-md shadow-[#e3dac9]/10 hover:shadow-[#e3dac9]/25 hover:scale-[1.02] group"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} className="text-[#0c0c0b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Header Bar */}
        <div className="flex md:hidden items-center justify-end w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#171715] border border-[#2a2925] text-[#d4c5a9] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#2a2925] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#a6a095] hover:text-[#f5f2eb] py-2 px-3 rounded-lg hover:bg-[#252420] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#e3dac9] text-[#0c0c0b] text-xs font-bold"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
