'use client';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import { HeroSVG } from '@/utils';
import { slideUpContainer, opacity } from './animation';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleTextOne = "HI! I'M ABINASH";
  const titleTextTwo = 'WEB DEVELOPER';
  /**
   * GSAP hook to scale the circle on landing.
   * decrease the opacity of the text's on scroll.
   * Animate the title letter one by one.
   */
  useGSAP(() => {
    gsap.fromTo(
      '#hero_circle',
      { scale: 0.3 },
      { scale: 1, delay: 3, duration: 1, ease: 'power1.inOut' }
    );

    gsap.to('#hero_text_cnt', {
      scrollTrigger: {
        trigger: '#hero_text_cnt',
        start: '60% 95%',
        end: '60% center',
        scrub: true,
      },
      duration: 4,
      opacity: 0,
    });

    gsap.to('#hero_title_letters', {
      y: 0,
      stagger: 0.03,
      delay: 2.9,
      duration: 0.1,
    });
  }, []);

  return (
    <>
      <motion.section
        animate="enter"
        initial="initial"
        variants={slideUpContainer}
        className={classes.container}
        id="hero_text_cnt"
      >
        <div className={classes.textWrp}>
          <h2 className="league-gothic">
            {titleTextOne.split('').map((letter, index) => (
              <span key={index + letter} id="hero_title_letters">
                {letter}
              </span>
            ))}
          </h2>
          <motion.p variants={opacity} animate="enter" initial="initial">
            I have been working in the industry since 2021, creating digital
            products that are both functional and enjoyable for end users.
          </motion.p>
        </div>
        <div className={classes.textWrp}>
          <h2 className="league-gothic">
            {titleTextTwo.split('').map((letter, index) => (
              <span key={index + letter} id="hero_title_letters">
                {letter}
              </span>
            ))}
          </h2>
          <motion.p variants={opacity} animate="enter" initial="initial">
            I’m currently working as a <b>Frontend Developer</b>, sculpting
            immersive digital experiences that seamlessly blend functionality
            and user appeal.
          </motion.p>
        </div>
      </motion.section>
      <div className={classes.heroCircleImage}>
        <Image
          src={HeroSVG}
          alt="Hero circle image"
          width={100}
          height={100}
          id="hero_circle"
        />
      </div>
    </>
  );
};

export default HeroSection;
