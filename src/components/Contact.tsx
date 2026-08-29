"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(197,168,128,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">The Future</h2>
            <h3 className="text-5xl md:text-6xl font-display font-medium leading-[1.1] mb-8">
              Ready to <br /> <span className="italic text-gradient">engineer your wealth?</span>
            </h3>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-md mb-12">
              Connect with our elite advisory team for a strategic consultation. Your financial architecture begins here.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded glass-panel flex items-center justify-center text-accent shrink-0 border border-border/50">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Direct Lines</h5>
                  <a href="tel:+919150306306" className="block text-xl font-medium text-foreground hover:text-accent transition-colors">+91- 9150306306</a>
                  <a href="tel:+919422840886" className="block text-xl font-medium text-foreground hover:text-accent transition-colors">+91- 9422840886</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded glass-panel flex items-center justify-center text-accent shrink-0 border border-border/50">
                  <Clock size={20} />
                </div>
                <div>
                  <h5 className="text-sm text-foreground/50 uppercase tracking-widest mb-1">Business Hours</h5>
                  <p className="text-lg font-medium text-foreground">24/7 Free Consultancy</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-10 rounded-sm border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light" />
            <h4 className="text-2xl font-display font-semibold mb-8">Initiate Contact</h4>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Full Name</label>
                <input type="text" className="w-full bg-muted/30 border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" placeholder="e.g. Rahul Sharma" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Email Address</label>
                <input type="email" className="w-full bg-muted/30 border border-border rounded px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors" placeholder="rahul.sharma@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Strategic Interest</label>
                <select className="w-full bg-muted/30 border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Wealth Management</option>
                  <option>Portfolio Management</option>
                  <option>Corporate Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full py-4 mt-4 rounded bg-accent text-background font-semibold hover:bg-accent-light transition-colors flex items-center justify-center gap-2 group">
                Request Strategy Session
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
