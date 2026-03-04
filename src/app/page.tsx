import Link from 'next/link';
import { client } from '@/sanity/client';
import { 
  Scale, Shield, Gavel, Landmark, Users, 
  Star, ArrowRight, CheckCircle2, Award, Briefcase 
} from 'lucide-react';

// Interface for Sanity Blogs
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
}

export default async function Home() {
  // Fetching the latest 3 blogs for the landing page
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id, title, slug, publishedAt, excerpt
    }`
  );

  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-[-10deg] translate-x-20 hidden lg:block" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-legal-blue/10 text-legal-blue text-sm font-bold mb-8 animate-fade-in">
              <Award size={16} /> Constitutionally Driven Advocacy
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-legal-navy leading-[1.05] mb-8">
              Defending Your <br /> 
              <span className="text-legal-blue">Rights & Justice.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
              Expert legal counsel focused on constitutional integrity, strategic defense, and achieving the justice every citizen deserves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-10 py-5 bg-legal-navy text-white font-bold rounded-2xl shadow-2xl hover:bg-slate-800 transition-all hover:scale-105">
                Book Free Consultation
              </Link>
              <Link href="/practice-areas" className="px-10 py-5 border-2 border-slate-200 text-legal-navy font-bold rounded-2xl hover:bg-slate-50 transition-all">
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AREAS OF PRACTICE */}
      <section id="practice" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-legal-navy mb-4">Core Areas of Practice</h2>
            <p className="text-slate-500">Specialized legal representation for complex judicial matters.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Constitutional Law', icon: <Landmark />, desc: 'Protecting fundamental rights and civil liberties.' },
              { title: 'Criminal Defense', icon: <Shield />, desc: 'Strategic defense for high-stakes criminal proceedings.' },
              { title: 'Civil Litigation', icon: <Gavel />, desc: 'Expert handling of complex civil disputes and appeals.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-legal-navy mb-6 group-hover:bg-legal-navy group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-legal-navy mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <Link href="/practice-areas" className="text-legal-blue font-bold flex items-center gap-2 hover:underline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="bg-legal-navy py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Success Rate', val: '98%' },
              { label: 'Cases Resolved', val: '1,500+' },
              { label: 'Legal Experts', val: '12+' },
              { label: 'Years of Trust', val: '15' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-legal-blue mb-2">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM LEGAL32 */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl font-bold text-legal-navy mb-4">Meet Team Legal32</h2>
              <p className="text-slate-500">A collective of brilliant legal minds dedicated to your defense.</p>
            </div>
            <Link href="/about" className="font-bold text-legal-blue flex items-center gap-2">View All Members <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl">
            <div className="flex gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-32 h-32 rounded-2xl bg-slate-200 shrink-0 overflow-hidden">
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-white">PP</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-legal-navy">Pranav Pathak</h3>
                <p className="text-legal-blue font-bold text-sm uppercase mb-3">Founder & Lead Counsel</p>
                <p className="text-slate-500 text-sm">Constitutional expert specializing in Public Interest Litigation.</p>
              </div>
            </div>
            {/* Placeholder for another team member */}
            <div className="flex gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100 opacity-60">
              <div className="w-32 h-32 rounded-2xl bg-slate-200 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-legal-navy">Associate Counsel</h3>
                <p className="text-slate-400 font-bold text-sm uppercase">Litigation Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RATINGS & TESTIMONIALS */}
      <section className="py-24 bg-legal-blue">
        <div className="container mx-auto px-6 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight italic">
                "Their approach to Constitutional Law gave me clarity and confidence in a very dark time."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20" />
                <div>
                  <p className="font-bold text-lg leading-none">Anjali Sharma</p>
                  <p className="text-blue-100 text-sm">High Court Petitioner</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <p className="font-bold text-xl mb-2">5.0 Rating on Google</p>
                <p className="text-blue-50 text-sm">Based on over 200+ successful legal representations across India.</p>
              </div>
              <div className="p-8 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md">
                <p className="font-bold text-xl mb-2">Recognized Excellence</p>
                <p className="text-blue-50 text-sm">Awarded for Outstanding Legal Service and Ethical Advocacy, 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOG / ARTICLES SECTION */}
      <section id="resources" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-legal-navy mb-4">Latest Legal Bookmarks</h2>
            <p className="text-slate-500">Stay informed with our latest legal insights and resources.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post._id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="p-8">
                  <p className="text-xs font-bold text-legal-blue uppercase mb-3 tracking-widest">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <h3 className="text-2xl font-bold text-legal-navy mb-4 group-hover:text-legal-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 mb-6 line-clamp-3 italic">
                    {post.excerpt || "Explore our detailed breakdown of current constitutional matters and legal procedures."}
                  </p>
                  <Link href={`/blog/${post.slug.current}`} className="font-bold text-legal-navy flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}