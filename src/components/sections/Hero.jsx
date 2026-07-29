"use client";

import ParticleOrbitEffect from "@/components/lightswind/ParticleOrbitEffect";
import TypingEffect from "../ui/TypingEffect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleOrbitEffect colorRange={[1, 360]} />

      <div className="relative z-10 px-6 pointer-events-none w-full md:w-auto text-center md:text-left">
        <h3 className="text-2xl md:text-4xl">
          Hi, I'm
        </h3>
        <h1 className="text-2xl font-extralight md:text-8xl text-gray-600">
          Prinkal Kashodhan....
        </h1>

        {/* Fixed-width box on mobile so the box itself never shifts, only the text inside changes */}
        <div className="mt-6 w-full max-w-[300px] sm:max-w-none mx-auto md:mx-0 overflow-hidden">
          <p className="text-4xl md:text-6xl text-stone-900 font-mono whitespace-nowrap">
            <TypingEffect
              words={["Frontend Developer", "JavaScript Developer", "React.js Developer", "Responsive Web Designer"]}
              typingSpeed={100}
              pauseTime={1500}
            />
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start pointer-events-auto">
          {/* Primary CTA — Hire Me */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-foreground text-background rounded-full font-medium overflow-hidden transition-shadow hover:shadow-lg hover:shadow-foreground/20"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          {/* Secondary — Download Resume */}
          <motion.a
            href="/prinkal.resume.pdf"
            download="Prinkal_Kashodhan_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-border rounded-full font-medium hover:bg-muted hover:border-foreground/30 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}