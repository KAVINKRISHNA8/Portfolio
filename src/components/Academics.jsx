import React, { memo } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
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

const TimelineCard = memo(({ education, index, isLast }) => {
  const { institution, link, program, year, scoreLabel, score, location, description, coursework } = education;

  return (
    <motion.div variants={itemVariants} className="relative flex items-start gap-4 sm:gap-8 group">
      {/* Timeline Node & Vertical Track */}
      <div className="flex flex-col items-center flex-shrink-0 relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary shadow-md group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[140px] bg-gradient-to-b from-primary/40 to-border/40 mt-2" />
        )}
      </div>

      {/* Card Content */}
      <div className="flex-grow pb-10 sm:pb-12">
        <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {institution}
            </h3>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <Calendar className="w-3.5 h-3.5" />
              <span>{year}</span>
            </div>
          </div>

          <div className="text-base font-semibold text-foreground/90 mb-1">
            {program}
          </div>

          {location && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{location}</span>
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {coursework && coursework.length > 0 && (
            <div className="mb-4 pt-3 border-t border-border/40">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Core Coursework & Subjects:
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-foreground/80 border border-neutral-200 dark:border-neutral-700"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 pt-3 border-t border-border/40 text-sm">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground/90">{scoreLabel}:</span>
            <span className="text-primary font-bold px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20">
              {score}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
TimelineCard.displayName = "TimelineCard";

const AcademicsComponent = memo(function Academics() {
  const { academics } = PORTFOLIO_DATA;

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-3xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Academic Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
            Education &{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-500 dark:from-white dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Rigorous foundations in Computer Science and Engineering, combining core theory, mathematics, and distributed software engineering.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="w-full">
          {academics.map((education, index) => (
            <TimelineCard
              key={`${education.institution}-${index}`}
              education={education}
              index={index}
              isLast={index === academics.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
});

AcademicsComponent.displayName = "Academics";

export default AcademicsComponent;