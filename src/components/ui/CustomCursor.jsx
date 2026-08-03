"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // ✅ All useMotionValue and useSpring calls at the top level
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring configs
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Trail spring (with different config)
  const trailSpringConfig = { damping: 30, stiffness: 150, mass: 1 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, [role='button'], .cursor-pointer, .hover\\:cursor-pointer"
      );
      setIsHovered(!!target);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter, { passive: true });

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
          opacity: {
            duration: 0.15,
          },
        }}
      >
        <div
          className={`
            h-3 w-3 rounded-full transition-colors duration-200
            ${isHovered ? "bg-white" : "bg-black"}
          `}
        />
      </motion.div>

      {/* Outer Ring (shows on hover) - Black & White */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="h-10 w-10 rounded-full border-2 border-black/40 bg-black/5" />
      </motion.div>

      {/* Trail Ring - Black & White */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.2 : 0.5,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{
          duration: 0.1,
        }}
      >
        <div className="h-6 w-6 rounded-full border border-black/10 bg-black/5" />
      </motion.div>
    </>
  );
}