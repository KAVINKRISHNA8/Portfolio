import React from 'react';
import { Server, Layout, Code2, Database, Shield, Cpu, BookOpen, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Code2: Code2,
  Database: Database,
  Shield: Shield,
  Cpu: Cpu,
  BookOpen: BookOpen,
  Terminal: Terminal
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            Skillset & <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-[#6b6158] text-base">
            Comprehensive toolkit spanning full-stack frameworks, enterprise architectures, databases, and DevOps.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = iconMap[cat.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#e8dfd5] flex flex-col justify-between hover:-translate-y-1.5 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#f5f0e8] border border-[#ded3c6] text-[#1f1c19] group-hover:border-[#c5b19e] group-hover:bg-[#ede5dc] transition-colors shadow-sm">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#1f1c19]">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#f5f0e8] border border-[#e8dfd5] text-[#443a32] hover:text-[#1f1c19] hover:bg-[#ede5dc] hover:border-[#c5b19e] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#e8dfd5] flex items-center justify-between text-[11px] text-[#8c8278] font-mono">
                  <span>Proficiency</span>
                  <span className="text-[#1f1c19] font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
