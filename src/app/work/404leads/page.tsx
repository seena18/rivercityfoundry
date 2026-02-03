import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 Leads | Case Study',
  description: 'How we built a lead generation system for local businesses.',
};

export default function CaseStudyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <Link href="/work" className="text-xs font-mono text-[#555] hover:text-[#B58A2A]">← BACK TO WORK</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
         <div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase text-[#171412] mb-6">404 Leads</h1>
            <p className="text-xl text-[#555] leading-relaxed">
                A system designed to identify local businesses in need of web services by scanning map data.
            </p>
         </div>
         <div className="grid grid-cols-2 gap-8 font-mono text-sm">
            <div>
                <div className="text-[#B58A2A] mb-1">CLIENT</div>
                <div>Internal Tool</div>
            </div>
            <div>
                <div className="text-[#B58A2A] mb-1">SERVICES</div>
                <div>UI/UX, Development</div>
            </div>
            <div>
                <div className="text-[#B58A2A] mb-1">YEAR</div>
                <div>2024</div>
            </div>
            <div>
                 <div className="text-[#B58A2A] mb-1">TECH STACK</div>
                <div>Next.js, Python</div>
            </div>
         </div>
      </div>

      <div className="relative w-full aspect-video bg-[#F4F2EE] border border-[#D6D2CA] mb-24">
         <Image src="/404leads.png" alt="404 Leads Dashboard" fill className="object-contain" />
      </div>

    </div>
  );
}
