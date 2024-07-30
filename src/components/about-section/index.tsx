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
    <section className={`section-padding ${classes.container}`} id="skills">
      <div className={classes.heading}>
        <h2 id="about_heading-title">
          {handleSplitPhrase('What i do /', 'about_heading-title')}
        </h2>
        <div className={classes.description}>
          <h3>
            {handleSplitPhrase(
              'Your friendly neighborhood frontend developer and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with (PROJECTS) and lines of code, turning zeroes and ones into immersive, interactive experiences,',
              'about_heading-description'
            )}
          </h3>
        </div>
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
