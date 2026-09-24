import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#2a2b36] bg-[#0d0d11] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold font-heading text-[#f8fafc]">
              {personalInfo.name}
            </div>
            <div className="text-xs text-[#a1a1aa] font-mono mt-0.5">
              Full-Stack Software Engineer
            </div>
          </div>

          {/* Copyright & Tech */}
          <div className="text-xs text-[#71717a] text-center font-mono">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Tailwind CSS.</span>
          </div>

          {/* Actions & Scroll to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc] hover:border-[#f59e0b]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#a1a1aa] hover:text-[#fbbf24] hover:border-[#f59e0b]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc] hover:border-[#f59e0b]/40 transition-colors"
              aria-label="Email Me"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc] hover:bg-[#22232e] transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
