'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-[#F4F2EE]/90 backdrop-blur-md border-b border-[#D6D2CA] relative z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="relative w-20 h-20">
                 <Image 
                    src="/logo.png" 
                    alt="River City Foundry" 
                    fill
                    className="object-contain"
                 />
            </Link>
            
            <Link href="/" className="text-lg font-bold tracking-tight text-[#171412] uppercase leading-none">
                River City Foundry<br/><span className="text-[10px] tracking-[0.2em] text-[#B58A2A] font-normal">Web Studio</span>
            </Link>
          </div>

          <div className="hidden md:flex sm:items-center sm:gap-10">
            {['Home', 'Contact'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[#171412] text-xs font-bold uppercase tracking-widest hover:text-[#B58A2A] transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B58A2A] transition-all group-hover:w-full"></span>
                </Link>
            ))}
            
            <Link href="/consultation" className="px-6 py-3 bg-[#171412] text-[#F4F2EE] text-xs font-bold uppercase tracking-widest hover:bg-[#B58A2A] transition-colors">
              Start Project
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#171412] hover:text-[#B58A2A] focus:outline-none p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F4F2EE] border-b border-[#D6D2CA]">
          <div className="px-6 pt-2 pb-6 space-y-4 flex flex-col items-start">
            {['Home', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="block text-[#171412] text-sm font-bold uppercase tracking-widest hover:text-[#B58A2A] transition-colors w-full border-b border-[#D6D2CA]/50 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                    {item}
                </Link>
            ))}
            <Link 
              href="/consultation" 
              className="w-full text-center mt-4 px-6 py-4 bg-[#171412] text-[#F4F2EE] text-xs font-bold uppercase tracking-widest hover:bg-[#B58A2A] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Project
            </Link>
            <div className="w-full pt-4 border-t border-[#D6D2CA]/30 mt-2">
                <div className="text-[10px] text-[#B58A2A] font-mono mb-1 uppercase tracking-widest">Call Direct</div>
                <a href="tel:9165420331" className="text-xl font-bold text-[#171412]">916.542.0331</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
