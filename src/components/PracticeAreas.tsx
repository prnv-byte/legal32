import { BookOpen, PenTool, Accessibility, ShieldCheck, Building2, Calculator } from 'lucide-react';

export default function PracticeAreas() {
  const practices = [
    {
      title: "WRIT PETITIONS",
      desc: "A writ petition is filed in the High Court or Supreme Court to enforce fundamental or legal rights violated by the State or its authorities.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "RIGHT TO INFORMATION",
      desc: "The Right to Information allows citizens to seek information from public authorities to ensure transparency and accountability in government functioning.",
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      title: "PRO-BONO SOCIO LEGAL CASES",
      desc: "Providing free legal assistance to individuals or communities who cannot afford legal representation, focusing on social justice, human rights, and public welfare issues.",
      icon: <Accessibility className="w-6 h-6" />,
    },
    {
      title: "INTELLECTUAL PROPERTIES",
      desc: "Protecting and securing your intellectual properties ensures your creative works, inventions, and brand identities are legally safeguarded against misuse or infringement.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "COMPANY COMPLIANCE",
      desc: "Company compliance ensures that a business operates in accordance with legal, regulatory, and ethical standards, maintaining transparency and avoiding penalties.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "TAXATION",
      desc: "Matters including GST, income tax, and related compliance or dispute cases, ensuring proper representation and resolution.",
      icon: <Calculator className="w-6 h-6" />,
    },
  ];

  return (
    <section 
      id="practice" 
      className="relative py-24 bg-[#121212] overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold tracking-tight mb-20 uppercase">
          Area of Practice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item, index) => (
            <div 
              key={index}
              className="group relative p-10 flex flex-col items-center text-center rounded-2xl border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-bold tracking-widest mb-4 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}