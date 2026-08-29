"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Expertise that Drives Results",
    subtitle: "Seasoned Professionals",
    desc: "At Kadlag Investment, our team comprises seasoned financial experts with a wealth of experience. We bring a deep understanding of market dynamics, investment strategies, and wealth management. Trust us to navigate the complexities of the financial landscape with precision and insight, ensuring that your financial goals are not just met but exceeded.",
    color: "bg-white/[0.03]"
  },
  {
    title: "Tailored Solutions for Your Unique Journey",
    subtitle: "Personalized Approach",
    desc: "We recognize that every financial journey is unique. That's why we pride ourselves on offering personalized solutions crafted to align with your specific goals and aspirations. Whether you're aiming for wealth accumulation, retirement planning, or strategic investments, Kadlag Investment tailors its services to your individual needs, providing a roadmap for success that is uniquely yours.",
    color: "bg-white/[0.05]"
  },
  {
    title: "Client-Centric Excellence",
    subtitle: "Transparent Partnerships",
    desc: "At Kadlag Investment, we believe in building lasting relationships based on transparency, trust, and client satisfaction. Our client-centric approach goes beyond conventional financial services. We are not just advisors; we are partners dedicated to your success. Experience the difference of working with a team that prioritizes your financial well-being and strives to make every step of your journey a seamless and rewarding experience.",
    color: "bg-accent/5"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tighter uppercase">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`p-8 md:p-10 rounded-3xl border border-white/10 ${reason.color} flex flex-col hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="relative z-10">
                <div className="text-sm font-sans tracking-widest text-accent uppercase mb-6 font-semibold">
                  {reason.subtitle}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-medium leading-tight text-foreground mb-6">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
