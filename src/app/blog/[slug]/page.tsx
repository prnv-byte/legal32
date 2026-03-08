import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define the interface for the full post
interface FullPost {
  title: string;
  publishedAt: string;
  content: any; // Sanity Portable Text
}

// 1. Update the type to wrap params in a Promise
export default async function BlogPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 2. Await the params promise to "unwrap" it
  const { slug } = await params;

  // 3. Now 'slug' is a string, and Sanity will receive it correctly
  const post = await client.fetch<FullPost>(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#050505] pb-32 relative overflow-hidden">
      
      {/* Studio Lighting - Top Right Amber Glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-10 mix-blend-screen z-0"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      {/* Navigation (Simplified for Blog) */}
      <nav className="border-b border-white/5 py-8 mb-16 relative z-10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-4xl">
          <Link href="/" className="text-xl font-serif tracking-widest font-light text-zinc-100 hover:text-white transition-colors">
            LEGAL32
          </Link>
          <Link href="/#resources" className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-amber-400 transition-colors duration-500">
            ← Back to Resources
          </Link>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 relative z-10">
        
        {/* Header */}
        <header className="mb-20 text-center">
          <div className="mb-8 text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">
            Legal Insight • {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight drop-shadow-lg tracking-tight px-2">
            {post.title}
          </h1>
          
          {/* Elegant Separator Line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-12 opacity-50"></div>
        </header>

        {/* Blog Content (Premium Dark Prose) */}
        <div className="prose prose-lg prose-invert max-w-none 
          prose-headings:font-serif prose-headings:font-light prose-headings:text-zinc-100 prose-headings:tracking-tight
          prose-p:text-zinc-400 prose-p:font-light prose-p:leading-loose
          prose-a:text-amber-500 hover:prose-a:text-amber-400 prose-a:transition-colors
          prose-strong:text-zinc-200 prose-strong:font-bold
          prose-blockquote:border-amber-600/50 prose-blockquote:text-zinc-300 prose-blockquote:font-serif prose-blockquote:italic
          prose-li:text-zinc-400">
          <PortableText value={post.content} />
        </div>
        
        {/* Call to Action */}
        <footer className="mt-32 rounded-sm bg-white/[0.02] p-12 md:p-16 text-center border border-white/5 backdrop-blur-xl relative group overflow-hidden">
          
          {/* Subtle Hover Glow on CTA */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-light text-white mb-6 tracking-tight">
              Need specific <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 pr-2">legal advice?</span>
            </h3>
            <p className="text-zinc-400 mb-10 font-light leading-loose max-w-lg mx-auto">
              Our consultations are strictly confidential and tailored to your unique constitutional or civil matter.
            </p>
            <Link 
              href="/contact" 
              className="inline-block rounded-sm border border-amber-600 bg-gradient-to-r from-amber-700 to-amber-500 px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all duration-700 hover:from-amber-600 hover:to-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:-translate-y-1"
            >
              Book Free Consultation
            </Link>
          </div>
        </footer>

      </main>
    </article>
  );
}