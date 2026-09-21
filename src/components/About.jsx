import React, { useState, useEffect, memo, useMemo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  GraduationCap,
  MapPin,
  Code2,
  Copy,
  Check,
  Sparkles,
  Layers,
  Award,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Memoized social link component
const SocialLink = memo(({ href, icon, title, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    title={title}
    aria-label={title}
  >
    {icon}
  </a>
));
SocialLink.displayName = "SocialLink";

// Memoized tag component
const Tag = memo(({ tag }) => (
  <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:border-primary/40 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all shadow-sm">
    {tag}
  </span>
));
Tag.displayName = "Tag";

export default memo(function About() {
  const { personal, socialLinks, tags } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Cycling roles
  useEffect(() => {
    if (!personal.roles || personal.roles.length === 0) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinksElements = useMemo(
    () =>
      socialLinks.map(({ platform, url }) => {
        let icon = <Mail className="w-5 h-5" />;
        if (platform === "GitHub") icon = <Github className="w-5 h-5" />;
        if (platform === "LinkedIn") icon = <Linkedin className="w-5 h-5" />;
        if (platform === "LeetCode") icon = <Code2 className="w-5 h-5" />;

        return (
          <SocialLink
            key={platform}
            href={url}
            icon={icon}
            title={platform}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110 hover:border-primary/50 transition-all shadow-sm"
          />
        );
      }),
    [socialLinks]
  );

  const tagElements = useMemo(
    () => tags.map((tag) => <Tag key={tag} tag={tag} />),
    [tags]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[85vh] flex flex-col items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-14 w-full max-w-5xl mb-12">
        {/* Profile Image with Ambient Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex-shrink-0 group"
        >
          {/* Ambient Glow Backdrop */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse" />

          <div
            className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl bg-neutral-200 dark:bg-neutral-800 ring-2 ring-primary/30 group-hover:scale-105 transition-transform duration-300"
            tabIndex={0}
            aria-label={`Profile photo of ${personal.name}`}
          >
            <img
              src={personal.avatar}
              alt={personal.name}
              loading="eager"
              decoding="async"
              className="object-cover w-full h-full"
              style={{ aspectRatio: "1/1", objectPosition: "center 15%" }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          {/* Status Indicator */}
          {personal.status && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {personal.status}
              </span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-2 text-foreground text-center md:text-left tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-neutral-900 via-primary to-indigo-600 dark:from-white dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Dynamic Role Cycling */}
          <div className="h-8 mb-3 flex items-center justify-center md:justify-start">
            <span className="text-lg sm:text-xl text-muted-foreground mr-2 font-medium">I am a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-lg sm:text-xl font-bold text-primary underline decoration-primary/40 underline-offset-4"
              >
                {personal.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>{personal.college}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{personal.location}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-5 text-center md:text-left">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {tagElements}
          </div>

          {/* Action Links & Copy Email */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            {socialLinksElements}

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all shadow-sm font-medium text-sm"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Email Copied!
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-foreground" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="mailto:kavinkrishna2007@gmail.com"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-md font-semibold text-sm"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Metrics & Highlights Grid */}
      {personal.stats && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-border/40"
        >
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-primary tracking-tight mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.highlight}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
});