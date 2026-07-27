"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const statusColor = {
  Live: "bg-emerald-50 text-emerald-600 border-emerald-200",
  "In Progress": "bg-amber-50 text-amber-600 border-amber-200",
  Completed: "bg-sky-50 text-sky-600 border-sky-200",
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden bg-stone-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {project.status ? (
          <span
            className={
              "absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-medium backdrop-blur-sm " +
              statusColor[project.status]
            }
          >
            {project.status}
          </span>
        ) : null}

        {/* Glass hover overlay — tech stack revealed on hover */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <div className="translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/30 bg-white/20 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          {project.subtitle ? (
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#B5773A]">
              {project.subtitle}
            </p>
          ) : null}

          <h3 className="mt-1 text-lg font-bold text-[#2D2016] leading-snug">
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm leading-relaxed text-stone-600 line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-stone-100 pt-4">
          {project.liveLink
            ? React.createElement(
                "a",
                {
                  href: project.liveLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#2D2016] px-3.5 py-2 text-sm font-medium text-white transition hover:bg-[#5C3D1E]",
                },
                React.createElement(ExternalLink, { className: "h-3.5 w-3.5" }),
                "Live Demo"
              )
            : null}

          {project.githubLink
            ? React.createElement(
                "a",
                {
                  href: project.githubLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center justify-center rounded-lg border border-stone-200 px-3 py-2 text-stone-600 transition hover:bg-stone-50 hover:border-stone-300",
                  "aria-label": "View source code",
                },
                React.createElement(Code2, { className: "h-3.5 w-3.5" })
              )
            : null}
        </div>
      </div>
    </motion.article>
  );
}