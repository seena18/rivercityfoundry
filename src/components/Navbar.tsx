import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-[#F4F2EE]/90 backdrop-blur-md border-b border-[#D6D2CA] relative z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="relative w-20 h-20">
                 <Image 
                    src="/logo.png" 
                    alt="River City Foundry" 
                    fill
                    className="object-contain"
                 />
            </Link>
            
            <Link href="/" className="text-lg font-bold tracking-tight text-[#171412] uppercase leading-none">
                River City Foundry<br/><span className="text-[10px] tracking-[0.2em] text-[#B58A2A] font-normal">Web Studio</span>
            </Link>
          </div>

          <div className="hidden md:flex sm:items-center sm:gap-10">
            {['Home', 'Contact'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[#171412] text-xs font-bold uppercase tracking-widest hover:text-[#B58A2A] transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#B58A2A] transition-all group-hover:w-full"></span>
                </Link>
            ))}
            
            <Link href="/consultation" className="px-6 py-3 bg-[#171412] text-[#F4F2EE] text-xs font-bold uppercase tracking-widest hover:bg-[#B58A2A] transition-colors">
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
