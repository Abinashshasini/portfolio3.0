'use client';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowIcon, HeroSVG } from '@/utils';
import Magnetic from '@/commons/magnetic';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface Conditions {
  [key: string]: boolean;
}

const HeroSection = () => {
  /**
   * GSAP hook to scale the circle on landing.
   * decrease the opacity of the text's on scroll.
   * Animate the title letter one by one.
   */
  useGSAP(() => {
    let animation = gsap.matchMedia();

    /**add a media query. When it matches, the associated function will run */
    animation.add(
      {
        isMobile: '(max-width: 720px)',
        isDesktop: '(min-width: 721px)',
      },
      (context) => {
        let { isMobile } = context.conditions as Conditions;
        gsap.to('#hero_text_cnt', {
          scrollTrigger: {
            trigger: '#hero_text_cnt',
            start: isMobile ? '100% 95%' : '100% 90%',
            end: isMobile ? '60% 30%' : '100% 30%',
            scrub: true,
          },
          opacity: 0,
          transform: 'translateY(80px) scale(0.9) translateZ(0px)',
        });
      }
    );

    gsap.fromTo(
      '#hero_arrow_icn',
      { opacity: 0, scale: 0.3, y: 30 },
      {
        y: 0,
        scale: 1,
        delay: 4,
        duration: 0.8,
        opacity: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.to('#hero_heading-text', {
      y: 0,
      stagger: 0.02,
      delay: 2.5,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className={classes.heroContainer}>
      <div className={classes.container}>
        <section className={classes.warrper} id="hero_text_cnt">
          <div className={classes.textWrp}>
            <h2 className="league-gothic">
              {handleSplitPhrase("HI! I'M ABINASH", 'hero_heading-text')}
            </h2>
            <p>
              I have been working in the industry since 2021, creating digital
              products that are both functional and enjoyable for end users.
            </p>
          </div>
          <div className={classes.textWrp}>
            <h2 className="league-gothic">
              {handleSplitPhrase('WEB DEVELOPER', 'hero_heading-text')}
            </h2>
            <p>
              I’m currently working as a Frontend Developer, sculpting immersive
              digital experiences that seamlessly blend functionality and user
              appeal.
            </p>
          </div>
          <div className={classes.arrowIconSection} id="hero_arrow_icn">
            <Magnetic>
              <div className={classes.arrowIconContainer}>
                <Image
                  src={ArrowIcon}
                  alt="Arrow icon"
                  width={80}
                  height={20}
                  id="hero_arrow_img"
                />
              </div>
            </Magnetic>
            <p>Scroll Down</p>
          </div>
        </section>
      </div>
      <div className={classes.heroCircleImage}>
        <Image src={HeroSVG} alt="Hero circle image" width={100} height={100} />
      </div>
      <div style={{ height: '100svh' }}></div>
    </section>
  );
};

export default HeroSection;
