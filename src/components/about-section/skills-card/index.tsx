import React, { FC } from 'react';
import Image from 'next/image';
import { IData } from '@/types';
import classes from './style.module.scss';

type IProps = {
  index: number;
  data: IData;
};

const SkillCard: FC<IProps> = ({ index, data }) => {
  return (
    <div className={classes.container} data-index={index + 1}>
      <div className={classes.headingCnt}>
        <Image src={data.icon} alt="bullet point" width={20} height={20} />
        <h3>{data.title}</h3>
      </div>
      <div className={classes.descAndSkillsCnt}>
        <p>{data.description}</p>
        <div className={classes.skillSets}>
          {data.technology.map((element: string, index: number) => (
            <p key={element + index}>{element}</p>
          ))}
        </div>
      </div>
      <span className={classes.indexElement}>0{index + 1}.</span>
    </div>
  );
};

export default SkillCard;
