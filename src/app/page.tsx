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
    import(
      '@/components/about-section' /* webpackChunkName: 'About-Section' */
    ),
  { ssr: false, loading: () => <div>Loading...</div> } // Disable SSR and add a loading fallback
);
const ProjectsSection = dynamic(
  () =>
    import('@/components/projects' /* webpackChunkName: 'Project-Section' */),
  { ssr: false, loading: () => <div>Loading...</div> }
);
const ExperienceSection = dynamic(
  () =>
    import(
      '@/components/experience' /* webpackChunkName: 'Experience-Section' */
    ),
  { ssr: false, loading: () => <div>Loading...</div> }
);
const MoreAboutMeSection = dynamic(
  () =>
    import(
      '@/components/more-about-me' /* webpackChunkName: 'MoreABoutMe-Section' */
    ),
  { ssr: false, loading: () => <div>Loading...</div> }
);
const ReviewsSection = dynamic(
  () =>
    import('@/components/reviews' /* webpackChunkName: 'Reviews-Section' */),
  { ssr: false, loading: () => <div>Loading...</div> }
);
const FooterSection = dynamic(
  () => import('@/components/footer' /* webpackChunkName: 'Footer-Section' */),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default function Home() {
  /** State to show loading state when user comes to the page or refreshes */
  const [isLoading, setIsLoading] = useState(false);

  /** Effect to initialize Lenis scroll and remove the preloader after a set time */
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis();

      /** Function to initiate smooth scroll */
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();

    setTimeout(
      () => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      },
      window.innerWidth <= 720 ? 3300 : 2700
    );
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <HeroSection isLoading={isLoading} /> */}
      {!isLoading && (
        <>
          {/* <AboutSection />
          <ProjectsSection />
          <MoreAboutMeSection />
          <ExperienceSection /> */}
          <ReviewsSection />
          <FooterSection />
        </>
      )}
    </main>
  );
}
