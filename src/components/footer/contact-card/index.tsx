'use client';
import React, { useState } from 'react';
import { AbinashEmailPic } from '@/utils';
import classes from './style.module.scss';

const ContactCard = () => {
  /** Required states and refs */
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name = '', email = '', message = '' } = userData;

  /** Function to read the values from input fields */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.container}>
      <h3>Looking for a advance develper 😉?</h3>

      <div className={classes.emailContainer}>
        To:
        <span className={classes.email}>
          <img src={AbinashEmailPic.src} alt="email_pic" />
          abinashshaini125@gmail.com
        </span>
      </div>

      <div className={classes.formFieldContainer}>
        01.
        <div className={classes.textCnt}>
          <p>Your Name</p>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            name="name"
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <div className={classes.formFieldContainer}>
        02.
        <div className={classes.textCnt}>
          <p>Your Email</p>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <div className={classes.formFieldContainer}>
        03.
        <div className={classes.textCnt}>
          <p>Your Message</p>
          <input
            type="text"
            name="message"
            placeholder="Breif summary about your requirment!"
            value={message}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <button className={classes.submitbutton}>SEND MESSAGE</button>
    </div>
  );
};

export default ContactCard;
