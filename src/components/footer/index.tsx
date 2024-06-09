import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { BiSolidMobileVibration } from 'react-icons/bi';
import { IoNewspaper } from 'react-icons/io5';
import Link from 'next/link';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';

const FooterSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headingCnt}>
        <h1>GET IN TOUCH</h1>
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
          <IoNewspaper /> <span>My Resume</span>
        </div>
        <div className={classes.infosWrp}>
          <FaMailBulk /> <span>abinashshasini125@gmail.com</span>
        </div>
        <div className={classes.infosWrp}>
          <BiSolidMobileVibration /> <span>7749012570</span>
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
    </div>
  );
};

export default FooterSection;
