"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-background relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -right-1/4 w-full h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col relative z-10"
          >
            <div className="inline-block bg-accent px-4 py-2 rounded-sm w-fit mb-8">
              <span className="text-black font-semibold text-xs tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] tracking-tighter mb-8">
              Kadlag Investment: <br className="hidden lg:block" />
              <span className="italic text-foreground/80">Empowering Your Financial Success</span>
            </h2>

            <p className="text-foreground/70 font-light leading-relaxed text-lg mb-6">
              At Kadlag Investment, we embody a commitment to unlocking the full spectrum of financial potential. With a guiding philosophy grounded in integrity and innovation, we're more than financial service providers &mdash; we're architects of prosperity. 
            </p>
            
            <p className="text-foreground/70 font-light leading-relaxed text-lg mb-6">
              Our seasoned team of experts combines industry knowledge with a personalised touch, ensuring that your unique financial narrative is not just understood but elevated. What sets us apart is our client-centric excellence, where transparency, trust, and enduring relationships define our approach.
            </p>

            <p className="text-foreground/70 font-light leading-relaxed text-lg">
              Join us at Kadlag Investment, where financial success is a collaborative journey, and your aspirations are the heartbeat of our mission.
            </p>
          </motion.div>

          {/* Right Column: Founder Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative h-[600px] lg:h-[800px] w-full rounded-3xl overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-white/5" />
            <Image 
              src="/about/founder.jpg" 
              alt="Founder of Kadlag Investment"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
            {/* Gradient overlay to ground the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
