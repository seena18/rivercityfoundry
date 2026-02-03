export default function Contact() {
  return (
    <div className="bg-[#F4F2EE] min-h-screen py-24 px-6 font-sans text-[#171412]">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B58A2A] font-mono text-xs uppercase mb-2 block">Incoming Transmission</span>
          <h2 className="text-4xl font-bold uppercase tracking-tight text-[#171412] mb-6">Establish Uplink</h2>
          <p className="text-[#555] font-light">
            Project specs, RFPs, or general inquiries. Decrypted and reviewed by human operators.
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
                Transmit Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
