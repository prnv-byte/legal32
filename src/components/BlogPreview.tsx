// src/components/BlogPreview.tsx
import Link from 'next/link';
import { client } from '@/sanity/client';
import { ArrowRight } from 'lucide-react';

// Define the shape of your Sanity post data
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
}

export default async function BlogPreview() {
  // Fetch the 3 most recent posts from Sanity
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id, title, slug, publishedAt, excerpt
    }`
  );

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-bold text-legal-navy mb-4">Latest Legal Bookmarks</h2>
            <p className="text-slate-500">
              Stay informed with our curated insights on ongoing constitutional matters and judicial updates.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 font-bold text-legal-blue hover:text-legal-navy transition-colors"
          >
            Explore All Resources <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post._id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
                <div className="p-8 flex-1">
                  <div className="text-xs font-bold text-legal-blue uppercase tracking-widest mb-4">
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-legal-navy mb-4 group-hover:text-legal-blue transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 mb-6 line-clamp-3 italic">
                    {post.excerpt || "Dive into our detailed analysis of current constitutional protections and legal procedures."}
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="font-bold text-legal-navy flex items-center gap-2 group/link"
                  >
                    Read Article 
                    <ArrowRight size={16} className="text-legal-blue transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            /* Fallback if no posts exist yet */
            <div className="col-span-3 py-12 text-center border-2 border-dashed border-slate-200 rounded-3xl">
              <p className="text-slate-400 font-medium italic">No articles published yet. Stay tuned for legal insights.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}