import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#e8dfd5] bg-[#f5f0e8] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold font-heading text-[#1f1c19]">
              {personalInfo.name}
            </div>
            <div className="text-xs text-[#6b6158] font-mono mt-0.5">
              Full-Stack Software Engineer
            </div>
          </div>

          {/* Copyright & Tech */}
          <div className="text-xs text-[#8c8278] text-center font-mono">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Tailwind CSS.</span>
          </div>

          {/* Actions & Scroll to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#ffffff] border border-[#e8dfd5] text-[#5c544d] hover:text-[#1f1c19] hover:border-[#c5b19e] hover:bg-[#eae2d7] transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#ffffff] border border-[#e8dfd5] text-[#5c544d] hover:text-[#1f1c19] hover:border-[#c5b19e] hover:bg-[#eae2d7] transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#ffffff] border border-[#e8dfd5] text-[#5c544d] hover:text-[#1f1c19] hover:border-[#c5b19e] hover:bg-[#eae2d7] transition-colors shadow-sm"
              aria-label="Email Me"
            >
              <Mail size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#ffffff] border border-[#e8dfd5] text-[#5c544d] hover:text-[#1f1c19] hover:bg-[#eae2d7] transition-colors ml-2 shadow-sm"
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
