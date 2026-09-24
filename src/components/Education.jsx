import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            Formal <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Academic history and computer science foundational engineering curriculum.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2a2b36] relative hover:border-[#f59e0b]/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#17181f] border border-[#2a2b36] text-[#fbbf24]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#f8fafc]">
                      {item.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#a1a1aa] mt-0.5">
                      <MapPin size={13} className="text-[#d97706]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1aa] bg-[#17181f]/80 px-3.5 py-1.5 rounded-xl border border-[#2a2b36] w-fit">
                  <Calendar size={13} className="text-[#fbbf24]" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <div className="text-sm font-semibold text-[#f8fafc] font-heading">
                  {item.degree}
                </div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#f59e0b]/15 border border-[#f59e0b]/35 text-[#fbbf24]">
                  {item.grade}
                </div>
                <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
