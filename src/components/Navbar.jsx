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
          ? 'glass-nav border-b border-[#2a2b36] shadow-xl shadow-black/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#17181f]/90 border border-[#2a2b36] p-1.5 rounded-full px-3.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-[#a1a1aa] hover:text-[#f8fafc] px-3.5 py-1.5 rounded-full transition-colors hover:bg-[#22232e]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs font-bold text-[#0d0d11] bg-[#f59e0b] hover:bg-[#fbbf24] transition-all shadow-md shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/35 hover:scale-[1.02] group"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} className="text-[#0d0d11] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Header Bar */}
        <div className="flex md:hidden items-center justify-end w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#fbbf24] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#2a2b36] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#a1a1aa] hover:text-[#f8fafc] py-2 px-3 rounded-lg hover:bg-[#22232e] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f59e0b] text-[#0d0d11] text-xs font-bold"
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
