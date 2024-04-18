import React from 'react';
import ExperienceCard from './experience-card';
import { experienceData, skillsIn } from '@/utils';
import { TExperienceData } from '@/types';
import classes from './style.module.scss';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className={classes.mtNegative}>
      <div aria-hidden="true" className={classes.mtPositive}></div>
      <div className={`section-padding ${classes.container}`}>
        <div className={classes.headingCnt}>
          <h2 aria-hidden="true">
            <span>Skills And</span>
            <span>Experience</span>
            <sup>
              <span>(</span>
              <span>2</span>
              <span>)</span>
            </sup>
          </h2>
        </div>
        {experienceData.map((element: TExperienceData, index: number) => (
          <ExperienceCard data={element} key={element.id} index={index} />
        ))}
        <div className={classes.skillsCnt}>
          <Image src={skillsIn} alt="balo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
