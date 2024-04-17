import React from 'react';
import classes from './style.module.scss';
import ExperienceCard from './experience-card';
import { experienceData } from '@/utils';
import { TExperienceData } from '@/types';

const Experience = () => {
  return (
    <div className={classes.mtNegative}>
      <div aria-hidden="true" className={classes.mtPositive}></div>
      <div className={`section-padding ${classes.container}`}>
        <div className={classes.headingCnt}>
          <h2 aria-hidden="true">
            <span>Roles And</span>
            <span>Experience</span>
            <sup>
              <span>(</span>
              <span>3</span>
              <span>)</span>
            </sup>
          </h2>
        </div>
        {experienceData.map((element: TExperienceData, index: number) => (
          <ExperienceCard data={element} key={element.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
