"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { 
    num: 2.0, 
    suffix: "K",
    label: "Satisfied Clients",
    // Jumping person / User icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <polyline points="16 11 18 13 22 9"></polyline>
      </svg>
    )
  },
  { 
    num: 27, 
    suffix: "",
    label: "Years Of Experience",
    // Rocket icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    )
  },
  { 
    num: 110, 
    suffix: "Cr",
    label: "Portfolio",
    // Target / Bullseye icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.21, 0.47, 0.32, 0.98], // Cinematic ease out
        onUpdate(v) {
          setDisplayValue(v);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  // Format: if it's a decimal (like 2.0), keep 1 decimal place. Otherwise floor it.
  const isDecimal = value % 1 !== 0 || value === 2.0; 
  const formattedValue = isDecimal 
    ? displayValue.toFixed(1) 
    : Math.floor(displayValue).toString();

  return (
    <span ref={ref}>
      {formattedValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="performance" className="pt-4 lg:pt-8 pb-12 lg:pb-16 bg-background relative z-20">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-16 rounded-3xl max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
          
          {/* Subtle noise/glow inside the panel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.05)_0%,transparent_70%)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon wrapper */}
                <div className="w-20 h-20 mb-6 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(197,168,128,0.1)] group-hover:shadow-[0_0_30px_rgba(197,168,128,0.4)]">
                  {stat.icon}
                </div>
                
                {/* Massive Animated Number */}
                <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2 tracking-tighter">
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h4 className="text-lg md:text-xl font-medium text-foreground/80 tracking-wide uppercase">
                  {stat.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
