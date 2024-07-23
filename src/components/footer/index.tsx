import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { BiSolidMobileVibration } from 'react-icons/bi';
import { IoNewspaper } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';
import { handleSplitPhrase } from '@/utils/split';

gsap.registerPlugin(ScrollTrigger);
const FooterSection = () => {
  /** useGSAP hook to animate the heading and description */
  useGSAP(() => {
    gsap.to('#footer_heading-title', {
      scrollTrigger: {
        trigger: '#footer_heading-title',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.02,
      duration: 0.5,
      opacity: 1,
    });
  }, []);
  return (
    <footer className={`section-padding ${classes.container}`}>
      <div className={classes.headingCnt}>
        <h2 id="footer_heading-title" aria-hidden="true">
          {handleSplitPhrase(
            'Have Something In Mind /',
            'footer_heading-title'
          )}
        </h2>
      </div>
      <div className={classes.footerHeading}>
        <p>(Contact ME)</p>
        <p>
          Drop me a line anytime for job updates or just to connect. I&apos;m
          here to help!
        </p>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.infosWrp}>
          <IoNewspaper /> <span>Resume</span>
        </div>
        <div className={classes.infosWrp}>
          <BiSolidMobileVibration /> <span>Phone</span>
        </div>
      </div>

      <div className={classes.copyrightinfo}>
        <h3>
          ©{new Date().getFullYear()}
          <br />
          Abinash Shasini
        </h3>

        <div className={classes.timeCnt}>
          <h4>Local Time</h4>
          <p>
            {new Date().toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}{' '}
            Bangalore, INDIA
          </p>
        </div>
      </div>

      <div className={classes.socialCnt}>
        <h2>Socials</h2>
        <div className={classes.socialWrp}>
          <Magnetic>
            <Link href="https://www.linkedin.com/in/abinash-shasini/">
              LinkedIn
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="https://github.com/Abinashshasini">GitHub</Link>
          </Magnetic>
          <Magnetic>
            <Link href={`https://twitter.com/ShasiniAbinash`}>Twitter</Link>
          </Magnetic>
          <Magnetic>
            <Link href="https://www.facebook.com/abinash.shasini/">
              Facebook
            </Link>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
