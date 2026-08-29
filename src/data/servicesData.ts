export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  detailedDesc: string[];
  features: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "professional-advisory",
    slug: "professional-advisory",
    title: "Professional Advisory",
    shortDesc: "At Kadlag Investment, our professional advisory services stand as the cornerstone of informed decision-making.",
    detailedDesc: [
      "At our company, we offer a comprehensive suite of business services tailored to meet our clients' unique needs and goals. Our services range from financial planning and accounting to marketing and brand management, delivered with exceptional value and expertise across various industries and business types.",
      "Our customized approach ensures that our solutions fit your specific objectives, whether you're a small startup or a large multinational corporation. We leverage state-of-the-art analytical tools combined with deep market intuition to help you navigate economic volatility with confidence."
    ],
    features: [
      "Tailored business & investment strategy sessions",
      "Comprehensive risk assessment & mitigation",
      "Executive financial decision frameworks",
      "Continuous market monitoring & advisory"
    ],
    image: "/services/service-detail.png"
  },
  {
    id: "wealth-management",
    slug: "wealth-management",
    title: "Wealth Management",
    shortDesc: "Elevate your wealth management experience with bespoke multi-generational wealth preservation and growth strategies.",
    detailedDesc: [
      "Elevate your wealth management experience with Kadlag Investment. Our tailored approach encompasses a thorough understanding of your financial landscape, allowing us to create personalized strategies that optimize growth and preserve your wealth for the long term.",
      "We believe true wealth management extends beyond asset accumulation—it is about orchestrating tax efficiency, legacy continuity, estate structuring, and capital preservation through all economic cycles."
    ],
    features: [
      "Holistic multi-asset class allocation",
      "Capital preservation & high-yield growth blend",
      "Bespoke family office & legacy structures",
      "Tax-optimized investment portfolios"
    ],
    image: "/services/wealth-management.png"
  },
  {
    id: "mutual-funds",
    slug: "mutual-funds",
    title: "Mutual Funds",
    shortDesc: "Explore the world of mutual funds with institutional-grade fund selection and SIP optimization.",
    detailedDesc: [
      "Explore the world of mutual funds with confidence, guided by Kadlag Investment's expertise. Our team navigates the intricacies of the market to help you make well-informed investment decisions, tailored to your risk tolerance and financial objectives.",
      "We screen thousands of funds across Large Cap, Mid Cap, Small Cap, Sectoral, and Hybrid categories to curate high-alpha portfolios with strong downside protection."
    ],
    features: [
      "Scientific fund selection & quantitative screening",
      "Automated Systematic Investment Plan (SIP) management",
      "Goal-based portfolio rebalancing",
      "Regular performance audits & index benchmarking"
    ],
    image: "/services/mutual-funds.png"
  },
  {
    id: "insurance",
    slug: "insurance",
    title: "Insurance",
    shortDesc: "Safeguard your family and enterprise against unforeseen contingencies with comprehensive risk cover.",
    detailedDesc: [
      "Safeguard your future with Kadlag Investment's insurance solutions. We offer a range of insurance products designed to provide financial security and peace of mind, ensuring that you and your loved ones are protected against life's uncertainties.",
      "From term life plans with high claim settlement ratios to health coverage and keyman insurance for business leaders, we match the right protection policy with zero ambiguity."
    ],
    features: [
      "Comprehensive Term Life & Health coverage analysis",
      "Keyman & Corporate liability insurance",
      "Critical illness & accidental protection umbrellas",
      "Seamless claim support & policy management"
    ],
    image: "/services/insurance.png"
  },
  {
    id: "stock-market",
    slug: "stock-market",
    title: "Stock Market",
    shortDesc: "Navigate the dynamic equity market with data-driven research, technical analysis, and fundamental insights.",
    detailedDesc: [
      "Navigate the dynamic landscape of the stock market with Kadlag Investment. Our seasoned professionals provide strategic insights and analysis, empowering you to make informed investment decisions in the ever-evolving world of stocks and equities.",
      "Whether you are looking for long-term compounders, value unlocking opportunities, or tactical momentum investments, our research methodology keeps you ahead of the market curve."
    ],
    features: [
      "In-depth fundamental equity research reports",
      "Direct equity trading & Demat account advisory",
      "Sector rotation and thematic momentum tracking",
      "Strict risk-reward positioning & stop-loss frameworks"
    ],
    image: "/services/stock-market.png"
  },
  {
    id: "capital-restructuring",
    slug: "capital-restructuring",
    title: "Capital Restructuring",
    shortDesc: "Optimize your corporate financial structure for enhanced efficiency, liquidity, and long-term valuation.",
    detailedDesc: [
      "Optimize your financial structure with Kadlag Investment's capital restructuring services. Whether it's enhancing efficiency or adapting to changing market conditions, our strategic approach aims to position your capital for maximum returns and resilience.",
      "We advise businesses on debt-equity optimization, debt refinancing, working capital acceleration, and recapitalization strategies to unlock trapped enterprise value."
    ],
    features: [
      "Debt-equity balance sheet restructuring",
      "Working capital & liquidity optimization",
      "Debt consolidation & refinancing negotiation",
      "Corporate valuation & capital turnaround"
    ],
    image: "/services/service-detail.png"
  },
  {
    id: "portfolio-management",
    slug: "portfolio-management",
    title: "Portfolio Management",
    shortDesc: "Entrust your capital to active, disciplined, and bespoke portfolio management tailored to your exact profile.",
    detailedDesc: [
      "Entrust your investments to Kadlag Investment's meticulous portfolio management services. We tailor portfolios to your unique risk profile and financial objectives, ensuring a diversified and well-managed investment strategy.",
      "Our active management methodology systematically eliminates underperforming assets, capitalizes on emerging sector trends, and hedges against systemic drawdowns."
    ],
    features: [
      "Active discretionary & non-discretionary PMS advisory",
      "Risk-adjusted multi-asset diversification",
      "Quarterly performance reviews & attribution analysis",
      "Direct access to fund managers & market analysts"
    ],
    image: "/services/service-detail.png"
  },
  {
    id: "financial-planning",
    slug: "financial-planning",
    title: "Financial Planning",
    shortDesc: "Forge a path to long-term financial freedom with comprehensive, goal-aligned planning.",
    detailedDesc: [
      "Forge a path to financial success with Kadlag Investment's comprehensive financial planning services. Our team collaborates with you to develop a personalized plan, encompassing your goals, risk tolerance, and aspirations, providing a roadmap for a secure future.",
      "We map out your lifecycle milestones—from children's higher education and marriage to retirement corpus creation and legacy transfer."
    ],
    features: [
      "Targeted goal-based cash flow modeling",
      "Retirement corpus calculation & inflation hedging",
      "Emergency fund & liquidity architecture",
      "Annual roadmap audit & milestone tracking"
    ],
    image: "/services/service-detail.png"
  },
  {
    id: "corporate-solutions",
    slug: "corporate-solutions",
    title: "Corporate Solutions",
    shortDesc: "Elevate your enterprise and employee financial wellness with institutional-grade corporate solutions.",
    detailedDesc: [
      "Looking to improve your employees' financial wellness? At our company, we understand the importance of having financially literate employees who are satisfied with their job and their overall financial situation.",
      "We deliver corporate workshops, group insurance advisory, NPS (National Pension System) corporate programs, and executive wealth packages designed to attract and retain top talent."
    ],
    features: [
      "Corporate NPS (National Pension System) setup",
      "Group medical & term insurance programs",
      "Executive wealth planning workshops",
      "Workplace financial literacy programs"
    ],
    image: "/services/service-detail.png"
  }
];
