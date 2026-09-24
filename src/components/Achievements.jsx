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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-[#6b6158] text-base">
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
                className="glass-card p-6 sm:p-7 rounded-2xl border border-[#e8dfd5] flex flex-col justify-between hover:border-[#c5b19e] transition-all group bg-[#ffffff]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#f5f0e8] border border-[#ded3c6] text-[#1f1c19] group-hover:border-[#c5b19e] group-hover:bg-[#ede5dc] transition-colors shrink-0 shadow-sm">
                        <IconComp size={22} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#8c7b6c] font-semibold block">
                          {item.issuer} {item.location ? `• ${item.location}` : ''}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-heading text-[#1f1c19]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#f5f0e8] border border-[#e8dfd5] text-[#6b6158] shrink-0">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-[#5c544d] text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e8dfd5] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700">
                    <CheckCircle2 size={14} />
                    <span>Completed & Verified</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#443a32] px-2 py-0.5 rounded bg-[#f5f0e8] border border-[#ded3c6]">
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
