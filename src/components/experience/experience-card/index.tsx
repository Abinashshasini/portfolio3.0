import React, { FC } from 'react';
import { TExperienceData } from '@/types';
import classes from './stlye.module.scss';

type Tprops = {
  data: TExperienceData;
  index: number;
};

const ExperienceCard: FC<Tprops> = ({ data, index }) => {
  return (
    <div className={classes.container}>
      <div className={classes.cnamePositionCnt}>
        <div className={classes.cnameAndPosWrp}>
          <h4>{data.company}</h4>
          <p>{data.position}</p>
        </div>
      </div>
      <ul>
        {data.description.map((desc: string) => (
          <li key={data.id}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
