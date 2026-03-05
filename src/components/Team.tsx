import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: "RAHUL K. YADAV",
      role: "ADVOCATE | DELHI HIGH COURT",
      quote: "“Justice is not a destination; it is a daily commitment. A good lawyer walks that path with integrity”",
      bio: "Team Legal 32 stands distinguished for its unwavering commitment to justice and its client-centric approach. With a deep understanding of law and an even deeper sense of responsibility, the team works tirelessly to protect rights, uphold fairness, and deliver practical solutions with integrity. Their dedication goes beyond legal representation, they champion every client's cause with professionalism, empathy, and an unshakeable belief in the power of justice. Legal 32 is not just a team; it is a steadfast ally in the pursuit of truth.",
      image: "/rahulyadav.png", 
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Studio Lighting */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.2) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col lg:flex-row items-stretch bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] group relative rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="w-full lg:w-[45%] relative min-h-[500px] bg-black/50 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover object-top grayscale opacity-70 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  priority
                />
              </div>

              <div className="w-full lg:w-[55%] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -top-10 -right-4 text-white/5 text-[18rem] font-serif leading-none select-none pointer-events-none transition-transform duration-1000 group-hover:-translate-x-4">
                  ”
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-3xl md:text-5xl font-light text-white mb-10 leading-tight italic drop-shadow-md">
                    {member.quote}
                  </h3>
                  
                  <p className="text-zinc-400 leading-loose mb-16 text-justify text-sm">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-[1px] bg-amber-600"></div>
                    <div>
                      <h4 className="text-lg font-serif font-light text-zinc-200 tracking-wider uppercase mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[9px] font-black text-amber-500 uppercase tracking-[0.3em]">
                        {member.role}
                      </p>
                    </div>
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