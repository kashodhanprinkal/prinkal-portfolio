"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Sun, Moon } from "lucide-react";
import { Story_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const storyScript = Story_Script({
  subsets: ["latin"],
  weight: "400",
});

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const EXPAND_SCROLL_THRESHOLD = 80;
const BLUR_SCROLL_THRESHOLD = 20;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    },
  },
};

export default function Navbar() {
  const [isExpanded, setExpanded] = React.useState(true);
  const [isDark, setIsDark] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    setIsScrolled(latest > BLUR_SCROLL_THRESHOLD);

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (e) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* Name / Logo - left */}
      <span className={cn(storyScript.className, "text-3xl text-foreground whitespace-nowrap ")}>
        Prinkal    kashodhan
      </span>

      {/* Collapsing nav - center */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "relative flex items-center overflow-hidden rounded-full h-10",
          isExpanded ? "px-2" : "px-0",
          !isExpanded && "cursor-pointer justify-center bg-muted/60"
        )}
      >
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1 whitespace-nowrap"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5 text-foreground" />
          </motion.div>
        </div>
      </motion.nav>

      {/* Theme toggle - right 
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex items-center justify-center h-9 w-9 rounded-full text-foreground hover:bg-muted/60 transition-colors"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>*/}
    </div>
  );
}