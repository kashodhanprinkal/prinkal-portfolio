"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/yourusername",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: FaEnvelope,
      link: "mailto:your@email.com",
    },
  ];

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          {/* Name */}
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()}{" "}

            <span className="relative inline-block font-semibold text-black">

              Prinkal Kashodhan

              {/* free hand marker highlight */}
              <span
                className="
                absolute
                -z-10
                left-[-8px]
                right-[-8px]
                bottom-0
                h-6
                rotate-[-3deg]
                bg-[#D9F99D]
                rounded-[40%_60%_45%_55%]
                "
              />

              {/* hand drawn underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 150 12"
                fill="none"
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


          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {socials.map((item,index)=>{

              const Icon = item.icon;

              return(
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  whileHover={{
                    y:-4,
                    scale:1.15,
                    rotate:index % 2 === 0 ? -5 : 5
                  }}
                  transition={{duration:0.2}}
                  className="
                  text-neutral-600
                  hover:text-black
                  transition-all
                  "
                >
                  <Icon size={18}/>
                </motion.a>
              )

            })}

          </div>

        </div>


        {/* Divider */}
        <div className="my-6 relative">

          <svg
            className="w-full h-3"
            viewBox="0 0 500 10"
            fill="none"
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
        <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">

          <p className="font-medium text-neutral-700">
            Crafted with ☕, curiosity & countless experiments.
          </p>


          <p className="font-medium text-neutral-800 text-center">
            Crafting interfaces, chasing bugs,
            <br className="sm:hidden" />
            and pretending it's planned ✦
          </p>

        </div>

      </div>
    </footer>
  );
}