"use client"; // Required for hooks like useState and useEffect

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, change state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-100 ${
        isScrolled 
          ? "bg-white/10 backdrop-blur-md border-white py-3 rounded-b-3xl shadow-md" 
          : "bg-transparent border-transparent py-6"
      }`}
    >

      <div className="container mx-auto flex h-10 items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="relative h-45 w-45 transition hover:opacity-80">
          <Image
            src="/legal32_logoe.png" // Path to your logo in /public
            alt="LEGAL32 Logo"
            fill
            className="object-contain"
            priority // Loads the logo immediately
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className={`flex items-center gap-10 text-sm font-bold uppercase tracking-widest transition-colors ${
            isScrolled ? "text-slate-800" : "text-white"
          }`}>
            <li>
              <Link href="/about" className="hover:opacity-70 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}