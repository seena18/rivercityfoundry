'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-paper/95 backdrop-blur-sm border-b border-rule z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex justify-between h-24 items-center">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="relative w-20 h-20">
                 <Image 
                    src="/logo.png" 
                    alt="River City Foundry" 
                    fill
                    className="object-contain"
                 />
            </Link>
            
            <Link href="/" className="text-lg font-bold tracking-tight text-soot uppercase leading-none">
                River City Foundry<br/><span className="text-[10px] tracking-[0.2em] text-brass font-normal">Web & Software Studio</span>
            </Link>
          </div>

          {/* Centered Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'Project Gallery', href: '/#work' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                  <Link key={item.name} href={item.href} className="text-soot text-xs font-bold uppercase tracking-widest hover:text-brass transition-colors relative group">
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brass transition-all group-hover:w-full"></span>
                  </Link>
              ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
                <a href="tel:9165420331" className="text-xs font-bold text-soot hover:text-brass transition-colors hidden lg:block uppercase tracking-widest">
                    Call 916.542.0331
                </a>
                
                <Link href="/consultation" className="btn-hardware-primary px-6 py-3 text-xs shadow-lg shadow-brass/10">
                  Book 15-min Consult
                </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-soot hover:text-brass focus:outline-none p-2"
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
        <div className="md:hidden bg-paper border-b border-rule shadow-xl">
          <div className="px-6 pt-2 pb-6 space-y-4 flex flex-col items-start">
            {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'Project Gallery', href: '/#work' },
                { name: 'Contact', href: '/contact' }
            ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="block text-soot text-sm font-bold uppercase tracking-widest hover:text-brass transition-colors w-full border-b border-rule pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                    {item.name}
                </Link>
            ))}
            <Link 
              href="/consultation" 
              className="w-full text-center mt-4 px-6 py-4 btn-hardware-primary text-xs"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Project
            </Link>
            <div className="w-full pt-4 border-t border-rule mt-2">
                <div className="text-[10px] text-brass font-mono mb-1 uppercase tracking-widest">Call Direct</div>
                <a href="tel:9165420331" className="text-xl font-bold text-soot">916.542.0331</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
