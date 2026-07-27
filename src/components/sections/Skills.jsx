"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import HighlightText from "@/components/ui/HighlightText";
import { tabs } from "@/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section id="skills" className=" bg-[#0F0E0E] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">
          <div className="mt-5">
            <AnimatedHeading>
              Skills & Expertise
            </AnimatedHeading>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm text-[#A0A0A0] leading-relaxed">
            Building, learning, and experimenting with technologies
            that bring ideas to life.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium 
                  transition-all duration-300 border-2
                  ${activeTab === tab.id 
                    ? "bg-[#B5773A] text-[#0F0E0E] border-[#B5773A] shadow-lg shadow-[#B5773A]/20" 
                    : "border-[#2A2A2A] bg-[#1A1A1A] text-[#A0A0A0] hover:border-[#B5773A]/50 hover:text-white"
                  }
                `}
              >
                <Icon className={`h-4 w-4 ${activeTab === tab.id ? "text-[#0F0E0E]" : "text-[#A0A0A0]"}`} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#A0A0A0]">
              {currentTab.description}
            </p>

            {/* Skills Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {currentTab.skills.map((skill, index) => {
                const SkillIcon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.25 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-5 transition-all duration-300 hover:border-[#B5773A]/50 hover:shadow-xl hover:shadow-[#B5773A]/5"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B5773A]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex flex-col items-center text-center">
                      {SkillIcon && (
                        <SkillIcon className="mb-3 h-8 w-8 text-[#B5773A] transition-transform duration-300 group-hover:scale-110" />
                      )}

                      <h3 className="text-sm font-semibold text-white">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#666666]">
                        {skill.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B5773A]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}