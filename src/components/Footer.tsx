"use client";

import { Phone, Clock, MapPin, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: About & Socials */}
          <div className="md:col-span-12 lg:col-span-5">
            <a href="#home" className="flex items-center mb-8 hover:opacity-80 transition-opacity inline-block w-fit">
              <Image 
                src="/logo/main_logo.png" 
                alt="Kadlag Investment Logo" 
                width={240} 
                height={80} 
                className="w-auto h-16 object-contain"
              />
            </a>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8 max-w-md font-light">
              Stay in the loop with the latest financial insights and updates. Follow us on social media for valuable tips, industry news, and exclusive content. Your financial journey is our priority, and we're here to keep you informed every step of the way.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/KadlagInvestmentFB/" target="_blank" rel="noopener noreferrer" aria-label="Kadlag Investment on Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/kadlaginvestment" target="_blank" rel="noopener noreferrer" aria-label="Kadlag Investment on Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@sunilkadlag2723" target="_blank" rel="noopener noreferrer" aria-label="Sunil Kadlag on YouTube" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 lg:ml-auto">
            <h4 className="text-foreground font-semibold mb-8 uppercase tracking-wider text-sm font-display">Quick Links</h4>
            <ul className="flex flex-col gap-5 text-sm text-foreground/60 font-light">
              <li><a href="/" className="hover:text-accent transition-colors relative group w-fit">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="/about" className="hover:text-accent transition-colors relative group w-fit">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="/services" className="hover:text-accent transition-colors relative group w-fit">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><Link href="/sip-calculator" className="hover:text-accent transition-colors relative group w-fit">
                SIP Calculation
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors relative group w-fit">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors relative group w-fit">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Right Column: Contact Info */}
          <div className="md:col-span-6 lg:col-span-4">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-1 uppercase tracking-wider">Need help? 24/7</p>
                  <p className="text-lg font-display text-foreground">+91- 9150306306</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-1 uppercase tracking-wider">We are open on</p>
                  <p className="text-foreground font-light text-sm leading-relaxed">Mon - Sat 11 AM - 05 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-foreground font-light text-sm leading-relaxed">S-5, Second Floor, Top Ten Imperial,<br />Sangamner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-xs text-foreground/40 font-light">
            &copy; {new Date().getFullYear()} Kadlag. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-accent hover:bg-accent-light transition-colors flex items-center justify-center text-black md:absolute md:right-0 md:-top-6 shadow-lg shadow-accent/20"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
