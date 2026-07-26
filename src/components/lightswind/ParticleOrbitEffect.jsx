"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const ParticleOrbitEffect = ({
  className,
  particleCount = 30,
  radius = 80,
  particleSpeed = 0.025,
  radiusScale = 1.5,
  intensity = 1.2,
  fadeOpacity = 0.05,
  colorRange = [180, 270],
  followMouse = true,
  autoColors = true,
  particleSize = 2,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, radiusScale: 1 });
  const colorTimerRef = useRef(0);

  const generateColor = useCallback(
    (hue) => `hsl(${hue}, 70%, 60%)`,
    []
  );

  const createParticles = useCallback(
    (initialX, initialY) => {
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        const hue = colorRange[0] + Math.random() * (colorRange[1] - colorRange[0]);
        particles.push({
          size: particleSize,
          position: { x: initialX, y: initialY },
          offset: { x: 0, y: 0 },
          shift: { x: initialX, y: initialY },
          speed: particleSpeed + Math.random() * particleSpeed,
          targetSize: particleSize,
          fillColor: generateColor(hue),
          orbit: radius * 0.5 + radius * 0.5 * Math.random(),
          hue,
          trail: [],
        });
      }
      return particles;
    },
    [particleCount, particleSpeed, particleSize, radius, generateColor, colorRange]
  );

  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;
    particlesRef.current = createParticles(mouseRef.current.x, mouseRef.current.y);
  }, [createParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const handleMouseMove = (e) => {
      if (!followMouse) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const handleMouseDown = () => (mouseRef.current.isDown = true);
    const handleMouseUp = () => (mouseRef.current.isDown = false);

    const draw = () => {
      if (autoColors) {
        colorTimerRef.current += 0.016;
        if (colorTimerRef.current >= 2) {
          colorTimerRef.current = 0;
          particlesRef.current.forEach((p) => {
            p.hue = colorRange[0] + Math.random() * (colorRange[1] - colorRange[0]);
            p.fillColor = generateColor(p.hue);
          });
        }
      }

      const targetScale = mouseRef.current.isDown ? radiusScale : 1;
      mouseRef.current.radiusScale += (targetScale - mouseRef.current.radiusScale) * 0.02;

      context.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        particle.offset.x += particle.speed * intensity;
        particle.offset.y += particle.speed * intensity;
        particle.shift.x += (mouseRef.current.x - particle.shift.x) * particle.speed * intensity;
        particle.shift.y += (mouseRef.current.y - particle.shift.y) * particle.speed * intensity;

        const orbitRadius = particle.orbit * mouseRef.current.radiusScale * intensity;
        particle.position.x = particle.shift.x + Math.cos(i + particle.offset.x) * orbitRadius;
        particle.position.y = particle.shift.y + Math.sin(i + particle.offset.y) * orbitRadius;

        particle.trail.push({ x: particle.position.x, y: particle.position.y, alpha: 1 });
        const maxTrail = Math.max(5, Math.floor(40 * intensity));
        if (particle.trail.length > maxTrail) particle.trail.shift();
        particle.trail.forEach((pt, idx) => {
          pt.alpha = ((idx + 1) / particle.trail.length) * fadeOpacity * 20;
        });

        for (let j = 1; j < particle.trail.length; j++) {
          const prev = particle.trail[j - 1];
          const curr = particle.trail[j];
          context.beginPath();
          context.strokeStyle = particle.fillColor;
          context.lineWidth = particle.size * 0.3 * curr.alpha;
          context.globalAlpha = curr.alpha;
          context.moveTo(prev.x, prev.y);
          context.lineTo(curr.x, curr.y);
          context.stroke();
        }

        particle.size += (particle.targetSize - particle.size) * 0.05;
        if (Math.abs(particle.size - particle.targetSize) < 0.1) {
          particle.targetSize = particleSize + Math.random() * particleSize * 2;
        }

        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.globalAlpha = 0.9;
        context.arc(particle.position.x, particle.position.y, particle.size * 0.5, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", updateCanvasDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [followMouse, radiusScale, intensity, fadeOpacity, colorRange, autoColors, particleSize, updateCanvasDimensions, generateColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-auto", className)}
    />
  );
};

export default ParticleOrbitEffect;