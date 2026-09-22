import React, { useState, memo } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


import { PORTFOLIO_DATA } from "../data/portfolioData";

// --- Status Message Component (Unchanged) ---
const StatusMessage = ({ status, message }) => {
  if (status === "idle") return null;

  const variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
        status === "success"
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
          : status === "error"
          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
      }`}
    >
      {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
      {status === "success" && <CheckCircle2 className="w-4 h-4" />}
      {status === "error" && <AlertCircle className="w-4 h-4" />}
      {message}
    </motion.div>
  );
};


// --- Main Contact Component ---
function ContactComponent() {
  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "Sending your message..." });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      PORTFOLIO_DATA.personal.web3formsAccessKey;

    // If access key is configured, send via Web3Forms API
    if (accessKey && accessKey.trim() !== "") {
      try {
        const payload = {
          access_key: accessKey.trim(),
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `Portfolio Contact from ${data.name}`,
          from_name: "Portfolio Contact Form",
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setFormState({
            status: "success",
            message: "Thank you! Your message has been sent directly to my inbox.",
          });
          e.target.reset();
          setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
          return;
        } else {
          throw new Error(result.message || "Failed to send via form service");
        }
      } catch (err) {
        // Fallback to mail client if API fails
        const subject = encodeURIComponent(`Portfolio Message from ${data.name || "Visitor"}`);
        const body = encodeURIComponent(
          `Hi Kavin,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`
        );
        window.open(
          `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`,
          "_blank"
        );
        setFormState({
          status: "success",
          message: "Opening your email app to send the message directly...",
        });
        setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
        return;
      }
    }

    // Default fallback when Web3Forms key is not yet set
    const subject = encodeURIComponent(`Portfolio Message from ${data.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Kavin,\n\n${data.message}\n\nFrom: ${data.name} (${data.email})`
    );
    window.open(
      `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
    setFormState({
      status: "success",
      message: "Opening your email client to complete sending the message...",
    });
    setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 w-full max-w-xl"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-foreground">
              <span className="inline-flex items-center justify-center gap-3">
                {/* THE FIX: Applying a responsive 'top' utility for perfect alignment */}
                <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-primary drop-shadow-sm flex-shrink-0 relative top-px sm:top-0.5" />
                <span>Contact</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Whether you want to discuss a project, ask a question, or just say hello, I’d love to hear from you. Fill out the form below or email me directly. Let’s connect!
            </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="flex justify-center items-center gap-2 text-primary text-lg font-medium hover:underline transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
            {PORTFOLIO_DATA.personal.email}
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={formContainerVariants}
          className="w-full p-6 sm:p-8 bg-white/90 dark:bg-neutral-900/80 border border-border/40 dark:border-border/60 rounded-2xl shadow space-y-4"
        >
          <AnimatePresence>
            <motion.div key={formState.status} variants={itemVariants} layout>
              <StatusMessage status={formState.status} message={formState.message} />
            </motion.div>
          </AnimatePresence>
          
          <motion.div variants={itemVariants}>
            <Input type="text" name="name" placeholder="Your Name" required disabled={formState.status === "loading"} className="text-foreground disabled:opacity-50" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input type="email" name="email" placeholder="Your Email" required disabled={formState.status === "loading"} className="text-foreground disabled:opacity-50" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea rows={4} name="message" placeholder="Your Message" required disabled={formState.status === "loading"} className="resize-y text-foreground disabled:opacity-50" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button type="submit" disabled={formState.status === "loading"} className="w-full text-lg font-semibold py-3 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              {formState.status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>

        {/* Quick Direct Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full text-sm">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_DATA.personal.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-foreground transition-all duration-200 border border-neutral-200 dark:border-neutral-700 font-medium shadow-xs"
          >
            <span>Compose in Gmail</span>
            <ExternalLink className="w-3.5 h-3.5 text-primary" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-foreground transition-all duration-200 border border-neutral-200 dark:border-neutral-700 font-medium shadow-xs"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>Open in Mail App</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default memo(ContactComponent);