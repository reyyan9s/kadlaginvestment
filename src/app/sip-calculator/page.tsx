import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import FinancialCalculators from "@/components/FinancialCalculators";
import PartnerMarquee from "@/components/PartnerMarquee";

export const metadata = {
  title: "SIP & Financial Calculators | Kadlag Investment",
  description: "Calculate your Systematic Investment Plan (SIP) returns, Home Loan EMIs, and Car Loan EMIs with precision at Kadlag Investments.",
};

export default function SipCalculatorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 1. Hero Header Banner */}
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/services/mutual-funds.png')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-foreground/60 mb-4 uppercase tracking-widest font-light">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} className="text-foreground/40" />
            <span className="text-accent font-medium">SIP Calculation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">
            SIP Calculation
          </h1>
        </div>
      </section>

      {/* 2. Interactive Calculator Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FinancialCalculators />
        </div>
      </section>

      {/* 3. We Are Associated With (Partner Marquee) */}
      <section className="py-10 md:py-16 bg-background border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <PartnerMarquee />
        </div>
      </section>

      {/* 4. Consultation CTA Banner */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
                Ready to start your SIP journey?
              </h4>
              <p className="text-foreground/70 font-light text-sm md:text-base max-w-xl">
                Let Kadlag Investments help you select top-performing mutual funds tailored to your financial milestones.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="tel:+919150306306"
                className="px-6 py-3.5 rounded-lg border border-accent/40 text-accent hover:bg-accent hover:text-black font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Phone size={16} />
                +91- 9150306306
              </a>
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-lg bg-accent text-black font-semibold text-sm hover:bg-accent-light transition-all"
              >
                Start Investing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
