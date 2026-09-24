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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f5f2eb] tracking-tight">
            Skillset & <span className="bg-gradient-to-r from-[#f5f2eb] via-[#e3dac9] to-[#cbb994] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-[#a6a095] text-base">
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
                className="glass-card p-6 rounded-2xl border border-[#2a2925] flex flex-col justify-between hover:-translate-y-1.5 transition-transform group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#171715] border border-[#2a2925] text-[#d4c5a9] group-hover:border-[#d4c5a9]/40 group-hover:text-[#f5f2eb] transition-colors">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#f5f2eb]">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#171715]/90 border border-[#2a2925] text-[#d4c5a9] hover:text-[#f5f2eb] hover:border-[#d4c5a9]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2a2925] flex items-center justify-between text-[11px] text-[#a6a095] font-mono">
                  <span>Proficiency</span>
                  <span className="text-[#e3dac9] font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
