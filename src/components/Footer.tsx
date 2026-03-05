// src/components/Footer.tsx
import Link from 'next/link';
import { Scale, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & Mission */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black text-legal-navy mb-6">
              <Scale className="text-legal-blue" size={24} />
              <span>LEGAL32</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Upholding the integrity of the Constitution and ensuring justice is accessible to every citizen.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black text-legal-navy uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-600">
              <li><Link href="/about" className="hover:text-legal-blue transition-colors">About Team Legal32</Link></li>
              <li><Link href="/practice-areas" className="hover:text-legal-blue transition-colors">Practice Areas</Link></li>
              <li><Link href="/blog" className="hover:text-legal-blue transition-colors">Legal Articles</Link></li>
              <li><Link href="/contact" className="hover:text-legal-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise Summary */}
          <div>
            <h4 className="text-xs font-black text-legal-navy uppercase tracking-[0.2em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>Constitutional Defense</li>
              <li>Criminal Litigation</li>
              <li>Public Interest Law</li>
              <li>Corporate Compliance</li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-xs font-black text-legal-navy uppercase tracking-[0.2em] mb-8">Connect</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} className="text-legal-blue" />
                <span>consult@legal32.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-legal-blue" />
                <span>New Delhi, India</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-legal-blue hover:text-white transition">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-legal-blue hover:text-white transition">
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} LEGAL32. Built for Justice.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-legal-navy">Privacy Policy</Link>
            <Link href="#" className="hover:text-legal-navy">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}