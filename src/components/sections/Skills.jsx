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
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">

          <div className="mt-5">
            <AnimatedHeading>
              Skills & Expertise
            </AnimatedHeading>
          </div>

          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Building, learning, and experimenting with technologies
            that bring ideas to life.
          </p>

        </div>


        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#5C3D1E] text-white shadow-md"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.title}
              </button>
            );
          })}
        </div>


        {/* Animated Content */}
        <AnimatePresence mode="wait">

          <motion.div
            key={currentTab.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
              {currentTab.description}
            </p>


            {/* Skills Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

              {currentTab.skills.map((skill, index) => {
                const SkillIcon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-2xl border border-stone-200 bg-[#FDF8F2] p-5 shadow-sm transition hover:shadow-lg"
                  >

                    <div className="flex flex-col items-center text-center">

                      {SkillIcon && (
                        <SkillIcon className="mb-3 h-8 w-8 text-[#B5773A]" />
                      )}

                      <h3 className="text-sm font-semibold text-[#2D2016]">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-xs text-stone-500">
                        {skill.subtitle}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}