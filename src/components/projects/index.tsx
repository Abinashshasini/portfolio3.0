/* eslint-disable @next/next/no-img-element */
import React from 'react';
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
            <div className={classes.projectDetailTechnology}>
              <div className={classes.yearCnt}>{element.year}</div>
              <div className={classes.techCnt}>
                {element.technology.map((childElement) => (
                  <span key={index + childElement}>{childElement}</span>
                ))}
              </div>
            </div>
            <h3>{element.title}</h3>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
