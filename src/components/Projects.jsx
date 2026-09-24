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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            Featured <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-[#6b6158] text-base">
            Architecting production-ready full-stack applications with high-concurrency microservices, AI analytics, and clean containerized deployments.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-[#e8dfd5] flex flex-col justify-between hover:border-[#c5b19e] transition-all duration-300 group bg-[#ffffff]"
            >
              <div>
                {/* Header row: Badge & Year */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-xl text-xs font-mono font-semibold bg-[#ede5dc] border border-[#ded3c6] text-[#443a32]">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8c8278]">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#1f1c19] group-hover:text-[#5c544d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#8c7b6c] font-mono mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-[#5c544d] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architectural Points */}
                <div className="space-y-2.5 mb-6">
                  {project.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#5c544d] leading-normal">
                      <CheckCircle2 size={16} className="text-[#8c7b6c] mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#f5f0e8] border border-[#e8dfd5] text-[#443a32] group-hover:border-[#c5b19e]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-[#e8dfd5] flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#5c544d] hover:text-[#1f1c19] transition-colors py-2 px-3 rounded-lg hover:bg-[#f5f0e8] border border-transparent hover:border-[#e8dfd5]"
                >
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#1f1c19] hover:bg-[#38332e] text-[#fbf9f5] border border-[#1f1c19] transition-all font-sans shadow-sm"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
            <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-[#e8dfd5] relative max-h-[90vh] overflow-y-auto bg-[#ffffff] shadow-2xl">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[#f5f0e8] border border-[#e8dfd5] text-[#5c544d] hover:text-[#1f1c19]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#ede5dc] border border-[#ded3c6] text-[#443a32]">
                  {activeModalProject.badge}
                </span>
                <span className="text-xs font-mono text-[#8c8278]">
                  {activeModalProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-[#1f1c19] mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-[#8c7b6c] font-mono mb-4">
                {activeModalProject.subtitle}
              </p>

              <p className="text-[#5c544d] text-sm leading-relaxed mb-5">
                {activeModalProject.description}
              </p>

              <h4 className="text-sm font-bold font-heading text-[#1f1c19] uppercase tracking-wider mb-3">
                Key Engineering Highlights
              </h4>
              <div className="space-y-3 mb-6 bg-[#f8f4ee] p-4 rounded-2xl border border-[#e8dfd5]">
                {activeModalProject.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5c544d]">
                    <span className="text-[#8c7b6c] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold font-heading text-[#1f1c19] uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#f5f0e8] border border-[#e8dfd5] text-[#443a32]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e8dfd5]">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#f5f0e8] text-[#1f1c19] border border-[#e8dfd5] text-xs font-semibold hover:border-[#c5b19e] transition-colors flex items-center gap-2"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Source</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-[#1f1c19] text-[#fbf9f5] text-xs font-bold hover:bg-[#38332e] transition-colors shadow-sm"
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
