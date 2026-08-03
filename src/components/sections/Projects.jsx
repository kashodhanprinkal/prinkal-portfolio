"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2, ArrowRight, Eye } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { projects } from "@/data/projects";
import HighlightText from "@/components/ui/HighlightText";
import { FaGithub } from "react-icons/fa";  //

// Status badge colors
const statusColors = {
  Live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  Completed: "bg-sky-50 text-sky-700 border-sky-200",
  Archived: "bg-stone-50 text-stone-500 border-stone-200",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F5F7F8]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <AnimatedHeading variant="dark">Projects</AnimatedHeading>
          <p className="mx-auto mt-4 max-w-2xl text-[#4A4A4A] text-lg leading-relaxed">
            A curated selection of my work — each project tells a story of problem-solving and creativity.
          </p>
        </div>

        {/* Project Rows */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <ProjectRow 
                key={project.id} 
                project={project} 
                index={index} 
                isEven={isEven} 
              />
            );
          })}
        </div>

        {/* CTA */}
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

// Project Row Component
function ProjectRow({ project, index, isEven }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div 
        className={`flex flex-col gap-4 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'none' }}
      >
        
        {/* Custom Cursor */}
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#B5773A] text-white shadow-lg"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Eye className="h-5 w-5" />
        </motion.div>

        {/* Image Side - 45% */}
        <motion.div 
          className="relative w-full md:w-[45%]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-52 w-full overflow-hidden rounded-xl bg-stone-100 shadow-sm transition-shadow duration-300 group-hover:shadow-xl md:h-64 lg:h-72">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            
            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            />
            
            {/* Status Badge */}
            {project.status && (
              <span
                className={`absolute left-3 top-3 rounded-full border px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-sm ${
                  statusColors[project.status] || "bg-stone-50 text-stone-500 border-stone-200"
                }`}
              >
                {project.status}
              </span>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <span className="absolute -right-2 -top-2 rotate-12 bg-[#B5773A] px-3 py-0.5 text-[10px] font-bold text-white shadow-lg">
                ★ Featured
              </span>
            )}
          </div>
        </motion.div>

        {/* Content Side - 55% */}
        <motion.div 
          className="flex w-full flex-col justify-center md:w-[55%] md:px-4"
          whileHover={{ x: isEven ? 6 : -6 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project Number */}
          <span className="text-xs font-medium text-[#B5773A]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#B5773A]">
              {project.subtitle}
            </p>
          )}

          {/* Title */}
          <h3 className="mt-1 text-xl font-bold text-[#2D2016] md:text-2xl">
            {project.title}
          </h3>

          {/* Description - shorter */}
          <p className="mt-2 text-sm leading-relaxed text-stone-600 line-clamp-2 md:text-sm">
            {project.description}
          </p>

          {/* Tech Tags - smaller */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-medium text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics (optional) - smaller */}
          {project.metrics && (
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-stone-600">
              {Object.entries(project.metrics).map(([key, value]) => (
                <span key={key} className="flex items-center gap-1">
                  <span className="font-medium text-[#2D2016]">{value}</span>
                  <span className="text-stone-400">•</span>
                  <span className="capitalize text-[10px]">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </span>
              ))}
            </div>
          )}

          {/* Progress Bar (smaller) */}
          {project.status === "In Progress" && project.progress && (
            <div className="mt-2">
              <div className="h-1 w-full rounded-full bg-stone-200">
                <div 
                  className="h-1 rounded-full bg-[#B5773A] transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-[10px] text-stone-500">{project.progress}% complete</span>
            </div>
          )}

          {/* Action Buttons - smaller */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#2D2016] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#5C3D1E] hover:scale-105"
              >
                <ExternalLink className="h-3 w-3" />
                Live Demo
              </a>
            )}
            
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 px-4 py-1.5 text-xs font-medium text-stone-600 transition hover:border-stone-300 hover:bg-stone-50"
              >
                <Code2 className="h-3 w-3" />
                Code
              </a>
            )}

            {/* Case Study Link - smaller */}
            {project.caseStudy && (
              <a
                href={project.caseStudy}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#B5773A] transition hover:text-[#8A5C2E]"
              >
                Read more
                <ArrowRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}