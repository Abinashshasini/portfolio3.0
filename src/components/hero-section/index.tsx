'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroSVG } from '@/utils';
import { slideUpFirst, slideUpSecond } from './animation';
import classes from './hero-section.module.scss';

const HeroSection = () => {
  return (
    <>
      <section className={classes.container}>
        <motion.div
          variants={slideUpFirst}
          initial="initial"
          animate="enter"
          className={classes.textWrp}
          data-scroll
          data-scroll-speed={-0.3}
        >
          <h2 className="league-gothic">HI! I&apos;M ABINASH</h2>
          <p>
            I have been working in the industry since 2021, creating digital
            products that are both functional and enjoyable for end users.
          </p>
        </motion.div>
        <motion.div
          variants={slideUpSecond}
          initial="initial"
          animate="enter"
          className={classes.textWrp}
        >
          <h2 className="league-gothic">WEB DEVELOPER</h2>
          <p>
            I’m currently working as a <b>Frontend Developer</b>, sculpting
            immersive digital experiences that seamlessly blend functionality
            and user appeal.
          </p>
        </motion.div>
      </section>
      <div className={classes.heroCircleImage}>
        <Image src={HeroSVG} alt="Hero circle image" width={100} height={100} />
      </div>
    </>
  );
};

export default HeroSection;
