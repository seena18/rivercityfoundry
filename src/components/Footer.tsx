import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#171412] border-t border-[#333] mt-auto text-[#F4F2EE] font-mono text-xs">
      <div className="max-w-7xl mx-auto py-12 px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 border-b border-[#333] pb-12">
            <div>
                 <div className="flex items-center gap-4 mb-6">
                     <div className="relative h-16 w-16">
                        <Image 
                            src="/logo.png" 
                            alt="River City Foundry" 
                            fill
                            className="object-contain object-left brightness-0 invert" 
                        />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold uppercase tracking-wider leading-none text-[#F4F2EE]">River City Foundry</h3>
                        <div className="text-[#B58A2A] text-[10px] tracking-[0.3em] font-normal uppercase mt-1">Web Studio</div>
                     </div>
                 </div>
                 <p className="text-[#9CA3AF] max-w-xs leading-relaxed font-sans">
                    Precision web design & development for businesses that demand performance.
                 </p>
            </div>

            <div className="flex flex-col md:items-end gap-2 text-[#9CA3AF]">
               <div>LED BY: Seena Abed (Founder)</div>
               <div>CONTACT: <a href="mailto:hello@rivercity.web" className="hover:text-[#B58A2A] transition-colors">hello@rivercity.web</a></div>
               <div>LOC: Sacramento, CA</div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#5c4033] uppercase tracking-widest">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex gap-2 items-center">
                    <span className="text-[#B58A2A]">●</span> SYSTEM_OPERATIONAL
                    <span className="opacity-50 mx-2 hidden md:inline">|</span>
                    <span className="text-[#555] normal-case tracking-normal">Accepting new projects</span>
                </div>
            </div>
            
            <div className="text-[#555]">
               © {new Date().getFullYear()} RIVER CITY FOUNDRY. V2.0.4 [BUILD_8821]
            </div>
        </div>
      </div>
    </footer>
  );
}
