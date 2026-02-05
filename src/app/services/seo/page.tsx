import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local SEO Services Sacramento',
  description: 'Technical and local SEO services to help your business rank in Sacramento search results.',
};

export default function SeoPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen bg-paper text-soot">
      <div className="text-brass font-mono text-xs mb-4">SERVICES // SEO</div>
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-soot mb-8 max-w-4xl">
        Local SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-soot to-gray-500">Setup</span>
      </h1>
      <p className="text-xl text-soot/80 max-w-2xl mb-12 leading-relaxed">
        Dominate local search results. We set up the technical foundation your site needs to be seen by customers in Sacramento and Northern California.
      </p>

      <ul className="space-y-4 mb-12 font-mono text-sm text-soot/90">
        <li className="flex items-center"><span className="text-brass mr-4">01</span> Google Search Console & Analytics Setup</li>
        <li className="flex items-center"><span className="text-brass mr-4">02</span> Local Business Schema (JSON-LD)</li>
        <li className="flex items-center"><span className="text-brass mr-4">03</span> Google Business Profile Optimization</li>
        <li className="flex items-center"><span className="text-brass mr-4">04</span> On-Page Keyword Optimization</li>
      </ul>

      <Link href="/consultation" className="btn-hardware-primary px-8 py-4 text-xs">
        Get an Audit
      </Link>
    </div>
  );
}
