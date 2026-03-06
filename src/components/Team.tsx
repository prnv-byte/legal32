import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: "RAHUL K. YADAV",
      role: "ADVOCATE | DELHI HIGH COURT",
      quote: "“Justice is not a destination; it is a daily commitment. A good lawyer walks that path with integrity.”",
      bio: "Team Legal 32 stands distinguished for its unwavering commitment to justice and its client-centric approach. With a deep understanding of law and an even deeper sense of responsibility, the team works tirelessly to protect rights, uphold fairness, and deliver practical solutions with integrity. Their dedication goes beyond legal representation, they champion every client's cause with professionalism, empathy, and an unshakeable belief in the power of justice. Legal 32 is not just a team; it is a steadfast ally in the pursuit of truth.",
      image: "/rahulyadav.png", 
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Deep Studio Lighting */}
      <div 
        className="absolute top-0 right-0 w-[80vw] h-[80vw] pointer-events-none rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/3 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-24 text-center md:text-left border-b border-white/5 pb-12">
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-4 tracking-tighter drop-shadow-lg">
            Lead <span className="italic font-bold text-transparent pr-20 bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Counsel</span>
          </h2>
          <p className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-black">
            The Minds Behind Legal32
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group"
            >
              
              {/* Left Column: Portrait Image with Offset Frame */}
              <div className="w-full lg:w-5/12 relative">
                {/* Offset Luxury Wireframe (Moves on hover) */}
                <div className="absolute inset-0 border border-amber-600/30 translate-x-4 translate-y-4 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-6 group-hover:translate-y-6 rounded-sm z-0"></div>
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black rounded-sm z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  {/* Cinematic Bottom Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10 opacity-80"></div>
                  
                  {/* Ambient Amber Overlay (Fades out on hover) */}
                  <div className="absolute inset-0 bg-amber-600/10 mix-blend-overlay z-10 transition-opacity duration-1000 group-hover:opacity-0"></div>
                  
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale contrast-125 brightness-75 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-[20%] group-hover:brightness-100"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Typography & Content */}
              <div className="w-full lg:w-7/12 relative z-20">
                {/* Massive Watermark Quote */}
                <div className="absolute -top-24 -left-12 text-[15rem] font-serif leading-none text-white/[0.02] select-none pointer-events-none transition-colors duration-1000 group-hover:text-amber-500/[0.04]">
                  ”
                </div>
                
                {/* Quote as Headline */}
                <h3 className="font-serif text-3xl md:text-5xl font-light text-zinc-100 mb-10 leading-[1.3] italic relative z-10 drop-shadow-md">
                  {member.quote}
                </h3>
                
                {/* Bio Text */}
                <p className="text-zinc-400 text-sm md:text-[15px] leading-loose mb-14 text-justify relative z-10 font-light max-w-2xl transition-colors duration-700 group-hover:text-zinc-300">
                  {member.bio}
                </p>

                {/* Identity Block */}
                <div className="flex items-center gap-8 relative z-10">
                  {/* Animated Separator Line */}
                  <div className="w-16 h-[1px] bg-gradient-to-r from-amber-600 to-transparent transition-all duration-1000 group-hover:w-32 group-hover:from-amber-400"></div>
                  
                  <div>
                    <h4 className="text-2xl font-serif font-light text-white tracking-widest uppercase mb-2">
                      {member.name}
                    </h4>
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.4em] drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}