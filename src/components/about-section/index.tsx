import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SkillCard from './skills-card';
import { skillsData } from '@/utils';
import { TAboutData } from '@/types';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  /** useGSAP hook to animate the heading */
  useGSAP(() => {
    gsap.to('#about_heading-title', {
      scrollTrigger: {
        trigger: '#about_heading-title',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.02,
      duration: 0.5,
      opacity: 1,
    });

    gsap.to('#about_heading-description', {
      scrollTrigger: {
        trigger: '#about_heading-description',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.005,
      opacity: 0.8,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section className={`section-padding ${classes.container}`} id="services">
      <div className={classes.heading}>
        <h2 id="about_heading-title">
          {handleSplitPhrase('What i do /', 'about_heading-title')}
        </h2>
        <h3>
          {handleSplitPhrase(
            'A skilled frontend web developer adept creating elegant modern designs, seamlessly integrating creativity with tech to deliver captivating user experience.',
            'about_heading-description'
          )}
        </h3>
      </div>
      <div className={classes.skillsWrp}>
        {skillsData.map((element: TAboutData, index: number) => (
          <SkillCard index={index} data={element} key={element.id} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
