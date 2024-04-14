import React from 'react';
import SkillCard from './skills-card';
import { skillsData } from '@/utils';
import { IData } from '@/types';
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
      <div style={{ marginTop: '3rem', width: '100%' }}>
        <div className={classes.skillsWrp}>
          {skillsData.map((element: IData, index: number) => (
            <SkillCard index={index} data={element} key={element.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
