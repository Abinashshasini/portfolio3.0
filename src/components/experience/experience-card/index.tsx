import React, { FC } from 'react';
import classes from './stlye.module.scss';
import { TExperienceData } from '@/types';

type Tprops = {
  data: TExperienceData;
  index: number;
};

const ExperienceCard: FC<Tprops> = ({ data, index }) => {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <div>{index + 1}</div>
          <div>
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
    </div>
  );
};

export default ExperienceCard;
