import Link from 'next/link';
import { ArrowRight, BookOpen, PenTool, Accessibility, ShieldCheck, Building2, Calculator } from 'lucide-react';

const practiceAreas = [
  { 
    title: "WRIT PETITIONS", 
    description: "A writ petition is filed in the High Court or Supreme Court to enforce fundamental or legal rights violated by the State or its authorities.", 
    icon: BookOpen 
  },
  { 
    title: "RIGHT TO INFORMATION", 
    description: "The Right to Information allows citizens to seek information from public authorities to ensure transparency and accountability in government functioning.", 
    icon: PenTool 
  },
  { 
    title: "PRO-BONO SOCIO LEGAL CASES", 
    description: "Providing free legal assistance to individuals or communities who cannot afford legal representation, focusing on social justice, human rights, and public welfare issues.", 
    icon: Accessibility 
  },
  { 
    title: "INTELLECTUAL PROPERTIES", 
    description: "Protecting and securing your intellectual properties ensures your creative works, inventions, and brand identities are legally safeguarded against misuse or infringement.", 
    icon: ShieldCheck 
  },
  { 
    title: "COMPANY COMPLIANCE", 
    description: "Company compliance ensures that a business operates in accordance with legal, regulatory, and ethical standards, maintaining transparency and avoiding penalties.", 
    icon: Building2 
  },
  { 
    title: "TAXATION", 
    description: "Matters including GST, income tax, and related compliance or dispute cases, ensuring proper representation and resolution.", 
    icon: Calculator 
  }
];

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-32 relative overflow-hidden">
      
      {/* Studio Lighting - Bottom Left Slate Glow */}
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg">
            Areas of <br />
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Practice.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-loose font-light border-l border-amber-600/50 pl-6 max-w-xl">
            Comprehensive legal expertise across multiple domains. We bring rigorous analysis and strategic advocacy to every case we handle.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <div 
              key={index} 
              className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 flex flex-col rounded-sm transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] hover:border-amber-500/30"
            >
              {/* Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"></div>
              
              {/* Top Border Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-8 p-4 bg-black/40 w-max rounded-sm border border-white/5 group-hover:border-amber-500/30 transition-colors duration-500 relative z-10">
                  <area.icon className="w-8 h-8 text-zinc-500 group-hover:text-amber-400 transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-light text-zinc-100 mb-4 group-hover:text-amber-400 transition-colors duration-500">
                  {area.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-loose font-light mb-10 flex-1">
                  {area.description}
                </p>
                
                <Link 
                  href="/contact" 
                  className="mt-auto font-black text-[10px] uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-3 group/link w-max transition-colors duration-500 group-hover:text-amber-500"
                >
                  Discuss your case
                  <ArrowRight size={14} className="transition-all duration-500 group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}