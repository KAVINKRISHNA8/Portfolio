import React, { memo } from "react";
import { Award, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Staggered Entrance Variants
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CertificationCard = memo(({ cert }) => (
  <motion.div
    variants={itemVariants}
    className="group relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-md hover:shadow-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden hover:border-primary/50"
  >
    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-primary/10 via-purple-500/5 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all pointer-events-none" />

    <div>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shadow-xs">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-foreground border border-neutral-200 dark:border-neutral-700">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>{cert.year}</span>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 tracking-tight">
        {cert.title}
      </h3>

      <div className="text-sm font-semibold text-primary mb-3">
        {cert.issuer}
      </div>

      {cert.location && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span>{cert.location}</span>
        </div>
      )}

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {cert.desc}
      </p>

      {cert.topics && cert.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cert.topics.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-foreground/80 border border-neutral-200 dark:border-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>

    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          Verified Credential
        </span>
        {cert.certId && (
          <span
            className="text-[10px] text-muted-foreground/80 font-mono mt-0.5 tracking-tight"
            title={`Credential ID: ${cert.certId}`}
          >
            ID: {cert.certId.slice(0, 16)}...
          </span>
        )}
      </div>
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
        {cert.type}
      </span>
    </div>
  </motion.div>
));
CertificationCard.displayName = "CertificationCard";

function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <motion.div
      variants={sectionContainerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-10"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Professional Growth & Credentials
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-500 dark:from-white dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
            Workshops
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          Specialized industry workshops, accredited training programs, and foundational tech credentials from leading institutions and platforms.
        </p>
      </motion.div>

      {/* Grid of Certifications */}
      <motion.div
        variants={sectionContainerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default memo(Certifications);
