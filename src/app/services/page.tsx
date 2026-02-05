import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | River City Foundry',
  description: 'Custom Website Design, Software Development, SEO, and Performance Optimization services in Sacramento.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-paper text-soot">
      
      {/* Header */}
      <div className="pt-40 pb-16 border-b border-rule bg-paper">
        <div className="max-w-7xl mx-auto px-6">
            <span className="text-brass font-mono text-xs uppercase tracking-widest mb-2 block">What We Do</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-soot">
              Services
            </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            
            {/* Custom Website Design */}
            <div className="flex flex-col p-8 card-plate group">
                <div className="mb-6 text-brass">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 4.055 11.953 11.953 0 0 1 4.314 12.59" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">Custom Website Design</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                    We design and build custom websites from the ground up—no templates, no shortcuts.
                    Every site is designed to clearly explain what you do and build trust quickly.
                </p>
                <ul className="text-sm space-y-2 mb-6 text-soot font-medium">
                    <li>• Clear messaging and layout</li>
                    <li>• Mobile-first design</li>
                    <li>• Professional look</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Best For:</span>
                    <p className="text-sm font-bold mt-1 text-soot">New businesses, rebrands, credibility.</p>
                </div>
            </div>

            {/* Software & App Development */}
            <div className="flex flex-col p-8 card-plate group">
                <div className="mb-6 text-brass">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 18" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">Software & Apps</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                    Internal tools, dashboards, automations, booking systems — built to save time.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] uppercase border border-rule px-2 py-1 text-soot">Dashboards</span>
                    <span className="text-[10px] uppercase border border-rule px-2 py-1 text-soot">Portals</span>
                    <span className="text-[10px] uppercase border border-rule px-2 py-1 text-soot">Workflows</span>
                </div>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Best For:</span>
                    <p className="text-sm font-bold mt-1 text-soot">Streamlining spreadsheets & manual admin.</p>
                </div>
            </div>

            {/* SEO-Ready Builds */}
            <div className="flex flex-col p-8 card-plate group">
                <div className="mb-6 text-brass">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">SEO-Ready Builds</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                    Every site we build is structured so Google can understand it from day one. solid technical foundation that supports local SEO and future marketing.
                </p>
                 <ul className="text-sm space-y-2 mb-6 text-soot font-medium">
                    <li>• Clean page structure</li>
                    <li>• Search-friendly URLs</li>
                    <li>• Fast load times</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Outcome:</span>
                    <p className="text-sm font-bold mt-1 text-soot">Ready to be found, technically sound.</p>
                </div>
            </div>

            {/* Website Redesigns */}
            <div className="flex flex-col p-8 card-plate group">
                <div className="mb-6 text-brass">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">Website Redesigns</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                   If your current site looks outdated, loads slowly, or doesn’t generate inquiries, we rebuild it properly. We audit what’s working and remove what isn’t.
                </p>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Fixes:</span>
                    <p className="text-sm font-bold mt-1 text-soot">Mobile experience, speed, messaging.</p>
                </div>
            </div>

            {/* Performance Optimization */}
            <div className="flex flex-col p-8 card-plate group">
                <div className="mb-6 text-brass">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">Performance</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                   Speed matters. We optimize websites to load faster, feel smoother, and score better on performance tests like Google Lighthouse.
                </p>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Includes:</span>
                    <p className="text-sm font-bold mt-1 text-soot">Asset optimization, script reduction, layout fixes.</p>
                </div>
            </div>

            {/* Ongoing Support */}
            <div className="flex flex-col p-8 card-plate group">
                 <div className="mb-6 text-brass">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.581-.495.644-.869l.214-1.281Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-soot group-hover:text-brass transition-colors">Support</h3>
                <p className="text-[#555] mb-6 leading-relaxed">
                   Ongoing support so you’re not stuck Googling solutions. We provide content updates, features, and troubleshooting without long-term contracts.
                </p>
                <div className="mt-auto pt-6 border-t border-rule">
                    <span className="text-xs font-mono text-[#888] uppercase">Promise:</span>
                    <p className="text-sm font-bold mt-1 text-soot">Help when you need it.</p>
                </div>
            </div>

        </div>

        {/* How It Works */}
        <div className="mb-32">
            <h2 className="text-4xl font-bold uppercase mb-16 border-l-4 border-brass pl-6 py-2 text-soot">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {['Quick Consult', 'Clear Scope', 'Build & Review', 'Launch & Support'].map((step, i) => (
                    <div key={i} className="relative group">
                        <div className="text-6xl font-black text-rule absolute -top-8 -left-2 z-0 group-hover:text-brass/20 transition-colors">0{i+1}</div>
                        <div className="relative z-10 pt-4">
                            <h3 className="text-xl font-bold uppercase mb-2 text-soot">{step}</h3>
                            <p className="text-sm text-[#555] font-medium leading-relaxed">
                                {i === 0 && "We learn about your goals and needs."}
                                {i === 1 && "You get a plan, timeline, and price."}
                                {i === 2 && "We design, build, and iterate."}
                                {i === 3 && "Site goes live, support available."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="bg-soot text-paper p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 tracking-tight text-paper">Not sure what you need?</h2>
                <p className="text-xl text-stone-400 mb-10 font-light">We’ll help you figure it out during a short consultation.</p>
                <Link href="/consultation" className="btn-hardware-primary px-10 py-4 text-xs">
                    Start a Conversation
                </Link>
            </div>
            {/* Background Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
             </div>
        </div>

      </div>
    </div>
  );
}
