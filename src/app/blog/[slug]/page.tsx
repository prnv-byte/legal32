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
    <article className="min-h-screen bg-white pb-20">
      {/* Navigation (Simplified for Blog) */}
      <nav className="border-b border-slate-100 py-6 mb-12">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-legal-navy">LEGAL32</Link>
          <Link href="/#resources" className="text-sm font-semibold text-legal-blue hover:underline">
            ← Back to Resources
          </Link>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mb-4 text-sm font-medium text-slate-500 uppercase tracking-widest">
            Legal Resource • {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-legal-navy leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-serif prose-headings:text-legal-navy 
          prose-a:text-legal-blue prose-strong:text-legal-navy">
          <PortableText value={post.content} />
        </div>
        
        {/* Call to Action */}
        <footer className="mt-16 rounded-2xl bg-slate-50 p-8 text-center border border-slate-100">
          <h3 className="text-xl font-serif font-bold text-legal-navy mb-2">Need specific legal advice?</h3>
          <p className="text-slate-600 mb-6">Our consultations are free and strictly confidential.</p>
          <Link href="/#contact" className="inline-block rounded-lg bg-legal-navy px-8 py-3 text-white font-semibold transition hover:bg-slate-800">
            Book Free Consultation
          </Link>
        </footer>
      </main>
    </article>
  );
}