'use client';

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function GoogleCoverPage() {
  const canvasRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!canvasRef.current) return;
    
    try {
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2, // 2x for retina quality
        backgroundColor: '#F4F2EE', // Ensure background capture
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = 'river-city-google-cover.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
      {/* 
          Canvas: 1024px x 576px (16:9) 
          This container represents the exported image area.
      */}
      <div 
        ref={canvasRef}
        className="relative bg-[#F4F2EE] w-[1024px] h-[576px] shadow-2xl overflow-hidden flex flex-col items-center justify-center mb-8"
        id="google-cover-canvas"
      >
        
        {/* Background Grid Pattern (Same as Hero) */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>

        {/* Content Container (Safe Zone Centered) */}
        <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* Logo - Using plain img for reliable html2canvas capture */}
            <div className="w-48 h-48 mb-2 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="/logo.png" 
                    alt="River City Foundry" 
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            
            {/* Text Brand */}
            <div className="text-center">
                <h1 className="text-6xl font-bold tracking-tight text-[#171412] uppercase leading-none mb-4">
                    River City Foundry
                </h1>
                <div className="text-xl tracking-[0.4em] text-[#B58A2A] font-medium uppercase">
                    Web & Software Studio
                </div>
            </div>

        </div>

        {/* Optional: Subtle Watermark/Structure similar to bridge, but kept very minimal for cover photo */}
        <div className="absolute bottom-0 right-0 w-[40%] h-full z-0 opacity-[0.02] pointer-events-none">
          <svg viewBox="0 0 400 600" fill="none" stroke="#171412" strokeWidth="2">
            <path d="M0,0 L400,600 M0,200 L400,0 M0,400 L400,200 M0,600 L400,400" />
          </svg>
        </div>

      </div>
      
      {/* Instructions Overlay */}
      <button 
        onClick={downloadImage}
        className="px-8 py-3 bg-[#B58A2A] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#B58A2A] transition-colors"
      >
        Download Cover Photo
      </button>
      <div className="mt-4 text-white/50 text-sm font-mono">
        1024 x 576px • JPG
      </div>
    </div>
  );
}
