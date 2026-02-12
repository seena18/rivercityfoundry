import Link from 'next/link';
import Image from 'next/image';
import PreFooterCta from '@/components/PreFooterCta';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-soot font-sans selection:bg-brass selection:text-white">

      {/* ──────────────────────────────────────────────────────────────────────────
          HERO: INDUSTRIAL / PLAIN ENGLISH
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 md:pb-24 border-b border-rule overflow-hidden">
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
          <div className="flex flex-col md:flex-row border-b border-soot pb-6 mb-10 justify-between items-start md:items-end gap-4">
            <div>
              <span className="block text-brass text-xs font-bold uppercase tracking-[0.2em] mb-1">
                River City Foundry
              </span>
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none text-soot max-w-3xl">
                Iron-Clad Websites —<br />Fast, Findable, and <span className="text-brass">Built to Last</span>
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-xs font-mono text-stone-600 mb-1">Based in Sacramento</div>
              <div className="text-xs font-mono text-stone-600 mb-1">Serving the US</div>
              <div className="text-xs font-mono text-brass">STATUS: ACCEPTING BUILDS</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Column: Mission Statement */}
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl font-normal text-soot leading-relaxed max-w-3xl mb-7">
                A clean, professional website or web app that loads fast, looks great on phones, and makes it easy for customers to call, request a quote, or book you.
                <span className="block text-sm font-bold text-soot mt-4 max-w-lg">We handle everything—design, build, and launch—so you can focus on the business.</span>
              </p>

              {/* Trust Indicators / Stamped Labels */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-stone-200/50 border-l-2 border-brass">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-soot">Founder-Led</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-stone-200/50 border-l-2 border-brass">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-soot">No Templates</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-stone-200/50 border-l-2 border-brass">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-soot">You Own Everything</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="/consultation" className="btn-hardware-primary px-8 py-4 text-xs">
                    <span className="mr-2">Book 15-min consult</span>
                    <span>→</span>
                  </Link>
                  <Link href="#work" className="text-xs font-bold uppercase tracking-widest text-soot hover:text-brass transition-colors border-b border-soot/30 hover:border-brass pb-1">
                    View Work
                  </Link>
                </div>
                <p className="text-xs font-mono text-stone-500">You own the code, design, and files—no lock-in.</p>
              </div>
            </div>

            {/* Right Column: Key Metrics (The "Spec Strip") */}
            <div className="lg:col-span-4 border-l border-rule pl-4 lg:pl-10 flex flex-col justify-start pt-1 gap-6">

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">01 // PERFORMANCE</div>
                <div className="text-xl font-bold text-soot uppercase">Speed & Performance</div>
                <div className="text-xs text-stone-600 mt-1 font-mono">
                  <span className="text-[#8C6A1F] font-bold">VERIFIED:</span> Passes Google’s speed + quality checks before launch.
                </div>

                {/* Lighthouse proof */}
                <div className="mt-4 w-full">
                  <div className="relative w-full aspect-[21/9] bg-white overflow-hidden border border-rule">
                    <div className="absolute inset-y-0 inset-x-3">
                      <Image
                        src="/lighthouse-whitev2.png"
                        alt="Google Lighthouse report example"
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-contain object-center"
                        priority
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-white" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-rule"></div>

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">02 // LEAD TIME</div>
                <div className="text-xl font-bold text-soot uppercase">Live in 2-4 Weeks</div>
                <div className="text-xs text-stone-600 mt-1 font-mono">
                  <span className="text-[#8C6A1F] font-bold">AVG:</span> 18-day turnaround for brochure sites
                </div>
              </div>

              <div className="w-full h-[1px] bg-rule"></div>

              <div className="relative">
                <div className="text-brass text-xs font-mono mb-1">03 // SEO</div>
                <div className="text-xl font-bold text-soot uppercase">Found in Local Search</div>
                <div className="text-xs text-stone-600 mt-1 font-mono">
                  <span className="text-[#8C6A1F] font-bold">INCLUDED:</span> GBP + schema setup
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          MINI WORK STRIP
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-rule">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex items-end justify-between mb-12">
              <div className="max-w-xl">
                <span className="text-xs font-mono text-[#8C6A1F] uppercase tracking-widest mb-2 block">Case Studies</span>
                <h2 className="text-3xl font-bold uppercase text-soot mb-3">Selected Work</h2>
                <p className="text-stone-600 text-lg">Websites and tools—built for clarity, speed, and conversion.</p>
              </div>
              <Link href="/work" className="hidden md:block text-xs font-bold uppercase tracking-widest text-soot hover:text-[#8C6A1F] transition-colors border-b border-rule hover:border-[#8C6A1F] pb-1">
                View Full Gallery
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Link href="/work" className="group block h-full flex flex-col" aria-label="View 404 Leads Case Study">
                 <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden border border-rule mb-4 group-hover:shadow-xl group-hover:shadow-brass/10 transition-shadow">
                    <Image 
                      src="/404leads.png" 
                      alt="404 Leads Dashboard Interface" 
                      fill 
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    {/* Overlay Tags */}
                    <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-[#0E0F10] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">SaaS</span>
                        <span className="bg-white text-soot text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-soot/10">Growth</span>
                    </div>
                 </div>
                 <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold uppercase text-soot group-hover:text-[#8C6A1F] transition-colors">404 Leads</h3>
                       <span className="opacity-0 group-hover:opacity-100 text-[#8C6A1F] text-lg leading-none transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                    </div>
                    <p className="text-xs font-mono text-stone-500 uppercase mb-3 line-clamp-1">Automated outreach system</p>
                    <div className="mt-auto pt-3 border-t border-rule/50">
                       <p className="text-sm text-soot leading-snug">
                          <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> Saved 20 hrs/week in manual prospecting
                       </p>
                    </div>
                 </div>
              </Link>

              {/* Project 2 */}
                <Link href="/work" className="group block h-full flex flex-col" aria-label="View Lava Lamp Work">
                 <div className="aspect-[16/10] bg-black relative overflow-hidden border border-rule mb-4 group-hover:shadow-xl group-hover:shadow-brass/10 transition-shadow">
                    <video 
                      src="/portfolio.mov" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      aria-label="Lava Lamp e-commerce demo video"
                    />
                     <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-[#0E0F10] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">E-Comm</span>
                        <span className="bg-white text-soot text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-soot/10">WebGL</span>
                    </div>
                 </div>
                 <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold uppercase text-soot group-hover:text-[#8C6A1F] transition-colors">Lava Lamp</h3>
                       <span className="opacity-0 group-hover:opacity-100 text-[#8C6A1F] text-lg leading-none transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                    </div>
                    <p className="text-xs font-mono text-stone-500 uppercase mb-3 line-clamp-1">Interactive Brand Experience</p>
                    <div className="mt-auto pt-3 border-t border-rule/50">
                       <p className="text-sm text-soot leading-snug">
                          <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> +40% time on site vs. template
                       </p>
                    </div>
                 </div>
              </Link>

              {/* Project 3 */}
              <Link href="/work" className="group block h-full flex flex-col" aria-label="View DaveTrader Case Study">
                 <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden border border-rule mb-4 group-hover:shadow-xl group-hover:shadow-brass/10 transition-shadow">
                    <Image 
                      src="/davetrader.png" 
                      alt="DaveTrader Dashboard Interface" 
                      fill 
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-[#0E0F10] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1">FinTech</span>
                        <span className="bg-white text-soot text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-soot/10">D3.js</span>
                    </div>
                 </div>
                 <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold uppercase text-soot group-hover:text-[#8C6A1F] transition-colors">DaveTrader</h3>
                       <span className="opacity-0 group-hover:opacity-100 text-[#8C6A1F] text-lg leading-none transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                    </div>
                    <p className="text-xs font-mono text-stone-500 uppercase mb-3 line-clamp-1">High-Frequency Trading Dash</p>
                    <div className="mt-auto pt-3 border-t border-rule/50">
                       <p className="text-sm text-soot leading-snug">
                          <span className="font-bold text-[#8C6A1F]">OUTCOME:</span> &lt;50ms latency
                       </p>
                    </div>
                 </div>
              </Link>
           </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          PROCESS (Build Pipeline)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F4F2EE] border-b border-rule" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#8C6A1F] font-mono text-xs mb-2 block tracking-widest">The Pipeline</span>
            <h2 className="text-3xl font-bold uppercase text-soot mb-4">How We Forge Your Build</h2>
            <p className="text-stone-600 text-lg max-w-2xl">
              A tight, 4-step process—clear scope, fast delivery, and clean handoff. Websites and software included.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Mobile vertical timeline rail */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-rule md:hidden" aria-hidden="true"></div>
            {[
              { step: "01", title: "Consult & Scope", desc: "15-minute call — we align on goals and lock in the price." },
              { step: "02", title: "Design & Plan", desc: "See exactly what we're building before code starts." },
              { step: "03", title: "Build & Ship", desc: "Code production and content integration." },
              { step: "04", title: "Launch & Support", desc: "Final checks, SEO setup, and go-live." }
            ].map((item) => (
              <div key={item.step} className="relative border-l-2 border-rule pl-10 md:pl-6 py-2">
                {/* Mobile timeline dot */}
                <div className="absolute left-[9px] top-4 w-3 h-3 bg-brass rounded-full border-2 border-paper md:hidden" aria-hidden="true"></div>
                <div className="text-brass text-xs font-mono font-bold mb-1">STEP_{item.step}</div>
                <h3 className="text-lg font-bold uppercase text-soot">{item.title}</h3>
                <p className="text-sm text-stone-600 font-mono mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-8 pt-8 hidden md:block">
            <div className="flex items-start justify-between relative px-4">
              {/* Timeline line - positioned at dot level */}
              <div className="absolute left-0 right-0 top-[5px] h-[2px] bg-[#D2C2AB]"></div>

              {/* Timeline markers */}
              {[
                { label: "Day 1", title: "Kickoff" },
                { label: "Day 3-7", title: "Design" },
                { label: "Day 8-20", title: "Build" },
                { label: "Day 21+", title: "Launch" }
              ].map((marker, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 bg-brass rounded-full border-2 border-paper"></div>
                  <div className="mt-3 text-center">
                    <div className="text-[10px] font-mono text-brass font-bold">{marker.label}</div>
                    <div className="text-xs font-bold uppercase text-soot">{marker.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          FAQ TEASER + CTA BAND (Dark Station)
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
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Section 1: FAQ Teaser */}
          <div className="mb-24">
             <div className="flex items-center justify-center gap-3 mb-12">
               <div className="w-8 h-px bg-white/20"></div>
                <span className="text-brass font-mono text-xs tracking-widest uppercase">COMMON QUESTIONS</span>
                <div className="w-8 h-px bg-white/20"></div>
             </div>
             
             <div className="grid gap-8 text-left max-w-3xl mx-auto">
                {[
                   { q: "What is the typical turnaround time?", a: "Most brochure websites take 2-3 weeks. Complex software/apps take 4-8 weeks depending on scope." },
                   { q: "Do I own the website?", a: "Yes—domain, design, and files are yours. No hostage situations." },
                   { q: "Do you offer hosting?", a: "Yes—we can host it for you via Vercel Edge Network, or work with your existing infrastructure." }
                ].map((item, i) => (
                   <div key={i} className="border-b border-white/10 pb-8 last:border-0 last:pb-0 group">
                      <h3 className="text-white font-bold text-base uppercase mb-3 flex gap-4">
                         <span className="text-brass font-mono text-xs mt-0.5">0{i+1}</span> {item.q}
                      </h3>
                      <p className="text-stone-200 text-base pl-8 leading-relaxed font-sans opacity-95 group-hover:opacity-100 transition-opacity max-w-2xl">{item.a}</p>
                   </div>
                ))}
             </div>
             <div className="mt-16 text-center">
                <Link href="/faq" className="text-xs font-bold uppercase tracking-widest text-brass border-b border-brass pb-1 hover:text-white hover:border-white transition-colors">
                   Read Full FAQ →
                </Link>
             </div>
          </div>


          <PreFooterCta mode="embedded" />

        </div>
      </section>

    </div>
  );
}
