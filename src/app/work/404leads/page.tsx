import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 Leads | Case Study',
  description: 'How we built a lead generation system for local businesses.',
};

export default function CaseStudyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 min-h-screen bg-paper text-soot">
      <div className="mb-12">
        <Link href="/work" className="text-xs font-mono text-soot/60 hover:text-brass transition-colors">← BACK TO WORK</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
         <div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-soot mb-6">404 Leads</h1>
            <p className="text-xl text-soot/80 leading-relaxed">
                A system designed to identify local businesses in need of web services by scanning map data.
            </p>
         </div>
         <div className="grid grid-cols-2 gap-8 font-mono text-sm">
            <div>
                <div className="text-brass mb-1">CLIENT</div>
                <div className="text-soot">Internal Tool</div>
            </div>
            <div>
                <div className="text-brass mb-1">SERVICES</div>
                <div className="text-soot">UI/UX, Development</div>
            </div>
            <div>
                <div className="text-brass mb-1">YEAR</div>
                <div className="text-soot">2024</div>
            </div>
            <div>
                 <div className="text-brass mb-1">TECH STACK</div>
                <div className="text-soot">Next.js, Python</div>
            </div>
         </div>
      </div>

      <div className="relative w-full aspect-video bg-paper border border-rule mb-24">
         <Image src="/404leads.png" alt="404 Leads Dashboard" fill className="object-contain" />
      </div>

    </div>
  );
}
