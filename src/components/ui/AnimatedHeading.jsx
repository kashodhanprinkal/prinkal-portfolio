"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading({ 
  children, 
  className = "",
  variant = "gold",
}) {
  const text = typeof children === "string" ? children : "";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const variants = {
    gold: {
      gradient: "from-[#B5773A] via-[#C9A882] to-[#8B6914] dark:from-[#C9A882] dark:via-[#E8D5B7] dark:to-[#B5773A]",
      shadow: "drop-shadow-[0_2px_8px_rgba(181,119,58,0.15)] dark:drop-shadow-[0_0_40px_rgba(181,119,58,0.15)]",
      dot: "bg-[#B5773A]/40 dark:bg-[#C9A882]/50",
    },
    purple: {
      gradient: "from-purple-600 via-purple-500 to-purple-700 dark:from-purple-300 dark:via-pink-300 dark:to-purple-400",
      shadow: "drop-shadow-[0_2px_8px_rgba(168,85,247,0.15)] dark:drop-shadow-[0_0_40px_rgba(168,85,247,0.15)]",
      dot: "bg-purple-500/40 dark:bg-purple-400/50",
    },
    blue: {
      gradient: "from-blue-600 via-blue-500 to-blue-700 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-400",
      shadow: "drop-shadow-[0_2px_8px_rgba(59,130,246,0.15)] dark:drop-shadow-[0_0_40px_rgba(59,130,246,0.15)]",
      dot: "bg-blue-500/40 dark:bg-blue-400/50",
    },
  };

  const current = variants[variant] || variants.gold;

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={container}
        className="group inline-flex flex-col items-center"
      >
        <motion.h2
          className={`
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            tracking-tight
            text-center
            bg-gradient-to-r
            ${current.gradient}
            bg-[length:200%_100%]
            bg-clip-text
            text-transparent
            ${current.shadow}
          `}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "50%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-4 h-[3px] rounded-full overflow-visible"
        >
          <div className={`
            w-full h-full rounded-full
            bg-gradient-to-r
            ${current.gradient}
          `} />
          
          <div className={`
            absolute inset-0 rounded-full blur-md opacity-30
            bg-gradient-to-r
            ${current.gradient}
          `} />
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-3 flex items-center gap-2"
        >
          {[1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${current.dot}`}
              animate={{
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}