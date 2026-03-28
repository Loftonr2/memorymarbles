"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rules', href: '/game-rules' },
  { name: 'Brain Health', href: '/brain-health' },
  { name: 'Clinical', href: '/clinical' },
  { name: 'Data', href: '/data' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-8 py-6 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#010410]/95 backdrop-blur-2xl border-b border-white/[0.05] py-4' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/memory-marbles-logo.png"
            alt="Memory Marbles Logo"
            width={48}
            height={48}
            priority
            className="object-contain"
          />
          <span className="whitespace-nowrap text-white font-semibold tracking-wide">
            MEMORY MARBLES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white/40 hover:text-white font-black text-[10px] tracking-[0.4em] uppercase transition-all relative group/link py-2 italic"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 transition-all duration-500 group-hover/link:w-full rounded-full shadow-[0_0_10px_rgba(0,243,255,1)]" />
            </Link>
          ))}
          <Link href="/download">
            <button className="px-8 py-3 rounded-2xl bg-white text-black text-[10px] font-black tracking-[0.4em] uppercase hover:bg-cyan-400 hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 italic">
              Deploy App
            </button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden group cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:border-cyan-400 transition-all ${isMobileMenuOpen ? 'border-cyan-400' : ''}`}>
              <div className={`w-6 h-px bg-white group-hover:bg-cyan-400 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-px bg-white group-hover:bg-cyan-400 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-px bg-white group-hover:bg-cyan-400 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
           </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#010410]/98 border-b border-white/5 py-10 px-8 flex flex-col gap-6 animate-in slide-in-from-top-10 duration-500">
           {navLinks.map((link) => (
             <Link 
               key={link.name} 
               href={link.href}
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-white/40 hover:text-white font-black text-xs tracking-[0.5em] uppercase transition-all italic"
             >
               {link.name}
             </Link>
           ))}
           <Link href="/download" onClick={() => setIsMobileMenuOpen(false)}>
             <button className="w-full py-5 rounded-2xl bg-white text-black text-[10px] font-black tracking-[0.4em] uppercase italic mt-6">
                Deploy Application
             </button>
           </Link>
        </div>
      )}
    </header>
  );
}
