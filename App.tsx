import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import InterruptCTA from './components/InterruptCTA';
import Guarantee from './components/Guarantee';

const App: React.FC = () => {
  // Global Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Small delay to ensure DOM is painted
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Marquee />
        <div id="services">
          <Services />
        </div>
        <ProblemSolution />
        <BeforeAfter />
        <Gallery />
        <InterruptCTA />
        <Partners />
        <div id="process">
          <Process />
        </div>
        <Testimonials />
        <Guarantee />
        <LeadForm />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;