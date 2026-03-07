import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          
          <div className="md:col-span-4 pr-10">
            {/* Logo Image Replacement */}
            <Link href="/" className="relative block h-14 w-48 mb-8 transition-transform duration-700 ease-out hover:scale-105 hover:brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Image
                src="/legal32_logoe.png"
                alt="LEGAL32 Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-loose">
              Upholding the integrity of the Constitution and ensuring justice is accessible to every citizen.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors duration-300">About</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-400 transition-colors duration-300">Practice Areas</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors duration-300">Articles</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors duration-300">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-amber-400 transition-colors duration-300">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-serif italic text-zinc-500">
              <li className="hover:text-zinc-300 transition-colors cursor-default">Constitutional Defense</li>
              <li className="hover:text-zinc-300 transition-colors cursor-default">Criminal Litigation</li>
              <li className="hover:text-zinc-300 transition-colors cursor-default">Public Interest Law</li>
              <li className="hover:text-zinc-300 transition-colors cursor-default">Corporate Compliance</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-8">Connect</h4>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <Mail size={14} className="text-amber-600" />
                <span className="font-light tracking-wide hover:text-amber-400 transition-colors cursor-pointer">lawlegal32@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <MapPin size={14} className="text-amber-600" />
                <span className="font-light tracking-wide">New Delhi, India</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/find_rahul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/5 bg-white/[0.02] text-zinc-500 hover:bg-amber-600/10 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-500 rounded-sm">
                <Instagram size={16} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} LEGAL32. Built for Justice.
          </p>
          <div className="flex gap-10 text-[9px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300">Privacy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors duration-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}