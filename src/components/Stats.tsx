export default function Stats() {
  const stats = [
    {
      number: "7+",
      title: "YEARS OF RICH",
      subTitle: "EXPERIENCE",
    },
    {
      number: "50+",
      title: "ACTIVE BUSINESS",
      subTitle: "CLIENTAGE",
    },
    {
      number: "20+",
      title: "AREAS OF PRACTICE",
      subTitle: "THROUGHOUT INDIA",
    },
    {
      number: "60+",
      title: "TEAM OF CA, CS &",
      subTitle: "LAWYERS",
    },
  ];

  return (
    <section className="bg-[#1a1c1e] py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:max-w-5xl mx-auto">
            We are focused on legal awareness, analytical understanding, and informed perspectives across legal complexities
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
            Committed to enhancing legal awareness by exploring rights, remedies, and legal processes through constitutional and statutory perspectives.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-4 ${
                index !== stats.length - 1 ? 'md:border-r md:border-gray-700' : ''
              }`}
            >
              <div className="mb-4 text-5xl font-bold text-white md:text-6xl">
                {stat.number}
              </div>
              <div className="flex flex-col text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                <span>{stat.title}</span>
                <span>{stat.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}