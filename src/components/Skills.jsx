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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            Skillset & <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
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
                className="glass-card p-6 rounded-2xl border border-[#2a2b36] flex flex-col justify-between hover:-translate-y-1.5 transition-transform group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#17181f] border border-[#2a2b36] text-[#fbbf24] group-hover:border-[#f59e0b]/50 group-hover:text-[#f8fafc] transition-colors">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#f8fafc]">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#17181f]/90 border border-[#2a2b36] text-[#fbbf24] hover:text-[#f8fafc] hover:border-[#f59e0b]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2a2b36] flex items-center justify-between text-[11px] text-[#a1a1aa] font-mono">
                  <span>Proficiency</span>
                  <span className="text-[#fbbf24] font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
