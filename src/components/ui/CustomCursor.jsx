"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const checkHover = (e) => {
      const target = e.target.closest(
        "a,button,input,textarea"
      );

      setHover(!!target);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);

      document.body.style.cursor = "auto";
    };
  }, []);


  if (!visible) return null;


  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      z-[9999]
      pointer-events-none
      "
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        scale: hover ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
    >

      <div
        className={`
          h-3
          w-3
          rounded-full
          transition-all
          duration-200
          ${
            hover
              ? "bg-black/70"
              : "bg-black"
          }
        `}
      />


      {/* subtle ring */}
      {hover && (
        <motion.div
          className="
          absolute
          -inset-2
          rounded-full
          border
          border-black/30
          "
          initial={{
            scale:0,
            opacity:0
          }}
          animate={{
            scale:1,
            opacity:1
          }}
        />
      )}

    </motion.div>
  );
}