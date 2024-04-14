import React from 'react';
import classes from './style.module.scss';

const AboutSection = () => {
  return (
    <div className={`section-padding ${classes.container}`}>
      <div className={classes.heading}>
        <h2>What i Do.</h2>
        <p>
          A skilled frontend web developer adept creating elegant modern
          designs. seamlessly integrating creativity with tech to deliver
          captivating user experience.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
