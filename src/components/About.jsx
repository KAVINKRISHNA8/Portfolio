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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            About <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">My Journey</span>
          </h2>
          <p className="text-[#6b6158] text-base">
            Bridging architectural rigor with scalable enterprise backend and reactive frontend engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Narrative Story & 4 Feature Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 border border-[#e8dfd5]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-3 border-b border-[#e8dfd5]">
                <div className="w-12 h-12 rounded-2xl bg-[#f5f0e8] border border-[#ded3c6] flex items-center justify-center text-[#1f1c19] shrink-0 shadow-sm">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1f1c19]">
                    Software Engineer & Systems Builder
                  </h3>
                  <p className="text-xs font-mono text-[#8c7b6c] mt-0.5">
                    B.E. CSE • Karpagam College of Engineering
                  </p>
                </div>
              </div>

              <p className="text-[#5c544d] text-base leading-relaxed">
                I am a Computer Science and Engineering student at{' '}
                <span className="text-[#1f1c19] font-semibold">{personalInfo.college}</span> (Coimbatore), 
                maintaining an academic standing of{' '}
                <span className="text-[#1f1c19] font-bold">{personalInfo.cgpa}</span>. 
                My focus centers on constructing resilient backend microservices, robust RESTful APIs, and responsive, interactive user experiences.
              </p>

              <p className="text-[#5c544d] text-base leading-relaxed">
                My engineering approach is built around enterprise standards: architecting distributed systems with{' '}
                <span className="text-[#1f1c19] font-semibold">Java 17</span> and{' '}
                <span className="text-[#1f1c19] font-semibold">Spring Boot 3</span>, enforcing end-to-end security via{' '}
                <span className="text-[#1f1c19] font-semibold">JWT Authentication & RBAC</span>, and deploying through{' '}
                <span className="text-[#1f1c19] font-semibold">Docker & Docker Compose</span>.
              </p>

              <p className="text-[#5c544d] text-base leading-relaxed">
                Whether synchronizing real-time agricultural pricing streams across 9 microservices or engineering enterprise HRMS modules for hackathon platforms, I emphasize clean code, zero downtime, and intuitive dashboards.
              </p>

              {/* 4 Pillars Grid (2x2) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusPillars.map((pillar, idx) => {
                  const IconComponent = iconMap[pillar.icon] || Server;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5] hover:border-[#c5b19e] transition-colors"
                    >
                      <IconComponent size={20} className="text-[#8c7b6c] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#1f1c19] font-heading">
                          {pillar.title}
                        </div>
                        <div className="text-xs text-[#6b6158] mt-0.5 leading-normal">
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
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[#e8dfd5] relative overflow-hidden bg-[#ffffff]">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e8dfd5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f0e8] border border-[#ded3c6] text-[#1f1c19] flex items-center justify-center font-bold shadow-sm">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1f1c19] font-heading">
                      Technical Readiness
                    </h4>
                    <span className="text-xs text-[#6b6158] font-sans">
                      Architecture & Stack Metrics
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-[#ede5dc] border border-[#ded3c6] text-[#1f1c19] text-xs font-mono font-bold">
                  Enterprise
                </div>
              </div>

              {/* Metric Progress Bars */}
              <div className="space-y-5 font-sans">
                {/* Microservices */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#5c544d] font-medium">Microservices Architected</span>
                    <span className="text-[#1f1c19] font-mono font-bold">9 Services (Live Sync)</span>
                  </div>
                  <div className="h-2 w-full bg-[#ede5dc] rounded-full overflow-hidden border border-[#e8dfd5]">
                    <div className="h-full bg-gradient-to-r from-[#8c7b6c] to-[#1f1c19] rounded-full w-[90%] shadow-sm"></div>
                  </div>
                </div>

                {/* Spring Boot & Java */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#1f1c19] font-semibold">Backend Proficiency (Spring Boot 3)</span>
                    <span className="text-[#5c544d] font-mono font-bold">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#ede5dc] rounded-full overflow-hidden border border-[#e8dfd5]">
                    <div className="h-full bg-gradient-to-r from-[#8c7b6c] to-[#1f1c19] rounded-full w-[85%]"></div>
                  </div>
                </div>

                {/* React & Modern UI */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#5c544d] font-medium">Frontend React & Recharts</span>
                    <span className="text-[#1f1c19] font-mono">React 18 & 19</span>
                  </div>
                  <div className="h-2 w-full bg-[#ede5dc] rounded-full overflow-hidden border border-[#e8dfd5]">
                    <div className="h-full bg-gradient-to-r from-[#c5b19e] to-[#8c7b6c] rounded-full w-[80%]"></div>
                  </div>
                </div>

                {/* Docker Containerization */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#5c544d] font-medium">Containerization & Compose</span>
                    <span className="text-emerald-700 font-mono font-bold">100% Dockerized</span>
                  </div>
                  <div className="h-2 w-full bg-[#ede5dc] rounded-full overflow-hidden border border-[#e8dfd5]">
                    <div className="h-full bg-gradient-to-r from-emerald-600 to-[#1f1c19] rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="mt-6 pt-5 border-t border-[#e8dfd5] grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5]">
                  <div className="text-xl font-bold font-mono text-[#1f1c19]">7.5 / 10</div>
                  <div className="text-[11px] text-[#6b6158] mt-0.5">Academic CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5]">
                  <div className="text-xl font-bold font-mono text-[#1f1c19]">4+ Modules</div>
                  <div className="text-[11px] text-[#6b6158] mt-0.5">HRMS Platform</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
