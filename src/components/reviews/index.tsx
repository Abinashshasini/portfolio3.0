import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import ReviewsCard from './reviews-card';
import { reviewsData } from '@/utils';
import { TReviewsData } from '@/types';
import { slideUpDefaultAnimation } from '@/commons/animation';
import classes from './style.module.scss';

const Reviews = () => {
  /** Reviews description */
  const description =
    "Here's what my peers have to say about our collaborative experience together /";

  /** Required refs and hooks */
  const descriptionRef = useRef(null);
  const isInView = useInView(descriptionRef);

  return (
    <section className={classes.container}>
      <div className={classes.reviewsHeading}>
        <p>(Reviews)</p>
        <p ref={descriptionRef}>
          {description.split(' ').map((letter, index) => {
            return (
              <span key={index} className={classes.letterMask}>
                <motion.span
                  variants={slideUpDefaultAnimation}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {letter}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>

      {reviewsData.map((element: TReviewsData) => (
        <ReviewsCard data={element} key={element.id} />
      ))}
    </section>
  );
};

export default Reviews;
