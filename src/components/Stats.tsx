"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users2, Clock, Landmark } from "lucide-react";

const STATS = [
  { 
    num: 2.0, 
    suffix: "K+",
    label: "Empowered Investors",
    sub: "High Net Worth & Retail Clients",
    icon: <Users2 className="w-7 h-7" />
  },
  { 
    num: 27, 
    suffix: "+",
    label: "Years Fiduciary Trust",
    sub: "Founded in June 1996",
    icon: <Clock className="w-7 h-7" />
  },
  { 
    num: 110, 
    suffix: " Cr+",
    label: "Assets Advised",
    sub: "Multi-Asset Class Portfolios",
    icon: <Landmark className="w-7 h-7" />
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
        ease: [0.21, 0.47, 0.32, 0.98],
        onUpdate(v) {
          setDisplayValue(v);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

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
    <section id="performance" className="py-16 md:py-24 bg-background relative z-20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Double-Bezel Outer Hardware Shell */}
        <div className="p-2 rounded-[2.5rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl max-w-6xl mx-auto">
          
          {/* Inner Core Container */}
          <div className="p-8 md:p-14 rounded-[calc(2.5rem-8px)] bg-[#0a0a0c]/95 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden">
            
            {/* Subtle radial sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`flex flex-col items-center text-center group ${idx > 0 ? "pt-8 md:pt-0 md:pl-8" : ""}`}
                >
                  {/* Icon wrapper */}
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.15)]">
                    {stat.icon}
                  </div>
                  
                  {/* Massive Animated Number */}
                  <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-md">
                    <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                  </div>
                  
                  {/* Label */}
                  <h4 className="text-base md:text-lg font-medium text-foreground tracking-wide font-display">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-foreground/50 mt-1 font-light">
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
