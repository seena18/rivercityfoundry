import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Sacramento',
  description: 'Custom web design and development for Sacramento businesses. Fast, mobile-friendly, and built to convert.',
};

export default function WebDesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen bg-paper text-soot">
      <div className="text-brass font-mono text-xs mb-4">SERVICES // WEB DESIGN</div>
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-soot mb-8 max-w-4xl">
        Web Design in <span className="text-transparent bg-clip-text bg-gradient-to-r from-soot to-gray-500">Sacramento</span>
      </h1>
      <p className="text-xl text-soot/80 max-w-2xl mb-12 leading-relaxed">
        We build websites that move the needle. No templates, no bloat—just clean code that ranks well and turns visitors into customers.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Fast on Mobile</h3>
            <p className="text-sm text-soot/70">Google prioritizes speed. We build sites that load instantly on all devices.</p>
        </div>
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Built to Convert</h3>
            <p className="text-sm text-soot/70">Strategic layouts that guide visitors to call or book a consultation.</p>
        </div>
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Full Ownership</h3>
            <p className="text-sm text-soot/70">You own the code and the design. No monthly rental fees.</p>
        </div>
      </div>

      <Link href="/consultation" className="btn-hardware-primary px-8 py-4 text-xs">
        Start Your Build
      </Link>
    </div>
  );
}
