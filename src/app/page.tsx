import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-soot font-sans selection:bg-brass selection:text-white">

      {/* ──────────────────────────────────────────────────────────────────────────
          HERO: INDUSTRIAL / PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-48 pb-20 border-b border-rule overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 z-0 opacity-40 noise-overlay mix-blend-multiply"></div>

        {/* Vignette overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none"
             style={{
               background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(244,242,238,0.7) 100%)'
             }}>
        </div>

        {/* Blueprint Grid - faded under content area */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ 
               backgroundImage: 'linear-gradient(#171412 1px, transparent 1px), linear-gradient(90deg, #171412 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to right, transparent 5%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,1) 85%)',
               WebkitMaskImage: 'linear-gradient(to right, transparent 5%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,1) 85%)'
             }}>
        </div>

        {/* Technical Markings (Decorative) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0 hidden md:block">
            {/* Corner Crosshairs */}
            <div className="absolute top-12 left-6 w-4 h-4 border-t border-l border-soot"></div>
            <div className="absolute top-12 right-6 w-4 h-4 border-t border-r border-soot"></div>
             {/* Calibration Line */}
            <div className="absolute top-32 left-0 w-12 h-[1px] bg-brass"></div>
            <div className="absolute top-36 left-0 w-8 h-[1px] bg-soot/20"></div>
        </div>

        {/* Subtle Bridge Truss Draft (Background) */}
        <div className="absolute top-20 right-0 w-[40%] h-full z-0 opacity-[0.05] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 600" fill="none" stroke="#171412" strokeWidth="1">
            <path d="M0,0 L400,600 M0,200 L400,0 M0,400 L400,200 M0,600 L400,400" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Top Spec Bar */}
          <div className="flex flex-col md:flex-row border-b border-soot pb-6 mb-12 justify-between items-start md:items-end gap-4">
            <div>
              <span className="block text-brass text-xs font-bold uppercase tracking-[0.2em] mb-1">
                River City Foundry
              </span>
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none text-soot max-w-3xl">
                Iron-Clad Websites —<br />Fast, Findable, and <span className="text-brass">Built to Last</span>
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-xs font-mono text-stone-600 mb-1">UNIT: SACRAMENTO, CA</div>
              <div className="text-xs font-mono text-stone-600 mb-1">SERVING: NORCAL REGION</div>
              <div className="text-xs font-mono text-brass">STATUS: ACCEPTING BUILDS</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column: Mission Statement */}
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-normal text-soot leading-relaxed max-w-3xl mb-8">
                Every build includes a clear structure, mobile-first layout, and conversion-focused pages—so customers can find you, trust you, and contact you quickly.
                <span className="block text-sm font-bold text-soot mt-4 max-w-lg">Based in Sacramento • Reply within 24 hours • Projects start at $2.5k</span>
              </p>

              {/* Trust Indicators / Stamped Labels */}
              <div className="flex flex-wrap gap-4 mb-10 font-mono text-[10px] text-stone-600 uppercase tracking-wider">
                <div className="flex items-center border border-rule px-3 py-1 bg-white/50 transition-colors hover:border-brass">
                  <div className="w-1.5 h-1.5 bg-brass mr-2"></div> Founder-Led
                </div>
                <div className="flex items-center border border-rule px-3 py-1 bg-white/50 transition-colors hover:border-brass">
                  <div className="w-1.5 h-1.5 bg-brass mr-2"></div> No Templates
                </div>
                <div className="flex items-center border border-rule px-3 py-1 bg-white/50 transition-colors hover:border-brass">
                  <div className="w-1.5 h-1.5 bg-brass mr-2"></div> You Own Everything
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/consultation" className="btn-hardware-primary px-8 py-4 text-xs">
                  <span className="mr-2">Book 15-min Consult</span>
                  <span>→</span>
                </Link>
                <Link href="#work" className="text-xs font-bold uppercase tracking-widest text-soot hover:text-brass transition-colors border-b border-soot/30 hover:border-brass pb-1">
                  View Work
                </Link>
              </div>
            </div>

            {/* Right Column: Key Metrics (The "Spec Strip") */}
            <div className="lg:col-span-4 border-l border-rule pl-4 lg:pl-10 flex flex-col justify-center gap-8">

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">01 // PERFORMANCE</div>
                <div className="text-xl font-bold text-soot uppercase">Speed & Performance</div>
                <div className="text-xs text-stone-600 mt-1">Fast on phones. Built to convert.</div>
              </div>

              <div className="w-full h-[1px] bg-rule"></div>

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">02 // LEAD TIME</div>
                <div className="text-xl font-bold text-soot uppercase">Live in 2-4 Weeks</div>
                <div className="text-xs text-stone-600 mt-1">From kickoff to launch, no drawn-out timelines.</div>
              </div>

              <div className="w-full h-[1px] bg-rule"></div>

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">03 // SEO</div>
                <div className="text-xl font-bold text-soot uppercase">Found in Local Search</div>
                <div className="text-xs text-stone-600 mt-1">Built-in SEO so customers find you on Google.</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          CTA: THE INTERFACE
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-soot text-white border-t-2 border-black text-center relative overflow-hidden">
        {/* Machinist grid background effect */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255, 0.3) 1px, transparent 1px)
                `, 
                backgroundSize: '48px 48px' 
             }}>
        </div>
        
        {/* Brass accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brass"></div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Station Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20"></div>
            <span className="text-brass font-mono text-xs tracking-widest uppercase">Request a Build Slot</span>
            <div className="w-8 h-px bg-white/20"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-6 leading-tight">
            Ready to upgrade?
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">
            15-minute consult. Clear scope. Fixed quote.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link href="/consultation" className="inline-flex items-center justify-center px-12 py-5 text-sm font-bold uppercase tracking-widest bg-[#B58A2A] text-white hover:bg-[#C99B2E] transition-colors w-full sm:w-auto text-center">
              Book Consult
            </Link>
             <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-white/70 border-b border-white/30 hover:text-brass hover:border-brass transition-colors pb-1">
              View Services →
            </Link>
          </div>

          {/* Trust signals */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-mono text-white/40 uppercase tracking-wider">
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Fast Turnarounds
                 </span>
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Local Support
                 </span>
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Performance-First
                 </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


      <section id="work" className="py-24 bg-white relative border-b border-rule">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ 
               backgroundImage: 'radial-gradient(#171412 1px, transparent 1px)', 
               backgroundSize: '24px 24px' 
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="flex items-end justify-between mb-16 border-b border-rule pb-6">
            <div>
              <span className="text-brass font-mono text-xs mb-2 block">FABRICATION LOGS</span>
              <h2 className="text-3xl font-bold uppercase text-soot">Project Gallery</h2>
              <p className="text-xs text-stone-600 font-mono mt-2">Selected Work (Client + Internal Builds)</p>
            </div>
            <Link href="/contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest hover:text-brass transition-colors underline decoration-brass decoration-2 underline-offset-4 text-soot">
              Full Archive
            </Link>
          </div>

          {/* 404 Leads Featured Build */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
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
                  {/* Overlay UI elements */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-bone border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Live System</span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:pl-8">
                <div className="text-brass font-mono text-xs mb-4">FABRICATION_LOG // 001</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  404 Leads <span className="block text-xl md:text-2xl text-stone-500 mt-2">Lead Discovery System</span>
                </h3>
                <p className="text-lg text-stone-600 font-light mb-8 leading-relaxed">
                  A scanning tool that turns maps into qualified prospects—no spreadsheets, no guesswork. Finds local businesses that need a website, verifies contact details, and exports clean lists for outreach.
                </p>

                <div className="card-specs p-6 mb-8">
                  <span className="text-[10px] font-bold text-brass uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Map-based scanning by city + category
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Website detection + manual verification
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Built for speed: quick filters and fast review
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Reel Featured Build */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              {/* Text Side */}
              <div className="lg:pr-8 order-2 lg:order-1">
                <div className="text-brass font-mono text-xs mb-4">FABRICATION_LOG // 002</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  Lava Lamp <span className="block text-xl md:text-2xl text-stone-500 mt-2">Interactive 3D UI System</span>
                </h3>
                <p className="text-lg text-stone-600 font-light mb-8 leading-relaxed">
                  A real-time 3D hero interface with fluid ‘metaball’ motion and responsive theming. Turns standard navigation into a smooth, interactive experience.
                </p>

                <div className="card-specs p-6 mb-8">
                  <span className="text-[10px] font-bold text-brass uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Stack: React, Vite, R3F (Three.js)
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Rendering: Real-time procedural metaballs
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Feature: Custom shader materials + Theming
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-rule text-[10px] text-stone-400 font-mono uppercase tracking-wide">
                    Performance-first rendering pipeline. No pre-rendered video.
                  </div>
                </div>

                <Link href="https://seenaabed.com" target="_blank" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-soot border-b-2 border-brass pb-1 hover:text-brass transition-colors">
                  View Deployment
                  <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Video Side */}
              <div className="relative group perspective-1000 order-1 lg:order-2">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <video
                      src="/portfolio.mov"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay UI elements */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-bone border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">BUILD: R3F_METABALLS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DaveTrader Featured Build */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-brass/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative border border-rule bg-white shadow-xl shadow-brass/5 overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/davetrader.png"
                      alt="DaveTrader Dashboard"
                      fill
                      className="object-contain object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay UI elements */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0E0F10] text-bone border border-brass/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Live System</span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:pl-8">
                <div className="text-brass font-mono text-xs mb-4">FABRICATION_LOG // 003</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-soot mb-4 leading-none">
                  DaveTrader <span className="block text-xl md:text-2xl text-stone-500 mt-2">Market Analytics Console</span>
                </h3>
                <p className="text-lg text-stone-600 font-light mb-8 leading-relaxed">
                  A journaling and analytics dashboard that helps traders review signals, test ideas, and stay consistent. Built for clarity and decision support, not hype.
                </p>

                <div className="card-specs p-6 mb-8">
                  <span className="text-[10px] font-bold text-brass uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Real-time chart rendering & indicators
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Strategy backtesting interface
                    </li>
                    <li className="flex items-start text-sm text-stone-600 font-mono">
                      <span className="text-brass mr-3">●</span> Automated journal & performance metrics
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-rule text-[10px] text-stone-400 font-mono uppercase tracking-wide">
                    Educational tooling. No guaranteed returns. No ‘signals’ sold.
                  </div>
                </div>

                <Link href="https://davestrades-web.vercel.app/" target="_blank" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-soot border-b-2 border-brass pb-1 hover:text-brass transition-colors">
                  View Deployment
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* ──────────────────────────────────────────────────────────────────────────
          SERVICES (Clean System)
          ────────────────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#171412] text-[#F4F2EE] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#F4F2EE 1px, transparent 1px), linear-gradient(90deg, #F4F2EE 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 border-b border-[#333] pb-8">
            <span className="text-[#A88B4D] font-mono text-xs mb-4 block">STATION / 01</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">
              Services Menu
            </h2>
            <p className="text-[#E5E7EB] max-w-2xl text-lg font-light">
              Pick the build type — we'll scope and quote in 15 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Website Design */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group relative">
              <span className="absolute top-4 right-4 bg-[#A88B4D] text-[#171412] text-[10px] font-bold uppercase tracking-widest px-2 py-1">Popular</span>
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 01</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">Custom Website Design</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">High-performance build for credibility & sales.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Custom Design (No Templates)</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Mobile-First & Fast</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> CMS Integration</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Service Businesses, Agencies
              </div>
              <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">From</div>
                  <div className="text-lg font-bold text-[#F4F2EE]">$3.5k</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                  Get Quote →
                </Link>
              </div>
            </div>

            {/* Software & Apps */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 02</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">Software & Apps</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">Custom tools to automate your operations.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Client Portals & Dashboards</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Workflow Automation</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Data Visualization</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Replacing spreadsheets & admin
              </div>
              <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">Timeline</div>
                  <div className="text-lg font-bold text-[#F4F2EE]">4–8 weeks</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                  Get Quote →
                </Link>
              </div>
            </div>

            {/* Website Redesigns */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 03</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">Website Redesigns</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">Rebuild existing sites for speed & conversion.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Full UX/UI Audit</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Performance Optimization</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Message Refinement</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Outdated sites, low conversion
              </div>
              <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">From</div>
                  <div className="text-lg font-bold text-[#F4F2EE]">$2.5k</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                  Get Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          PROCESS (Build Pipeline)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F2EE] border-t border-[#D6D2CA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#B58A2A] font-mono text-xs mb-2 block">PROCESS_QP</span>
            <h2 className="text-3xl font-bold uppercase text-[#171412]">Build Pipeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult & Scope", desc: "15-minute call — we align on goals and lock in the price." },
              { step: "02", title: "Design & Wireframe", desc: "See exactly what we're building before code starts." },
              { step: "03", title: "Build & Develop", desc: "Code production and content integration." },
              { step: "04", title: "Launch & Support", desc: "Final checks, SEO setup, and go-live." }
            ].map((item) => (
              <div key={item.step} className="border-l-2 border-[#D6D2CA] pl-6 py-2">
                <div className="text-[#B58A2A] text-xs font-mono font-bold mb-1">STEP_{item.step}</div>
                <h3 className="text-lg font-bold uppercase text-[#171412]">{item.title}</h3>
                <p className="text-sm text-[#555] font-mono mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <div className="flex items-start justify-between relative">
              {/* Timeline line - positioned at dot level */}
              <div className="absolute left-0 right-0 top-[6px] h-[2px] bg-[#D6D2CA]"></div>
              
              {/* Timeline markers */}
              {[
                { label: "Day 1", title: "Kickoff" },
                { label: "Day 3-7", title: "Design" },
                { label: "Day 8-20", title: "Build" },
                { label: "Day 21+", title: "Launch" }
              ].map((marker, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 bg-[#B58A2A] rounded-full border-2 border-[#F4F2EE]"></div>
                  <div className="mt-3 text-center">
                    <div className="text-[10px] font-mono text-[#B58A2A] font-bold">{marker.label}</div>
                    <div className="text-xs font-bold uppercase text-[#171412]">{marker.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          FAQ (Accordion System)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t-2 border-rule relative">
        <div className="max-w-7xl mx-auto px-6">
          
           {/* Plate Header */}
             <div className="mb-16 border-b-2 border-rule pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-brass rounded-full"></div>
                        <span className="text-brass font-mono text-xs uppercase tracking-widest">STATION / 03</span>
                   </div>
                   <h2 className="text-4xl font-bold uppercase text-soot leading-none">Field Report</h2>
                   <p className="text-sm text-stone-600 font-mono mt-2">Common questions, answered straight.</p>
                </div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Accordion List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
                 {[
                   { q: "Do I need to write the content myself?", a: "No. We can handle copywriting, structure, and messaging. If you have existing content, we'll refine it for conversion." },
                   { q: "What is the typical turnaround time?", a: "Most brochure websites take 2-3 weeks. Complex software or apps take 4-8 weeks depending on scope." },
                   { q: "Do I own the website?", a: "100%. You own the code, the domain, and the design. We don't lock you into proprietary platforms." },
                   { q: "Can you fix my existing slow site?", a: "Yes. We perform a technical audit to identify bottlenecks and can usually rebuild or refactor for significant speed gains." }
                 ].map((item, i) => (
                    <details key={i} className="group border border-rule bg-[#FAF9F6] open:bg-white open:ring-1 open:ring-rule transition-all cursor-pointer">
                        <summary className="flex items-center justify-between p-6 font-bold uppercase text-soot list-none select-none">
                            <span className="flex items-center gap-4">
                                <span className="text-brass font-mono text-xs">0{i+1}</span>
                                {item.q}
                            </span>
                            <span className="text-brass group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-6 pb-6 pl-14 text-sm text-stone-600 leading-relaxed max-w-2xl">
                            {item.a}
                        </div>
                    </details>
                 ))}
            </div>

            {/* Still Unsure Plate */}
            <div className="lg:col-span-4">
                <div className="bg-[#171412] text-white p-8 border-2 border-[#171412] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-3">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    </div>
                    <div className="text-brass font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="w-1 h-3 bg-brass"></div>
                        DIRECT LINE
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-white">Still Unsure?</h3>
                    <p className="text-sm text-white/70 mb-8 leading-relaxed font-mono">
                        Text or call. I'll tell you if we're a good fit in 2 minutes. No sales script.
                    </p>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-sm font-mono border-b border-white/10 pb-3">
                            <span className="text-brass font-bold">TEL //</span> <span className="text-white tracking-widest">(916) 555-0123</span>
                        </div>
                         <div className="flex items-center gap-3 text-sm font-mono border-b border-white/10 pb-3">
                            <span className="text-brass font-bold">HRS //</span> <span className="text-white tracking-widest">9AM - 5PM PST</span>
                        </div>
                         <div className="flex items-center gap-3 text-sm font-mono">
                            <span className="text-brass font-bold">RES //</span> <span className="text-green-500 tracking-widest">&lt; 2 HRS</span>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          CTA: THE INTERFACE
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-soot text-white border-t-2 border-black text-center relative overflow-hidden">
        {/* Machinist grid background effect */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255, 0.3) 1px, transparent 1px)
                `, 
                backgroundSize: '48px 48px' 
             }}>
        </div>
        
        {/* Brass accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brass"></div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Station Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20"></div>
            <span className="text-brass font-mono text-xs tracking-widest uppercase">Request a Build Slot</span>
            <div className="w-8 h-px bg-white/20"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-6 leading-tight">
            Ready to upgrade?
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">
            15-minute consult. Clear scope. Fixed quote.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link href="/consultation" className="inline-flex items-center justify-center px-12 py-5 text-sm font-bold uppercase tracking-widest bg-[#B58A2A] text-white hover:bg-[#C99B2E] transition-colors w-full sm:w-auto text-center">
              Book Consult
            </Link>
             <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-white/70 border-b border-white/30 hover:text-brass hover:border-brass transition-colors pb-1">
              View Services →
            </Link>
          </div>

          {/* Trust signals */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-mono text-white/40 uppercase tracking-wider">
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Fast Turnarounds
                 </span>
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Local Support
                 </span>
                 <span className="flex items-center gap-2">
                    <span className="text-brass text-[8px]">●</span> Performance-First
                 </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

