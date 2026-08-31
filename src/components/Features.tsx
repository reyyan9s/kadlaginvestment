"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Users2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    num: "01",
    phase: "Phase 01",
    tag: "Wealth Blueprint",
    icon: <Sparkles className="w-5 h-5 text-current" />,
    title: "Unleash Your Financial Potential",
    desc: "At Kadlag Investment, we believe in unlocking the power of your finances to create a future of abundance and prosperity. Our mission is to guide you on a journey of financial growth and empowerment with tailored asset allocation.",
  },
  {
    num: "02",
    phase: "Phase 02",
    tag: "Fiduciary Care",
    icon: <Target className="w-5 h-5 text-current" />,
    title: "Your Success, Our Unwavering Priority",
    desc: "Your financial success is at the core of everything we do. Our seasoned team of financial experts is committed to understanding your unique needs, providing tailored solutions, and working tirelessly to ensure your path is clear and rewarding.",
  },
  {
    num: "03",
    phase: "Phase 03",
    tag: "Generational Growth",
    icon: <Users2 className="w-5 h-5 text-current" />,
    title: "Partner For A Flourishing Future",
    desc: "Choose Kadlag Investment as your lifelong wealth ally. We go beyond conventional financial services, offering a personalised and strategic approach to empower you and your family across every economic cycle.",
  }
];

export default function Features() {
  return (
    <section className="py-24 lg:py-36 bg-background relative z-10 overflow-hidden">
      
      {/* Subtle ambient light orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Our Systematic Methodology
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
            How We Architect <br />
            <span className="italic text-gradient">Sustainable Prosperity</span>
          </h2>
        </div>

        {/* 3-Column Double-Bezel Hardware Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {FEATURES.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group p-1.5 rounded-[2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl relative"
            >
              {/* Inner Core */}
              <div className="h-full p-8 md:p-10 rounded-[calc(2rem-6px)] bg-[#0a0a0c]/90 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-between relative overflow-hidden">
                
                {/* Massive ambient background number */}
                <div className="absolute -top-6 -right-4 text-[9rem] font-display font-bold text-white/[0.02] group-hover:text-accent/[0.06] transition-colors duration-500 leading-none select-none pointer-events-none">
                  {feat.num}
                </div>

                <div>
                  {/* Top Chip & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-black group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(197,168,128,0.4)]">
                      {feat.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] uppercase tracking-widest text-accent font-semibold">
                      {feat.phase}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-foreground leading-snug mb-4 group-hover:text-white transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-foreground/60 font-light leading-relaxed text-sm md:text-base">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">
                    {feat.tag}
                  </span>
                  <Link 
                    href="/services" 
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-foreground/60 group-hover:bg-accent group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                {/* Bottom interactive glow bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
