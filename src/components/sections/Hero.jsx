"use client";

import ParticleOrbitEffect from "@/components/lightswind/ParticleOrbitEffect";
import TypingEffect from "../ui/TypingEffect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleOrbitEffect colorRange={[1, 360]} />

      <div
        className="
          relative z-10
          w-full
          px-6
          md:pl-16
          lg:pl-24
          text-center md:text-left
          pointer-events-none
        "
      >
        {/* Greeting */}
        <div>
          <h3 className="text-xl md:text-2xl whitespace-nowrap">
            Hey!! I turn ideas into reality....
          </h3>
        </div>

        {/* Typing Effect */}
        <div
          className="
            relative
            mt-2
            h-[60px] md:h-[80px]
            w-[340px] sm:w-[500px] md:w-[620px]
            max-w-full
            mx-auto md:mx-0
            flex items-center
          "
        >
          <p
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              text-4xl md:text-6xl
              text-stone-900
              font-mono
              whitespace-nowrap
            "
          >
            <TypingEffect
              words={[
                "Frontend Developer",
                "JavaScript Developer",
                "React.js Developer",
                "Responsive Web Designer",
              ]}
              typingSpeed={100}
              pauseTime={1500}
            />
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start pointer-events-auto">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              group relative
              px-8 py-3
              bg-foreground
              text-background
              rounded-full
              font-medium
              overflow-hidden
              transition-shadow
              hover:shadow-lg
              hover:shadow-foreground/20
            "
          >
            <span className="relative z-10">
              Hire Me
            </span>

            <span
              className="
                absolute inset-0
                bg-gradient-to-r
                from-blue-500 to-purple-500
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
            />
          </motion.a>

          <motion.a
            href="/prinkal.resume.pdf"
            download="Prinkal_Kashodhan_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3
              border-2 border-border
              rounded-full
              font-medium
              hover:bg-muted
              hover:border-foreground/30
              transition-colors
            "
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}