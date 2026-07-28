"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import HighlightText from "@/components/ui/HighlightText";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const maxIndex = Math.max(0, projects.length - 2);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) next();
    if (info.offset.x > 100) prev();
  };

  const visibleProjects = [
    projects[index],
    projects[index + 1] || projects[0],
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#F5F7F8]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="mt-[-90]">
            <AnimatedHeading variant="dark">Projects</AnimatedHeading>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-[#4A4A4A] text-lg leading-8">
            A collection of projects showcasing my skills, and continuous learning.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-8">

          {/* Left */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#E8ECEF] bg-white shadow-md transition hover:scale-110 hover:border-[#B5773A] hover:shadow-lg lg:flex"
          >
            <ChevronLeft className="h-5 w-5 text-[#1A1A1A]" />
          </button>

          {/* Right */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#E8ECEF] bg-white shadow-md transition hover:scale-110 hover:border-[#B5773A] hover:shadow-lg lg:flex"
          >
            <ChevronRight className="h-5 w-5 text-[#1A1A1A]" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  x: direction > 0 ? 250 : -250,
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: direction > 0 ? -250 : 250,
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                drag="x"
                dragElastic={0.15}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-[#B5773A]"
                  : "w-2.5 bg-[#D1D5DB]"
              }`}
            />
          ))}
        </div>

        {/* GitHub CTA - Sticker Style with Corner Tapes Only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative mx-auto mt-20 max-w-4xl rounded-3xl bg-white shadow-2xl shadow-black/10 border-2 border-[#E8ECEF]"
        >
          {/* Corner Tapes Only - No borders */}
          {/* Top Left Tape */}
          <div className="absolute -top-4 -left-4 h-12 w-12 rotate-[-20deg] bg-[#1A1A1A] shadow-lg border-2 border-white/30 rounded-sm flex items-center justify-center">
            <span className="text-white/20 text-xs">✦</span>
          </div>
          
          {/* Top Right Tape */}
          <div className="absolute -top-4 -right-4 h-12 w-12 rotate-[20deg] bg-[#1A1A1A] shadow-lg border-2 border-white/30 rounded-sm flex items-center justify-center">
            <span className="text-white/20 text-xs">✦</span>
          </div>
          
          {/* Bottom Left Tape */}
          <div className="absolute -bottom-4 -left-4 h-12 w-12 rotate-[15deg] bg-[#1A1A1A] shadow-lg border-2 border-white/30 rounded-sm flex items-center justify-center">
            <span className="text-white/20 text-xs">✦</span>
          </div>
          
          {/* Bottom Right Tape */}
          <div className="absolute -bottom-4 -right-4 h-12 w-12 rotate-[-15deg] bg-[#1A1A1A] shadow-lg border-2 border-white/30 rounded-sm flex items-center justify-center">
            <span className="text-white/20 text-xs">✦</span>
          </div>

          {/* Sticker dots - Edge decorations */}
          <div className="absolute top-1/2 -left-2 h-4 w-4 rounded-full bg-[#1A1A1A]/70 shadow-lg shadow-black/10" />
          <div className="absolute top-1/3 -right-2 h-4 w-4 rounded-full bg-[#1A1A1A]/70 shadow-lg shadow-black/10" />
          <div className="absolute bottom-1/4 left-1/4 h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/50" />
          <div className="absolute top-1/4 right-1/4 h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/50" />

          {/* Content */}
          <div className="relative px-10 py-10">
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              <p className="text-base font-bold text-[#1A1A1A] text-center sm:text-left leading-relaxed">
                <span className="inline-block text-2xl mr-2">⚡</span>
                <span className="text-lg font-black">What's brewing?</span>
                <br className="hidden sm:block" />
                <span className="inline-flex items-center gap-2 flex-wrap justify-center sm:justify-start mt-1">
                  <HighlightText text="Explore" variant="circle" className="text-base font-bold" />
                  <span className="text-[#1A1A1A]/70">my</span>
                  <HighlightText text="GitHub" variant="underline" className="text-base font-bold" />
                  <span className="text-[#1A1A1A]/70">→</span>
                  <HighlightText text="more magic" variant="highlight" className="text-base font-bold" />
                  <span className="inline-block text-base animate-spin-slow">✨</span>
                </span>
              </p>

              <motion.a
                href="https://github.com/kashodhanprinkal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.06,
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.92 }}
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-[#1A1A1A] bg-white px-8 py-3.5 text-base font-bold text-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-white hover:shadow-[6px_6px_0px_0px_#B5773A] hover:border-[#B5773A] relative overflow-hidden"
              >
                <FaGithub className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="tracking-wide relative z-10">GitHub</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5 group-hover:scale-110 relative z-10" />
              </motion.a>
            </div>

            {/* Bottom decorative text */}
            <div className="relative mt-6 text-center text-xs font-bold text-[#1A1A1A]/40 tracking-widest uppercase border-t-2 border-[#E8ECEF] pt-4">
              ✦  code • create • collaborate  ✦
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}