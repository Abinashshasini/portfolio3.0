'use client';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import { slideUpContainer, opacity } from './animation';
import AnimatedText from '@/commons/animated-text';
import { ArrowIcon, HeroSVG } from '@/utils';
import classes from './style.module.scss';
import Magnetic from '@/commons/magnetic';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
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

    gsap.fromTo(
      '#hero_arrow_icn',
      { opacity: 0, scale: 0.3, y: 30 },
      {
        y: 0,
        scale: 1,
        delay: 4.5,
        duration: 0.8,
        opacity: 1,
        ease: 'power1.inOut',
      }
    );
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
        <div className={classes.warrper}>
          <div className={classes.textWrp}>
            <AnimatedText
              id="#title1"
              gsapProps={{
                y: 0,
                stagger: 0.03,
                delay: 2.9,
                duration: 0.1,
              }}
            >
              <h2 className="league-gothic" id="title1">
                HI! I&apos;M ABINASH
              </h2>
            </AnimatedText>
            <motion.p variants={opacity} animate="enter" initial="initial">
              I have been working in the industry since 2021, creating digital
              products that are both functional and enjoyable for end users.
            </motion.p>
          </div>
          <div className={classes.textWrp}>
            <AnimatedText
              id="#title2"
              gsapProps={{
                y: 0,
                stagger: 0.03,
                delay: 2.9,
                duration: 0.1,
              }}
            >
              <h2 className="league-gothic" id="title2">
                WEB DEVELOPER
              </h2>
            </AnimatedText>
            <motion.p variants={opacity} animate="enter" initial="initial">
              I’m currently working as a Frontend Developer, sculpting immersive
              digital experiences that seamlessly blend functionality and user
              appeal.
            </motion.p>
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
        </div>
      </motion.section>
      <div className={classes.heroCircleImage}>
        <Image src={HeroSVG} alt="Hero circle image" width={100} height={100} />
      </div>
    </>
  );
};

export default HeroSection;
