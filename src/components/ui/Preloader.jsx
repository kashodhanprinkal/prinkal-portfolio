"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + 2, 100);
      });
    }, 35);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setLoading(false);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FAF8F5] dark:bg-[#0F0F10]"
        >
          <div className="flex flex-col items-center text-center px-6">

            {/* Hey */}
            <motion.p
              initial={{ opacity: 0, y: 20, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "var(--font-caveat)" }}
              className="text-4xl md:text-5xl text-neutral-500 dark:text-neutral-400"
            >
              hey,
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              style={{ fontFamily: "var(--font-syne)" }}
              className="mt-2 text-6xl md:text-8xl font-bold tracking-tight leading-none text-neutral-900 dark:text-white"
            >
              Prinkal Kashodhan
            </motion.h1>

            {/* Hand Drawn Underline */}
            <motion.svg
              width="380"
              height="42"
              viewBox="0 0 380 42"
              className="mt-2 w-64 md:w-80 overflow-visible"
            >
              {/* stroke 1 */}
              <motion.path
                d="M15 14 C70 6,140 22,200 14 S300 5,365 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                className="text-neutral-900 dark:text-white"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: .7,
                  ease: "easeInOut",
                }}
              />

              {/* stroke 2 */}
              <motion.path
                d="M18 20 C90 28,150 10,220 20 S310 26,360 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-neutral-900 dark:text-white opacity-80"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: .18,
                  duration: .8,
                }}
              />

              {/* stroke 3 */}
              <motion.path
                d="M20 26 C80 18,160 34,230 24 S320 18,350 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="text-neutral-900 dark:text-white opacity-50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: .35,
                  duration: .75,
                }}
              />
            </motion.svg>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .55,
                duration: .5,
              }}
              style={{ fontFamily: "var(--font-outfit)" }}
              className="mt-4 text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-400"
            >
              From ideas to interfaces.
            </motion.p>

            {/* Progress Line */}
            <div className="mt-12 w-72 md:w-80 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">

              <motion.div
                className="h-full bg-neutral-900 dark:bg-white"
                style={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: .25,
                }}
              />

            </div>

            {/* Loading */}
            <motion.div
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .25 }}
              style={{ fontFamily: "var(--font-outfit)" }}
              className="mt-8 flex flex-col items-center"
            >
              <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-neutral-500 dark:text-neutral-500">
                Loading Portfolio
              </p>

              <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
                {progress}%
              </h3>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}