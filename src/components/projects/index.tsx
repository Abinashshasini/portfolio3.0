/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { FaLocationArrow } from 'react-icons/fa';
import { projectData } from '@/utils';
import { handleSplitPhrase } from '@/utils/split';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  /** useGSAP hook to animate the heading */
  useGSAP(() => {
    gsap.to('#project_heading-title', {
      scrollTrigger: {
        trigger: '#project_heading-title',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.02,
      opacity: 1,
    });
  }, []);

  return (
    <section className={`section-padding ${classes.container}`} id="work">
      <div className={classes.headingCnt}>
        <h2 aria-hidden="true" id="project_heading-title">
          {handleSplitPhrase('Personal Projects', 'project_heading-title')}
          <sup>
            <span>(</span>
            <span>4</span>
            <span>)</span>
          </sup>
        </h2>
      </div>

      {/* Projects section */}
      <div className={classes.projectsCardWrp}>
        {projectData.map((element, index) => (
          <div
            key={element.id}
            data-index={index + 1}
            className={classes.projectCardCnt}
          >
            <div className={classes.projectDetailImg}>
              <img src={element.img.src} alt="project image" />
            </div>
            <h3>{element.title}</h3>
            <p>{element.description}</p>
            <div className="flex justify-between px-1">
              <div className={classes.projectDetailTechnology}>
                {element.technology.map((images, index) => (
                  <div key={index} className={classes.technologyCnt}>
                    <Image
                      src={images}
                      alt="technology"
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
              <div className={classes.liveSitelink}>
                <p>Check on live</p>
                <FaLocationArrow />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
