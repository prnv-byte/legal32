import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white py-5">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-2xl font-bold tracking-tight text-legal-navy">
            <Link href="/">LEGAL32</Link>
          </div>
          <nav>
            <ul className="flex items-center gap-8">
              <li><Link href="#about" className="text-legal-slate hover:text-legal-blue">About</Link></li>
              <li><Link href="#resources" className="text-legal-slate hover:text-legal-blue">Resources</Link></li>
              <li>
                <Link href="#contact" className="rounded-lg bg-legal-navy px-5 py-2.5 text-white transition hover:bg-slate-800">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="mx-auto mb-6 max-w-3xl font-serif text-5xl font-bold leading-tight text-legal-navy">
              Fighting for the Justice You Deserve
            </h1>
            <p className="mb-10 text-xl text-slate-500">
              A duty towards the nation to protect the rights of every citizen.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-lg bg-legal-navy px-8 py-3 text-lg font-medium text-white hover:bg-slate-800">
                Book Free Consultation
              </button>
              <button className="rounded-lg border-2 border-legal-navy px-8 py-3 text-lg font-medium text-legal-navy hover:bg-legal-navy hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Resources Section (This is where your blogs will appear) */}
        <section id="resources" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-legal-navy">What's New?</h2>
            <p className="mb-12 text-slate-500">Insights and legal bookmarks to make your legal battle easier.</p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
              {/* This is a static placeholder for now */}
              <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <h3 className="mb-4 font-serif text-xl font-bold text-legal-navy">Ongoing Legal Bookmarks</h3>
                <p className="mb-6 text-slate-600">
                  Explore our curated resources to understand your rights and the current legal landscape.
                </p>
                <Link href="#" className="font-semibold text-legal-blue hover:underline">
                  Read Article &rarr;
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 text-center">
        <p className="text-slate-500">
          &copy; 2026 LEGAL32 - From the Heart of the Constitution. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}