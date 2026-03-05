import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Configure Professional Fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const merriweather = Merriweather({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

// 2. SEO Metadata
export const metadata: Metadata = {
  title: "LEGAL32 | Constitutional Justice & Legal Clarity",
  description: "Dedicated to protecting the rights of every citizen through constitutional integrity and expert legal advocacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-white text-slate-900 antialiased`}>
        {/* The Global Navigation remains at the top of every page */}
        <Navbar />

        {/* The 'children' prop renders the specific page you are visiting (Home, About, etc.) */}
        <main>{children}</main>

        {/* The Global Footer and Quick Links remain at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}