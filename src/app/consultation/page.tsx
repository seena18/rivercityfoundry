'use client';

import { InlineWidget } from "react-calendly";

export default function Consultation() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen pt-12 pb-24 px-6 font-sans text-[#171412] relative overflow-hidden">
      {/* Background Grid/Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Subtle Bridge Truss Draft (Background) */}
      <div className="absolute top-0 right-0 w-[40%] h-full z-0 opacity-[0.03] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 600" fill="none" stroke="#171412" strokeWidth="1">
              <path d="M0,0 L400,600 M0,200 L400,0 M0,400 L400,200 M0,600 L400,400" />
          </svg>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        <h2 className="text-3xl font-bold uppercase tracking-tight text-[#171412] mb-4">Book a Session</h2>
        
        <p className="text-sm text-[#555] max-w-xl mx-auto mb-8 font-light">
          Let's discuss your build requirements. No sales scripts—just a feasibility check.
        </p>
        
        <div className="bg-white border text-center border-[#D6D2CA] shadow-[4px_4px_0px_#D6D2CA] overflow-hidden min-h-[1050px]">
             {/* Book your session below */}
            <InlineWidget 
              url="https://calendly.com/ssabed00/30min" 
              styles={{
                height: '1050px',
                width: '100%'
              }}
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'B58A2A',
                textColor: '171412'
              }}
            />
        </div>
      </div>
    </div>
  );
}
