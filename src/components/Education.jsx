import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            Formal <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-[#6b6158] text-base">
            Academic history and computer science foundational engineering curriculum.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-[#e8dfd5] relative hover:border-[#c5b19e] transition-colors bg-[#ffffff]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[#ded3c6] text-[#1f1c19] shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1f1c19]">
                      {item.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#6b6158] mt-0.5">
                      <MapPin size={13} className="text-[#8c7b6c]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#6b6158] bg-[#f5f0e8] px-3.5 py-1.5 rounded-xl border border-[#e8dfd5] w-fit">
                  <Calendar size={13} className="text-[#8c7b6c]" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <div className="text-sm font-semibold text-[#1f1c19] font-heading">
                  {item.degree}
                </div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#ede5dc] border border-[#ded3c6] text-[#1f1c19]">
                  {item.grade}
                </div>
                <p className="text-[#5c544d] text-xs sm:text-sm leading-relaxed pt-2">
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
