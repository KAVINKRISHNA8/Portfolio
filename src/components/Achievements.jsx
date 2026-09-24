import React from 'react';
import { Award, ShieldCheck, Cpu, Smartphone, Trophy, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconByCategory = {
  Security: ShieldCheck,
  'Data Science': Cpu,
  'Mobile Systems': Smartphone,
  Hackathon: Trophy,
};

export default function Achievements() {
  return (
    <section id="certifications" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Verified technical modules, hackathon milestones, and specialized engineering training.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item, idx) => {
            const IconComp = iconByCategory[item.category] || Award;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-[#2a2b36] flex flex-col justify-between hover:border-[#f59e0b]/50 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#17181f] border border-[#2a2b36] text-[#fbbf24] group-hover:border-[#f59e0b]/50 group-hover:text-[#f8fafc] transition-colors shrink-0">
                        <IconComp size={22} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#d97706] font-semibold block">
                          {item.issuer} {item.location ? `• ${item.location}` : ''}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-heading text-[#f8fafc]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#17181f] border border-[#2a2b36] text-[#a1a1aa] shrink-0">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2a2b36] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>Completed & Verified</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#a1a1aa] px-2 py-0.5 rounded bg-[#17181f] border border-[#2a2b36]">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
