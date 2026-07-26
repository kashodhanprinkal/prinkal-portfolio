"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading({ children, className = "" }) {
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
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            tracking-tight
            text-center
            bg-gradient-to-r
            from-gray-400
            via-gray-700
            to-black
            bg-[length:200%_100%]
            bg-clip-text
            text-transparent
          "
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

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "45%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[3px]
            mt-4
            rounded-full
            bg-gradient-to-r
            from-gray-300
            via-gray-600
            to-black
            group-hover:w-3/4
            transition-all
            duration-500
          "
        >
          <div className="absolute inset-0 blur-sm opacity-40 bg-inherit rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}