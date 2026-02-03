import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web Design, Development, and SEO services in Sacramento through River City Foundry.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-[#171412] mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/services/web-design" className="block p-8 border border-[#D6D2CA] hover:border-[#B58A2A] transition-colors group">
            <h2 className="text-2xl font-bold uppercase mb-4 group-hover:text-[#B58A2A]">Web Design & Build</h2>
            <p className="text-[#555] mb-4">Custom, high-performance websites built from scratch.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58A2A]">Learn More →</span>
        </Link>
        <Link href="/services/software-development" className="block p-8 border border-[#D6D2CA] hover:border-[#B58A2A] transition-colors group">
            <h2 className="text-2xl font-bold uppercase mb-4 group-hover:text-[#B58A2A]">Software & Apps</h2>
            <p className="text-[#555] mb-4">Custom web applications, mobile apps, and internal tools.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58A2A]">Learn More →</span>
        </Link>
        <Link href="/services/seo" className="block p-8 border border-[#D6D2CA] hover:border-[#B58A2A] transition-colors group">
            <h2 className="text-2xl font-bold uppercase mb-4 group-hover:text-[#B58A2A]">Local SEO</h2>
            <p className="text-[#555] mb-4">Get found by customers in Sacramento and Northern California.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58A2A]">Learn More →</span>
        </Link>
      </div>
    </div>
  );
}
