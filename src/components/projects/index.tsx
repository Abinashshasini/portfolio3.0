/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { projectData } from '@/utils';
import classes from './style.module.scss';

const Projects = () => {
  return (
    <section className={`section-padding ${classes.container}`} id="work">
      <div className={classes.headingCnt}>
        <h2 aria-hidden="true" id="project_heading">
          <span>Personal</span>
          <span>Projects</span>
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
