/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AbinashImage } from '@/utils';
import classes from './style.module.scss';

const MoreAboutMe = () => {
  return (
    <section className={`section-padding ${classes.container}`}>
      <div className={classes.headingCnt}>
        <h2 aria-hidden="true">
          <span>Alittle bit about me /</span>
        </h2>
      </div>

      <div className={classes.imgCnt}>
        <img src={AbinashImage.src} alt="my personal photo" />
      </div>

      <div className={classes.textCnt}>
        <p>
          Hello! I&apos;m Abinash Shasini, a software engineer from India with a
          creative spark and an insatiable passion for learning and innovating.
          I specialize in crafting stunning, user-friendly, and professional
          websites and mobile apps. Think of me as the Michelangelo of
          coding—except my Sistine Chapel is your next project!
        </p>
      </div>
    </section>
  );
};

export default MoreAboutMe;
