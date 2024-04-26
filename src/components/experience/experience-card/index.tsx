import React, { FC } from 'react';
import { FaSquareArrowUpRight, FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import { TExperienceData } from '@/types';
import classes from './stlye.module.scss';

type Tprops = {
  data: TExperienceData;
};

const ExperienceCard: FC<Tprops> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.detailsWrp}>
        <div className={classes.detailsCnt}>
          <FaLocationDot />
          <p>{data.location}</p>
        </div>
        <div className={classes.detailsCnt}>
          <FaSquareArrowUpRight />
          <Link href={data.href}>
            <p>{data.company}</p>
          </Link>
        </div>
      </div>
      <div className={classes.cnamePositionCnt}>
        <h4>{data.position}</h4>
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default ExperienceCard;
