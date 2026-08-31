"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  const total = TESTIMONIALS.length; // 9
  // 3 sets of items for seamless circular wrapping
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  
  const [index, setIndex] = useState(total); // Start at middle set (index 9)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  const goToSlide = (targetIndex: number) => {
    setIsTransitioning(true);
    setIndex(total + targetIndex);
  };

  // Seamless invisible reset at boundary
  const handleAnimationComplete = () => {
    if (index >= total * 2) {
      setIsTransitioning(false);
      setIndex(index - total);
    } else if (index < total) {
      setIsTransitioning(false);
      setIndex(index + total);
    }
  };

  // 5s Autoplay with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Visual dot index
  const activeDotIndex = ((index % total) + total) % total;

  return (
    <div
      className="max-w-7xl mx-auto relative px-4 sm:px-6 md:px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-[calc(50%+24px)] w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center hover:bg-white/15 text-white/70 hover:text-white transition-all z-20 hidden md:flex cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-[calc(50%+24px)] w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center hover:bg-white/15 text-white/70 hover:text-white transition-all z-20 hidden md:flex cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Continuous Sliding Window */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <motion.div
          animate={{
            x: isMobile
              ? `-${index * 100}%`
              : `-${index * 50}%`,
          }}
          transition={
            isTransitioning
              ? { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
              : { duration: 0 }
          }
          onAnimationComplete={handleAnimationComplete}
          className="flex"
        >
          {items.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/2 shrink-0 p-3 sm:p-4"
            >
              <div className="h-full p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 flex flex-col justify-between shadow-xl min-h-[300px]">
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-accent fill-accent"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed font-light mb-8 text-base md:text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold font-display text-lg shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground text-base">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-foreground/50 uppercase tracking-widest mt-0.5">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-10 relative z-10">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeDotIndex === idx
                ? "w-8 bg-accent"
                : "w-2.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
