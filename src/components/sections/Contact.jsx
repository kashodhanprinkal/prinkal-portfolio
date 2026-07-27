"use client";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import HighlightText from "@/components/ui/HighlightText";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/yourusername",
      color: "hover:bg-[#24292E] hover:border-[#24292E]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      link: "mailto:youremail@example.com",
      color: "hover:bg-[#EA4335] hover:border-[#EA4335]",
    },
  ];

  return (
    <section id="contact" className="px-8 py-24 bg-[#e4e5e6] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-8">
            {/* TEXT */}
            <div>
              <div className="mt-[-90]">
                <AnimatedHeading>Contact</AnimatedHeading>
              </div>
              <h2 className="text-5xl font-bold mt-10 tracking-tight md:text-7xl">
                Drop me a{" "}
                <HighlightText text="hello 👋" variant="contact" />
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
                You can find me on these platforms.
                Let's connect and keep the conversation going.
              </p>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-wrap gap-4">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.96
                    }}
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-full
                      border-2
                      border-black/10
                      bg-white
                      px-7
                      py-4
                      font-medium
                      transition-all
                      duration-300
                      hover:text-white
                      hover:shadow-xl
                      ${item.color}
                    `}
                  >
                    <Icon className="h-6 w-6 transition-transform group-hover:scale-125" />
                    {item.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mt-20 md:text-5xl">
                Get updates from my corner of the internet
              </h3>
              <p className="mt-2 max-w-xl text-lg text-neutral-600">
                Projects, experiments, and behind-the-scenes
                of my developer journey.
              </p>
            </div>

            {/* INPUT */}
            <div className="max-w-xl">
              <div className="flex overflow-hidden rounded-full border-2 border-black/20 bg-white transition-all focus-within:border-black focus-within:shadow-lg">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-7 py-5 outline-none text-base placeholder:text-neutral-400"
                />
                <button className="flex items-center gap-2 bg-black px-8 text-white transition hover:bg-neutral-800">
                  Join
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/*<div className="mt-4 flex flex-wrap gap-5 text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Rocket className="h-3.5 w-3.5" />
                  No spam
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  1 email/month
                </span>
                <span className="flex items-center gap-1">
                  <Send className="h-3.5 w-3.5" />
                  Unsubscribe anytime
                </span>
              </div>  */}


            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}