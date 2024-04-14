import React, { FC } from 'react';
import Image from 'next/image';
import { IData } from '@/types';
import classes from './style.module.scss';
import { bulletPoint } from '@/utils';

type IProps = {
  index: number;
  data: IData;
};

const SkillCard: FC<IProps> = ({ index, data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.headingCnt}>
        <Image src={bulletPoint} alt="bullet point" width={20} height={20} />
        <h3>{data.title}</h3>
      </div>
      <div>
        <p>{data.description}</p>
        <div>
          {data.technology.map((element: string, index: number) => (
            <p key={element + index}>{element}</p>
          ))}
        </div>
      </div>
      <span>0{index + 1}.</span>
    </div>
  );
};

export default SkillCard;
