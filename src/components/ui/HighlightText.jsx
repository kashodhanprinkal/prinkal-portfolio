"use client";

import { motion } from "framer-motion";

export default function HighlightText({ text, className = "", variant = "highlight" }) {
  if (variant === "underline") {
    return (
      <span className={`relative inline-block font-mono font-semibold text-foreground ${className}`}>
        {text}
        <motion.svg
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          className="absolute left-0 -bottom-2 w-full h-3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.path
            d="M2 8 C 20 2, 40 10, 60 5 S 90 3, 98 7"
            fill="none"
            stroke="url(#underline-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="underline-gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </motion.svg>
      </span>
    );
  }

  if (variant === "outline") {
    return (
      <motion.span
        whileHover={{ rotate: [-1, 1, -1, 0], scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className={`inline-block font-mono font-semibold text-blue-700 dark:text-blue-300 border-2 border-purple-600/70 px-2 py-0.5 rounded-full -rotate-1 ${className}`}
      >
        {text}
      </motion.span>
    );
  }

  // default: highlight (marker-style, hand-drawn feel)
  return (
    <motion.span
      whileHover={{ rotate: [0, -1.5, 1.5, 0] }}
      transition={{ duration: 0.4 }}
      className={`relative inline-block font-mono font-semibold text-foreground px-1.5 py-0.5 rounded-md -rotate-1 bg-gradient-to-r from-blue-600/50 to-purple-600/50 ${className}`}
      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
    >
      {text}
    </motion.span>
  );
}