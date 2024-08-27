import React, { memo, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SkillCard from './skills-card';
import { skillsData } from '@/utils';
import { TAboutData } from '@/types';
import { handleSplitPhrase, handleSplitWords } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  /** useGSAP hook to animate the heading */
  useGSAP(() => {
    const animations = gsap.context(() => {
      gsap.to('#about_heading-title', {
        scrollTrigger: {
          trigger: '#about_heading-title',
          start: 'top 90%',
          end: 'bottom 80%',
        },
        y: 0,
        stagger: 0.01,
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
        stagger: 0.01,
        opacity: 1,
        ease: 'power3.inOut',
        scrub: true,
      });
    });

    return () => animations.revert();
  }, []);

  /** Memoize the skills data mapping */
  const skillsContent = useMemo(
    () =>
      skillsData.map((element: TAboutData, index: number) => (
        <SkillCard index={index} data={element} key={element.id} />
      )),
    [skillsData]
  );

  return (
    <section className={`section-padding ${classes.container}`} id="skills">
      <div className={classes.heading}>
        <h2 id="about_heading-title">
          {handleSplitPhrase('What i do /', 'about_heading-title')}
        </h2>
        <div className={classes.description}>
          <h4>(&nbsp;&nbsp;SERVICES&nbsp;&nbsp;)</h4>
          <h3>
            {handleSplitWords(
              'Results-driven software engineer with a proven track record of crafting complex, high-quality solutions for web and mobile apps. I excel at solving intricate coding challenges and driving innovation to boost project success and business growth.',
              'about_heading-description'
            )}
          </h3>
        </div>
      </div>
      <div className={classes.skillsWrp}>{skillsContent}</div>
    </section>
  );
};

export default memo(AboutSection);
