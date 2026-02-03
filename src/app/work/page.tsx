import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Project Gallery | Selected Work',
  description: 'Portfolio of custom websites and digital products built by River City Foundry.',
};

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase text-[#171412] mb-16">Selected Work</h1>
      
      <div className="space-y-24">
        
        {/* Project 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-[16/10] bg-[#F4F2EE] border border-[#D6D2CA]">
                <Image src="/404leads.png" alt="404 Leads" fill className="object-contain p-4" />
             </div>
             <div>
                 <div className="text-[#B58A2A] font-mono text-xs mb-2">LEAD GENERATION SYSTEM</div>
                 <h2 className="text-3xl font-bold uppercase mb-4">404 Leads</h2>
                 <p className="text-[#555] mb-6">A scanning tool that turns maps into qualified prospects.</p>
                 <Link href="/work/404leads" className="text-xs font-bold uppercase tracking-widest border-b border-[#171412] pb-1 hover:text-[#B58A2A] hover:border-[#B58A2A] transition-colors">
                    View Case Study
                 </Link>
             </div>
        </div>

      </div>
    </div>
  );
}
