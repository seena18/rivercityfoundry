import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Sacramento',
  description: 'Custom web design and development for Sacramento businesses. Fast, mobile-friendly, and built to convert.',
};

export default function WebDesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-[#B58A2A] font-mono text-xs mb-4">SERVICES // WEB DESIGN</div>
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-[#171412] mb-8 max-w-4xl">
        Web Design in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#171412] to-[#666]">Sacramento</span>
      </h1>
      <p className="text-xl text-[#555] max-w-2xl mb-12 leading-relaxed">
        We build websites that move the needle. No templates, no bloat—just clean code that ranks well and turns visitors into customers.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Fast on Mobile</h3>
            <p className="text-sm text-[#555]">Google prioritizes speed. We build sites that load instantly on all devices.</p>
        </div>
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Built to Convert</h3>
            <p className="text-sm text-[#555]">Strategic layouts that guide visitors to call or book a consultation.</p>
        </div>
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Full Ownership</h3>
            <p className="text-sm text-[#555]">You own the code and the design. No monthly rental fees.</p>
        </div>
      </div>

      <Link href="/consultation" className="px-8 py-4 bg-[#171412] text-[#F4F2EE] uppercase tracking-widest text-xs font-bold hover:bg-[#B58A2A] transition-colors">
        Start Your Build
      </Link>
    </div>
  );
}
