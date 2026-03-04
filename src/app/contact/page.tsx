export default function Contact() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
        <div>
          <h1 className="font-serif text-5xl font-bold text-legal-navy mb-6">Let's Talk Justice.</h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Every legal battle begins with a single conversation. Reach out today for a strictly confidential initial assessment of your case.
          </p>
          <div className="space-y-6">
            <div><p className="font-bold text-legal-navy">Email</p><p className="text-slate-500">consult@legal32.com</p></div>
            <div><p className="font-bold text-legal-navy">Location</p><p className="text-slate-500">New Delhi, Constitutional Row</p></div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
           <form className="grid gap-6">
             <input type="text" placeholder="Full Name" className="p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-legal-blue" />
             <input type="email" placeholder="Email Address" className="p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-legal-blue" />
             <textarea rows={5} placeholder="Describe your case briefly..." className="p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-legal-blue" />
             <button className="w-full py-4 bg-legal-navy text-white font-bold rounded-xl hover:bg-legal-blue transition">Submit Request</button>
           </form>
        </div>
      </div>
    </div>
  );
}