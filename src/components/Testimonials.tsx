// src/components/Testimonials.tsx
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    {
      name: "Upender Kumar",
      role: "Proprietor at Radiancy Electronics",
      text: "The team is excellent in figuring out solutions to every complex problems related to my business. They ensures to safeguard my firm from every corner with proper documentations and deeds.",
      avatar: "/upender.png" // Placeholder - place images in /public
    },
    {
      name: "Mohit Pal",
      role: "Director at Ridepal Tour & Travels Private Limited",
      text: "The team at Legal 32 and Advocate Rahul K. Yadav are magicians in Business laws. They have helped me in incorporating my Company and getting all the mandatory registrations for it. Also, Mr. Rahul is no less in strategising a business, you may take a benefit of that.",
      avatar: "/mohit.png" // Placeholder
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Rating Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} fill="#FBBF24" className="text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Excellent 4.9 of 5 stars rating
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Based on 50+ real users reviews
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-10 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col h-full"
            >
              <Quote className="text-indigo-600 mb-6" size={32} />
              
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {review.text}
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden shrink-0">
                  {/* Avatar Placeholder */}
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 leading-none mb-1">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}