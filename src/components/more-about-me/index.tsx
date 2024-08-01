// /* eslint-disable @next/next/no-img-element */
// import React from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { AbinashImage } from '@/utils';
// import { handleSplitPhrase } from '@/utils/split';
// import classes from './style.module.scss';

// gsap.registerPlugin(ScrollTrigger);
// interface Conditions {
//   [key: string]: boolean;
// }

// const MoreAboutMe = () => {
//   /** useGSAP hook to animate the heading and description */
//   useGSAP(() => {
//     let animation = gsap.matchMedia();

//     gsap.to('#moreaboutme_heading-title', {
//       scrollTrigger: {
//         trigger: '#moreaboutme_heading-title',
//         start: 'top 90%',
//         end: 'bottom 80%',
//       },
//       y: 0,
//       stagger: 0.02,
//       duration: 0.5,
//       opacity: 1,
//     });

//     gsap.to('#moreaboutme_description--one', {
//       scrollTrigger: {
//         trigger: '#moreaboutme_description--one',
//         start: 'top 90%',
//         end: 'bottom 80%',
//       },
//       y: 0,
//       stagger: 0.004,
//       opacity: 1,
//       ease: 'power1.inOut',
//     });

//     gsap.fromTo(
//       '#moreaboutme_description--two',
//       {
//         y: 50,
//         opacity: 0,
//       },
//       {
//         scrollTrigger: {
//           trigger: '#moreaboutme_description--two',
//           start: 'top 90%',
//           end: 'bottom 80%',
//         },
//         y: 0,
//         duration: 1,
//         opacity: 0.9,
//         ease: 'back.in',
//       }
//     );

//     /**add a media query. When it matches, the associated function will run */
//     animation.add(
//       {
//         isMobile: '(max-width: 720px)',
//         isDesktop: '(min-width: 721px)',
//       },
//       (context) => {
//         let { isMobile } = context.conditions as Conditions;
//         gsap.to('#about_container', {
//           scrollTrigger: {
//             trigger: '#about_container',
//             start: '60% 35%',
//             end: '100% 60%',
//             scrub: true,
//           },
//           duration: 4,
//           transform: isMobile ? 'scale(0.98)' : 'scale(0.985)',
//         });
//       }
//     );
//   }, []);

//   return (
//     <section
//       className={`section-padding ${classes.container}`}
//       id="about_container"
//     >
//       <div className={classes.headingCnt}>
//         <h2 id="moreaboutme_heading-title" aria-hidden="true">
//           {handleSplitPhrase(
//             'Alittle bit about me /',
//             'moreaboutme_heading-title'
//           )}
//         </h2>
//       </div>

//       <div className={classes.detailsWrp}>
//         <div className={classes.imgCnt}>
//           <img src={AbinashImage.src} alt="my personal photo" />
//         </div>

//         <div className={classes.textCnt}>
//           <h3 className={classes.desOne}>
//             {handleSplitPhrase(
//               'As a dedicated developer with a passion for design and development, I take projects from ideation to launch within our company, ensuring a seamless process that enhances our digital landscape and drives business success.',
//               'moreaboutme_description--one'
//             )}
//           </h3>

//           <div className={classes.desTwo} id="moreaboutme_description--two">
//             <h4>( ABOUT ME )</h4>
//             <p>
//               Hello! I&apos;m Abinash Shasini, a software engineer from India
//               with a creative spark and an insatiable passion for learning and
//               innovating. I specialize in crafting stunning, user-friendly, and
//               professional websites and mobile apps. Think of me as the
//               Michelangelo of coding—except my Sistine Chapel is your next
//               project!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MoreAboutMe;

/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AbinashImage } from '@/utils';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface Conditions {
  [key: string]: boolean;
}

const MoreAboutMe = () => {
  useEffect(() => {
    // Create a timeline for all the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about_container',
        start: 'top 90%', // Trigger when section comes into view
        end: 'bottom 10%', // Continue till almost out of view
        scrub: true,
      },
    });

    // Heading animation
    tl.to('#moreaboutme_heading-title', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.02,
    })
      // Description One Animation
      .to('#moreaboutme_description--one', {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: 0.004,
      })
      // Description Two Animation
      .fromTo(
        '#moreaboutme_description--two',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 0.9,
          ease: 'back.in',
          duration: 1,
        }
      );

    // Add a media query for scale animation
    const mq = gsap.matchMedia();

    mq.add(
      {
        isMobile: '(max-width: 720px)',
        isDesktop: '(min-width: 721px)',
      },
      (context) => {
        const { isMobile } = context.conditions as Conditions;
        gsap.to('#about_container', {
          scrollTrigger: {
            trigger: '#about_container',
            start: '60% 35%',
            end: '100% 60%',
            scrub: true,
          },
          transform: isMobile ? 'scale(0.98)' : 'scale(0.985)',
        });
      }
    );

    return () => {
      tl.kill(); // Clean up timeline on unmount
      mq.kill(); // Clean up matchMedia on unmount
    };
  }, []);

  return (
    <section
      className={`section-padding ${classes.container}`}
      id="about_container"
    >
      <div className={classes.headingCnt}>
        <h2 id="moreaboutme_heading-title" aria-hidden="true">
          {handleSplitPhrase(
            'Alittle bit about me /',
            'moreaboutme_heading-title'
          )}
        </h2>
      </div>

      <div className={classes.detailsWrp}>
        <div className={classes.imgCnt}>
          <img src={AbinashImage.src} alt="my personal photo" loading="lazy" />
        </div>

        <div className={classes.textCnt}>
          <h3 className={classes.desOne} id="moreaboutme_description--one">
            {handleSplitPhrase(
              'As a dedicated developer with a passion for design and development, I take projects from ideation to launch within our company, ensuring a seamless process that enhances our digital landscape and drives business success.',
              'moreaboutme_description--one'
            )}
          </h3>

          <div className={classes.desTwo} id="moreaboutme_description--two">
            <h4>( ABOUT ME )</h4>
            <p>
              Hello! I&apos;m Abinash Shasini, a software engineer from India
              with a creative spark and an insatiable passion for learning and
              innovating. I specialize in crafting stunning, user-friendly, and
              professional websites and mobile apps. Think of me as the
              Michelangelo of coding—except my Sistine Chapel is your next
              project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
