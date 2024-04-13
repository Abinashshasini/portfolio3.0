import React from 'react';
import classes from './hero-section.module.scss';

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textWrp}>
        <h2 className="league-gothic">HI! I&apos;M ABINASH</h2>
        <p>
          I have been working in the industry since 2021, creating digital
          products that are both functional and enjoyable for end users.
        </p>
      </div>
      <div className={classes.textWrp}>
        <h2 className="league-gothic">WEB DEVELOPER</h2>
        <p>
          I’m currently working as a <b>Frontend Developer</b>, sculpting
          immersive digital experiences that seamlessly blend functionality and
          user appeal.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
