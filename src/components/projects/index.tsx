/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'
import { projectData } from '@/utils';
import classes from './style.module.scss';

const Projects = () => {
  return (
    <div className={`section-padding ${classes.container}`}>
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
            <div className={classes.projectDetailTechnology}>
            {element.technology.map((images, index) => (
              <div key={index}>
                <Image src={images} alt="technology" width={50} height={50} />
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
