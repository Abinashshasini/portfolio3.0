/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AbinashImage, ArrowDownIcon } from '@/utils';
import { handleSplitPhrase, handleSplitWords } from '@/utils/split';
import classes from './style.module.scss';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
interface Conditions {
  [key: string]: boolean;
}

const MoreAboutMe = () => {
  /** useGSAP hook to animate the heading and description */
  useGSAP(() => {
    let animation = gsap.matchMedia();

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
      stagger: 0.011,
      opacity: 1,
      ease: 'power3.inOut',
      scrub: true,
    });

    gsap.fromTo(
      '#moreaboutme_description--two',
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#moreaboutme_description--two',
          start: 'top 95%',
          end: 'bottom 50%',
        },
        y: 0,
        duration: 1,
        opacity: 1,
        ease: 'power3.inOut',
      }
    );

    /**add a media query. When it matches, the associated function will run */
    animation.add(
      {
        isMobile: '(max-width: 720px)',
        isDesktop: '(min-width: 721px)',
      },
      (context) => {
        let { isMobile } = context.conditions as Conditions;
        gsap.to('#about_container', {
          scrollTrigger: {
            trigger: '#about_container',
            start: isMobile ? '60% 35%' : '70% 60%',
            end: isMobile ? '100% 60%' : '100% 20%',
            scrub: true,
          },
          duration: 4,
          transform: isMobile ? 'scale(0.98)' : 'scale(0.98)',
        });
      }
    );
  }, []);

  return (
    <section
      className={`section-padding ${classes.container}`}
      id="about_container"
    >
      <div className={classes.headingCnt}>
        <Image
          src={ArrowDownIcon.src}
          alt="my personal photo"
          width={50}
          height={50}
          priority
        />
        <h2 id="moreaboutme_heading-title" aria-hidden="true">
          {handleSplitPhrase(
            'Alittle bit about me /',
            'moreaboutme_heading-title'
          )}
        </h2>
      </div>

      <div className={classes.detailsWrp}>
        <div className={classes.imgCnt}>
          <Image
            src={AbinashImage.src}
            alt="my personal photo"
            fill={true}
            priority
          />
        </div>

        <div className={classes.textCnt}>
          <h3 className={classes.desOne}>
            {handleSplitWords(
              'As a dedicated developer with a passion for design and development, I take projects from ideation to launch within our company, ensuring a seamless process that enhances our digital landscape and drives business success.',
              'moreaboutme_description--one'
            )}
          </h3>

          <div className={classes.desTwo} id="moreaboutme_description--two">
            <h4>(&nbsp;&nbsp;ABOUT ME&nbsp;&nbsp;)</h4>
            <p>
              Results-driven software engineer with a proven track record of
              crafting complex, high-quality solutions for web and mobile apps.
              I excel at solving intricate coding challenges and driving
              innovation to boost project success and business growth.
              <br /> <br /> I excel in transforming technical requirements into
              user-friendly and scalable products, ensuring alignment with
              strategic goals and enhancing overall operational efficiency.
              Think of me as the Michelangelo of coding — except my Sistine
              Chapel is your next project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
