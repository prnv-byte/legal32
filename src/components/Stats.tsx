export default function Stats() {
  const stats = [
    { number: "7+", title: "YEARS OF RICH", subTitle: "EXPERIENCE" },
    { number: "50+", title: "ACTIVE BUSINESS", subTitle: "CLIENTAGE" },
    { number: "20+", title: "AREAS OF PRACTICE", subTitle: "THROUGHOUT INDIA" },
    { number: "60+", title: "TEAM OF CA, CS &", subTitle: "LAWYERS" },
  ];

  return (
    <section className="relative bg-[#050505] py-32 text-white overflow-hidden border-t border-white/5">
      
      {/* Studio Lighting: Central Base Glow to separate it naturally from Practice Areas */}
      <div 
        className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="mb-8 font-serif text-3xl font-light leading-snug md:text-5xl text-zinc-100">
            We are focused on legal awareness, analytical understanding, and <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">informed perspectives</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-loose text-zinc-400">
            Committed to enhancing legal awareness by exploring rights, remedies, and legal processes through constitutional and statutory perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-4 md:gap-y-0 relative">
          
          {/* Fading horizontal separator line */}
          <div className="absolute top-1/2 left-[10%] w-[80%] h-[1px] hidden md:block z-0"
               style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 50%, transparent)' }}>
          </div>

          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center px-4 group relative z-10"
            >
              {/* Vertical separator between items */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-[1px]"
                     style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.05) 50%, transparent)' }}>
                </div>
              )}

              {/* Metallic Gradient Text for Numbers */}
              <div className="mb-6 text-6xl md:text-8xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-600 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-125 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                {stat.number}
              </div>
              
              <div className="flex flex-col text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 transition-colors duration-700 group-hover:text-zinc-300">
                <span>{stat.title}</span>
                <span className="text-zinc-200 mt-1 tracking-[0.35em]">{stat.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}