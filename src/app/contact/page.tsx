export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-32 relative overflow-hidden">
      
      {/* Studio Lighting - Top Right Amber Glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      {/* Studio Lighting - Bottom Left Slate Glow */}
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Side: Typography & Info */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg pr-2">
            Let's Talk <br />
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 pr-2">Justice.</span>
          </h1>
          
          <p className="text-lg text-zinc-400 mb-14 leading-loose font-light border-l border-amber-600/50 pl-6 max-w-md">
            Every legal battle begins with a single conversation. Reach out today for a strictly confidential initial assessment of your case.
          </p>
          
          <div className="space-y-10">
            <div className="group">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2 transition-colors duration-500 group-hover:text-amber-500">
                Email
              </p>
              <p className="text-zinc-300 font-light tracking-wide text-lg">
                consult@legal32.com
              </p>
            </div>
            <div className="group">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2 transition-colors duration-500 group-hover:text-amber-500">
                Location
              </p>
              <p className="text-zinc-300 font-light tracking-wide text-lg">
                New Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Frosted Glass Form */}
        <div className="bg-white/[0.02] p-10 md:p-14 rounded-sm border border-white/5 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group">
          
          {/* Subtle Hover Gradient on the Form Container */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 rounded-sm pointer-events-none z-0"></div>

          <form className="grid gap-6 relative z-10">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm" 
            />
            
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm" 
            />
            
            <textarea 
              rows={5} 
              placeholder="Describe your case briefly..." 
              className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm resize-none" 
            />
            
            <button 
              type="button"
              className="w-full mt-4 py-6 bg-gradient-to-r from-amber-700 to-amber-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:from-amber-600 hover:to-amber-400 transition-all duration-700 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1"
            >
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}