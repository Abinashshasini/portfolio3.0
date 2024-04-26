import React from 'react';
import ExperienceCard from './experience-card';
import Image from 'next/image';
import { experienceData, skillsIn } from '@/utils';
import { TExperienceData } from '@/types';
import classes from './style.module.scss';

const Experience = () => {
  return (
    <div className={classes.mtNegative}>
      <div aria-hidden="true" className={classes.mtPositive}></div>
      <div className={`section-padding ${classes.container}`}>
        <div className={classes.headingCnt}>
          <h2 aria-hidden="true">
            <span>Professional Experience And Reviews /</span>
          </h2>
        </div>

        <div className={classes.skillsCnt}>
          <Image src={skillsIn} alt="balo" width={100} height={100} />
        </div>

        <div className={classes.experienceCnt}>
          {experienceData.map((element: TExperienceData, index: number) => (
            <ExperienceCard data={element} key={element.id} index={index} />
          ))}
        </div>
        <div className={classes.separator}>
          <span />
        </div>

        <div className={classes.reviewsHeading}>
          <p>(Reviews)</p>
          <p>
            Here&apos;s what my peers have to say about our collaborative
            experience together /
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
