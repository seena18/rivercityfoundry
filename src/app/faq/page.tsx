import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | River City Foundry',
  description: 'Common questions about custom website design, software development, and build process.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-soot">
      
      {/* ──────────────────────────────────────────────────────────────────────────
          FAQ (Accordion System)
          ────────────────────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-24 border-t-2 border-rule relative">
        <div className="max-w-7xl mx-auto px-6">
          
           {/* Plate Header */}
             <div className="mb-16 border-b-2 border-rule pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                   <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-brass rounded-full"></div>
                        <span className="text-brass font-mono text-xs uppercase tracking-widest">STATION / 03</span>
                   </div>
                   <h1 className="text-4xl font-bold uppercase text-soot leading-none">Field Report</h1>
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
                   { q: "Can you fix my existing slow site?", a: "Yes. We perform a technical audit to identify bottlenecks and can usually rebuild or refactor for significant speed gains." },
                   { q: "Do you offer hosting?", a: "We can set up hosting with modern providers (Vercel, Netlify) or integrate with your existing host. You own the account." },
                   { q: "What if I need changes after launch?", a: "We offer retainer support plans or can train you to make basic updates yourself. You're never locked in." },
                   { q: "Do you work with established brands or just startups?", a: "Both. We work with new businesses that need a professional presence and established companies looking to modernize or expand." },
                   { q: "Can I see your work before committing?", a: "Yes. Check our project gallery or request a discovery call where we'll show relevant examples and discuss your specific needs." }
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
                <div className="bg-[#171412] text-white p-8 border-2 border-[#171412] relative overflow-hidden shadow-2xl sticky top-32">
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
                    
                    <div className="flex flex-col gap-4 mb-8">
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

                    <Link href="/consultation" className="block w-full text-center px-6 py-3 bg-brass text-soot font-bold uppercase text-xs tracking-widest hover:bg-[#C99B2E] transition-colors">
                      Book Consult
                    </Link>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-paper border-t border-rule">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold uppercase text-soot mb-4">Ready to Start?</h2>
          <p className="text-stone-600 mb-8">Book a 15-minute consultation to discuss your project.</p>
          <Link href="/consultation" className="inline-block px-12 py-5 text-sm font-bold uppercase tracking-widest bg-brass text-white hover:bg-[#C99B2E] transition-colors">
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}
