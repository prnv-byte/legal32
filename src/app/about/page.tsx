export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-legal-blue font-bold tracking-widest uppercase text-sm">Our Mission</span>
        <h1 className="font-serif text-5xl font-bold text-legal-navy mt-4 mb-10">Protecting Justice Since 2011</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-20 text-left">
          LEGAL32 was born from the idea that the Constitution isn't just a document—it's a living shield. Founded by Pranav Pathak, our firm bridges the gap between complex legal code and the common citizen's rights.
        </p>
        
        <h2 className="font-serif text-3xl font-bold text-legal-navy mb-12">The Team</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden">
               {/* Use Next/Image here later */}
               <div className="w-full h-full bg-slate-200" />
            </div>
            <h3 className="text-2xl font-bold text-legal-navy">Pranav Pathak</h3>
            <p className="text-legal-blue font-medium">Founder & Lead Counsel</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden">
               <div className="w-full h-full bg-slate-200" />
            </div>
            <h3 className="text-2xl font-bold text-legal-navy">Senior Associate</h3>
            <p className="text-legal-blue font-medium">Head of Litigation</p>
          </div>
        </div>
      </div>
    </div>
  );
}