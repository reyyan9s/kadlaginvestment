"use client";

import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "Kadlag Investment was a wise move. Their expertise bridges property goals with financial planning seamlessly.",
    name: "Mr. Balasaheb Deshmane",
    designation: "Swadesh Properties",
  },
  {
    quote: "A professional Financial Adviser inspires investment habits in rural areas with passion, knowledge, and genuine client interests.",
    name: "Rtn. Sanjay Rathi",
    designation: "Chartered Accountants",
  },
  {
    quote: "As a physician, I highly value Sunil Kadlag's expertise. Their personalized guidance secures my financial future and assets. I recommend their services for sound financial advice and peace of mind.",
    name: "Dr. Nitin Jathar MBBS",
    designation: "Sangamner",
  },
  {
    quote: "Sunil Kadlag, our mutual fund investment advisor, has diversified our financial portfolio, enriching our gold jewellery business. Highly recommended.",
    name: "Mr. Dnyaneshwar Kajale",
    designation: "Sangamner",
  },
  {
    quote: "Sunil Kadlag's expertise spans insurance and investments, demonstrating mastery in both realms. Their guidance ensures a comprehensive approach to financial security.",
    name: "Dr. Santosh & Smita Chavhan",
    designation: "Sangamner",
  },
  {
    quote: "Kadlag Investment adds value to customers' financial security by combining investment experience and a personalised perspective",
    name: "Mr. Keshav Ghuge",
    designation: "Primary Teacher, Sangamner",
  },
  {
    quote: "Selfless service by Mr Sunil Kadlag sir. They give you what you need not company need. Staff is nice and humble. Follow up up to date.",
    name: "Dr. Mayur Lande",
    designation: "Eye Specialist, Shevgaon",
  },
  {
    quote: "Kadalag Investment is a very well known and reputed company in Sangamner. This company has always provided excellent and beneficial service to me.",
    name: "Rtn. Hrishikesh Satish Mondhe",
    designation: "Director",
  },
  {
    quote: "Sunil Kadlag's contributions to financial education, insurance and economic literacy are inspirational.",
    name: "Former MLA. Sudhirji Tambe",
    designation: "Sangamner",
  }
];

const PARTNERS = [
  "/companies/kotak.png",
  "/companies/maxlife.png",
  "/companies/axisMF.png",
  "/companies/adityabirla.png",
  "/companies/barodaMF.png"
];

export default function Trust() {
  return (
    <section id="partners" className="pt-12 lg:pt-16 pb-32 bg-background relative border-t border-white/5 overflow-hidden">
      
      {/* 1. We Are Associated With (Partners Marquee) */}
      <div className="container mx-auto px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tighter">
            We Are Associated With
          </h2>
        </motion.div>

        {/* CSS Marquee Track for Infinite Scrolling */}
        <div className="relative flex overflow-x-hidden group">
          {/* Apply a subtle gradient mask to fade the edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap items-center w-max"
          >
            {/* Render list twice for seamless infinite scroll */}
            {[...PARTNERS, ...PARTNERS].map((logo, idx) => (
              <div 
                key={idx} 
                className="mx-6 md:mx-12 w-48 h-24 relative bg-white rounded-xl shadow-lg border border-white/10 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300 shrink-0"
              >
                <Image 
                  src={logo} 
                  alt="Partner Logo" 
                  fill
                  className="object-contain p-4 mix-blend-multiply"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. Client Testimonials */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tighter uppercase">
            Client Testimonials
          </h3>
        </div>
      </div>

      <TestimonialSlider />
    </section>
  );
}

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];
  const actualLength = TESTIMONIALS.length;

  const scrollNext = () => {
    setCurrentIndex((prev) => {
      const isMobile = window.innerWidth < 768;
      // We can scroll all the way into the second set
      const maxIndex = isMobile ? actualLength * 2 - 1 : actualLength * 2 - 2;
      const next = prev >= maxIndex ? 0 : prev + 1;
      
      if (scrollRef.current) {
        const itemWidth = scrollRef.current.children[0].clientWidth;
        const gap = isMobile ? 24 : 32;
        
        // If we jump from the very end to the start, do it instantly to avoid rewind
        if (next === 0) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollRef.current.scrollTo({ left: next * (itemWidth + gap), behavior: 'smooth' });
          
          // Seamless loop trick: If we just scrolled into the exact duplicate of the first slide,
          // wait for the smooth scroll to finish, then instantly snap back to the REAL first slide.
          if (next === actualLength) {
             setTimeout(() => {
               if (scrollRef.current) {
                 scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
                 setCurrentIndex(0);
               }
             }, 600); // Wait for smooth scroll animation to finish
          }
        }
      }
      return next === actualLength ? 0 : next;
    });
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => {
      const isMobile = window.innerWidth < 768;
      const maxIndex = isMobile ? actualLength * 2 - 1 : actualLength * 2 - 2;
      
      if (scrollRef.current) {
        const itemWidth = scrollRef.current.children[0].clientWidth;
        const gap = isMobile ? 24 : 32;
        
        // If we are at 0 and want to go prev, instantly jump to the second set, then smooth scroll back
        if (prev === 0) {
          const jumpIndex = actualLength;
          scrollRef.current.scrollTo({ left: jumpIndex * (itemWidth + gap), behavior: 'auto' });
          
          setTimeout(() => {
            if (scrollRef.current) {
              const next = jumpIndex - 1;
              scrollRef.current.scrollTo({ left: next * (itemWidth + gap), behavior: 'smooth' });
              setCurrentIndex(next);
            }
          }, 50);
          return jumpIndex - 1;
        } else {
          const next = prev - 1;
          scrollRef.current.scrollTo({ left: next * (itemWidth + gap), behavior: 'smooth' });
          return next;
        }
      }
      return prev;
    });
  };

  // 4s Autoplay
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const isMobile = window.innerWidth < 768;
    const itemWidth = scrollRef.current.children[0].clientWidth;
    const gap = isMobile ? 24 : 32;
    const index = Math.round(scrollRef.current.scrollLeft / (itemWidth + gap));
    // Only update visual dot index for the first set
    setCurrentIndex(index % actualLength);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const maxDots = typeof window !== 'undefined' && window.innerWidth < 768 
    ? actualLength 
    : actualLength - 1;

  // Use modulo for dot highlighting so duplicates highlight the correct dot
  const visualIndex = currentIndex % actualLength;

  return (
    <div 
      className="max-w-7xl mx-auto relative px-6 md:px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
    >
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-[calc(50%+24px)] w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center hover:bg-white/10 transition-colors z-20 hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5 text-white/70" />
      </button>

      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-[calc(50%+24px)] w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center hover:bg-white/10 transition-colors z-20 hidden md:flex"
      >
        <ChevronRight className="w-5 h-5 text-white/70" />
      </button>

      <div className="max-w-6xl mx-auto overflow-hidden relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="w-full md:w-[calc(50%-16px)] shrink-0 snap-start p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent fill-accent pointer-events-none" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed font-light mb-12 pointer-events-none">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold font-display text-lg shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{testimonial.name}</h5>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest mt-1">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {Array.from({ length: maxDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              if (scrollRef.current) {
                const isMobile = window.innerWidth < 768;
                const itemWidth = scrollRef.current.children[0].clientWidth;
                const gap = isMobile ? 24 : 32;
                scrollRef.current.scrollTo({ left: idx * (itemWidth + gap), behavior: 'smooth' });
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              visualIndex === idx ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
