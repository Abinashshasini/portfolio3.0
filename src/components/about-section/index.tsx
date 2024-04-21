import React from 'react';
import SkillCard from './skills-card';
import { skillsData } from '@/utils';
import { TAboutData } from '@/types';
import AnimatedText from '@/commons/animated-text';
import classes from './style.module.scss';

const AboutSection = () => {
  return (
    <div className={`section-padding ${classes.container}`}>
      <div className={classes.heading}>
        <AnimatedText
          id="#heading"
          gsapProps={{
            y: 0,
            stagger: 0.03,
            delay: 2.9,
            duration: 0.1,
          }}
        >
          <h2 id="heading">What i Do.</h2>
        </AnimatedText>
        <p>
          A skilled frontend web developer adept creating elegant modern
          designs. seamlessly integrating creativity with tech to deliver
          captivating user experience.
        </p>
      </div>
      <div className={classes.skillsWrp}>
        {skillsData.map((element: TAboutData, index: number) => (
          <SkillCard index={index} data={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
