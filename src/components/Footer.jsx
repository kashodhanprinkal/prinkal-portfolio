"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A882]/20 bg-[#1C1410]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        
        {/* Main Content - Flex layout for compactness */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-6">
          
          {/* Left Section - Brand & CTA */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <h2 className="text-base sm:text-lg font-semibold tracking-tight text-[#FDF8F2]">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[#C9A882] via-[#B5773A] to-[#C9A882] bg-clip-text text-transparent">
                remarkable
              </span>
            </h2>
            
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#B5773A] px-4 py-1.5 text-xs font-medium text-[#FDF8F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A882] hover:text-[#1C1410]"
              >
                Hire Me
              </a>

              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A882]/40 px-4 py-1.5 text-xs font-medium text-[#FDF8F2] transition-all duration-300 hover:border-[#B5773A] hover:bg-[#5C3D1E] hover:-translate-y-0.5"
              >
                Contact
                <HiArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right Section - Social & Status */}
          <div className="flex flex-col items-center md:items-end gap-2.5">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDE0CE]/70 transition-all duration-300 hover:-translate-y-1 hover:text-[#C9A882] hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EDE0CE]/70 transition-all duration-300 hover:-translate-y-1 hover:text-[#C9A882] hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:your@email.com"
                className="text-[#EDE0CE]/70 transition-all duration-300 hover:-translate-y-1 hover:text-[#C9A882] hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>

            {/* Availability Badge - Compact */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A882]/20 bg-[#5C3D1E]/30 px-3 py-1 text-xs font-medium text-[#EDE0CE]/80 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              Open to work
            </span>
          </div>
        </div>

        {/* Divider - Subtle */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#C9A882]/20 to-transparent" />

        {/* Bottom Section - Compact */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-[#EDE0CE]/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} <span className="font-medium text-[#EDE0CE]/80">Prinkal Kashodhan</span>
          </p>

          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-[#B5773A]">☕</span>
            <span className="text-[#C9A882]">♥</span>
            <span>using</span>
            <span className="font-medium text-[#EDE0CE]/80">Next.js</span>
            <span className="hidden sm:inline">&</span>
            <span className="font-medium text-[#EDE0CE]/80">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}