"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const IMAGES = [
  "/hero/first.png",
  "/hero/second.png",
  "/hero/third.png"
];

export default function Hero() {
  const comp = useRef(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Text Entry Animations
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
        delay: 0.8,
        ease: "power2.out"
      });
      
      // 2. Initial Image Scale
      gsap.from(".hero-img-container", {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out"
      });

      // 3. Infinite Sliding Animation (Track Method with Clone)
      const tl = gsap.timeline({ repeat: -1 });
      
      // We have 4 images in the track (3 real + 1 clone of the first).
      // The track is 400% width. We move the track left by 25% for each slide.
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
      {/* Very subtle gradient just behind text for legibility, removing the heavy filters */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent h-1/2 mt-auto" />

      <div className="absolute bottom-12 left-0 right-0 z-30 w-full">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          {/* Overlapping Text Container positioned at absolute bottom */}
          <div className="max-w-3xl">
            
            <h1 className="hero-title text-[clamp(4rem,7vw,8rem)] font-display font-medium tracking-tighter leading-[1.1] mb-8 overflow-hidden w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-white">
              <span className="block">Engineered</span>
              <span className="block italic text-white/90">for scale.</span>
            </h1>

            <div className="hero-sub text-lg text-white/90 font-light flex flex-col sm:flex-row gap-6 max-w-xl">
              <a 
                href="#services" 
                className="px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-colors text-center"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-white/50 text-white hover:bg-white/20 transition-colors text-center backdrop-blur-sm shadow-xl"
              >
                Initiate Contact
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
