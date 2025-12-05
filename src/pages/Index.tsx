import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Counters from '@/components/Counters';
import Process from '@/components/Process';
import WhoWeAre from '@/components/WhoWeAre';
import WhyPartner from '@/components/WhyPartner';
import MarqueeStrip from '@/components/MarqueeStrip';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import PopularSearches from '@/components/PopularSearches';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Counters />
        <Process />
        <WhoWeAre />
        <WhyPartner />
        <MarqueeStrip />
        <FAQ />
        <Contact />
        <PopularSearches />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
