'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  /** State to show loading state when user comes to the page or refreshes */
  const [isLoading, setIsLoading] = useState(true);

  /** Effect to initialise the locomotive scroll and remove the preloader after 3s */
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2600);
  }, []);

  return (
    <SmoothScroll>
      <main>
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Header />
        <HeroSection />
        <AboutSection />
        <Projects /> */}
        <Experience />
        <div style={{ height: '100vh', background: 'yellow' }}></div>
      </main>
    </SmoothScroll>
  );
}
