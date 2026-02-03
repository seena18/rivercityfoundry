import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F2EE] text-[#171412] font-sans selection:bg-[#B58A2A] selection:text-white">
      
      {/* ──────────────────────────────────────────────────────────────────────────
          HERO: INDUSTRIAL / PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 border-b border-[#D6D2CA]">
        {/* Background Grid/Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
        </div>
        
        {/* Subtle Bridge Truss Draft (Background) */}
        <div className="absolute top-20 right-0 w-[40%] h-full z-0 opacity-[0.03] pointer-events-none hidden lg:block">
            <svg viewBox="0 0 400 600" fill="none" stroke="#171412" strokeWidth="1">
                <path d="M0,0 L400,600 M0,200 L400,0 M0,400 L400,200 M0,600 L400,400" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Top Spec Bar */}
          <div className="flex flex-col md:flex-row border-b border-[#171412] pb-6 mb-12 justify-between items-start md:items-end gap-4">
             <div>
                <span className="block text-[#B58A2A] text-xs font-bold uppercase tracking-[0.2em] mb-1">
                   River City Foundry
                </span>
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none text-[#171412] max-w-3xl">
                   High-Performance<br/>Websites for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#171412] to-[#666]">Sacramento Businesses</span>
                </h1>
             </div>
             <div className="text-right hidden md:block">
                <div className="text-xs font-mono text-[#5c4033] mb-1">UNIT: SACRAMENTO, CA</div>
                <div className="text-xs font-mono text-[#5c4033] mb-1">SERVING: NORCAL REGION</div>
                <div className="text-xs font-mono text-[#B58A2A]">STATUS: ACCEPTING BUILDS</div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Mission Statement */}
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-normal text-[#171412] leading-relaxed max-w-3xl mb-8">
                We design and build high-performance websites for local businesses—fast, durable, and designed to convert.
                <span className="text-[#B58A2A] font-medium"> No fluff. Just iron-clad code.</span>
                <span className="block text-sm font-bold text-[#171412] mt-4 max-w-lg">Simple process. Clear pricing. You run the business — we handle the web.</span>
              </p>
              
              {/* Trust Indicators / Stamped Labels */}
              <div className="flex flex-wrap gap-4 mb-10 font-mono text-[10px] text-[#555] uppercase tracking-wider">
                  <div className="flex items-center border border-[#D6D2CA] px-3 py-1 bg-white/50 transition-colors hover:border-[#B58A2A]">
                      <div className="w-1.5 h-1.5 bg-[#B58A2A] mr-2"></div> Founder-Led
                  </div>
                  <div className="flex items-center border border-[#D6D2CA] px-3 py-1 bg-white/50 transition-colors hover:border-[#B58A2A]">
                      <div className="w-1.5 h-1.5 bg-[#B58A2A] mr-2"></div> No Templates
                  </div>
                  <div className="flex items-center border border-[#D6D2CA] px-3 py-1 bg-white/50 transition-colors hover:border-[#B58A2A]">
                      <div className="w-1.5 h-1.5 bg-[#B58A2A] mr-2"></div> Full IP Ownership
                  </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/consultation" className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#171412] text-[#F4F2EE] uppercase tracking-widest text-xs font-bold hover:bg-[#B58A2A] transition-all duration-300">
                  <span className="mr-2">Start a Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/#work" className="inline-flex items-center justify-center px-8 py-4 border border-[#171412] text-[#171412] uppercase tracking-widest text-xs font-bold hover:bg-[#D6D2CA] transition-colors hover:border-[#D6D2CA]">
                  View Work
                </Link>
              </div>
            </div>

            {/* Right Column: Key Metrics (The "Spec Strip") */}
            <div className="lg:col-span-4 border-l border-[#D6D2CA] pl-0 lg:pl-10 flex flex-col justify-center gap-8">
               
               <div className="relative">
                  <div className="text-[#B58A2A] text-xs font-mono mb-1">01 // PERFORMANCE</div>
                  <div className="text-xl font-bold text-[#171412] uppercase">Speed & Performance</div>
                  <div className="text-xs text-[#5c4033] mt-1">Fast on phones. Built to convert.</div>
               </div>

               <div className="w-full h-[1px] bg-[#D6D2CA]"></div>

               <div className="relative">
                  <div className="text-[#B58A2A] text-xs font-mono mb-1">02 // LEAD TIME</div>
                  <div className="text-xl font-bold text-[#171412] uppercase">2-4 Weeks</div>
                  <div className="text-xs text-[#5c4033] mt-1">Typical Launch Cycle</div>
               </div>
                
               <div className="w-full h-[1px] bg-[#D6D2CA]"></div>

               <div className="relative">
                  <div className="text-[#B58A2A] text-xs font-mono mb-1">03 // SEO</div>
                  <div className="text-xl font-bold text-[#171412] uppercase">SEO Foundation</div>
                  <div className="text-xs text-[#5c4033] mt-1">Found in local search</div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          FEATURED PROJECTS: PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section id="work" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex items-end justify-between mb-16 border-b border-[#171412] pb-6">
                <div>
                     <span className="text-[#B58A2A] font-mono text-xs mb-2 block">FABRICATION LOGS</span>
                     <h2 className="text-3xl font-bold uppercase text-[#171412]">Selected Work</h2>
                     <p className="text-xs text-[#555] font-mono mt-2">Real builds and concepts demonstrating our systems.</p>
                </div>
                <Link href="/contact" className="hidden sm:block text-xs font-bold uppercase tracking-widest hover:text-[#B58A2A] transition-colors underline decoration-[#B58A2A] decoration-2 underline-offset-4">
                    Project Gallery
                </Link>
            </div>

            {/* 404 Leads Featured Build */}
            <div className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative group perspective-1000">
                         <div className="absolute -inset-4 bg-[#B58A2A]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         <div className="relative border border-[#D6D2CA] bg-[#F4F2EE] shadow-xl shadow-[#B58A2A]/5 overflow-hidden">
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
                                <span className="bg-[#171412] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">Live System</span>
                             </div>
                         </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:pl-8">
                         <div className="text-[#B58A2A] font-mono text-xs mb-4">FABRICATION_LOG // 001</div>
                         <h3 className="text-3xl md:text-4xl font-bold uppercase text-[#171412] mb-4 leading-none">
                             404 Leads <span className="block text-xl md:text-2xl text-[#666] mt-2">Lead Discovery System</span>
                         </h3>
                         <p className="text-lg text-[#555] font-light mb-8 leading-relaxed">
                            A scanning tool that turns maps into qualified prospects—no spreadsheets, no guesswork. Finds local businesses that need a website, verifies contact details, and exports clean lists for outreach.
                         </p>
                         
                         <div className="bg-[#F9F8F6] border border-[#E5E5E5] p-6 mb-8">
                            <span className="text-[10px] font-bold text-[#B58A2A] uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Map-based scanning by city + category
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Website detection + manual verification
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Built for speed: quick filters and fast review
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
                         <div className="text-[#B58A2A] font-mono text-xs mb-4">FABRICATION_LOG // 002</div>
                         <h3 className="text-3xl md:text-4xl font-bold uppercase text-[#171412] mb-4 leading-none">
                            Morphing Lava Lamp <span className="block text-xl md:text-2xl text-[#666] mt-2">Interactive 3D UI System</span>
                         </h3>
                         <p className="text-lg text-[#555] font-light mb-8 leading-relaxed">
                            A real-time 3D hero interface with fluid ‘metaball’ motion and responsive theming. Turns standard navigation into a smooth, interactive experience.
                         </p>
                         
                         <div className="bg-[#F9F8F6] border border-[#E5E5E5] p-6 mb-8">
                            <span className="text-[10px] font-bold text-[#B58A2A] uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Stack: React, Vite, R3F (Three.js)
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Rendering: Real-time procedural metaballs
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Feature: Custom shader materials + Theming
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-[#D6D2CA] text-[10px] text-[#999] font-mono uppercase tracking-wide">
                                Performance-first rendering pipeline. No pre-rendered video.
                            </div>
                         </div>
                         
                         <Link href="https://seenaabed.com" target="_blank" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#171412] border-b-2 border-[#B58A2A] pb-1 hover:text-[#B58A2A] transition-colors">
                             View Deployment
                             <span className="ml-2">→</span>
                         </Link>
                    </div>

                    {/* Video Side */}
                    <div className="relative group perspective-1000 order-1 lg:order-2">
                         <div className="absolute -inset-4 bg-[#B58A2A]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         <div className="relative border border-[#D6D2CA] bg-[#F4F2EE] shadow-xl shadow-[#B58A2A]/5 overflow-hidden">
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
                                <span className="bg-[#171412] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">BUILD: R3F_METABALLS</span>
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
                         <div className="absolute -inset-4 bg-[#B58A2A]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         <div className="relative border border-[#D6D2CA] bg-[#F4F2EE] shadow-xl shadow-[#B58A2A]/5 overflow-hidden">
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
                                <span className="bg-[#171412] text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">Live System</span>
                             </div>
                         </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:pl-8">
                         <div className="text-[#B58A2A] font-mono text-xs mb-4">FABRICATION_LOG // 003</div>
                         <h3 className="text-3xl md:text-4xl font-bold uppercase text-[#171412] mb-4 leading-none">
                             DaveTrader <span className="block text-xl md:text-2xl text-[#666] mt-2">Market Analytics Console</span>
                         </h3>
                         <p className="text-lg text-[#555] font-light mb-8 leading-relaxed">
                            A journaling and analytics dashboard that helps traders review signals, test ideas, and stay consistent. Built for clarity and decision support, not hype.
                         </p>
                         
                         <div className="bg-[#F9F8F6] border border-[#E5E5E5] p-6 mb-8">
                            <span className="text-[10px] font-bold text-[#B58A2A] uppercase tracking-widest mb-4 block">SYSTEM SPECS</span>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Real-time chart rendering & indicators
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Strategy backtesting interface
                                </li>
                                <li className="flex items-start text-sm text-[#555] font-mono">
                                    <span className="text-[#B58A2A] mr-3">●</span> Automated journal & performance metrics
                                </li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-[#D6D2CA] text-[10px] text-[#999] font-mono uppercase tracking-wide">
                                Educational tooling. No guaranteed returns. No ‘signals’ sold.
                            </div>
                         </div>

                         <Link href="https://davestrades-web.vercel.app/" target="_blank" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#171412] border-b-2 border-[#B58A2A] pb-1 hover:text-[#B58A2A] transition-colors">
                             View Deployment
                             <span className="ml-2">→</span>
                         </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          BUILD PIPELINE
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F2EE] border-t border-[#D6D2CA]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
                 <span className="text-[#B58A2A] font-mono text-xs mb-2 block">PROCESS_QP</span>
                 <h2 className="text-3xl font-bold uppercase text-[#171412]">Build Pipeline</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Audit + Goals", desc: "15-minute call (we’ll map the plan)" },
                    { step: "02", title: "Design Direction", desc: "Design preview (before we build)" },
                    { step: "03", title: "Build + Revise", desc: "Build + revisions" },
                    { step: "04", title: "Launch + Support", desc: "Final deployment" }
                ].map((item) => (
                    <div key={item.step} className="border-l-2 border-[#D6D2CA] pl-6 py-2">
                        <div className="text-[#B58A2A] text-xs font-mono font-bold mb-1">STEP_{item.step}</div>
                        <h3 className="text-lg font-bold uppercase text-[#171412]">{item.title}</h3>
                        <p className="text-sm text-[#555] font-mono mt-1">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          CAPABILITIES: PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#171412] text-[#F4F2EE] relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#F4F2EE 1px, transparent 1px), linear-gradient(90deg, #F4F2EE 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-16 border-b border-[#333] pb-8">
                  <span className="text-[#A88B4D] font-mono text-xs mb-4 block">SYSTEM SPECIFICATIONS</span>
                  <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">
                      What's Included
                  </h2>
                  <p className="text-[#E5E7EB] max-w-2xl text-lg font-light">
                      Standard operating procedures for every deployment.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
                      <div className="text-[#A88B4D] font-mono text-xs mb-6">SPEC_01 // VISUAL</div>
                      <h3 className="text-2xl font-bold uppercase mb-4 text-[#F4F2EE]">Design System</h3>
                      <ul className="space-y-3 mb-8 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Wireframes + Page Structure</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Mobile-First Layout System</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Brand Polish (Type, Color)</li>
                      </ul>
                      <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                          View Deliverables
                      </Link>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
                      <div className="text-[#A88B4D] font-mono text-xs mb-6">SPEC_02 // KINETIC</div>
                      <h3 className="text-2xl font-bold uppercase mb-4 text-[#F4F2EE]">Build & Launch</h3>
                      <ul className="space-y-3 mb-8 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Fast, Crawlable Pages</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> CMS Setup (If Critical)</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Launch setup (domain, hosting, forms, tracking)</li>
                      </ul>
                      <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                          View Tech Stack
                      </Link>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
                      <div className="text-[#A88B4D] font-mono text-xs mb-6">SPEC_03 // DISCOVERY</div>
                      <h3 className="text-2xl font-bold uppercase mb-4 text-[#F4F2EE]">SEO Foundation</h3>
                      <ul className="space-y-3 mb-8 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Found on Google (local search ready)</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Service pages structured for your areas</li>
                          <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Search-friendly setup (behind the scenes)</li>
                      </ul>
                      <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                          View Plans
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          FAQ: PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F2EE] border-t border-[#D6D2CA]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
                 <span className="text-[#B58A2A] font-mono text-xs mb-2 block">COMMON QUERIES</span>
                 <h2 className="text-3xl font-bold uppercase text-[#171412]">Frequent Questions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-[#D6D2CA] p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#171412] mb-3">Do I need to write anything?</h3>
                    <p className="text-sm text-[#555] font-mono">No — we can help with copy, photography guidance, and page structure.</p>
                </div>
                <div className="border border-[#D6D2CA] p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#171412] mb-3">Can you use my domain?</h3>
                    <p className="text-sm text-[#555] font-mono">Yes, we integrate with your existing domain, phone number, and branding.</p>
                </div>
                <div className="border border-[#D6D2CA] p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#171412] mb-3">How do edits work?</h3>
                    <p className="text-sm text-[#555] font-mono">We offer an easy update plan, or you can take full ownership of the site.</p>
                </div>
            </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          CTA: THE INTERFACE
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F4F2EE] border-t border-[#D6D2CA] text-center">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-4xl font-bold uppercase text-[#171412] mb-6">Ready to upgrade your website?</h2>
              <p className="text-[#5c4033] mb-10 max-w-xl mx-auto">
                  Schedule a technical consultation. We'll audit your current setup and propose a build plan.
              </p>
              <div className="flex flex-col items-center gap-4">
                  <Link href="/consultation" className="inline-block px-12 py-5 bg-[#B58A2A] text-white font-bold uppercase tracking-widest hover:bg-[#967d38] transition-colors shadow-lg shadow-[#B58A2A]/20">
                      Book a 30-minute consult
                  </Link>
                  <p className="text-xs text-[#5c4033] font-mono">Projects typically start at $2.5k. Reply within 24 hours.</p>
              </div>
          </div>
      </section>

    </div>
  );
}
