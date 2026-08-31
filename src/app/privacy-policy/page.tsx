"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, ChevronRight, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        
        {/* Breadcrumb Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs text-foreground/50 uppercase tracking-widest font-mono mb-8"
        >
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-accent">Privacy Policy</span>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Legal & Compliance
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-4">
            Privacy <span className="italic text-gradient">Policy</span>
          </h1>

          <div className="flex items-center gap-3 text-sm text-foreground/50 font-mono">
            <Lock size={14} className="text-accent" />
            <span>Last Updated: August 31, 2026</span>
          </div>
        </motion.div>

        {/* Main Document Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-2 rounded-[2.5rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl"
        >
          <div className="p-8 sm:p-12 md:p-16 rounded-[calc(2.5rem-8px)] bg-[#0a0a0c]/95 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-12 text-foreground/80 font-light leading-relaxed">
            
            {/* Introduction */}
            <div className="pb-8 border-b border-white/5">
              <p className="text-base sm:text-lg text-foreground/90 font-normal leading-relaxed">
                Kadlag Investments (&ldquo;Kadlag Investments&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect information when you visit or interact with our website.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">1</span>
                Information We Collect
              </h2>
              <p>
                We may collect information that you voluntarily provide to us when you contact us, submit an enquiry, or use any forms available on our website.
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <p className="text-sm font-medium text-foreground mb-2">This may include:</p>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-foreground/75 pl-2">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Message or enquiry details</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <p className="text-sm text-foreground/70">
                We may also automatically collect limited technical information, such as browser type, device information, IP address, and general website usage information, where applicable.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">2</span>
                How We Use Your Information
              </h2>
              <p>We may use the information we collect to:</p>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground/75 pl-2">
                  <li>Respond to your enquiries and requests</li>
                  <li>Provide information about our services</li>
                  <li>Communicate with you regarding your enquiry</li>
                  <li>Improve and maintain our website</li>
                  <li>Protect the security and functionality of our website</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>
              <p className="text-sm font-medium text-accent">
                We do not sell, rent, or otherwise trade your personal information to third parties.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">3</span>
                Cookies and Similar Technologies
              </h2>
              <p>
                Our website may use cookies or similar technologies where necessary to provide functionality, improve user experience, or understand how visitors interact with the website.
              </p>
              <p className="text-sm text-foreground/70">
                If third-party analytics or other services are used, those services may collect information according to their own privacy policies.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">4</span>
                Third-Party Links and Services
              </h2>
              <p>
                Our website may contain links to third-party websites, platforms, or services. These third parties operate independently and have their own privacy policies and terms of use.
              </p>
              <p className="text-sm text-foreground/70">
                Kadlag Investments is not responsible for the privacy practices or security of third-party websites or services.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">5</span>
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect the information provided to us against unauthorized access, misuse, alteration, disclosure, or destruction.
              </p>
              <p className="text-sm text-foreground/70">
                However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">6</span>
                Data Retention
              </h2>
              <p>
                We retain personal information only for as long as reasonably necessary to respond to enquiries, provide our services, comply with legal obligations, resolve disputes, and protect our legitimate interests.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">7</span>
                Your Privacy Rights
              </h2>
              <p>
                Subject to applicable law, you may have the right to request access to, correction of, or deletion of your personal information.
              </p>
              <p className="text-sm text-foreground/70">
                If you would like to make such a request or have any questions about how your information is handled, please contact us using the details below.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">8</span>
                Children&apos;s Privacy
              </h2>
              <p>
                Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">9</span>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our practices, services, or applicable laws. Any updates will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-6 pt-6 border-t border-white/10">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-mono">10</span>
                Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Email Us</p>
                    <a href="mailto:aditya.kadlaginvestment@gmail.com" className="text-sm font-medium text-foreground hover:text-accent transition-colors break-all">
                      aditya.kadlaginvestment@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Call Us</p>
                    <a href="tel:+919150306306" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                      +91-9150306306
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Office Address</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      S-5, Second Floor, Top Ten Imperial, Sangamner, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-xs text-foreground/40 font-mono">
                By using this website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
