import React, { FC } from 'react';
import { TReviewsData } from '@/types/index';
import classes from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type Tprops = {
  data: TReviewsData;
};

const ReviewsCard: FC<Tprops> = ({ data }) => {
  return (
    <div className={classes.container}>
      <blockquote>
        {'"'}
        {data.review}
        {'"'}
      </blockquote>
      <div className={classes.reviewerDetailsCnt}>
        <div className={classes.imageCnt}>
          <Image alt="profile_image" src={data.photo} width={80} height={80} />
        </div>
        <Link href={data.href}>
          <div className={classes.reviewerDtls}>
            <h4>{data.name}</h4>
            <p>{data.designation}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReviewsCard;
