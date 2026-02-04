'use client';

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function GoogleLogoPage() {
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
        scale: 2, 
        backgroundColor: '#FFFFFF',
        logging: false,
        onclone: (clonedDoc) => {
            const img = clonedDoc.getElementById('google-logo-img') as HTMLImageElement;
            if (img) {
                img.src = goldLogoUrl;
                // Remove filters and ensure clean display
                img.style.filter = 'none'; 
                img.classList.remove('brightness-0');
                img.classList.remove('invert');
            }
        }
      });
      
      const link = document.createElement('a');
      link.download = 'river-city-google-logo.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      link.click();
    } catch (err) {
      console.error('Failed to generate image', err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-8">
      {/* 
          Canvas: 720px x 720px (1:1) 
          This container represents the exported image area.
      */}
      <div 
        ref={canvasRef}
        className="relative bg-white w-[720px] h-[720px] shadow-2xl flex items-center justify-center mb-8"
        id="google-logo-canvas"
      >
        
        {/* Safe Zone Indicator (Circle Crop Preview - remove before screenshot if you want square) */}
        {/* <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div> */}

        {/* Logo Container - Flex centered plain img for better html2canvas support */}
        <div className="w-[480px] h-[480px] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                id="google-logo-img"
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
        Download Logo
      </button>
      <div className="mt-4 text-white/50 text-sm font-mono text-center">
        <div>720 x 720px • JPG</div>
        <div className="text-[10px] opacity-70 mt-1">Gold logo on White background</div>
      </div>
    </div>
  );
}
