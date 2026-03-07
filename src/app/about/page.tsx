import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-32 relative overflow-hidden">
      
      {/* Studio Lighting - Top Right Amber Glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.2) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content Side */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg pr-2">
              Our <br />
              <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 pr-2">Legacy.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 mb-8 leading-loose font-light border-l border-amber-600/50 pl-6">
              Founded on the principles of unwavering integrity and relentless pursuit of justice, Legal32 is dedicated to protecting the rights of every citizen.
            </p>
            
            <p className="text-zinc-500 leading-relaxed font-light mb-12">
              Led by Adv. Rahul K. Yadav, our practice focuses on complex constitutional matters, ensuring that the voice of the unheard reaches the highest courts. We believe that a duty towards the nation starts with protecting its people. We bring a combination of rigorous legal analysis and strategic advocacy to every single matter we handle.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10 mb-10">
              <div className="group">
                <h4 className="text-4xl font-serif text-amber-500 mb-2 transition-transform duration-500 group-hover:-translate-y-1">10+</h4>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Years of Excellence</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-serif text-amber-500 mb-2 transition-transform duration-500 group-hover:-translate-y-1">500+</h4>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Cases Handled</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="w-max py-4 px-8 border border-amber-600/50 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-amber-600/10 hover:border-amber-500 transition-all duration-700 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              Consult with Rahul K. Yadav
            </Link>
          </div>

          {/* Image Side */}
          <div className="relative group">
            {/* Ambient Background Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm blur-2xl"></div>
            
            <div className="relative border border-white/10 p-3 rounded-sm bg-white/[0.02] backdrop-blur-xl shadow-2xl">
              {/* Ensure you have an image named rahul-yadav.png in your public folder */}
              <div className="overflow-hidden rounded-sm bg-black/50">
                <Image 
                  src="/rahul-yadav.png" 
                  alt="Adv. Rahul K. Yadav" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}