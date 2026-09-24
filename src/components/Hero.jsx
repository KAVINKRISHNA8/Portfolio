import React from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden font-sans">
      {/* Warm Ambient Sunset Amber & Titanium Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#f59e0b]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#d97706]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#351c06]/30 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Content Left-Aligned */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17181f]/90 border border-[#2a2b36] text-xs font-mono text-[#fbbf24] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-[#f8fafc] leading-[1.08]">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#fbbf24] font-heading">
                {personalInfo.role}
              </p>
            </div>

            {/* Bio / Description */}
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl leading-relaxed font-sans font-normal">
              Specializing in high-performance enterprise backend architectures with{' '}
              <span className="text-[#f8fafc] font-semibold">Java 17</span> &{' '}
              <span className="text-[#fbbf24] font-semibold">Spring Boot 3</span>, resilient{' '}
              <span className="text-[#f8fafc] font-semibold">Microservices</span>, and reactive user experiences with{' '}
              <span className="text-[#f59e0b] font-semibold">React 19</span>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0d0d11] font-bold text-sm transition-all shadow-lg shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/40 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-[#17181f]/90 hover:bg-[#22232e] text-[#f8fafc] border border-[#2a2b36] font-semibold text-sm transition-all flex items-center gap-2 hover:border-[#f59e0b]/50"
              >
                <Mail size={16} className="text-[#fbbf24]" />
                <span>Get In Touch</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20/%20Inquiry%20for%20Kavinkrishna`}
                className="px-5 py-3.5 rounded-2xl bg-[#17181f]/60 hover:bg-[#22232e] text-[#a1a1aa] hover:text-[#f8fafc] border border-[#2a2b36] font-semibold text-sm transition-all flex items-center gap-2 hover:border-[#f59e0b]/40"
              >
                <FileText size={16} className="text-[#d97706]" />
                <span>Direct Email</span>
              </a>
            </div>

            {/* Social Proof Channels */}
            <div className="flex items-center gap-3.5 pt-2 text-[#a1a1aa]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#17181f]/80 border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc] hover:border-[#f59e0b]/50 transition-all hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#17181f]/80 border border-[#2a2b36] text-[#a1a1aa] hover:text-[#fbbf24] hover:border-[#f59e0b]/50 transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-2xl bg-[#17181f]/80 border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc] hover:border-[#f59e0b]/50 transition-all hover:-translate-y-0.5"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Tech stack pill row */}
            <div className="pt-6 border-t border-[#2a2b36] w-full max-w-xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#a1a1aa]">
                {['Java 17', 'Spring Boot 3', 'Microservices', 'React 19', 'JWT & RBAC', 'Docker', 'MySQL'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-[#17181f]/70 border border-[#2a2b36] text-[#fbbf24] flex items-center gap-1.5 hover:border-[#f59e0b]/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Clean, Professionally Sized Round Profile Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group -translate-y-2 lg:-translate-y-6">
              
              {/* Dynamic Aura Halo */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#f59e0b]/40 via-[#d97706]/30 to-transparent rounded-full blur-xl opacity-75 group-hover:opacity-95 transition-opacity duration-700 animate-pulse"></div>
              
              {/* Perfectly Proportioned Circular Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[330px] lg:h-[330px] xl:w-[350px] xl:h-[350px] rounded-full p-2 bg-gradient-to-tr from-[#f8fafc] via-[#fbbf24] to-[#d97706] shadow-[0_0_35px_rgba(245,158,11,0.25)]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0d0d11] shadow-inner bg-[#131318]">
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
