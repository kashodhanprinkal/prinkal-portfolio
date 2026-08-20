"use client";

import ParticleOrbitEffect from "@/components/lightswind/ParticleOrbitEffect";
import RotatingText from "../ui/RotatingText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden flex items-center">
      {/* Background */}
      <ParticleOrbitEffect colorRange={[1, 360]} />

      {/* Hero Content */}
      <div
        className="
          relative z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
          py-24
          sm:py-28
          md:py-32
          text-center
          md:text-left
          pointer-events-none
        "
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            font-medium
            text-muted-foreground
            leading-relaxed
            max-w-xl
            mx-auto
            md:mx-0
          "
        >
          Hey!! I turn ideas into reality....
        </motion.p>

       {/* Rotating Text */}
<p
  className="
    w-full
    max-w-full
    text-[clamp(1.8rem,7vw,5rem)]
    leading-[1.3]
    font-bold
    tracking-tight

    text-transparent
    [-webkit-text-stroke:1.2px_theme(colors.stone.900)]
    sm:[-webkit-text-stroke:1.7px_theme(colors.stone.900)]
    md:[-webkit-text-stroke:2px_theme(colors.stone.900)]

    text-center
    md:text-left
    whitespace-normal
    break-words
    overflow-visible
  "
>
  <RotatingText
    words={[
      "Frontend Developer",
      "React.js Developer",
      "JavaScript Developer",
      "Web Designer",
    ]}
    interval={2200}
  />
</p>

        {/* Description 
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            mt-3
            sm:mt-4
            max-w-xl
            mx-auto
            md:mx-0
            text-sm
            sm:text-base
            md:text-lg
            text-muted-foreground
            leading-relaxed
          "
        >
          I build responsive, modern and user-friendly web experiences
          using React, JavaScript and modern web technologies.
        </motion.p>*/}

        {/* CTA */}
<div
  className="
    mt-6 sm:mt-8
    flex
    flex-row
    flex-wrap
    items-center
    justify-center md:justify-start
    gap-3
    pointer-events-auto
  "
>
  {/* Hire Me */}
  <motion.a
    href="#contact"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="
      group
      relative
      px-5 sm:px-6
      py-2.5
      text-sm sm:text-base
      bg-foreground
      text-background
      rounded-full
      font-medium
      overflow-hidden
      transition-shadow
      hover:shadow-md
      hover:shadow-foreground/20
    "
  >
    <span className="relative z-10">Hire Me</span>

    <span
      className="
        absolute inset-0
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
      "
    />
  </motion.a>

  {/* Resume */}
  <motion.a
    href="/prinkal.resume.pdf"
    download="Prinkal_Kashodhan_Resume.pdf"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="
      px-5 sm:px-6
      py-2.5
      text-sm sm:text-base
      border-2
      border-border
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