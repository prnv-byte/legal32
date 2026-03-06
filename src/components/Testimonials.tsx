import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Upender Kumar", role: "Proprietor at Radiancy Electronics", text: "The team is excellent in figuring out solutions to every complex problems related to my business. They ensures to safeguard my firm from every corner with proper documentations and deeds." },
    { name: "Mohit Pal", role: "Director at Ridepal Tour & Travels Private Limited", text: "The team at Legal 32 and Advocate Rahul K. Yadav are magicians in Business laws. They have helped me in incorporating my Company and getting all the mandatory registrations for it. Also, Mr. Rahul is no less in strategising a business, you may take a benefit of that." }
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Cool Slate Studio Lighting */}
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, rgba(0,0,0,0) 70%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="currentColor" className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            ))}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            Excellence <span className="font-bold italic text-transparent bg-clip-text pr-3 bg-gradient-to-r from-amber-200 to-amber-600">Recognized</span>
          </h2>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-6">
            Based on 50+ Real Client Representations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="group relative p-12 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-sm flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] hover:border-amber-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-0 rounded-sm"></div>

              <Quote className="text-white/10 mb-8 transition-colors duration-700 group-hover:text-amber-500/30 relative z-10" size={48} />
              
              <p className="text-zinc-400 leading-loose mb-12 flex-1 font-serif italic text-[15px] relative z-10 transition-colors duration-700 group-hover:text-zinc-300">
                "{review.text}"
              </p>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5 relative z-10">
                <div className="w-12 h-12 rounded-sm bg-black/50 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-amber-600 font-serif font-bold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200 uppercase tracking-widest text-[11px] mb-1">
                    {review.name}
                  </h4>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] leading-tight max-w-[200px]">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}