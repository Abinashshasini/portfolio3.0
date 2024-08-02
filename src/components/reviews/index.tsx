import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { handleSplitWords } from '@/utils/split';
import ReviewsCard from './reviews-card';
import { reviewsData } from '@/utils';
import { TReviewsData } from '@/types';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  /** Reviews description */
  useGSAP(() => {
    gsap.to('#reviews--heading', {
      scrollTrigger: {
        trigger: '#reviews--heading',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.011,
      opacity: 1,
      ease: 'power3.inOut',
      scrub: true,
    });
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.reviewsHeading}>
        <p>(&nbsp;Reviews&nbsp;)</p>
        <p>
          {handleSplitWords(
            "Here's what my peers have to say about our collaborative experience together /",
            'reviews--heading'
          )}
        </p>
      </div>

      {reviewsData.map((element: TReviewsData) => (
        <ReviewsCard data={element} key={element.id} />
      ))}
    </section>
  );
};

export default Reviews;
