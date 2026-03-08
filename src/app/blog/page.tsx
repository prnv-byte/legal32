import Link from 'next/link';
import { client } from '@/sanity/client';
import { ArrowRight } from 'lucide-react';

interface Post { 
  _id: string; 
  title: string; 
  slug: { current: string }; 
  publishedAt: string; 
  excerpt?: string; 
}

export default async function BlogPage() {
  // Fetch ALL posts from Sanity, ordered by newest first
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) { _id, title, slug, publishedAt, excerpt }`
  );

  return (
    <div className="min-h-screen bg-[#050505] pt-40 pb-32 relative overflow-hidden">
      
      {/* Studio Lighting - Top Right Amber Glow */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(180,83,9,0.3) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      {/* Studio Lighting - Bottom Left Slate Glow */}
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none opacity-20 mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, rgba(0,0,0,0) 60%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Page Header - Centered on mobile, left on desktop */}
        <div className="max-w-3xl mb-20 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg pr-2">
            Legal <br className="hidden md:block" />
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 pr-2">Insights.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-loose font-light md:border-l md:border-amber-600/50 md:pl-6 max-w-xl">
            Stay informed with our comprehensive collection of articles, analyzing recent judicial updates, constitutional matters, and critical legal perspectives.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post._id} className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 overflow-hidden flex flex-col rounded-sm transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] hover:border-amber-500/30">
                
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-0"></div>
                
                {/* Top Border Hover Glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-amber-600 to-amber-300 opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10"></div>
                
                {/* Card Content - Centered on mobile, left on desktop */}
                <div className="p-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
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
            <div className="col-span-full py-24 text-center border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-sm">
              <p className="text-zinc-500 text-sm font-serif italic">No articles published yet. Stay tuned for legal insights.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}