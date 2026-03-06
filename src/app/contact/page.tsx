'use client';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919205441807?text=Hello%20Legal32%20Team,%20I%20need%20assistance%20regarding%20a%20legal%20matter.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:rahulatlaw@gmail.com?subject=Legal%20Consultation&body=Hello%20Rahul%20Sir,';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/find_rahul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  const handleEmailFooterClick = () => {
    window.location.href = 'mailto:rahulatlaw@gmail.com';
  };

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
        
        {/* Left Side: Typography & Info - Now full width at top */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg">
            Want to <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">connect</span> with us?
          </h1>
          
          <p className="text-lg text-zinc-400 leading-loose font-light max-w-2xl mx-auto">
            Every legal battle begins with a single conversation. Reach out today for a strictly confidential initial assessment of your case.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* WhatsApp Card */}
          <div 
            onClick={handleWhatsAppClick}
            className="bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-xl group hover:border-amber-600/30 transition-all duration-700 cursor-pointer"
          >
            <div className="text-amber-500 text-sm font-black tracking-[0.2em] mb-4">CONNECT ON</div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">WHATSAPP</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Drop Your Query on WhatsApp and Our team will revert back to you for finding you the Best solution available.
            </p>
            <div className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group">
              <span className="text-xs font-black tracking-[0.2em] mr-2">GET IN TOUCH</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Email Card */}
          <div 
            onClick={handleEmailClick}
            className="bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-xl group hover:border-amber-600/30 transition-all duration-700 cursor-pointer"
          >
            <div className="text-amber-500 text-xs font-black tracking-[0.2em] mb-4">EMAIL</div>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Send your In-Detail Query via Mail and our Dedicated team will reach you with a crafted solution for your Problem/Query
            </p>
            <div className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group">
              <span className="text-xs font-black tracking-[0.2em] mr-2">COMPOSE</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Social Media Card */}
          <div 
            onClick={handleInstagramClick}
            className="bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-xl group hover:border-amber-600/30 transition-all duration-700 cursor-pointer"
          >
            <div className="text-amber-500 text-xs font-black tracking-[0.2em] mb-4">FOLLOW US ON</div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">SOCIAL MEDIA</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Get all our updates and Latest Developments in Legal field through our Social media
            </p>
            <div className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group">
              <span className="text-xs font-black tracking-[0.2em] mr-2">LET'S GO</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </div>

        {/* Detailed Form Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-center text-zinc-400 text-sm mb-8 tracking-wide">
            You can also send us your Details along with your Query and our team will get back to you
          </p>

          <div className="bg-white/[0.02] p-10 md:p-14 rounded-sm border border-white/5 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 rounded-sm pointer-events-none z-0"></div>

            <form 
              action="https://formspree.io/f/xdawogvo"
              method="POST"
              className="grid gap-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name *" 
                  required
                  className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email *" 
                  required
                  className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm" 
                />
              </div>
              
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone number *" 
                required
                className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm" 
              />
              
              <textarea 
                rows={5} 
                name="message"
                placeholder="Query or Message *" 
                required
                className="w-full bg-black/50 text-white placeholder-zinc-600 px-6 py-5 rounded-sm border border-white/10 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none transition-all duration-500 font-light text-sm resize-none" 
              />
              
              <button 
                type="submit"
                className="w-full mt-4 py-6 bg-gradient-to-r from-amber-700 to-amber-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:from-amber-600 hover:to-amber-400 transition-all duration-700 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:-translate-y-1"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-16 text-center tracking-tight">
            Frequently asked <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-xl hover:border-amber-600/30 transition-all duration-700 group"
              >
                <h3 className="text-white font-serif text-xl mb-3 group-hover:text-amber-400 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-20 flex flex-wrap justify-center gap-16 border-t border-white/5 pt-16">
          <div 
            onClick={handleEmailFooterClick}
            className="group text-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2 transition-colors duration-500 group-hover:text-amber-500">
              Email
            </p>
            <p className="text-zinc-300 font-light tracking-wide">
              rahulatlaw@gmail.com
            </p>
          </div>
          <div className="group text-center">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-2 transition-colors duration-500 group-hover:text-amber-500">
              Location
            </p>
            <p className="text-zinc-300 font-light tracking-wide">
              New Delhi, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How can I schedule a consultation with your law firm?",
    answer: "You can schedule a consultation by filling out the contact form on our website, calling our office directly, or emailing us with your preferred date and time. Our team will confirm the appointment and guide you on the next steps."
  },
  {
    question: "What documents should I bring for my first consultation?",
    answer: "Depending on your matter, you may bring relevant documents such as legal notices, court papers, agreements, identity proofs, or any communication related to the issue. If you're unsure, our team will inform you about the required documents when your appointment is scheduled."
  },
  {
    question: "What areas of law does your firm specialize in?",
    answer: "We handle a broad range of legal matters including matrimonial disputes, property and tenancy matters, criminal defense, corporate compliance, labour issues, POSH matters, contract drafting, and general civil litigation. You may contact us for clarity on whether we can assist with your specific case."
  },
  {
    question: "Do you offer online or virtual consultations?",
    answer: "Yes, we offer online consultations through phone, video call, or email communication for clients who cannot visit our office. Appointments can be booked the same way as in-person consultations."
  },
  {
    question: "Will my information remain confidential?",
    answer: "Yes. All client information shared with our firm—whether during consultation or case handling—is strictly confidential. We follow professional and ethical standards to safeguard your privacy at all times."
  },
  {
    question: "How long does it take for a lawyer to respond after I submit the contact form?",
    answer: "Our team typically responds within 24 working hours. If you need urgent assistance, you may also contact us directly on the listed phone number for quicker support."
  }
];