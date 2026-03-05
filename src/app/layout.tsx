import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Fixed path
import "./globals.css";
import Link from "next/link";
import { Scale } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif"
});
export const metadata: Metadata = {
  title: "LEGAL32 | Constitutional Justice & Legal Clarity",
  description: "Fighting for the justice you deserve through constitutional expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-slate-50 text-slate-900`}>
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto flex h-20 items-center justify-between px-6">
            <Link href="/" className="text-2xl font-black tracking-tighter text-legal-navy">
              LEGAL<span className="text-legal-blue">32</span>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
                <li><Link href="/about" className="hover:text-legal-blue transition-colors duration-300">About</Link></li>
                <li><Link href="/practice-areas" className="hover:text-legal-blue transition-colors duration-300">Practice Areas</Link></li>
                <li><Link href="/blog" className="hover:text-legal-blue transition-colors duration-300">Articles</Link></li>
                <li><Link href="/contact" className="rounded-sm bg-legal-navy px-6 py-2.5 text-white hover:bg-legal-blue transition-colors duration-300">Consultation</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        {/* GLOBAL FOOTER & QUICK LINKS */}
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
              {/* Brand & Mission */}
              <div className="col-span-1">
                <div className="text-2xl font-black text-legal-navy mb-6">LEGAL32</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Upholding the integrity of the Constitution and ensuring justice for every citizen.
                </p>
              </div>

              {/* Quick Links Column */}
              <div>
                <h4 className="text-xs font-bold text-legal-navy uppercase tracking-widest mb-6">Quick Links</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                  <li><Link href="/" className="hover:text-legal-blue transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-legal-blue transition-colors">About Us</Link></li>
                  <li><Link href="/practice-areas" className="hover:text-legal-blue transition-colors">Practice Areas</Link></li>
                  <li><Link href="/blog" className="hover:text-legal-blue transition-colors">Legal Blog</Link></li>
                </ul>
              </div>

              {/* Practice Areas Summary Column */}
              <div>
                <h4 className="text-xs font-bold text-legal-navy uppercase tracking-widest mb-6">Expertise</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                  <li>Constitutional Defense</li>
                  <li>Civil Litigation</li>
                  <li>Appellate Practice</li>
                  <li>Public Interest</li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-xs font-bold text-legal-navy uppercase tracking-widest mb-6">Contact</h4>
                <p className="text-slate-500 text-sm mb-2">New Delhi, India</p>
                <p className="text-slate-900 font-bold text-sm">consult@legal32.com</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-10 text-center">
              <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                &copy; {new Date().getFullYear()} LEGAL32. Built for Justice.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}