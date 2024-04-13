'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';

export default function Home() {
  /** State to show loading state when user comes to the page or refreshes */
  const [isLoading, setIsLoading] = useState(true);

  /** Effect to initialise the locomotive scroll and remove the preloader after 3s */
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

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
      <div style={{ height: '100vh' }}></div>
    </main>
  );
}
