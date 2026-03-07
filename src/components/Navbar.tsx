"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-700 ease-in-out ${
        isScrolled 
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4" 
          : "bg-gradient-to-b from-black/80 to-transparent border-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex h-10 items-center justify-between px-6">
        <Link href="/" className="relative h-45 w-45 transition-transform duration-700 hover:scale-105 hover:brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <Image
            src="/legal32_logoe.png"
            alt="LEGAL32 Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
            <li>
              <Link href="/about" className="relative group py-2 transition-colors duration-500 hover:text-amber-400 block">
                About
                {/* Smoother scale-x animation originating from the left */}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="relative group py-2 transition-colors duration-500 hover:text-amber-400 block">
                Careers
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative group py-2 transition-colors duration-500 hover:text-amber-400 block">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}