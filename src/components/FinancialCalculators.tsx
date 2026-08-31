"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Shield, Sparkles, ArrowUpRight } from "lucide-react";

type CalculatorType = "sip" | "homeloan" | "carloan";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

function formatShortLakhs(amount: number) {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return formatCurrency(amount);
}

export default function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("sip");

  // SIP States
  const [sipMonthly, setSipMonthly] = useState(25000);
  const [sipReturnRate, setSipReturnRate] = useState(12);
  const [sipTenure, setSipTenure] = useState(10);

  // Home Loan States
  const [homeLoanAmount, setHomeLoanAmount] = useState(1000000);
  const [homeLoanRate, setHomeLoanRate] = useState(6.5);
  const [homeLoanTenure, setHomeLoanTenure] = useState(5);

  // Car Loan States
  const [carLoanAmount, setCarLoanAmount] = useState(800000);
  const [carLoanRate, setCarLoanRate] = useState(8.5);
  const [carLoanTenure, setCarLoanTenure] = useState(5);

  // --- SIP Calculations ---
  const sipMonths = sipTenure * 12;
  const sipMonthlyRate = sipReturnRate / 12 / 100;
  const sipTotalInvested = sipMonthly * sipMonths;
  const sipTotalValue =
    sipMonthlyRate > 0
      ? sipMonthly *
        ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) *
        (1 + sipMonthlyRate)
      : sipTotalInvested;
  const sipEstReturns = Math.max(0, sipTotalValue - sipTotalInvested);
  const sipInvestedPct =
    sipTotalValue > 0 ? (sipTotalInvested / sipTotalValue) * 100 : 50;
  const sipReturnsPct = 100 - sipInvestedPct;
  const sipGrowthMultiplier =
    sipTotalInvested > 0 ? (sipTotalValue / sipTotalInvested).toFixed(2) : "1.00";

  // --- Home Loan Calculations ---
  const homeMonths = homeLoanTenure * 12;
  const homeMonthlyRate = homeLoanRate / 12 / 100;
  const homeEmi =
    homeMonthlyRate > 0
      ? (homeLoanAmount *
          homeMonthlyRate *
          Math.pow(1 + homeMonthlyRate, homeMonths)) /
        (Math.pow(1 + homeMonthlyRate, homeMonths) - 1)
      : homeLoanAmount / homeMonths;
  const homeTotalAmount = homeEmi * homeMonths;
  const homeTotalInterest = Math.max(0, homeTotalAmount - homeLoanAmount);
  const homePrincipalPct =
    homeTotalAmount > 0 ? (homeLoanAmount / homeTotalAmount) * 100 : 50;
  const homeInterestPct = 100 - homePrincipalPct;

  // --- Car Loan Calculations ---
  const carMonths = carLoanTenure * 12;
  const carMonthlyRate = carLoanRate / 12 / 100;
  const carEmi =
    carMonthlyRate > 0
      ? (carLoanAmount *
          carMonthlyRate *
          Math.pow(1 + carMonthlyRate, carMonths)) /
        (Math.pow(1 + carMonthlyRate, carMonths) - 1)
      : carLoanAmount / carMonths;
  const carTotalAmount = carEmi * carMonths;
  const carTotalInterest = Math.max(0, carTotalAmount - carLoanAmount);
  const carPrincipalPct =
    carTotalAmount > 0 ? (carLoanAmount / carTotalAmount) * 100 : 50;
  const carInterestPct = 100 - carPrincipalPct;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 1. Pill Tabs Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
        <button
          onClick={() => setActiveTab("homeloan")}
          className={`px-7 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
            activeTab === "homeloan"
              ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
              : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
          }`}
        >
          Home Loan EMI
        </button>

        <button
          onClick={() => setActiveTab("sip")}
          className={`px-7 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
            activeTab === "sip"
              ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
              : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
          }`}
        >
          SIP Wealth Generator
        </button>

        <button
          onClick={() => setActiveTab("carloan")}
          className={`px-7 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
            activeTab === "carloan"
              ? "bg-accent text-black shadow-lg shadow-accent/25 scale-105"
              : "bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
          }`}
        >
          Car Loan EMI
        </button>
      </div>

      {/* 2. Main Calculator Container */}
      <div className="p-8 md:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* ======================= 1. SIP CALCULATOR ======================= */}
          {activeTab === "sip" && (
            <motion.div
              key="sip"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles size={13} />
                  Compounding Engine
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Systematic Investment Plan is the way to go!
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                
                {/* Left: Input Sliders */}
                <div className="lg:col-span-6 space-y-7">
                  
                  {/* Slider 1: Monthly Investment */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Monthly Investment</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                        <span>₹</span>
                        <input
                          type="number"
                          value={sipMonthly}
                          onChange={(e) => setSipMonthly(Number(e.target.value))}
                          className="w-24 bg-transparent text-right outline-none font-bold text-accent pl-1"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={200000}
                      step={500}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>₹500</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Return Rate */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Expected Return Rate (p.a)</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                        <input
                          type="number"
                          value={sipReturnRate}
                          step={0.5}
                          onChange={(e) => setSipReturnRate(Number(e.target.value))}
                          className="w-14 bg-transparent text-right outline-none font-bold text-emerald-400 pr-1"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={0.5}
                      value={sipReturnRate}
                      onChange={(e) => setSipReturnRate(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>1%</span>
                      <span>30%</span>
                    </div>
                  </div>

                  {/* Slider 3: Time Period */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Time Horizon</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-foreground font-bold">
                        <input
                          type="number"
                          value={sipTenure}
                          onChange={(e) => setSipTenure(Number(e.target.value))}
                          className="w-12 bg-transparent text-right outline-none font-bold text-foreground pr-1"
                        />
                        <span>Yrs</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={35}
                      step={1}
                      value={sipTenure}
                      onChange={(e) => setSipTenure(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>1 Yr</span>
                      <span>35 Yrs</span>
                    </div>
                  </div>

                </div>

                {/* Right: High-End Visualizer & Metrics Card */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl bg-black/40 border border-white/10 relative shadow-inner">
                  
                  {/* Visual Radial Glow Ring */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-8">
                    
                    {/* SVG Progress Rings */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <defs>
                        {/* Gold Gradient */}
                        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E5C89F" />
                          <stop offset="100%" stopColor="#C5A880" />
                        </linearGradient>
                        {/* Emerald Gradient */}
                        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#34D399" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                        {/* Track */}
                        <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>

                      {/* Outer Background Track */}
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke="url(#trackGrad)"
                        strokeWidth="10"
                        fill="transparent"
                      />

                      {/* Outer Ring: Est Returns (Emerald) */}
                      <circle
                        cx="60"
                        cy="60"
                        r="48"
                        stroke="url(#emeraldGrad)"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray="301.59"
                        strokeDashoffset={`${301.59 - (sipReturnsPct / 100) * 301.59}`}
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                      />

                      {/* Inner Ring: Invested Capital (Gold) */}
                      <circle
                        cx="60"
                        cy="60"
                        r="35"
                        stroke="url(#goldGrad)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="219.91"
                        strokeDashoffset={`${219.91 - (sipInvestedPct / 100) * 219.91}`}
                        strokeLinecap="round"
                        className="transition-all duration-700 ease-out drop-shadow-[0_0_10px_rgba(197,168,128,0.4)]"
                      />
                    </svg>

                    {/* Center Core Floating Glass Badge */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/50 font-semibold mb-1">
                        Total Maturity
                      </span>
                      <span className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                        {formatShortLakhs(sipTotalValue)}
                      </span>
                      <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                        <TrendingUp size={11} />
                        {sipGrowthMultiplier}x Wealth
                      </div>
                    </div>
                  </div>

                  {/* Interactive Dual-Bar Split Proportion */}
                  <div className="w-full space-y-4">
                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden flex p-0.5 border border-white/10">
                      <div
                        style={{ width: `${sipInvestedPct}%` }}
                        className="h-full bg-gradient-to-r from-accent to-[#E5C89F] rounded-l-full transition-all duration-500"
                      />
                      <div
                        style={{ width: `${sipReturnsPct}%` }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-r-full transition-all duration-500"
                      />
                    </div>

                    {/* 2 Breakdown Columns */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                          <span className="text-xs text-foreground/60">Invested Capital</span>
                        </div>
                        <p className="text-base font-semibold text-foreground font-display">
                          {formatCurrency(sipTotalInvested)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(sipInvestedPct)}% of total
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="text-xs text-foreground/60">Est. Growth</span>
                        </div>
                        <p className="text-base font-semibold text-emerald-400 font-display">
                          +{formatCurrency(sipEstReturns)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(sipReturnsPct)}% wealth gained
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ======================= 2. HOME LOAN CALCULATOR ======================= */}
          {activeTab === "homeloan" && (
            <motion.div
              key="homeloan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                  <Shield size={13} />
                  Mortgage Planning
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Home is where heart is - plan it today!
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                {/* Left: Input Sliders */}
                <div className="lg:col-span-6 space-y-7">
                  
                  {/* Slider 1: Loan Amount */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Loan Amount</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                        <span>₹</span>
                        <input
                          type="number"
                          value={homeLoanAmount}
                          onChange={(e) => setHomeLoanAmount(Number(e.target.value))}
                          className="w-28 bg-transparent text-right outline-none font-bold text-accent pl-1"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={20000000}
                      step={50000}
                      value={homeLoanAmount}
                      onChange={(e) => setHomeLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>₹1,00,000</span>
                      <span>₹2,00,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Rate of Interest */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Rate of Interest (p.a)</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                        <input
                          type="number"
                          value={homeLoanRate}
                          step={0.1}
                          onChange={(e) => setHomeLoanRate(Number(e.target.value))}
                          className="w-14 bg-transparent text-right outline-none font-bold text-accent pr-1"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={18}
                      step={0.1}
                      value={homeLoanRate}
                      onChange={(e) => setHomeLoanRate(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>1%</span>
                      <span>18%</span>
                    </div>
                  </div>

                  {/* Slider 3: Loan Tenure */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Loan Tenure</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-foreground font-bold">
                        <input
                          type="number"
                          value={homeLoanTenure}
                          onChange={(e) => setHomeLoanTenure(Number(e.target.value))}
                          className="w-12 bg-transparent text-right outline-none font-bold text-foreground pr-1"
                        />
                        <span>Yrs</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={homeLoanTenure}
                      onChange={(e) => setHomeLoanTenure(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>1 Yr</span>
                      <span>30 Yrs</span>
                    </div>
                  </div>

                </div>

                {/* Right: EMI Breakdown Visualizer */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl bg-black/40 border border-white/10 relative shadow-inner">
                  
                  {/* Central Highlight Card */}
                  <div className="w-full p-6 rounded-2xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 mb-8 text-center">
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                      Monthly EMI Outflow
                    </p>
                    <h4 className="text-3xl md:text-4xl font-bold font-display text-white">
                      {formatCurrency(homeEmi)}
                    </h4>
                    <p className="text-xs text-foreground/60 mt-1 font-light">
                      Fixed monthly repayment for {homeLoanTenure} years
                    </p>
                  </div>

                  {/* Dual-Bar Split Proportion */}
                  <div className="w-full space-y-4">
                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden flex p-0.5 border border-white/10">
                      <div
                        style={{ width: `${homePrincipalPct}%` }}
                        className="h-full bg-gradient-to-r from-accent to-[#E5C89F] rounded-l-full transition-all duration-500"
                      />
                      <div
                        style={{ width: `${homeInterestPct}%` }}
                        className="h-full bg-gradient-to-r from-amber-600 to-red-500 rounded-r-full transition-all duration-500"
                      />
                    </div>

                    {/* Breakdown Columns */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                          <span className="text-xs text-foreground/60">Principal Amount</span>
                        </div>
                        <p className="text-base font-semibold text-foreground font-display">
                          {formatCurrency(homeLoanAmount)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(homePrincipalPct)}% of total
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="text-xs text-foreground/60">Total Interest</span>
                        </div>
                        <p className="text-base font-semibold text-amber-400 font-display">
                          {formatCurrency(homeTotalInterest)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(homeInterestPct)}% interest cost
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Total Repayment Amount</span>
                      <span className="text-lg font-bold font-display text-accent">
                        {formatCurrency(homeTotalAmount)}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ======================= 3. CAR LOAN CALCULATOR ======================= */}
          {activeTab === "carloan" && (
            <motion.div
              key="carloan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                  <ArrowUpRight size={13} />
                  Auto Finance
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Drive your dream car with smart financial planning!
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                {/* Left: Input Sliders */}
                <div className="lg:col-span-6 space-y-7">
                  
                  {/* Slider 1: Loan Amount */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Loan Amount</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                        <span>₹</span>
                        <input
                          type="number"
                          value={carLoanAmount}
                          onChange={(e) => setCarLoanAmount(Number(e.target.value))}
                          className="w-28 bg-transparent text-right outline-none font-bold text-accent pl-1"
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={5000000}
                      step={25000}
                      value={carLoanAmount}
                      onChange={(e) => setCarLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>₹50,000</span>
                      <span>₹50,00,000</span>
                    </div>
                  </div>

                  {/* Slider 2: Rate of Interest */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Rate of Interest (p.a)</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                        <input
                          type="number"
                          value={carLoanRate}
                          step={0.1}
                          onChange={(e) => setCarLoanRate(Number(e.target.value))}
                          className="w-14 bg-transparent text-right outline-none font-bold text-accent pr-1"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={20}
                      step={0.1}
                      value={carLoanRate}
                      onChange={(e) => setCarLoanRate(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>5%</span>
                      <span>20%</span>
                    </div>
                  </div>

                  {/* Slider 3: Loan Tenure */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-foreground/80 font-medium">Loan Tenure</span>
                      <div className="flex items-center px-4 py-1.5 rounded-xl bg-white/10 border border-white/20 text-foreground font-bold">
                        <input
                          type="number"
                          value={carLoanTenure}
                          onChange={(e) => setCarLoanTenure(Number(e.target.value))}
                          className="w-12 bg-transparent text-right outline-none font-bold text-foreground pr-1"
                        />
                        <span>Yrs</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={7}
                      step={1}
                      value={carLoanTenure}
                      onChange={(e) => setCarLoanTenure(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[11px] text-foreground/40 font-mono">
                      <span>1 Yr</span>
                      <span>7 Yrs</span>
                    </div>
                  </div>

                </div>

                {/* Right: EMI Breakdown Visualizer */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl bg-black/40 border border-white/10 relative shadow-inner">
                  
                  {/* Central Highlight Card */}
                  <div className="w-full p-6 rounded-2xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 mb-8 text-center">
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                      Monthly Auto EMI
                    </p>
                    <h4 className="text-3xl md:text-4xl font-bold font-display text-white">
                      {formatCurrency(carEmi)}
                    </h4>
                    <p className="text-xs text-foreground/60 mt-1 font-light">
                      Fixed monthly repayment for {carLoanTenure} years
                    </p>
                  </div>

                  {/* Dual-Bar Split Proportion */}
                  <div className="w-full space-y-4">
                    <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden flex p-0.5 border border-white/10">
                      <div
                        style={{ width: `${carPrincipalPct}%` }}
                        className="h-full bg-gradient-to-r from-accent to-[#E5C89F] rounded-l-full transition-all duration-500"
                      />
                      <div
                        style={{ width: `${carInterestPct}%` }}
                        className="h-full bg-gradient-to-r from-amber-600 to-red-500 rounded-r-full transition-all duration-500"
                      />
                    </div>

                    {/* Breakdown Columns */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                          <span className="text-xs text-foreground/60">Principal Amount</span>
                        </div>
                        <p className="text-base font-semibold text-foreground font-display">
                          {formatCurrency(carLoanAmount)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(carPrincipalPct)}% of total
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="text-xs text-foreground/60">Total Interest</span>
                        </div>
                        <p className="text-base font-semibold text-amber-400 font-display">
                          {formatCurrency(carTotalInterest)}
                        </p>
                        <p className="text-[11px] text-foreground/40 font-mono mt-0.5">
                          {Math.round(carInterestPct)}% interest cost
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Total Repayment Amount</span>
                      <span className="text-lg font-bold font-display text-accent">
                        {formatCurrency(carTotalAmount)}
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
