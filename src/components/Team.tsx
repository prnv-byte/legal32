// src/components/Team.tsx
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: "RAHUL K. YADAV",
      role: "ADVOCATE | DELHI HIGH COURT",
      quote: "“Justice is not a destination; it is a daily commitment. A good lawyer walks that path with integrity”",
      bio: "Team Legal 32 stands distinguished for its unwavering commitment to justice and its client-centric approach. With a deep understanding of law and an even deeper sense of responsibility, the team works tirelessly to protect rights, uphold fairness, and deliver practical solutions with integrity. Their dedication goes beyond legal representation, they champion every client's cause with professionalism, empathy, and an unshakeable belief in the power of justice. Legal 32 is not just a team; it is a steadfast ally in the pursuit of truth.",
      image: "/rahulyadav.png", // File must be in the /public folder
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col lg:flex-row items-stretch gap-0 bg-slate-50 rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md"
            >
              {/* Profile Image Container */}
              <div className="w-full lg:w-[40%] relative min-h-[500px] bg-white">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[60%] p-10 md:p-16 flex flex-col justify-center relative bg-white lg:bg-transparent">
                {/* Large Quotation Mark Decoration */}
                <div className="absolute top-10 right-10 text-indigo-100/40 text-[12rem] font-serif leading-none select-none pointer-events-none">
                  ””
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight italic">
                    {member.quote}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-12 text-justify text-sm md:text-base">
                    {member.bio}
                  </p>

                  <div className="border-t border-slate-200 pt-8">
                    <h4 className="text-xl font-bold text-slate-900 tracking-widest uppercase">
                      {member.name}
                    </h4>
                    <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mt-2">
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