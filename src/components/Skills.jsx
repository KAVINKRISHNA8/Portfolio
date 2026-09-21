import React, { useState, useCallback, useMemo, memo } from "react";
import {
  Code,
  Layers,
  Server,
  Database,
  ShieldCheck,
  BrainCircuit,
  Wrench,
  Settings2,
  Search,
  X,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Staggered Entrance Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const iconMap = {
  Code: <Code className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const SkillTag = memo(({ tag, onMouseEnter, onMouseLeave, isHovered, isHighlighted }) => (
  <span
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border cursor-default ${
      isHovered || isHighlighted
        ? "bg-primary text-primary-foreground border-primary scale-105 shadow-md ring-2 ring-primary/20"
        : "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border-neutral-300/80 dark:border-neutral-700/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:border-primary/40"
    }`}
  >
    {tag}
  </span>
));
SkillTag.displayName = "SkillTag";

const SkillSection = memo(({ section, hoveredTag, onTagHover, onTagLeave, searchQuery }) => {
  const { icon, category, skills } = section;
  const iconElement = iconMap[icon] || <Code className="w-5 h-5" />;

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return skills;
    const q = searchQuery.toLowerCase().trim();
    return skills.filter((s) => s.toLowerCase().includes(q));
  }, [skills, searchQuery]);

  if (filteredSkills.length === 0 && searchQuery.trim()) {
    return null;
  }

  return (
    <motion.div
      variants={itemVariants}
      layout
      className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-sm">
              {iconElement}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {category}
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-muted-foreground border border-border">
            {skills.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {skills.map((tag, i) => {
            const tagId = `${category}-${i}`;
            const isHovered = hoveredTag === tagId;
            const isHighlighted =
              searchQuery.trim() !== "" &&
              tag.toLowerCase().includes(searchQuery.toLowerCase().trim());

            return (
              <SkillTag
                key={tag}
                tag={tag}
                isHovered={isHovered}
                isHighlighted={isHighlighted}
                onMouseEnter={() => onTagHover(tagId)}
                onMouseLeave={onTagLeave}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});
SkillSection.displayName = "SkillSection";

const SkillsComponent = memo(function Skills() {
  const [hoveredTag, setHoveredTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTagHover = useCallback((tagId) => setHoveredTag(tagId), []);
  const handleTagLeave = useCallback(() => setHoveredTag(null), []);

  const { skills } = PORTFOLIO_DATA;

  const categories = useMemo(() => ["All", ...skills.map((s) => s.category)], [skills]);

  const displayedSections = useMemo(() => {
    let result = skills;
    if (selectedCategory !== "All") {
      result = result.filter((s) => s.category === selectedCategory);
    }
    return result;
  }, [skills, selectedCategory]);

  const totalSkillCount = useMemo(
    () => skills.reduce((acc, s) => acc + s.skills.length, 0),
    [skills]
  );

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-5xl"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Technical Stack ({totalSkillCount} Skills)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-500 dark:from-white dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive foundation in full-stack web development, enterprise Java & Spring Boot backend services, distributed systems, and core computer science principles.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <motion.div variants={itemVariants} className="w-full max-w-2xl mb-8 space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., Spring Boot, React, Docker, SQL, JWT)..."
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-800 text-muted-foreground hover:text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid of Categorized Skills */}
        <motion.div
          variants={containerVariants}
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {displayedSections.map((section) => (
            <SkillSection
              key={section.category}
              section={section}
              hoveredTag={hoveredTag}
              onTagHover={handleTagHover}
              onTagLeave={handleTagLeave}
              searchQuery={searchQuery}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
});

SkillsComponent.displayName = "Skills";

export default SkillsComponent;