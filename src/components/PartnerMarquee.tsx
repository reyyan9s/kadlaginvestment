"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  { name: "Baroda BNP Paribas Mutual Fund", src: "/companies/barodaMF.png" },
  { name: "Kotak Life Insurance", src: "/companies/kotak.png" },
  { name: "Max Life Insurance", src: "/companies/maxlife.png" },
  { name: "Axis Mutual Fund", src: "/companies/axisMF.png" },
  { name: "Aditya Birla Capital", src: "/companies/adityabirla.png" },
];

export default function PartnerMarquee() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
          We Are Associated With
        </h3>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="relative flex overflow-x-hidden group py-4">
        {/* Gradient Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-4 md:mx-8 w-44 md:w-52 h-24 relative bg-white rounded-2xl shadow-xl border border-white/10 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 shrink-0"
            >
              <Image 
                src={partner.src} 
                alt={partner.name} 
                fill
                className="object-contain p-4 mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
