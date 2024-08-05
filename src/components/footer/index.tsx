'use client';
import React from 'react';
import { BiSolidMobileVibration } from 'react-icons/bi';
import { IoNewspaper } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import Magnetic from '@/commons/magnetic';
import { handleSplitPhrase, handleSplitWords } from '@/utils/split';
import ContactCard from './contact-card';
import classes from './style.module.scss';

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

    gsap.to('#footer--description', {
      scrollTrigger: {
        trigger: '#footer--description',
        start: 'top 90%',
        end: 'bottom 80%',
      },
      y: 0,
      stagger: 0.011,
      opacity: 1,
      ease: 'power3.inOut',
      scrub: true,
    });
  }, []);

  /** Function to call my number */
  const handleClickOnCall = () => {
    window.location.href = `tel:7749012570`;
  };

  return (
    <footer className={`section-padding ${classes.container}`} id="contact">
      <div className={classes.headingCnt}>
        <h2 aria-hidden="true">
          {handleSplitPhrase(
            'Have Something In Mind /',
            'footer_heading-title'
          )}
        </h2>
      </div>
      <div className={classes.footerHeading}>
        <p>(Contact ME)</p>
        <p>
          {handleSplitWords(
            "Drop me a line anytime for job updates or just to connect. I'm here to help!",
            'footer--description'
          )}
        </p>
      </div>
      <div className={classes.infoContainer}>
        <Magnetic>
          <a
            href="assets/images/abinash-shasini-resume.pdf"
            download="abinsh-shasini-resume.pdf"
          >
            <div className={classes.infosWrp}>
              <IoNewspaper /> <span>Resume</span>
            </div>
          </a>
        </Magnetic>

        <Magnetic>
          <div className={classes.infosWrp} onClick={handleClickOnCall}>
            <BiSolidMobileVibration /> <span>Phone</span>
          </div>
        </Magnetic>
      </div>

      {/* Contact card for email recive */}
      <ContactCard />

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
            <Link href="https://github.com/Abinashshasini">Github</Link>
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
