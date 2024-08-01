import React, { FC, memo } from 'react';
import Image from 'next/image';
import { TAboutData } from '@/types';
import classes from './style.module.scss';

type IProps = {
  index: number;
  data: TAboutData;
};

const SkillCard: FC<IProps> = ({ index, data }) => {
  /** Memoize the index string to avoid re-calculating it on each render */
  const indexString = `0${index + 1}.`;

  return (
    <div className={classes.container} data-index={index + 1}>
      <div className={classes.headingCnt}>
        <Image src={data.icon} alt="bullet point" width={20} height={20} />
        <h3>{data.title}</h3>
      </div>
      <div className={classes.descAndSkillsCnt}>
        <p>{data.description}</p>
        <div className={classes.skillSets}>
          {data.technology.map((element, i) => (
            <p key={`${element}-${i}`}>{element}</p>
          ))}
        </div>
        <span className={classes.indexElement}>{indexString}</span>
      </div>
    </div>
  );
};

export default memo(SkillCard);
