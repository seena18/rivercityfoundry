'use client';

import { InlineWidget } from "react-calendly";

export default function Consultation() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen py-24 px-6 font-sans text-[#171412]">
      <div className="relative max-w-5xl mx-auto text-center">
        
        <div className="inline-block border border-[#B58A2A] px-3 py-1 mb-6">
           <span className="text-[#B58A2A] text-xs font-mono tracking-widest uppercase">Initializing Link...</span>
        </div>

        <h2 className="text-4xl font-bold uppercase tracking-tight text-[#171412] mb-6">Technical Audit</h2>
        
        <p className="text-lg text-[#555] max-w-2xl mx-auto mb-12 font-light">
          30-minute infrastructure assessment. We'll review your current deployment and identify efficiency gaps.
        </p>
        
        <div className="bg-white border text-center border-[#D6D2CA] shadow-[4px_4px_0px_#D6D2CA] overflow-hidden min-h-[750px]">
             {/* Book your session below */}
            <InlineWidget 
              url="https://calendly.com/ssabed00/30min" 
              styles={{
                height: '750px',
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
