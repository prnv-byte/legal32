import { Gavel, Landmark, Shield, Users, Briefcase, Scale } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    { title: 'Constitutional Rights', icon: <Landmark className="w-8 h-8" />, desc: 'Protection against state overreach and violation of fundamental rights.' },
    { title: 'Criminal Defense', icon: <Shield className="w-8 h-8" />, desc: 'High-stakes defense for individuals facing criminal charges.' },
    { title: 'Corporate Litigation', icon: <Briefcase className="w-8 h-8" />, desc: 'Resolving business disputes and contract disagreements.' },
    { title: 'Family Law', icon: <Users className="w-8 h-8" />, desc: 'Sensitive legal guidance for divorce, custody, and inheritance.' },
    { title: 'Public Interest', icon: <Scale className="w-8 h-8" />, desc: 'Fighting for systemic change through legal activism.' },
    { title: 'Civil Appeals', icon: <Gavel className="w-8 h-8" />, desc: 'Challenging lower court rulings in high courts.' }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <header className="mb-16 max-w-2xl">
          <h1 className="font-serif text-5xl font-bold text-legal-navy mb-4">Our Practice Areas</h1>
          <p className="text-lg text-slate-500">We specialize in complex litigation with a focus on constitutional integrity.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {areas.map((area, i) => (
            <div key={i} className="group p-10 bg-white border border-slate-200 rounded-3xl hover:border-legal-blue hover:shadow-2xl transition-all">
              <div className="mb-6 text-legal-navy group-hover:text-legal-blue transition-colors">{area.icon}</div>
              <h3 className="text-2xl font-bold text-legal-navy mb-4">{area.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{area.desc}</p>
              <button className="font-bold text-sm text-legal-blue flex items-center gap-2">Learn More <span className="text-xs">→</span></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}