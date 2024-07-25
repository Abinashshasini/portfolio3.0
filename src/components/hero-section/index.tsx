'use client';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import { slideUpContainer, opacity } from './animation';
import { ArrowIcon, HeroSVG } from '@/utils';
import Magnetic from '@/commons/magnetic';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  /**
   * GSAP hook to scale the circle on landing.
   * decrease the opacity of the text's on scroll.
   * Animate the title letter one by one.
   */
  useGSAP(() => {
    gsap.to('#hero_text_cnt', {
      scrollTrigger: {
        trigger: '#hero_text_cnt',
        start: '40% 95%',
        end: '60% 30%',
        scrub: true,
      },
      duration: 4,
      opacity: 0,
      transform: 'translateY(80px) scale(0.9) translateZ(0px)',
    });

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
      >
        <section className={classes.warrper} id="hero_text_cnt">
          <div className={classes.textWrp}>
            <h2 className="league-gothic">
              {handleSplitPhrase("HI! I'M ABINASH", 'hero_heading-text')}
            </h2>
            <motion.p variants={opacity} animate="enter" initial="initial">
              I have been working in the industry since 2021, creating digital
              products that are both functional and enjoyable for end users.
            </motion.p>
          </div>
          <div className={classes.textWrp}>
            <h2 className="league-gothic">
              {handleSplitPhrase('WEB DEVELOPER', 'hero_heading-text')}
            </h2>
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
        </section>
      </motion.section>
      <div className={classes.heroCircleImage}>
        <Image src={HeroSVG} alt="Hero circle image" width={100} height={100} />
      </div>
    </>
  );
};

export default HeroSection;
