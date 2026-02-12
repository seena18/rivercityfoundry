import { Metadata } from 'next';
import Link from 'next/link';
import PreFooterCta from '@/components/PreFooterCta';

export const metadata: Metadata = {
  title: 'Services | River City Foundry',
  description: 'New website builds, software tools, and website rebuilds focused on speed, clarity, and conversion.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-paper text-soot">

      {/* ──────────────────────────────────────────────────────────────────────────
          SERVICES (Clean System)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 bg-[#171412] text-[#F4F2EE] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#F4F2EE 1px, transparent 1px), linear-gradient(90deg, #F4F2EE 1px, transparent 1px)', backgroundSize: '3rem 3rem' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 border-b border-[#333] pb-8">
            <span className="text-[#A88B4D] font-mono text-xs mb-4 block">BUILD MENU</span>
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">
              Services
            </h1>
            <p className="text-[#E5E7EB] max-w-2xl text-lg font-light">
              Pick a build type — we’ll scope it and give a fixed quote in 15 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* New Website Build */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group relative">
              <span className="absolute top-4 right-4 bg-[#A88B4D] text-[#171412] text-[10px] font-bold uppercase tracking-widest px-2 py-1">Popular</span>
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 01</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">New Website Build</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">A fast, clean website that turns visitors into calls and bookings.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Custom design (not a template)</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Mobile-friendly + fast</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Easy to update (we hand it off clean)</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Includes:</span> Google search basics, traffic tracking, and editing handoff.
              </div>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Service businesses, agencies.
              </div>
              <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">Starting at</div>
                  <div className="text-lg font-bold text-[#F4F2EE]">$3.5k</div>
                  <div className="text-xs text-[#9CA3AF] mt-2">Typical timeline: 2–4 weeks</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                  Book 15-min consult →
                </Link>
              </div>
            </div>

            {/* Software & Apps */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 02</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">Software & Apps</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">Custom tools that replace spreadsheets and save hours every week.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Client portals + admin panels</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Automations + integrations</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Reports + live dashboards</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Includes:</span> Secure logins, tool integrations, and activity tracking.
              </div>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Teams replacing spreadsheets and manual admin.
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-[#333] pt-6 mt-auto">
                <div className="pr-2">
                  <div className="text-xs text-[#9CA3AF] mb-1">Typical investment</div>
                  <div className="text-sm font-bold leading-tight text-[#F4F2EE]">$6k–$20k</div>
                  <div className="text-xs text-[#9CA3AF] mt-2">Typical timeline: 4–8 weeks</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 whitespace-nowrap shrink-0 hover:text-white hover:border-white transition-colors">
                  Book 15-min consult →
                </Link>
              </div>
            </div>

            {/* Website Rebuild */}
            <div className="bg-[#1F1C19] border border-[#333] p-8 hover:border-[#A88B4D] transition-colors group">
              <div className="text-[#A88B4D] font-mono text-xs mb-6">SVC / 03</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-[#F4F2EE]">Website Rebuild</h3>
              <p className="text-sm text-[#9CA3AF] mb-6">Speed + clarity upgrades for more leads from the traffic you already get.</p>
              <ul className="space-y-3 mb-6 text-[#9CA3AF] text-sm group-hover:text-[#E5E7EB] transition-colors">
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Usability + content review</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Speed fixes</li>
                <li className="flex items-start"><span className="text-[#A88B4D] mr-2">›</span> Message Refinement</li>
              </ul>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Includes:</span> Search cleanup, tracking, and lead tracking.
              </div>
              <div className="text-xs text-[#9CA3AF] mb-4">
                <span className="text-[#A88B4D]">Best for:</span> Outdated sites with low conversion.
              </div>
              <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-1">Starting at</div>
                  <div className="text-lg font-bold text-[#F4F2EE]">$2.5k</div>
                  <div className="text-xs text-[#9CA3AF] mt-2">Typical timeline: 2–4 weeks</div>
                </div>
                <Link href="/consultation" className="text-xs font-bold uppercase tracking-widest text-[#A88B4D] border-b border-[#A88B4D] pb-1 hover:text-white hover:border-white transition-colors">
                  Book 15-min consult →
                </Link>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult & Scope", desc: "15-minute call — we align on goals and lock in the price." },
              { step: "02", title: "Design & Plan", desc: "See exactly what we're building before code starts." },
              { step: "03", title: "Build & Ship", desc: "We build it and load your content." },
              { step: "04", title: "Launch & Support", desc: "Final checks, SEO setup, and go-live." }
            ].map((item) => (
              <div key={item.step} className="border-l-2 border-rule pl-6 py-2">
                <div className="text-brass text-xs font-mono font-bold mb-1">STEP_{item.step}</div>
                <h3 className="text-lg font-bold uppercase text-soot">{item.title}</h3>
                <p className="text-sm text-stone-600 font-mono mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-8 pt-8">
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

      <PreFooterCta />

    </div>
  );
}
