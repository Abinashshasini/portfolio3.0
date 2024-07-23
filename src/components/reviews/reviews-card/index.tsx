import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { TReviewsData } from '@/types/index';
import classes from './style.module.scss';

type Tprops = {
  data: TReviewsData;
};

export const slideUp = {
  initial: {
    y: 100,
  },
  enter: {
    y: 0,
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 3 },
  },
};

const ReviewsCard: FC<Tprops> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className={classes.container}
      ref={ref}
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(60px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 1s ease-in',
      }}
    >
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
