import React, { memo } from "react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  Email: Mail,
};

const Footer = memo(() => {
  const { personal, socialLinks } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted/30 border-t border-border pt-8 pb-10 mt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5">
        <div className="text-sm text-muted-foreground">
          © {currentYear} {personal.name}. All rights reserved.
        </div>
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ platform, url }) => {
            const Icon = iconMap[platform] || Mail;
            return (
              <a
                key={platform}
                href={url}
                title={platform}
                aria-label={platform}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;