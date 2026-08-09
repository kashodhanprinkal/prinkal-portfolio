"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    icon: FaGithub,
    link: "https://github.com/kashodhanprinkal",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/prinkal-kashodhan/",
  },
  {
    label: "Email",
    icon: FaEnvelope,
    link: "mailto:kashodhanprinkal@gmail.com",
  },
];

function Underline({ children, color = "#B5773A" }) {
  return (
    <span className="relative inline-block font-semibold text-neutral-800">
      {children}
      <svg
        className="absolute -bottom-2 left-0 h-2 w-full"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 5 C20 2, 35 7, 50 4 S80 2, 98 5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative px-6 pb-8 pt-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Name */}
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()}{" "}
            <span className="relative inline-block font-semibold text-neutral-900">
              Prinkal Kashodhan
              <span
                className="
                  absolute
                  -z-10
                  bottom-[-1px]
                  left-[-7px]
                  right-[-7px]
                  h-5
                  rotate-[-2deg]
                  rounded-[45%_55%_50%_40%]
                  bg-[#D9F99D]
                "
              />
              <svg
                className="absolute -bottom-3 left-0 h-3 w-full"
                viewBox="0 0 150 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8 C35 1,80 12,145 5"
                  stroke="#171717"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 11 C50 6,100 13,135 8"
                  stroke="#737373"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>

          {/* Social Icons + Back to Top */}
          <div className="flex items-center gap-5">
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                    rotate: index % 2 === 0 ? -5 : 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-neutral-500 transition-colors duration-200 hover:text-black"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
            
            {/* Back to Top Button - Desktop */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.15, rotate: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.25 }}
              aria-label="Back to top"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm text-neutral-700 shadow-sm transition-colors hover:border-[#B5773A] hover:text-[#B5773A]"
            >
              ↑
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-7">
          <svg
            className="h-3 w-full"
            viewBox="0 0 500 10"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 5 C80 1,150 9,250 5 S420 2,498 6"
              stroke="#d4d4d4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-xs sm:flex-row">
          <p className="font-medium text-neutral-600">
            Crafted with ☕,{" "}
            <Underline color="#B5773A">curiosity</Underline> & countless
            experiments.
          </p>
          <p className="text-center font-medium text-neutral-700">
            Crafting <Underline color="#171717">interfaces</Underline>, chasing{" "}
            <Underline color="#B5773A">bugs</Underline>,
            <br className="sm:hidden" />
            and pretending it's{" "}
            <span className="relative inline-block">
              planned
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-neutral-800"
              />
            </span>{" "}
            <span className="text-[#B5773A]">✦</span>
          </p>
        </div>
      </div>

      {/* Mobile Back to Top */}
      <div className="mt-8 flex justify-center sm:hidden">
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-sm text-neutral-600 transition-colors hover:border-[#B5773A] hover:text-[#B5773A]"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}