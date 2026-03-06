import { BookOpen, PenTool, Accessibility, ShieldCheck, Building2, Calculator } from 'lucide-react';

export default function PracticeAreas() {
  const practices = [
    { title: "WRIT PETITIONS", desc: "A writ petition is filed in the High Court or Supreme Court to enforce fundamental or legal rights violated by the State or its authorities.", icon: <BookOpen className="w-8 h-8 relative z-10" /> },
    { title: "RIGHT TO INFORMATION", desc: "The Right to Information allows citizens to seek information from public authorities to ensure transparency and accountability in government functioning.", icon: <PenTool className="w-8 h-8 relative z-10" /> },
    { title: "PRO-BONO SOCIO LEGAL CASES", desc: "Providing free legal assistance to individuals or communities who cannot afford legal representation, focusing on social justice, human rights, and public welfare issues.", icon: <Accessibility className="w-8 h-8 relative z-10" /> },
    { title: "INTELLECTUAL PROPERTIES", desc: "Protecting and securing your intellectual properties ensures your creative works, inventions, and brand identities are legally safeguarded against misuse or infringement.", icon: <ShieldCheck className="w-8 h-8 relative z-10" /> },
    { title: "COMPANY COMPLIANCE", desc: "Company compliance ensures that a business operates in accordance with legal, regulatory, and ethical standards, maintaining transparency and avoiding penalties.", icon: <Building2 className="w-8 h-8 relative z-10" /> },
    { title: "TAXATION", desc: "Matters including GST, income tax, and related compliance or dispute cases, ensuring proper representation and resolution.", icon: <Calculator className="w-8 h-8 relative z-10" /> },
  ];

  return (
    <section 
      id="practice" 
      // A unified, pitch-dark luxury base
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      {/* Studio Lighting: Warm Amber light leak from top-right */}
      <div 
        className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full pointer-events-none opacity-40 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.15) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>

      {/* Studio Lighting: Cool Slate light leak from mid-left (kills monotony) */}
      <div 
        className="absolute top-[40%] left-[-20%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-30 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.3) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>

      {/* Very subtle architectural grid fading into the dark */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, 
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center font-serif text-white text-5xl md:text-6xl font-light tracking-tight mb-24 drop-shadow-2xl">
          Areas of <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r pr-3 from-amber-200 to-amber-600">Practice</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((item, index) => (
            <div 
              key={index}
              className="group relative p-10 flex flex-col items-start rounded-sm overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)]"
            >
              {/* Smooth Hover Gradient Injection using Opacity (feels much more "real") */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-0"></div>
              
              <div className="mb-8 text-zinc-500 transition-colors duration-700 group-hover:text-amber-400 relative z-10">
                {item.icon}
              </div>
              
              <h3 className="text-white font-serif text-xl font-bold tracking-widest mb-4 uppercase relative z-10">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-loose transition-colors duration-700 group-hover:text-zinc-200 text-left relative z-10">
                {item.desc}
              </p>
              
              {/* Expanding Gold Indicator Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-600 to-amber-300 transition-all duration-700 ease-out group-hover:w-full z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}