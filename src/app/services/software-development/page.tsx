import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software & App Development',
  description: 'Custom software, mobile apps, and internal tools built for your business. Scalable, secure, and built for performance.',
};

export default function SoftwarePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-[#B58A2A] font-mono text-xs mb-4">SERVICES // DEVELOPMENT</div>
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-[#171412] mb-8 max-w-4xl">
        Software & App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#171412] to-[#666]">Development</span>
      </h1>
      <p className="text-xl text-[#555] max-w-2xl mb-12 leading-relaxed">
        Beyond websites. We build custom software, mobile apps, and internal tools that streamline your operations and solve complex business problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Web Applications</h3>
            <p className="text-sm text-[#555]">Powerful SaaS platforms and customer portals running in the browser.</p>
        </div>
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Mobile Apps</h3>
            <p className="text-sm text-[#555]">Native and cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div>
            <h3 className="text-xl font-bold uppercase mb-2">Internal Tools</h3>
            <p className="text-sm text-[#555]">Dashboards, CRMs, and automation tools to run your business better.</p>
        </div>
      </div>

      <div className="bg-[#F4F2EE] border border-[#D6D2CA] p-8 mb-16">
        <h3 className="text-xl font-bold uppercase mb-4">Our Tech Stack</h3>
        <p className="text-sm text-[#555] mb-6">We use modern, battle-tested technologies to ensure your software is fast, scalable, and maintainable.</p>
        <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">React / Next.js</span>
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">React Native</span>
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">Node.js</span>
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">PostgreSQL</span>
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">Python</span>
            <span className="px-3 py-1 bg-white border border-[#D6D2CA] text-xs font-mono">AWS</span>
        </div>
      </div>

      <Link href="/consultation" className="px-8 py-4 bg-[#171412] text-[#F4F2EE] uppercase tracking-widest text-xs font-bold hover:bg-[#B58A2A] transition-colors">
        Discuss Your Project
      </Link>
    </div>
  );
}
