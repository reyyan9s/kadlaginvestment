"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Phone, ShieldCheck, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

const IMAGES = [
  "/hero/first.png",
  "/hero/second.png",
  "/hero/third.png"
];

export default function Hero() {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Text Entry Animations
      gsap.from(".hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1
      });

      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out"
      });

      gsap.from(".hero-chips", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: "power3.out"
      });

      // 2. Infinite Sliding Animation (Track Method with Clone)
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(".hero-slider-track", { xPercent: -25, duration: 1.2, ease: "power3.inOut", delay: 4 })
        .to(".hero-slider-track", { xPercent: -50, duration: 1.2, ease: "power3.inOut", delay: 4 })
        .to(".hero-slider-track", { xPercent: -75, duration: 1.2, ease: "power3.inOut", delay: 4 })
        .set(".hero-slider-track", { xPercent: 0 }); // instant reset to start

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} id="home" className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-black">
      
      {/* Full Bleed Image Background Track */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-slider-track flex w-[400%] h-full">
          {/* Original 3 images */}
          {IMAGES.map((src, idx) => (
            <div key={idx} className="w-1/4 h-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-no-repeat scale-[1.05]"
                style={{ 
                  backgroundImage: `url('${src}')`,
                  backgroundPosition: idx === 1 ? "center 80px" : "center top" 
                }}
              />
            </div>
          ))}
          {/* Clone of the first image for seamless looping */}
          <div className="w-1/4 h-full relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-no-repeat scale-[1.05]"
              style={{ 
                backgroundImage: `url('${IMAGES[0]}')`,
                backgroundPosition: "center top"
              }}
            />
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute bottom-10 md:bottom-14 left-0 right-0 z-30 w-full">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          
          <div className="max-w-3xl">
            
            {/* Trust Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-foreground/90 font-medium mb-4 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-accent font-semibold">AMFI Certified</span>
              <span className="text-white/40">&bull;</span>
              <span>27+ Years Fiduciary Legacy</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-medium tracking-tight leading-[1.1] mb-6 overflow-hidden w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-white">
              <span className="block">Engineered</span>
              <span className="block italic text-gradient">for scale.</span>
            </h1>

            {/* Action Buttons */}
            <div className="hero-sub flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link 
                href="/services" 
                className="group px-5 py-3 rounded-full bg-accent text-black font-semibold text-xs sm:text-sm hover:bg-accent-light transition-all flex items-center justify-between sm:justify-center gap-3 shadow-lg shadow-accent/20 active:scale-[0.98]"
              >
                <span>Explore Solutions</span>
                <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <ArrowUpRight size={14} className="text-black" />
                </div>
              </Link>

              <Link 
                href="/contact" 
                className="px-5 py-3 rounded-full border border-white/25 text-white hover:bg-white/10 transition-all text-xs sm:text-sm font-medium text-center backdrop-blur-md flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Phone size={14} className="text-accent" />
                Schedule Advisory Session
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
