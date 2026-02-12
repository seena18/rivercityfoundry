import Link from 'next/link';
import Image from 'next/image';
import PreFooterCta from '@/components/PreFooterCta';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-paper pt-40">
      
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-rule pb-8">
            <span className="text-brass font-mono text-xs mb-2 block tracking-widest">BUILD LOG</span>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-soot tracking-tight">WORK GALLERY</h1>
            <p className="text-stone-600 font-mono mt-4 max-w-2xl">
              A running archive of websites and tools we’ve shipped.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Project 001: DaveTrader */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                   <div className="aspect-[16/10] relative">
                    <Image
                      src="/davetrader.png"
                      alt="DaveTrader Interface"
                      fill
                      className="object-contain object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                     <span className="bg-[#0E0F10] text-[#F4F2EE] border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">FinTech</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="text-brass font-mono text-xs mb-4">BUILD // 001</div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  DaveTrader <span className="block text-xl md:text-2xl text-stone-500 mt-2">Trading Dashboard</span>
                </h2>
                <p className="text-soot/80 mb-8 leading-relaxed">
                  Complex data visualization platform for high-frequency trading. Real-time websocket data, charting libraries, and low-latency performance.
                </p>
                
                <div className="mb-8 pt-4 border-t border-rule/50">
                   <p className="text-sm text-soot leading-snug">
                      <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> &lt;50ms real-time data latency
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                   <span className="border border-rule px-2 py-1">React</span>
                   <span className="border border-rule px-2 py-1">D3.js</span>
                   <span className="border border-rule px-2 py-1">WebSockets</span>
                </div>

                <button disabled className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-400 cursor-not-allowed border-b border-transparent pb-1">
                  Coming Soon
                </button>
              </div>
          </div>

          {/* Project 002: Lava Lamp */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative bg-black">
                     <video 
                        src="/portfolio.mov" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                     <span className="bg-[#0E0F10] text-[#F4F2EE] border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">E-Commerce</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 lg:pr-8">
                <div className="text-brass font-mono text-xs mb-4">BUILD // 002</div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  Lava Lamp <span className="block text-xl md:text-2xl text-stone-500 mt-2">D2C Brand Experience</span>
                </h2>
                <p className="text-soot/80 mb-8 leading-relaxed">
                  Modern e-commerce experience for a boutique lighting brand. Focus on immersive product visuals, smooth interactions, and a streamlined checkout flow.
                </p>

                <div className="mb-8 pt-4 border-t border-rule/50">
                   <p className="text-sm text-soot leading-snug">
                      <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> +40% time on site vs. template
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                   <span className="border border-rule px-2 py-1">Shopify Headless</span>
                   <span className="border border-rule px-2 py-1">WebGL</span>
                </div>

                <button disabled className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-400 cursor-not-allowed border-b border-transparent pb-1">
                  Coming Soon
                </button>
              </div>
          </div>

          {/* Project 003: 404 Leads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/404leads.png"
                      alt="404 Leads Interface"
                      fill
                      className="object-contain object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-[#F4F2EE] border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Internal Tool</span>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="text-brass font-mono text-xs mb-4">BUILD // 003</div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  404 Leads <span className="block text-xl md:text-2xl text-stone-500 mt-2">Lead Discovery System</span>
                </h2>
                <p className="text-soot/80 mb-8 leading-relaxed">
                  A high-performance SaaS platform built for lead generation. Features real-time data processing, custom dashboard analytics, and a conversion-optimized frontend.
                </p>

                <div className="mb-8 pt-4 border-t border-rule/50">
                   <p className="text-sm text-soot leading-snug">
                      <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> Saved 20 hrs/week in manual prospecting
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                   <span className="border border-rule px-2 py-1">Next.js</span>
                   <span className="border border-rule px-2 py-1">React</span>
                   <span className="border border-rule px-2 py-1">Tailwind</span>
                </div>

                <button disabled className="inline-flex flex-col items-start text-xs font-bold uppercase tracking-widest text-stone-400 cursor-not-allowed border-b border-transparent pb-1">
                  <span>Private Tool</span>
                  <span className="text-[10px] font-mono normal-case tracking-normal text-stone-500 mt-1">Demo available on consult</span>
                </button>
              </div>
          </div>

          {/* Project 004: Car Flip */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/bibigogoo.png"
                      alt="BibiGogoo Interface"
                      fill
                      className="object-contain object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-[#F4F2EE] border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Live System</span>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 lg:pr-8">
                <div className="text-brass font-mono text-xs mb-4">BUILD // 004</div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  Car Flip <span className="block text-xl md:text-2xl text-stone-500 mt-2">Car Flipping Operations Platform</span>
                </h2>
                <p className="text-soot/80 mb-8 leading-relaxed">
                  An end-to-end system for vehicle arbitrage. Features real-time alert triage from Facebook Marketplace, AI-powered deal scoring via Gemini 2.0, and a comprehensive financial dashboard for flip management.
                </p>

                <div className="mb-8 pt-4 border-t border-rule/50">
                   <p className="text-sm text-soot leading-snug">
                      <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> 2x deal flow with AI qualification
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                   <span className="border border-rule px-2 py-1">Next.js / Supabase</span>
                   <span className="border border-rule px-2 py-1">Python / FastAPI</span>
                   <span className="border border-rule px-2 py-1">AI Analysis</span>
                </div>

                <button disabled className="inline-flex flex-col items-start text-xs font-bold uppercase tracking-widest text-stone-400 cursor-not-allowed border-b border-transparent pb-1">
                  <span>Private Tool</span>
                  <span className="text-[10px] font-mono normal-case tracking-normal text-stone-500 mt-1">Demo available on consult</span>
                </button>
              </div>
          </div>

          {/* Project 005: Sketch Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative bg-black">
                     <video 
                        src="/miltech.mov" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-[#F4F2EE] border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Internal Tool</span>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="text-brass font-mono text-xs mb-4">BUILD // 005</div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  Sketch Studio <span className="block text-xl md:text-2xl text-stone-500 mt-2">Stylized Animation Engine</span>
                </h2>
                <p className="text-soot/80 mb-8 leading-relaxed">
                  A desktop animation studio for creating technical explainer videos with a hand-drawn aesthetic. Features 3D mesh rendering, timeline keyframes, and specialized AI voiceover synchronization.
                </p>

                <div className="mb-8 pt-4 border-t border-rule/50">
                   <p className="text-sm text-soot leading-snug">
                      <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> Cut video production time by 60%
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                   <span className="border border-rule px-2 py-1">Python / PyQt6</span>
                   <span className="border border-rule px-2 py-1">OpenCV</span>
                   <span className="border border-rule px-2 py-1">AI Voice (Chatterbox)</span>
                </div>

                <button disabled className="inline-flex flex-col items-start text-xs font-bold uppercase tracking-widest text-stone-400 cursor-not-allowed border-b border-transparent pb-1">
                  <span>Private Tool</span>
                  <span className="text-[10px] font-mono normal-case tracking-normal text-stone-500 mt-1">Demo available on consult</span>
                </button>
              </div>
          </div>

        </div>
      </section>

      <PreFooterCta />

    </div>
  );
}
