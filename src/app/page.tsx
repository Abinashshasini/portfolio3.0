'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Reviews from '@/components/reviews';
import MoreAboutMe from '@/components/more-about-me';

export default function Home() {
  /** State to show loading state when user comes to the page or refreshes */
  const [isLoading, setIsLoading] = useState(true);

  /** Effect to initialise the locomotive scroll and remove the preloader after 3s */
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis();

      /** Functiont to initiate smooth scroll */
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2600);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <HeroSection />
      <AboutSection />
      <Projects />
      <MoreAboutMe />
      <Experience />
      <Reviews />
      <div style={{ height: '100vh', background: 'yellow' }}></div>
    </main>
  );
}
