'use client';

export default function Careers() {
  const handleApplyClick = (position: string) => {
    window.location.href = `mailto:rahulatlaw@gmail.com?subject=Application%20for%20${encodeURIComponent(position)}&body=Hello%20Team%20LEGAL32,%0A%0AI%20am%20writing%20to%20apply%20for%20the%20${encodeURIComponent(position)}%20role.%20Please%20find%20my%20resume%20and%20details%20attached.%0A%0ARegards,`;
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
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 tracking-tight drop-shadow-lg">
            Join our <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">team</span>
          </h1>
          
          <p className="text-lg text-zinc-400 leading-loose font-light max-w-2xl mx-auto">
            We are always looking for passionate, driven, and brilliant legal minds to join our mission of protecting justice. Explore our current openings below.
          </p>
        </div>

        {/* Job Openings Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <h2 className="text-amber-500 text-sm font-black tracking-[0.2em] uppercase">Current Openings</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <div 
                key={index}
                className="bg-white/[0.02] p-8 rounded-sm border border-white/5 backdrop-blur-xl group hover:border-amber-600/30 transition-all duration-700 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-amber-500 text-xs font-black tracking-[0.2em] uppercase">{job.type}</div>
                  <div className="text-zinc-500 text-xs font-medium tracking-wider">{job.location}</div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                  {job.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-zinc-400 text-sm flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full py-4 bg-transparent border border-amber-600/50 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-amber-600 hover:text-white transition-all duration-500"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application Footer */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/5 pt-16">
          <h3 className="font-serif text-2xl text-white mb-4">Don't see a perfect fit?</h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            We are always open to meeting talented professionals. Send your resume and a cover letter to our email and we'll keep you in mind for future opportunities.
          </p>
          <div 
            onClick={() => handleApplyClick("General Inquiry")}
            className="inline-block cursor-pointer group"
          >
            <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-2 transition-colors duration-500 group-hover:text-amber-400">
              Submit Resume
            </p>
            <p className="text-zinc-300 font-light tracking-wide group-hover:text-white transition-colors">
              rahulatlaw@gmail.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sample Data for Jobs & Internships
const openings = [
  {
    title: "Junior Associate",
    type: "Full-Time",
    location: "New Delhi, India",
    description: "We are seeking a dedicated Junior Associate to join our litigation team. You will be responsible for legal research, drafting petitions, and assisting senior counsels in court proceedings.",
    requirements: [
      "Degree in Law (LLB or BA LLB) from a recognized university",
      "Registered with the Bar Council",
      "1-3 years of experience in civil and criminal litigation",
      "Strong drafting and legal research skills"
    ]
  },
  {
    title: "Legal Intern",
    type: "Internship",
    location: "New Delhi, India / Remote",
    description: "An excellent opportunity for law students to gain hands-on experience in the legal field. Interns will assist with case preparations, research, and observe court hearings.",
    requirements: [
      "Currently enrolled in 3rd year or above of a 5-year law program (or 2nd year of a 3-year program)",
      "Excellent communication and writing skills",
      "Keen interest in constitutional and corporate law",
      "Available for a minimum duration of 4 weeks"
    ]
  }
];