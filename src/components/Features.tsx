"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    num: "01",
    title: "Unleash Your Financial Potential",
    desc: "At Kadlag Investment, we believe in unlocking the power of your finances to create a future of abundance and prosperity. Our mission is to guide you on a journey of financial growth and empowerment. With a focus on innovation and personalised strategies, we are dedicated to uncovering the untapped potential within your financial portfolio.",
  },
  {
    num: "02",
    title: "Your Success, Our Unwavering Priority",
    desc: "Your financial success is at the core of everything we do. We prioritise your goals, dreams, and aspirations. Our seasoned team of financial experts is committed to understanding your unique needs, providing tailored solutions, and working tirelessly to ensure that your path to success is not only clear but also rewarding.",
  },
  {
    num: "03",
    title: "Partner For A Flourishing Future",
    desc: "Choose Kadlag Investment as your partner in financial success. We go beyond conventional financial services, offering a personalised and strategic approach to empower you on your financial journey. Unleash the full potential of your resources with a dedicated ally by your side.",
  }
];

export default function Features() {
  return (
    <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="feature-card group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Massive ambient background number */}
              <div className="absolute -top-10 -right-6 text-[10rem] font-display font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 leading-none select-none pointer-events-none">
                {feat.num}
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="text-sm font-sans tracking-widest text-accent uppercase">
                  Phase {feat.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground leading-tight">
                  {feat.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              
              {/* Decorative bottom line that expands on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
