import React from 'react';
import { Server, Layout, ShieldCheck, Database, Cpu, Award, Layers } from 'lucide-react';
import { personalInfo, focusPillars } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  ShieldCheck: ShieldCheck,
  Database: Database,
  Cpu: Cpu,
  Award: Award
};

export default function About() {
  return (
    <section id="about" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            About <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">My Journey</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Bridging architectural rigor with scalable enterprise backend and reactive frontend engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Narrative Story & 4 Feature Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-[#2a2b36]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-3 border-b border-[#2a2b36]">
                <div className="w-12 h-12 rounded-2xl bg-[#1f2029] border border-[#383947] flex items-center justify-center text-[#fbbf24] shrink-0 shadow-sm">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#f8fafc]">
                    Software Engineer & Systems Builder
                  </h3>
                  <p className="text-xs font-mono text-[#fbbf24] mt-0.5">
                    B.E. CSE • Karpagam College of Engineering
                  </p>
                </div>
              </div>

              <p className="text-[#a1a1aa] text-base leading-relaxed">
                I am a Computer Science and Engineering student at{' '}
                <span className="text-[#f8fafc] font-semibold">{personalInfo.college}</span> (Coimbatore), 
                maintaining an academic standing of{' '}
                <span className="text-[#fbbf24] font-bold">{personalInfo.cgpa}</span>. 
                My focus centers on constructing resilient backend microservices, robust RESTful APIs, and responsive, interactive user experiences.
              </p>

              <p className="text-[#a1a1aa] text-base leading-relaxed">
                My engineering approach is built around enterprise standards: architecting distributed systems with{' '}
                <span className="text-[#f8fafc] font-semibold">Java 17</span> and{' '}
                <span className="text-[#f8fafc] font-semibold">Spring Boot 3</span>, enforcing end-to-end security via{' '}
                <span className="text-[#fbbf24] font-semibold">JWT Authentication & RBAC</span>, and deploying through{' '}
                <span className="text-[#f8fafc] font-semibold">Docker & Docker Compose</span>.
              </p>

              <p className="text-[#a1a1aa] text-base leading-relaxed">
                Whether synchronizing real-time agricultural pricing streams across 9 microservices or engineering enterprise HRMS modules for hackathon platforms, I emphasize clean code, zero downtime, and intuitive dashboards.
              </p>

              {/* 4 Pillars Grid (2x2) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusPillars.map((pillar, idx) => {
                  const IconComponent = iconMap[pillar.icon] || Server;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#17181f]/70 border border-[#2a2b36] hover:border-[#f59e0b]/40 transition-colors"
                    >
                      <IconComponent size={20} className="text-[#fbbf24] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#f8fafc] font-heading">
                          {pillar.title}
                        </div>
                        <div className="text-xs text-[#a1a1aa] mt-0.5 leading-normal">
                          {pillar.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Architecture & System Readiness Widget */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[#2a2b36] relative overflow-hidden bg-[#17181f]/80">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2a2b36]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1f2029] border border-[#383947] text-[#fbbf24] flex items-center justify-center font-bold">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#f8fafc] font-heading">
                      Technical Readiness
                    </h4>
                    <span className="text-xs text-[#a1a1aa] font-sans">
                      Architecture & Stack Metrics
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-[#f59e0b]/15 border border-[#f59e0b]/35 text-[#fbbf24] text-xs font-mono font-bold">
                  Enterprise
                </div>
              </div>

              {/* Metric Progress Bars */}
              <div className="space-y-5 font-sans">
                {/* Microservices */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a1a1aa] font-medium">Microservices Architected</span>
                    <span className="text-[#fbbf24] font-mono font-bold">9 Services (Live Sync)</span>
                  </div>
                  <div className="h-2 w-full bg-[#131318] rounded-full overflow-hidden border border-[#2a2b36]">
                    <div className="h-full bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] rounded-full w-[90%] shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                  </div>
                </div>

                {/* Spring Boot & Java */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#f8fafc] font-semibold">Backend Proficiency (Spring Boot 3)</span>
                    <span className="text-[#f59e0b] font-mono font-bold">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#131318] rounded-full overflow-hidden border border-[#2a2b36]">
                    <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full w-[85%]"></div>
                  </div>
                </div>

                {/* React & Modern UI */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a1a1aa] font-medium">Frontend React & Recharts</span>
                    <span className="text-[#fbbf24] font-mono">React 18 & 19</span>
                  </div>
                  <div className="h-2 w-full bg-[#131318] rounded-full overflow-hidden border border-[#2a2b36]">
                    <div className="h-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] rounded-full w-[80%]"></div>
                  </div>
                </div>

                {/* Docker Containerization */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a1a1aa] font-medium">Containerization & Compose</span>
                    <span className="text-emerald-400 font-mono font-bold">100% Dockerized</span>
                  </div>
                  <div className="h-2 w-full bg-[#131318] rounded-full overflow-hidden border border-[#2a2b36]">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#f59e0b] rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="mt-6 pt-5 border-t border-[#2a2b36] grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#17181f]/60 border border-[#2a2b36]">
                  <div className="text-xl font-bold font-mono text-[#fbbf24]">7.5 / 10</div>
                  <div className="text-[11px] text-[#a1a1aa] mt-0.5">Academic CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-[#17181f]/60 border border-[#2a2b36]">
                  <div className="text-xl font-bold font-mono text-[#f59e0b]">4+ Modules</div>
                  <div className="text-[11px] text-[#a1a1aa] mt-0.5">HRMS Platform</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
