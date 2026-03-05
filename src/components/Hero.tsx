import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#050505]">
      
      {/* Cinematic Dark Fade over the background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(to right, #050505 10%, rgba(5,5,5,0.4) 60%, rgba(5,5,5,0.1) 100%), linear-gradient(to bottom, transparent 70%, #050505 100%), url('/image_hero.jpg')` 
        }}
      ></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="mb-8 font-serif text-6xl md:text-8xl font-light tracking-tighter text-white leading-[1.05] drop-shadow-2xl">
            Fighting for the <br />
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">Justice you</span> <br />
            deserve.
          </h1>
          
          <p className="mb-14 max-w-xl text-lg font-light text-zinc-400 border-l-[1px] border-amber-600/50 pl-6 leading-relaxed">
            The site is under construction. Thanks for your cooperation.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <Link 
              href="/contact" 
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-xl px-10 py-5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-700 hover:border-amber-500/50 hover:bg-amber-600/10 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
            >
              <span className="relative z-10 transition-colors duration-700 group-hover:text-amber-400">Book free Consultation</span>
            </Link>
            <Link 
              href="/contact" 
              className="group rounded-sm border border-amber-600 bg-gradient-to-r from-amber-700 to-amber-500 px-10 py-5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-700 hover:from-amber-600 hover:to-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1"
            >
              Book Detailed Consultation
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 w-full px-6 flex items-center justify-between opacity-50">
          <p className="font-serif text-sm italic tracking-widest text-zinc-500">
            A Duty towards nation to protect the Rights of Every Citizen
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-amber-600/50 to-transparent hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}