"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Fixed Smooth Soft Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Soft Champagne Gold Glow */}
        <div 
          className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(197, 168, 128, 0.45) 0%, rgba(197, 168, 128, 0.15) 45%, transparent 70%)"
          }}
        />

        {/* Center-Left Soft Emerald Wealth Glow */}
        <div 
          className="absolute top-1/2 -left-32 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[180px] opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0.1) 45%, transparent 70%)"
          }}
        />

        {/* Bottom-Right Soft Golden Aura */}
        <div 
          className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full blur-[170px] opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(230, 208, 169, 0.35) 0%, rgba(197, 168, 128, 0.1) 45%, transparent 70%)"
          }}
        />
      </div>

      {/* Subtle Interactive Ambient Mouse Spotlight Glow */}
      <div
        className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 transition-opacity duration-500 hidden md:block"
        style={{
          background: "radial-gradient(circle, #C5A880 0%, rgba(197, 168, 128, 0.2) 40%, transparent 70%)",
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-accent z-[101] shadow-[0_0_8px_rgba(197,168,128,0.8)]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </>
  );
}
