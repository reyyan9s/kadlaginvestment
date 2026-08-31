import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PartnerMarquee from "@/components/PartnerMarquee";

export const metadata = {
  title: "Contact Us | Kadlag Investment",
  description: "Get in touch with Kadlag Investments in Sangamner. Call +91-9150306306 or visit our office at Top Ten Imperial.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 1. Hero Header Banner */}
      <section className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/services/service-detail.png')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-foreground/60 mb-4 uppercase tracking-widest font-light">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={14} className="text-foreground/40" />
            <span className="text-accent font-medium">Contact Us</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* 2. Main Contact Section (Get In Touch + Form) */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight mt-2">
                  Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-foreground/70 font-light text-sm md:text-base mt-3 leading-relaxed">
                  We will get back to you within 24 hours, or call us everyday.
                </p>
              </div>

              {/* Contact Detail Items */}
              <div className="space-y-6 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-1">Direct Call 24/7</p>
                    <a href="tel:+919150306306" className="block text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                      +91- 9150306306
                    </a>
                    <a href="tel:+919422840886" className="block text-sm text-foreground/80 hover:text-accent transition-colors">
                      +91- 9422840886
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-1">Email Support</p>
                    <a href="mailto:kadlag.support@gmail.com" className="block text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                      kadlag.support@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-1">Office Headquarters</p>
                    <p className="text-base font-semibold text-foreground leading-snug">
                      S-5, Second Floor, Top Ten Imperial
                    </p>
                    <p className="text-xs text-foreground/60 font-light mt-1">
                      Near Malpani Bajaj Showroom, Sangamner, Maharashtra 422605
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-4">Follow Our Official Handles</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/KadlagInvestmentFB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 hover:bg-accent-light transition-all shadow-md"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 hover:bg-accent-light transition-all shadow-md"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@sunilkadlag2723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-accent text-black flex items-center justify-center hover:scale-110 hover:bg-accent-light transition-all shadow-md"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Embedded Google Map */}
      <section className="w-full h-96 md:h-[480px] relative border-y border-white/10 overflow-hidden bg-white/[0.02]">
        <iframe
          src="https://maps.google.com/maps?q=Kadlag%20Investment%2C%20Top%20Ten%20Imperial%2C%20Sangamner&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kadlag Investment Office Location Sangamner"
          className="w-full h-full"
        />
      </section>

      {/* 4. We Are Associated With (Partner Marquee) */}
      <section className="py-12 md:py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <PartnerMarquee />
        </div>
      </section>
    </div>
  );
}
