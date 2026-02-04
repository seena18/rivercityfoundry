'use client';

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function FaviconGenPage() {
  const canvasRef = useRef<HTMLDivElement>(null);

  const getGoldLogoUrl = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return reject('No context');
            
            // Draw original image
            ctx.drawImage(img, 0, 0);
            
            // Overlay gold color only on non-transparent pixels
            ctx.globalCompositeOperation = 'source-in';
            ctx.fillStyle = '#B58A2A';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = reject;
        img.src = '/logo.png';
    });
  };

  const downloadImage = async () => {
    if (!canvasRef.current) return;
    
    try {
      const goldLogoUrl = await getGoldLogoUrl();

      const canvas = await html2canvas(canvasRef.current, {
        scale: 1, // Keep 1:1 for favicon pixel perfection
        backgroundColor: '#FFFFFF',
        logging: false,
        onclone: (clonedDoc) => {
            const img = clonedDoc.getElementById('favicon-img') as HTMLImageElement;
            if (img) {
                img.src = goldLogoUrl;
                img.style.filter = 'none';
                img.classList.remove('brightness-0');
                img.classList.remove('invert');
            }
        }
      });
      
      const link = document.createElement('a');
      link.download = 'new-favicon.png'; // PNG allows for transparency if we wanted it, but keeping solid per your design
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
      {/* 
          Canvas: 512px x 512px (Square) 
          Standard high-res size for app icons / modern favicons
      */}
      <div 
        ref={canvasRef}
        className="relative bg-white w-[512px] h-[512px] shadow-2xl flex items-center justify-center mb-8"
        id="favicon-canvas"
      >
        
        {/* Logo Container - Maximized for favicon visibility */}
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                id="favicon-img"
                src="/logo.png" 
                alt="River City Foundry" 
                className="max-w-full max-h-full object-contain"
            />
        </div>

      </div>
      
      {/* Instructions Overlay */}
      <button 
        onClick={downloadImage}
        className="px-8 py-3 bg-[#B58A2A] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#B58A2A] transition-colors"
      >
        Download Icon
      </button>
      <div className="mt-4 text-white/50 text-sm font-mono text-center">
        <div>512 x 512px • PNG</div>
        <div className="text-[10px] opacity-70 mt-1">Gold logo on White</div>
      </div>
    </div>
  );
}
