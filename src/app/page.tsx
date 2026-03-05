// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview'; // New
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <PracticeAreas />
        <Stats />
        <Team />
        <Testimonials />
        <BlogPreview />
        {/* <Footer />  */}
        {/* Sanity-driven Blog Section */}
      </main>
      
     
    </>
  );
}