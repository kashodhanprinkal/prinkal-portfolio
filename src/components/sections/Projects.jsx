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
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="mt-[-90]">
            <AnimatedHeading>Projects</AnimatedHeading>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-8">
            A collection of projects showcasing my skills , and continuous learning .
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-8">

          {/* Left */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition hover:scale-110 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition hover:scale-110 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
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
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

{/* GitHub CTA - Sticker Style */}
<motion.div
  initial={{ opacity: 0, scale: 0.95, rotate: -2

   }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, type: "spring" }}
  className="relative mx-auto mt-20 max-w-4xl rounded-3xl bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 px-8 py-7 shadow-lg shadow-purple-100/50"
>
  {/* Decorative tape/sticker corners */}
  <div className="absolute -top-3 -left-3 h-8 w-8 rotate-[-15deg] bg-yellow-200/20 blur-[1px] shadow-sm" />
  <div className="absolute -top-3 -right-3 h-8 w-8 rotate-[15deg] bg-pink-200/80 blur-[1px] shadow-sm" />
  <div className="absolute -bottom-3 -left-3 h-8 w-8 rotate-[10deg] bg-blue-200/80 blur-[1px] shadow-sm" />
  <div className="absolute -bottom-3 -right-3 h-8 w-8 rotate-[-10deg] bg-green-200/80 blur-[1px] shadow-sm" />

  {/* Sticker dots */}
  <div className="absolute top-1/2 -left-1 h-3 w-3 rounded-full bg-yellow-400 opacity-50" />
  <div className="absolute top-1/3 -right-1 h-3 w-3 rounded-full bg-pink-400 opacity-50" />

  <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
    <p className="text-sm text-stone-700 text-center sm:text-left leading-relaxed">
      <span className="inline-block text-xl mr-1">🎨</span>
      <span className="font-medium">What's brewing?</span>
      <br className="hidden sm:block" />
      <span className="inline-flex items-center gap-1 flex-wrap justify-center sm:justify-start">
        <HighlightText text="Explore" variant="circle" className="text-base" />
        <span>my</span>
        <HighlightText text="GitHub" variant="underline" className="text-base" />
        <span>→</span>
        <HighlightText text="more magic" variant="highlight" className="text-base" />
        <span className="inline-block text-sm animate-spin-slow">✨</span>
      </span>
    </p>

    <motion.a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.04,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
      className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border-2 border-[#393939] bg-white px-6 py-2.5 text-sm font-medium text-[#2D2016] shadow-[4px_4px_0px_0px_#2D2016] transition-all hover:bg-[#2D2016] hover:text-white hover:shadow-[4px_4px_0px_0px_#8B5CF6]"
    >
      <FaGithub className="text-lg" />
      <span>GitHub</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  </div>
</motion.div>

      </div>
    </section>
  );
}