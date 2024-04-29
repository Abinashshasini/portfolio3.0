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
          Hi there. I&apos;m Abinash Shasini. I&apos;m an India based software
          Engineer with a goal-driven creative mindset and passion for learning
          and innovating. I specialise in creating beautiful, usable and
          professional websites & mobile applications with best practice.
        </p>
      </div>
    </section>
  );
};

export default MoreAboutMe;
