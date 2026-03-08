"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header 
        // Dynamic z-index: Bumps to z-[60] when menu is open so it sits above the overlay
        className={`fixed top-0 w-full transition-all duration-700 ease-in-out ${
          isMenuOpen
            ? "z-[60] bg-transparent border-transparent py-6 md:py-8"
            : isScrolled 
              ? "z-50 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4" 
              : "z-50 bg-gradient-to-b from-black/80 to-transparent border-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto flex h-10 items-center justify-between px-6">
          <Link href="/" onClick={closeMenu} className="relative block h-40 w-40 md:h-40 md:w-40 transition-transform duration-700 hover:scale-105 hover:brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Image
              src="/legal32_logoe.png"
              alt="LEGAL32 Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
              <li>
                <Link href="/" className="relative group py-2 transition-colors duration-500 hover:text-amber-400 block">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="relative group py-2 transition-colors duration-500 hover:text-amber-400 block">
                  About
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

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-amber-500 transition-colors relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay (z-[55] sits right below the opened z-[60] header) */}
      <div className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-3xl z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="text-center w-full px-6">
          <ul className="flex flex-col gap-10 text-xl font-serif font-light tracking-widest text-white">
            <li className={`transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link href="/" onClick={closeMenu} className="hover:text-amber-500 transition-colors block py-2">Home</Link>
            </li>
            <li className={`transition-all duration-700 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link href="/about" onClick={closeMenu} className="hover:text-amber-500 transition-colors block py-2">About</Link>
            </li>
            <li className={`transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link href="/careers" onClick={closeMenu} className="hover:text-amber-500 transition-colors block py-2">Careers</Link>
            </li>
            <li className={`transition-all duration-700 delay-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link href="/contact" onClick={closeMenu} className="hover:text-amber-500 transition-colors block py-2">Contact</Link>
            </li>
            <li className={`transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-6 mb-8"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 font-sans">consult@legal32.com</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}