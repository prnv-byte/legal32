import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(82, 82, 82, 0.5), rgba(82, 0, 0, 0.5)), url('/image_hero.jpg')` 
        }}
      >
        {/* Placeholder: Ensure you place a high-res legal-themed image in your /public folder named 'legal-hero-bg.jpg' */}
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-sans text-6xl font-bold tracking-tight text-white md:text-8xl">
            Fighting for the <br />
            Justice you <br />
            deserve
          </h1>
          
          <p className="mb-12 max-w-xl text-xl font-medium text-white/90">
            The site is under construction. Thanks for your cooperation
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link 
              href="/contact" 
              className="border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Book free Consultation
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Book Detailed Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="absolute bottom-10 left-0 w-full text-center">
          <p className="font-serif text-lg italic tracking-widest text-white/80">
            A Duty towards nation to protect the Rights of Every Citizen
          </p>
        </div>
      </div>
    </section>
  );
}