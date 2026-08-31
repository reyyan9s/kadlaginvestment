import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentService = SERVICES_DATA.find((s) => s.slug === slug);

  if (!currentService) {
    notFound();
  }

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
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <ChevronRight size={14} className="text-foreground/40" />
            <span className="text-accent font-medium">{currentService.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8">
              
              {/* Overview Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
                  Our Services
                </h2>
                <p className="text-foreground/70 font-light leading-relaxed text-base md:text-lg">
                  Discover a range of comprehensive financial solutions at Kadlag Investments. Our services, crafted with expertise and dedication, include professional advisory, wealth management, mutual funds, insurance, stock market insights, capital restructuring, portfolio management, and personalized financial planning. With a client-centric approach and a commitment to transparency, we empower you to navigate the complexities of the financial landscape. At Kadlag Investments, we don't just offer services; we provide a roadmap to your financial success. Explore our offerings and embark on a journey to secure and prosperous financial futures.
                </p>
              </div>

              {/* Featured Service Image */}
              <div className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Dedicated Service Info */}
              <div className="space-y-6 mb-12">
                <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground text-gradient">
                  {currentService.title}
                </h3>
                
                {currentService.detailedDesc.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground/80 font-light leading-relaxed text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Highlights / Features */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-12">
                <h4 className="text-xl font-display font-medium text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Key Highlights & Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm md:text-base font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-medium text-foreground mb-2">
                    Ready to discuss {currentService.title}?
                  </h4>
                  <p className="text-foreground/70 font-light text-sm">
                    Book a free consultation with our senior wealth architects today.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 rounded bg-accent text-background font-semibold hover:bg-accent-light transition-all flex items-center gap-2 shrink-0 group"
                >
                  Initiate Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* All Services Navigation Box */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-xl sticky top-28">
                <div className="mb-6">
                  <h4 className="text-2xl font-display font-medium text-foreground mb-2">
                    The Best Our Services
                  </h4>
                  <p className="text-foreground/60 text-xs font-light leading-relaxed">
                    Discover a range of comprehensive financial solutions at Kadlag Investments.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {SERVICES_DATA.map((service) => {
                    const isActive = service.slug === currentService.slug;
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-accent text-black font-semibold shadow-lg shadow-accent/20 translate-x-1"
                            : "text-foreground/70 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/5"
                        }`}
                      >
                        <span className="text-sm">{service.title}</span>
                        <ChevronRight 
                          size={16} 
                          className={isActive ? "text-black" : "text-foreground/30"} 
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Direct Support Card in Sidebar */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-accent">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-foreground/50 uppercase tracking-wider">Free Consultancy 24/7</p>
                        <p className="text-sm font-semibold text-foreground">+91- 9150306306</p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/60 font-light">
                      We are open Mon - Sat 11 AM - 05 PM. Contact our Sangamner office directly.
                    </p>
                    <a
                      href="tel:+919150306306"
                      className="w-full py-2.5 text-center text-xs uppercase tracking-widest font-semibold text-accent border border-accent/30 rounded-lg hover:bg-accent hover:text-black transition-colors"
                    >
                      Call Advisory Team
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
