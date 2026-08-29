"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Performance", href: "/#performance" },
  { label: "Partners", href: "/#partners" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <Image 
            src="/logo/main_logo.png" 
            alt="Kadlag Investment Logo" 
            width={160} 
            height={50} 
            className="w-auto h-10 object-contain transition-transform group-hover:scale-105"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="ml-4 px-6 py-2.5 rounded-sm bg-accent text-background text-sm font-semibold hover:bg-accent-light transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Free Consultation</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-border flex flex-col p-6 gap-6 md:hidden"
          >
            {NAV_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center w-full px-6 py-3 mt-4 rounded-sm bg-accent text-background text-lg font-semibold"
            >
              Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
