import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Coins, 
  Briefcase, 
  BarChart3, 
  ShieldAlert, 
  LineChart, 
  Building2, 
  PieChart, 
  GraduationCap, 
  Users, 
  ArrowRight,
  Phone
} from "lucide-react";
import PartnerMarquee from "@/components/PartnerMarquee";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata = {
  title: "Our Services | Kadlag Investment",
  description: "Comprehensive financial solutions including professional advisory, wealth management, mutual funds, insurance, stock market, capital restructuring, and portfolio management.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "professional-advisory": <Coins className="w-8 h-8" />,
  "wealth-management": <Briefcase className="w-8 h-8" />,
  "mutual-funds": <BarChart3 className="w-8 h-8" />,
  "insurance": <ShieldAlert className="w-8 h-8" />,
  "stock-market": <LineChart className="w-8 h-8" />,
  "capital-restructuring": <Building2 className="w-8 h-8" />,
  "portfolio-management": <PieChart className="w-8 h-8" />,
  "financial-planning": <GraduationCap className="w-8 h-8" />,
  "corporate-solutions": <Users className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 1. Hero Header Banner */}
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/services/insurance.png')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-foreground/60 mb-4 uppercase tracking-widest font-light">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} className="text-foreground/40" />
            <span className="text-accent font-medium">Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* 2. Top Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Overview Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-accent px-4 py-1.5 rounded-sm w-fit mb-2">
                <span className="text-black font-semibold text-xs tracking-widest uppercase">
                  Financial Architecture
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
                Comprehensive Solutions <br />
                <span className="italic text-gradient">Engineered For Your Growth</span>
              </h2>

              <p className="text-foreground/80 font-light leading-relaxed text-base md:text-lg">
                Discover a range of comprehensive financial solutions at Kadlag Investments. Our services, crafted with expertise and dedication, include professional advisory, wealth management, mutual funds, insurance, stock market insights, capital restructuring, portfolio management, and personalized financial planning.
              </p>

              <p className="text-foreground/70 font-light leading-relaxed text-base md:text-lg">
                With a client-centric approach and a commitment to transparency, we empower you to navigate the complexities of the financial landscape. At Kadlag Investments, we don't just offer services; we provide a roadmap to your financial success. Explore our offerings and embark on a journey to secure and prosperous financial futures.
              </p>
            </div>

            {/* Right: Featured Collaboration Image */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] md:h-[420px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-white/[0.02]">
                <Image
                  src="/services/service-detail.png"
                  alt="Kadlag Investment Services Overview"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">Tailored Solutions</p>
                  <p className="text-xs text-foreground/90 font-light">From individual investors to institutional portfolios.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 3x3 All Services Grid */}
      <section className="py-12 md:py-16 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight uppercase">
              Our Services
            </h3>
            <p className="text-foreground/60 text-sm md:text-base font-light max-w-2xl mx-auto mt-4">
              Select any of our specialized advisory domains to explore in-depth methodologies and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-black group-hover:scale-105 transition-all duration-300">
                    {SERVICE_ICONS[service.id] || <Coins className="w-6 h-6" />}
                  </div>

                  <h4 className="text-xl font-display font-medium text-foreground mb-2.5">
                    {service.title}
                  </h4>

                  <p className="text-foreground/60 font-light leading-relaxed text-xs md:text-sm line-clamp-3">
                    {service.shortDesc || service.detailedDesc[0]}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 pt-4 border-t border-white/5 flex items-center text-accent font-medium text-xs tracking-widest uppercase cursor-pointer group-hover:text-white transition-colors duration-300"
                >
                  Read More 
                  <span className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. We Are Associated With (Partner Marquee) */}
      <section className="py-12 md:py-16 bg-background border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <PartnerMarquee />
        </div>
      </section>

      {/* 5. Consultation CTA Banner */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
                Need tailored advice for your portfolio?
              </h4>
              <p className="text-foreground/70 font-light text-sm md:text-base max-w-xl">
                Speak directly with our senior wealth architects for a complimentary strategy review.
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
