import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, ArrowRight } from "lucide-react";
import CompanyOverviewTabs from "@/components/CompanyOverviewTabs";
import PartnerMarquee from "@/components/PartnerMarquee";

export const metadata = {
  title: "About Us | Kadlag Investment",
  description: "Learn about Kadlag Investment - empowering your financial success with integrity, innovation, and client-centric excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 1. Hero Header Banner */}
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/services/banner.png')` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-foreground/60 mb-4 uppercase tracking-widest font-light">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} className="text-foreground/40" />
            <span className="text-accent font-medium">About Us</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">
            About Kadlag Investment
          </h1>
        </div>
      </section>

      {/* 2. Panoramic Team & Leadership Photo */}
      <section className="pt-10 md:pt-14 pb-0">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="relative w-full aspect-[3188/800] md:aspect-[3188/800] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-white/[0.02]">
            <Image
              src="/about/aboutus.png"
              alt="Kadlag Investment Team & Leadership"
              fill
              className="object-contain md:object-cover object-center group-hover:scale-102 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 p-3 md:p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hidden sm:block">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-accent font-semibold">Our Leadership Team</p>
              <p className="text-xs md:text-sm text-foreground/90 font-light">Inauguration at Top Ten Imperial Commercial Complex &bull; Sangamner</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview Tabs Section */}
      <section className="pt-4 md:pt-6 pb-6 md:pb-8">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="p-8 md:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/5 shadow-xl">
            <CompanyOverviewTabs />

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 rounded bg-accent text-background font-semibold hover:bg-accent-light transition-all flex items-center gap-2 group"
                >
                  Schedule Advisory Session
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3.5 rounded border border-white/20 text-foreground hover:bg-white/5 transition-all"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-3 text-sm text-foreground/70">
                <span className="text-accent font-medium">Direct Hotline:</span>
                <a href="tel:+919150306306" className="font-semibold text-foreground hover:text-accent transition-colors">
                  +91- 9150306306
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Sunil Kadlag (Founder Profile) */}
      <section className="py-10 md:py-14 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-black/40 group">
                <Image
                  src="/about/sunilkadlag.png"
                  alt="Mr. Sunil Kadlag - Founder of Kadlag Investment"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <h4 className="text-lg font-display font-medium text-white">Mr. Sunil Kadlag</h4>
                  <p className="text-xs uppercase tracking-widest text-accent font-medium">Founder & Financial Visionary</p>
                </div>
              </div>
            </div>

            {/* Right: Founder Bio & Story */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-block bg-accent px-4 py-1.5 rounded-sm w-fit mb-2">
                <span className="text-black font-semibold text-xs tracking-widest uppercase">
                  Leadership Profile
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
                About <span className="text-gradient">Sunil Kadlag</span>
              </h3>

              <div className="space-y-5 text-foreground/80 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Meet Sunil Kadlag, the visionary founder behind Kadlag Investments, whose journey in the financial realm began with a vision to empower individuals and businesses. Established in June 1996, Kadlag Investments reflects Sunil's unwavering commitment to transforming financial dreams into reality.
                </p>

                <p>
                  Sunil Kadlag's entrepreneurial spirit and dedication led to the establishment of the agency as an authorized partner of the Life Insurance Corporation of India in Sangamner, N-95. Over the years, Sunil has steered the company through milestones, including becoming a certified Mutual Fund Distributor recognized by AMFI in 2007.
                </p>

                <p>
                  Under Sunil's leadership, Kadlag Investments has evolved into a trusted financial partner, offering a comprehensive suite of services, including wealth management, mutual funds, insurance, stock market insights, capital restructuring, portfolio management, and financial planning.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-2xl font-bold font-display text-accent">1996</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mt-1">Established</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-2xl font-bold font-display text-accent">2007</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mt-1">AMFI Certified</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold font-display text-accent">27+ Yrs</p>
                  <p className="text-xs text-foreground/60 uppercase tracking-wider mt-1">Fiduciary Trust</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Video & Media Feature Section */}
      <section className="py-10 md:py-14 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Video Text & Subscribe CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-accent px-4 py-1.5 rounded-sm w-fit mb-2">
                <span className="text-black font-semibold text-xs tracking-widest uppercase">
                  Featured Media
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
                Sunil <span className="text-gradient">Kadlag</span>
              </h3>

              <p className="text-foreground/80 font-light leading-relaxed text-base md:text-lg">
                Unlock financial success with Sunil Kadlag! Dive into easy-to-understand finance tips, investment strategies, and expert advice. Subscribe now for a wealth of knowledge in every video.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.youtube.com/@sunilkadlag2723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all flex items-center gap-2.5 shadow-lg shadow-red-600/20 group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe on YouTube
                </a>

                <a
                  href="https://youtu.be/Z5IvggO8V_M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl border border-white/20 text-foreground hover:bg-white/5 font-medium text-sm transition-all flex items-center gap-2"
                >
                  Watch Full Video
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Embedded Responsive Video */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/Z5IvggO8V_M?rel=0"
                  title="Kadlag Investment Director Mr. Sunil Kadlag Interview at Saturday Global Trust Club Sangamner"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. We Are Associated With (Partner Marquee) */}
      <section className="py-10 md:py-14 bg-background border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <PartnerMarquee />
        </div>
      </section>

      {/* 7. Consultation CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
                Ready to engineer your financial future?
              </h4>
              <p className="text-foreground/70 font-light text-sm md:text-base max-w-xl">
                Get in touch with Mr. Sunil Kadlag and our senior wealth management team for a one-on-one strategy session.
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
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
