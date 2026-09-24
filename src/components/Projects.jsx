import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            Featured <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Architecting production-ready full-stack applications with high-concurrency microservices, AI analytics, and clean containerized deployments.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-[#2a2b36] flex flex-col justify-between hover:border-[#f59e0b]/50 transition-all duration-300 group"
            >
              <div>
                {/* Header row: Badge & Year */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-xl text-xs font-mono font-semibold bg-[#f59e0b]/15 border border-[#f59e0b]/35 text-[#fbbf24]">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-[#a1a1aa]">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#f8fafc] group-hover:text-[#fbbf24] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#d97706] font-mono mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architectural Points */}
                <div className="space-y-2.5 mb-6">
                  {project.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#a1a1aa] leading-normal">
                      <CheckCircle2 size={16} className="text-[#fbbf24] mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#17181f] border border-[#2a2b36] text-[#fbbf24] group-hover:border-[#383947]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-[#2a2b36] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-[#f8fafc] transition-colors py-2 px-3 rounded-lg hover:bg-[#1f2029] border border-transparent hover:border-[#2a2b36]"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#17181f] hover:bg-[#f59e0b] hover:text-[#0d0d11] text-[#fbbf24] border border-[#2a2b36] hover:border-[#f59e0b] transition-all font-sans shadow-sm"
                >
                  <span>Architecture Deep Dive</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Architecture Deep Dive */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
            <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-[#2a2b36] relative max-h-[90vh] overflow-y-auto bg-[#17181f]/95">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#1f2029] border border-[#2a2b36] text-[#a1a1aa] hover:text-[#f8fafc]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#f59e0b]/15 border border-[#f59e0b]/35 text-[#fbbf24]">
                  {activeModalProject.badge}
                </span>
                <span className="text-xs font-mono text-[#a1a1aa]">
                  {activeModalProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#f8fafc] mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-[#d97706] font-mono mb-4">
                {activeModalProject.subtitle}
              </p>

              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">
                {activeModalProject.description}
              </p>

              <h4 className="text-sm font-bold font-heading text-[#f8fafc] uppercase tracking-wider mb-3">
                Key Engineering Highlights
              </h4>
              <div className="space-y-3 mb-6 bg-[#131318] p-4 rounded-2xl border border-[#2a2b36]">
                {activeModalProject.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a1a1aa]">
                    <span className="text-[#fbbf24] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold font-heading text-[#f8fafc] uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#17181f] border border-[#2a2b36] text-[#fbbf24]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2a2b36]">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1f2029] text-[#f8fafc] border border-[#2a2b36] text-xs font-semibold hover:border-[#f59e0b] transition-colors flex items-center gap-2"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Source</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-[#f59e0b] text-[#0d0d11] text-xs font-bold hover:bg-[#fbbf24] transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
