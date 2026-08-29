"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Coins, Briefcase, BarChart3, ShieldAlert, LineChart, Building2, PieChart, GraduationCap, Users } from "lucide-react";

const SERVICES = [
  {
    id: "professional-advisory",
    title: "Professional Advisory",
    icon: <Coins className="w-8 h-8" />,
    description: "At Kadlag Investment, our professional advisory services stand as the cornerstone of informed decision-making. Benefit from our expert insights and strategic guidance, ensuring that your financial choices align seamlessly with your goals and aspirations.",
  },
  {
    id: "wealth-management",
    title: "Wealth Management",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Elevate your wealth management experience with Kadlag Investment. Our tailored approach encompasses a thorough understanding of your financial landscape, allowing us to create personalized strategies that optimize growth and preserve your wealth for the long term.",
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Explore the world of mutual funds with confidence, guided by Kadlag Investment's expertise. Our team navigates the intricacies of the market to help you make well-informed investment decisions, tailored to your risk tolerance and financial objectives.",
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: <ShieldAlert className="w-8 h-8" />,
    description: "Safeguard your future with Kadlag Investment's insurance solutions. We offer a range of insurance products designed to provide financial security and peace of mind, ensuring that you and your loved ones are protected against life's uncertainties.",
  },
  {
    id: "stock-market",
    title: "Stock Market",
    icon: <LineChart className="w-8 h-8" />,
    description: "Navigate the dynamic landscape of the stock market with Kadlag Investment. Our seasoned professionals provide strategic insights and analysis, empowering you to make informed investment decisions in the ever-evolving world of stocks and equities.",
  },
  {
    id: "capital-restructuring",
    title: "Capital Restructuring",
    icon: <Building2 className="w-8 h-8" />,
    description: "Optimize your financial structure with Kadlag Investment's capital restructuring services. Whether it's enhancing efficiency or adapting to changing market conditions, our strategic approach aims to position your capital for maximum returns and resilience.",
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    icon: <PieChart className="w-8 h-8" />,
    description: "Entrust your investments to Kadlag Investment's meticulous portfolio management services. We tailor portfolios to your unique risk profile and financial objectives, ensuring a diversified and well-managed investment strategy.",
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Forge a path to financial success with Kadlag Investment's comprehensive financial planning services. Our team collaborates with you to develop a personalized plan, encompassing your goals, risk tolerance, and aspirations, providing a roadmap for a secure future.",
  },
  {
    id: "corporate-solutions",
    title: "Corporate Solutions",
    icon: <Users className="w-8 h-8" />,
    description: "Looking to improve your employees' financial wellness? At our company, we understand the importance of having financially literate employees who are satisfied with their job and their overall financial situation.",
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tighter uppercase">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative flex flex-col justify-between"
            >
              <div className="mb-12">
                <div className="w-16 h-16 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Link 
                href={`/services/${service.id}`}
                className="mt-auto pt-8 border-t border-white/5 flex items-center text-accent font-medium text-sm tracking-widest uppercase cursor-pointer group-hover:text-white transition-colors duration-300"
              >
                Read More 
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
