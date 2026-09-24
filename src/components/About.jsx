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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f5f2eb] tracking-tight">
            About <span className="bg-gradient-to-r from-[#f5f2eb] via-[#e3dac9] to-[#cbb994] bg-clip-text text-transparent">My Journey</span>
          </h2>
          <p className="text-[#a6a095] text-base">
            Bridging architectural rigor with scalable enterprise backend and reactive frontend engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Narrative Story & 4 Feature Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-[#2a2925]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-3 border-b border-[#2a2925]">
                <div className="w-12 h-12 rounded-2xl bg-[#201f1c] border border-[#383631] flex items-center justify-center text-[#d4c5a9] shrink-0 shadow-sm">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#f5f2eb]">
                    Software Engineer & Systems Builder
                  </h3>
                  <p className="text-xs font-mono text-[#d4c5a9] mt-0.5">
                    B.E. CSE • Karpagam College of Engineering
                  </p>
                </div>
              </div>

              <p className="text-[#a6a095] text-base leading-relaxed">
                I am a Computer Science and Engineering student at{' '}
                <span className="text-[#f5f2eb] font-semibold">{personalInfo.college}</span> (Coimbatore), 
                maintaining an academic standing of{' '}
                <span className="text-[#e3dac9] font-bold">{personalInfo.cgpa}</span>. 
                My focus centers on constructing resilient backend microservices, robust RESTful APIs, and responsive, interactive user experiences.
              </p>

              <p className="text-[#a6a095] text-base leading-relaxed">
                My engineering approach is built around enterprise standards: architecting distributed systems with{' '}
                <span className="text-[#f5f2eb] font-semibold">Java 17</span> and{' '}
                <span className="text-[#f5f2eb] font-semibold">Spring Boot 3</span>, enforcing end-to-end security via{' '}
                <span className="text-[#d4c5a9] font-semibold">JWT Authentication & RBAC</span>, and deploying through{' '}
                <span className="text-[#f5f2eb] font-semibold">Docker & Docker Compose</span>.
              </p>

              <p className="text-[#a6a095] text-base leading-relaxed">
                Whether synchronizing real-time agricultural pricing streams across 9 microservices or engineering enterprise HRMS modules for hackathon platforms, I emphasize clean code, zero downtime, and intuitive dashboards.
              </p>

              {/* 4 Pillars Grid (2x2) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusPillars.map((pillar, idx) => {
                  const IconComponent = iconMap[pillar.icon] || Server;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#171715]/70 border border-[#2a2925] hover:border-[#d4c5a9]/40 transition-colors"
                    >
                      <IconComponent size={20} className="text-[#d4c5a9] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#f5f2eb] font-heading">
                          {pillar.title}
                        </div>
                        <div className="text-xs text-[#a6a095] mt-0.5 leading-normal">
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
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[#2a2925] relative overflow-hidden bg-[#171715]/80">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2a2925]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#201f1c] border border-[#383631] text-[#d4c5a9] flex items-center justify-center font-bold">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#f5f2eb] font-heading">
                      Technical Readiness
                    </h4>
                    <span className="text-xs text-[#a6a095] font-sans">
                      Architecture & Stack Metrics
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-[#d4c5a9]/15 border border-[#d4c5a9]/30 text-[#e3dac9] text-xs font-mono font-bold">
                  Enterprise
                </div>
              </div>

              {/* Metric Progress Bars */}
              <div className="space-y-5 font-sans">
                {/* Microservices */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a6a095] font-medium">Microservices Architected</span>
                    <span className="text-[#e3dac9] font-mono font-bold">9 Services (Live Sync)</span>
                  </div>
                  <div className="h-2 w-full bg-[#121210] rounded-full overflow-hidden border border-[#2a2925]">
                    <div className="h-full bg-gradient-to-r from-[#cbb994] to-[#f5f2eb] rounded-full w-[90%] shadow-[0_0_10px_rgba(203,185,148,0.4)]"></div>
                  </div>
                </div>

                {/* Spring Boot & Java */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#f5f2eb] font-semibold">Backend Proficiency (Spring Boot 3)</span>
                    <span className="text-[#d4c5a9] font-mono font-bold">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#121210] rounded-full overflow-hidden border border-[#2a2925]">
                    <div className="h-full bg-gradient-to-r from-[#d4c5a9] to-[#f5f2eb] rounded-full w-[85%]"></div>
                  </div>
                </div>

                {/* React & Modern UI */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a6a095] font-medium">Frontend React & Recharts</span>
                    <span className="text-[#e3dac9] font-mono">React 18 & 19</span>
                  </div>
                  <div className="h-2 w-full bg-[#121210] rounded-full overflow-hidden border border-[#2a2925]">
                    <div className="h-full bg-gradient-to-r from-[#cbb994] to-[#d4c5a9] rounded-full w-[80%]"></div>
                  </div>
                </div>

                {/* Docker Containerization */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#a6a095] font-medium">Containerization & Compose</span>
                    <span className="text-emerald-400 font-mono font-bold">100% Dockerized</span>
                  </div>
                  <div className="h-2 w-full bg-[#121210] rounded-full overflow-hidden border border-[#2a2925]">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#cbb994] rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="mt-6 pt-5 border-t border-[#2a2925] grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#171715]/60 border border-[#2a2925]">
                  <div className="text-xl font-bold font-mono text-[#e3dac9]">7.5 / 10</div>
                  <div className="text-[11px] text-[#a6a095] mt-0.5">Academic CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-[#171715]/60 border border-[#2a2925]">
                  <div className="text-xl font-bold font-mono text-[#d4c5a9]">4+ Modules</div>
                  <div className="text-[11px] text-[#a6a095] mt-0.5">HRMS Platform</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
