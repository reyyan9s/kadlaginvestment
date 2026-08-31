"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    title: "Expertise that Drives Results",
    subtitle: "Seasoned Professionals",
    icon: ShieldCheck,
    points: [
      "Over 27 years navigating complex market cycles",
      "Institutional-grade portfolio analysis & screening",
      "Data-backed risk management & capital protection"
    ],
    desc: "At Kadlag Investment, our team comprises seasoned financial experts with decades of collective experience. We bring a deep understanding of market dynamics, investment strategies, and wealth management to ensure your financial milestones are consistently exceeded.",
  },
  {
    title: "Tailored Solutions for Your Journey",
    subtitle: "Personalized Architecture",
    icon: Compass,
    points: [
      "Zero cookie-cutter portfolios",
      "Custom lifecycle milestone alignment",
      "Dynamic rebalancing across economic shifts"
    ],
    desc: "We recognize that every financial journey is unique. We take pride in crafting bespoke solutions aligned with your specific risk tolerance and long-term aspirations—providing a clear roadmap for lasting prosperity.",
  },
  {
    title: "Client-Centric Excellence",
    subtitle: "Transparent Partnerships",
    icon: HeartHandshake,
    points: [
      "100% fiduciary integrity & clear disclosures",
      "24/7 dedicated advisory hotline",
      "Multi-generational family wealth continuity"
    ],
    desc: "We build enduring relationships anchored on transparency, trust, and client satisfaction. We are not just financial service providers; we are strategic allies dedicated to elevating your financial security for generations.",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-36 bg-background relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background radial ambient lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            The Kadlag Advantage
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight">
            Why Discerning Investors <br />
            <span className="italic text-gradient">Partner With Us</span>
          </h2>
        </motion.div>

        {/* 3-Column Double-Bezel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group p-1.5 rounded-[2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Inner Core */}
              <div className="h-full p-8 md:p-10 rounded-[calc(2rem-6px)] bg-[#0a0a0c]/90 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-between relative overflow-hidden">
                
                <div>
                  {/* Icon & Subtitle */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-black group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(197,168,128,0.4)]">
                      <reason.icon className="w-5 h-5 text-current transition-colors duration-300" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                      {reason.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-medium text-foreground mb-4 leading-snug">
                    {reason.title}
                  </h3>

                  <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base mb-8">
                    {reason.desc}
                  </p>
                </div>

                {/* Key Bullet Checklist */}
                <div className="pt-6 border-t border-white/5 space-y-2.5">
                  {reason.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-foreground/80 font-light">
                      <CheckCircle2 size={14} className="text-accent shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle Bottom Glow Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
