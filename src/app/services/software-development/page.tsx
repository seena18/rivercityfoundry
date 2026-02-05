import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software & App Development',
  description: 'Custom software, mobile apps, and internal tools built for your business. Scalable, secure, and built for performance.',
};

export default function SoftwarePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen bg-paper text-soot">
      <div className="text-brass font-mono text-xs mb-4">SERVICES // DEVELOPMENT</div>
      <h1 className="text-4xl md:text-6xl font-bold uppercase text-soot mb-8 max-w-4xl">
        Software & App <span className="text-transparent bg-clip-text bg-gradient-to-r from-soot to-gray-500">Development</span>
      </h1>
      <p className="text-xl text-soot/80 max-w-2xl mb-12 leading-relaxed">
        Beyond websites. We build custom software, mobile apps, and internal tools that streamline your operations and solve complex business problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Web Applications</h3>
            <p className="text-sm text-soot/70">Powerful SaaS platforms and customer portals running in the browser.</p>
        </div>
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Mobile Apps</h3>
            <p className="text-sm text-soot/70">Native and cross-platform mobile applications for iOS and Android.</p>
        </div>
        <div className="card-plate p-6">
            <h3 className="text-xl font-bold uppercase mb-2 text-soot">Internal Tools</h3>
            <p className="text-sm text-soot/70">Dashboards, CRMs, and automation tools to run your business better.</p>
        </div>
      </div>

      <div className="bg-paper border border-rule p-8 mb-16">
        <h3 className="text-xl font-bold uppercase mb-4 text-soot">Our Tech Stack</h3>
        <p className="text-sm text-soot/80 mb-6">We use modern, battle-tested technologies to ensure your software is fast, scalable, and maintainable.</p>
        <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">React / Next.js</span>
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">React Native</span>
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">Node.js</span>
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">PostgreSQL</span>
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">Python</span>
            <span className="px-3 py-1 bg-white border border-rule text-xs font-mono text-soot">AWS</span>
        </div>
      </div>

      <Link href="/consultation" className="btn-hardware-primary px-8 py-4 text-xs">
        Discuss Your Project
      </Link>
    </div>
  );
}
