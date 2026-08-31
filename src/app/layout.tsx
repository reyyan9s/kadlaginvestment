import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-playfair", // Reusing the variable name to avoid editing globals.css
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kadlag Investment | Architecture of Wealth",
  description: "A world-class, futuristic, premium financial-services experience.",
  icons: {
    icon: "/logo/main_logo.png",
    shortcut: "/logo/main_logo.png",
    apple: "/logo/main_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <GlobalEffects />
        <Navbar />
        <main className="overflow-x-hidden w-full max-w-full relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
