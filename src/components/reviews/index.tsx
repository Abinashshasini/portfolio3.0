import React from 'react';
import ReviewsCard from './reviews-card';
import { reviewsData } from '@/utils';
import { TReviewsData } from '@/types';
import classes from './style.module.scss';

const Reviews = () => {
  return (
    <div className={classes.container}>
      <div className={classes.reviewsHeading}>
        <p>(Reviews)</p>
        <p>
          Here&apos;s what my peers have to say about our collaborative
          experience together /
        </p>
      </div>

      {reviewsData.map((element: TReviewsData) => (
        <ReviewsCard data={element} key={element.id} />
      ))}
    </div>
  );
};

export default Reviews;
