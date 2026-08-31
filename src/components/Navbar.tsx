"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "SIP Calculator", href: "/sip-calculator" },
  { label: "Contact", href: "/contact" },
  { label: "Free Demat Account", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${
        scrolled ? "py-3 bg-white/90" : "py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image 
            src="/logo/main_logo.png" 
            alt="Kadlag Investment Logo" 
            width={160} 
            height={50} 
            className="w-auto h-9 md:h-10 object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-black/80 hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Free Consultancy 24/7 Call Block */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-md">
            <Phone size={18} className="fill-current" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-wider text-black/60 font-medium">
              Free Consultancy - 24/7
            </span>
            <div className="text-xs xl:text-sm font-bold text-black font-display flex items-center gap-1.5">
              <a href="tel:+919150306306" className="hover:opacity-75 transition-opacity">
                +91- 9150306306
              </a>
              <span className="text-black/40">,</span>
              <a href="tel:+919422840886" className="hover:opacity-75 transition-opacity">
                +91- 9422840886
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:opacity-75 transition-opacity p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/10 flex flex-col p-6 gap-5 lg:hidden shadow-2xl"
          >
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-black/90 hover:text-black transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-black/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Phone size={18} className="fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-black/60">Free Consultancy - 24/7</span>
                <div className="text-sm font-bold text-black flex flex-col">
                  <a href="tel:+919150306306" className="hover:opacity-75 transition-opacity">+91- 9150306306</a>
                  <a href="tel:+919422840886" className="hover:opacity-75 transition-opacity">+91- 9422840886</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
