"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "about-us",
    label: "About Us",
    title: "About Us",
    content: (
      <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
        <p>
          Established in June 1996 as an authorised agency of the esteemed Life Insurance Corporation of India in Sangamner, N-95, Kadlag Investment has emerged as a stalwart in the financial services arena. Our journey is a testament to a steadfast commitment to realising financial aspirations. A pivotal moment arrived in 2007 when we achieved certification as a Mutual Fund Distributor by the Association of Mutual Funds in India (AMFI), showcasing our dedication to offering diverse and sound investment solutions.
        </p>
        <p>
          We take pride in our association with Star Health and Allied Insurance Company Ltd, providing holistic health insurance sales and services. Our expanded office at the Top Ten Imperial Commercial Complex, inaugurated on December 30, 2020, marked a significant milestone. The event was graced by the esteemed presence of Mrs. Shantala Kishanrao Kadlag, Rajesh Malpani (Malpani Group), MLA Sudhir Tambe, and Balasaheb Deshmane.
        </p>
        <p>
          From our modest beginnings near Akole Bypass Road and the Vitthal Temple to our prominent location, we've maintained a personalised touch in financial services. Kadlag Investment blends experience, expertise, and a client-centric approach to craft enduring financial solutions. Our goal is to be more than financial advisors; we aim to be your trusted partners on the journey to a secure and prosperous future.
        </p>
      </div>
    ),
  },
  {
    id: "mission",
    label: "Mission",
    title: "Mission",
    content: (
      <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
        <p>
          At Kadlag Investment, we're dedicated to empowering financial success. Through personalized solutions and transparent guidance, we navigate wealth management, strategic investments, and insurance planning. We aim to be your trusted partner, shaping enduring financial well-being.
        </p>
        <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
          <p className="text-accent font-medium text-lg italic">
            Kadlag Investment &mdash; Your Path to Financial Empowerment.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "vision",
    label: "Vision",
    title: "Vision",
    content: (
      <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
        <p className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed">
          "Our unwavering vision is to be the most trusted and preferred partner in achieving financial success, diligently guiding our valued clients toward a secure and prosperous future."
        </p>
      </div>
    ),
  },
  {
    id: "our-method",
    label: "Our Method",
    title: "Our Method",
    content: (
      <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
        <h5 className="text-xl font-display font-medium text-accent">
          Navigating Financial Success:
        </h5>
        <p>
          At Kadlag Investment, our method is rooted in simplicity and effectiveness. We believe in a personalised approach that begins with understanding your unique financial landscape. Through meticulous analysis, strategic planning, and transparent communication, we tailor solutions that align with your goals.
        </p>
        <p>
          Our method involves staying agile in the ever-evolving financial landscape, utilising industry expertise, and leveraging innovative tools to ensure your financial success. At Kadlag Investment, we don't just navigate; we chart a course for your enduring financial prosperity.
        </p>
      </div>
    ),
  },
];

export default function CompanyOverviewTabs() {
  const [activeTab, setActiveTab] = useState("about-us");
  const current = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <div className="w-full">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-8">
        Company Overview
      </h3>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 md:gap-8 border-b border-white/10 overflow-x-auto scrollbar-hide mb-8 pb-1">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-3 px-2 md:px-4 text-sm md:text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive ? "text-accent font-semibold" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_10px_rgba(197,168,128,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Box */}
      <div className="min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {current.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
