import React, { memo } from "react";
import {
  Code,
  ExternalLink,
  FolderKanban,
  CheckCircle2,
  Calendar,
  Sparkles,
  Server,
  Layers,
  ShieldCheck,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Staggered Entrance Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-md hover:shadow-2xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 overflow-hidden hover:border-primary/50"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-primary/10 via-indigo-500/5 to-transparent rounded-full blur-3xl group-hover:from-primary/20 transition-all pointer-events-none" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          {project.subtitle && (
            <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.subtitle}
            </span>
          )}
          <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-border">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
          {project.desc}
        </p>

        {/* Architectural Pillars / Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-5 p-3.5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/60 border border-border/50">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-primary" />
              Architecture Highlights:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.architectureHighlights.map((arch, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-neutral-900 text-primary border border-primary/20 shadow-xs"
                >
                  {arch}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Feature Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {project.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-border/40">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          {project.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-90 hover:scale-105 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              {link.label || "View on GitHub"}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

function ProjectsComponent() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-5xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Featured Work & Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
            Engineering &{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-500 dark:from-white dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Full-Stack Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade microservices, enterprise HR management systems, and reactive dashboards engineered with modern Java and React standards.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);