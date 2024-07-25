/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AbinashImage } from '@/utils';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);
const MoreAboutMe = () => {
  /** useGSAP hook to animate the heading and description */
  useGSAP(() => {
    gsap.to('#moreaboutme_heading-title', {
      scrollTrigger: {
        trigger: '#moreaboutme_heading-title',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.02,
      duration: 0.5,
      opacity: 1,
    });

    gsap.to('#moreaboutme_description--one', {
      scrollTrigger: {
        trigger: '#moreaboutme_description--one',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      duration: 0.7,
      opacity: 0.8,
      ease: 'power1.inOut',
    });

    gsap.to('#moreaboutme_description--two', {
      scrollTrigger: {
        trigger: '#moreaboutme_description--two',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      duration: 0.7,
      opacity: 0.9,
      ease: 'power1.inOut',
    });

    gsap.to('#about', {
      scrollTrigger: {
        trigger: '#about',
        start: '50% 50%',
        end: '100% 60%',
        scrub: true,
        markers: true,
      },
      duration: 4,
      transform: 'scale(0.97)',
    });
  }, []);

  return (
    <section className={`section-padding ${classes.container}`} id="about">
      <div className={classes.headingCnt}>
        <h2 id="moreaboutme_heading-title" aria-hidden="true">
          {handleSplitPhrase(
            'Alittle bit about me /',
            'moreaboutme_heading-title'
          )}
        </h2>
      </div>

      <div className={classes.detailsWrp}>
        <div className={classes.imgCnt}>
          <img src={AbinashImage.src} alt="my personal photo" />
        </div>

        <div className={classes.textCnt}>
          <div className={classes.desOne} id="moreaboutme_description--one">
            As a dedicated developer with a passion for design and development,
            I take projects from ideation to launch within our company, ensuring
            a seamless process that enhances our digital landscape and drives
            business success.
          </div>

          <div className={classes.desTwo}>
            <h4 id="moreaboutme_description--two">( ABOUT ME )</h4>
            <p id="moreaboutme_description--two">
              Hello! I&apos;m Abinash Shasini, a software engineer from India
              with a creative spark and an insatiable passion for learning and
              innovating. I specialize in crafting stunning, user-friendly, and
              professional websites and mobile apps. Think of me as the
              Michelangelo of coding—except my Sistine Chapel is your next
              project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
