"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { tabs } from "@/data/skills";
import { highlights } from "@/data/highlights";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const active = tabs[activeTab];

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Main Section Background - Dark */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: 4,
          }}
          className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}
        <div className="text-center">
          <AnimatedHeading>Skills & Expertise</AnimatedHeading>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400"
          >
            I build modern web applications with a strong focus on performance,
            clean architecture, accessibility, and delightful user experiences.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap gap-2 rounded-full border border-gray-800 bg-gray-900/80 p-1.5 backdrop-blur-xl shadow-lg">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const activeItem = index === activeTab;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className="relative"
                >
                  {activeItem && (
                    <motion.div
                      layoutId="active-tab"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}

                  <span
                    className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition
                    ${
                      activeItem
                        ? "text-black"
                        : "text-gray-400 hover:text-white"
                    }
                    `}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800">
                <active.icon className="h-4 w-4 text-gray-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {active.title}
                </h3>

                <p className="text-xs leading-5 text-gray-400">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div
              layout
              className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {active.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group rounded-xl border border-gray-800 bg-gray-800/50 p-4 transition-all hover:border-gray-600 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    {Icon && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-700">
                        <Icon className="h-3.5 w-3.5 text-gray-300 transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
                      </div>
                    )}

                    <h4 className="mt-3 text-sm font-medium text-white">
                      {skill.name}
                    </h4>

                    <p className="mt-1 text-xs leading-4 text-gray-400">
                      {skill.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* What I Bring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              What I Bring
            </h3>

            <p className="mt-2 mx-auto max-w-2xl text-sm leading-6 text-gray-400">
              More than just technologies, I focus on building products that are
              fast, intuitive, scalable, and enjoyable to use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800/50 p-5 shadow-lg transition-all duration-500 hover:border-gray-600 hover:shadow-xl hover:shadow-purple-500/5"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />
                    <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800">
                      <Icon className="h-4 w-4 text-gray-300" />
                    </div>

                    <h4 className="mt-4 text-base font-bold tracking-tight text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-6 text-gray-400">
                      {item.description}
                    </p>

                    <motion.div
                      whileHover={{
                        x: 4,
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}