export default function Contact() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen pt-12 pb-24 px-6 font-sans text-[#171412] relative overflow-hidden">
      {/* Background Grid/Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Subtle Bridge Truss Draft (Background) */}
      <div className="absolute top-0 right-0 w-[40%] h-full z-0 opacity-[0.03] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 600" fill="none" stroke="#171412" strokeWidth="1">
              <path d="M0,0 L400,600 M0,200 L400,0 M0,400 L400,200 M0,600 L400,400" />
          </svg>
      </div>

      <div className="relative max-w-xl mx-auto z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[#171412] mb-4">Start a Build</h2>
          <p className="text-sm text-[#555] font-light">
             Tell us about your project requirements. We usually respond within 24 hours.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 border border-[#D6D2CA] shadow-xl shadow-[#D6D2CA]/20 relative">
          {/* Corner Decor */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B58A2A]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B58A2A]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B58A2A]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B58A2A]"></div>

          <form action="#" method="POST" className="grid grid-cols-1 gap-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                <label htmlFor="first-name" className="block text-[10px] font-bold text-[#171412] uppercase tracking-widest mb-2 font-mono">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" 
                        className="py-3 px-4 block w-full bg-[#F4F2EE] border-b border-[#D6D2CA] text-[#171412] focus:outline-none focus:border-[#B58A2A] transition-colors placeholder-gray-400" />
                </div>
                <div>
                <label htmlFor="last-name" className="block text-[10px] font-bold text-[#171412] uppercase tracking-widest mb-2 font-mono">Last name</label>
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" 
                        className="py-3 px-4 block w-full bg-[#F4F2EE] border-b border-[#D6D2CA] text-[#171412] focus:outline-none focus:border-[#B58A2A] transition-colors placeholder-gray-400" />
                </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-bold text-[#171412] uppercase tracking-widest mb-2 font-mono">Email Address</label>
              <input type="email" name="email" id="email" autoComplete="email" 
                    className="py-3 px-4 block w-full bg-[#F4F2EE] border-b border-[#D6D2CA] text-[#171412] focus:outline-none focus:border-[#B58A2A] transition-colors placeholder-gray-400" />
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-bold text-[#171412] uppercase tracking-widest mb-2 font-mono">Project Scope</label>
              <textarea id="message" name="message" rows={4} 
                        className="py-3 px-4 block w-full bg-[#F4F2EE] border-b border-[#D6D2CA] text-[#171412] focus:outline-none focus:border-[#B58A2A] transition-colors placeholder-gray-400"></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#171412] text-[#F4F2EE] text-xs font-bold uppercase tracking-widest hover:bg-[#B58A2A] transition-colors">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
