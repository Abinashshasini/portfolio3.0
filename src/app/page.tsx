'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Header from '@/components/header';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';

/** Lazyloading components */
const AboutSection = dynamic(
  () =>
    import('@/components/about-section' /* webpackChunkName: 'About-Section' */)
);
const ProjectsSection = dynamic(
  () =>
    import('@/components/projects' /* webpackChunkName: 'Project-Section' */)
);
const ExperienceSection = dynamic(
  () =>
    import(
      '@/components/experience' /* webpackChunkName: 'Experience-Section' */
    )
);
const MoreAboutMeSection = dynamic(
  () =>
    import(
      '@/components/more-about-me' /* webpackChunkName: 'MoreABoutMe-Section' */
    )
);
const ReviewsSection = dynamic(
  () => import('@/components/reviews' /* webpackChunkName: 'Reviews-Section' */)
);
const FooterSection = dynamic(
  () => import('@/components/footer' /* webpackChunkName: 'Footer-Section' */)
);

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
      <ProjectsSection />
      <MoreAboutMeSection />
      <ExperienceSection />
      <ReviewsSection />
      <FooterSection />
    </main>
  );
}
