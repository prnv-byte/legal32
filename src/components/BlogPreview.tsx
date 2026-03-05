import Link from 'next/link';
import { client } from '@/sanity/client';
import { ArrowRight } from 'lucide-react';

interface Post { _id: string; title: string; slug: { current: string }; publishedAt: string; excerpt?: string; }

export default async function BlogPreview() {
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] { _id, title, slug, publishedAt, excerpt }`
  );

  return (
    <section id="resources" className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl font-light text-white mb-6 drop-shadow-xl">
              Legal <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Insights</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed font-light">
              Stay informed with our curated insights on ongoing constitutional matters and judicial updates.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-4 font-black text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-amber-400 transition-colors duration-500"
          >
            Explore All Resources 
            <span className="w-8 h-[1px] bg-white/10 group-hover:bg-amber-500 transition-colors duration-500"></span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post._id} className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 overflow-hidden flex flex-col rounded-sm transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] hover:border-amber-500/30">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"></div>
                
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"></div>
                
                <div className="p-10 flex-1 flex flex-col relative z-10">
                  <div className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-6 transition-colors duration-500 group-hover:text-amber-500/70">
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-2xl font-serif font-light text-zinc-100 mb-6 leading-snug group-hover:text-amber-400 transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 line-clamp-3 text-sm leading-loose font-serif italic flex-1 transition-colors duration-500 group-hover:text-zinc-300">
                    {post.excerpt || "Dive into our detailed analysis of current constitutional protections and legal procedures."}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="mt-auto font-black text-[10px] uppercase tracking-[0.2em] text-zinc-300 flex items-center gap-3 group/link w-max transition-colors duration-500 group-hover:text-amber-400"
                  >
                    Read Article 
                    <ArrowRight size={14} className="text-zinc-600 transition-all duration-500 group-hover/link:translate-x-2 group-hover/link:text-amber-500" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 py-24 text-center border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-sm">
              <p className="text-zinc-500 text-sm font-serif italic">No articles published yet. Stay tuned for legal insights.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}