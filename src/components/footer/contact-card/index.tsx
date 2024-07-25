'use client';
import React, { useState } from 'react';
import { z } from 'zod';
import { AbinashEmailPic } from '@/utils';
import Toast from '@/components/toast';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';

type TuserData = {
  name: string;
  email: string;
  message: string;
};
const WEB3_API_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3_API_KEY = 'c5d13004-9b63-44cc-862c-94af70d54f56';

const userDataSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Don't be a mystery, share your correct name!" }),
  email: z.coerce
    .string()
    .email({ message: 'Where can i reach you? Enter your valid email.' }),
  message: z
    .string()
    .min(10, { message: "Don't forget to drop me a message!" }),
});

const ContactCard = () => {
  /** Required states and refs */
  const [userData, setUserData] = useState<TuserData>({
    name: '',
    email: '',
    message: '',
  });
  const [toast, setToast] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { name = '', email = '', message = '' } = userData;

  /** Function to read the values from input fields */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  /** Function to check for valid input fields */
  const handleValidateInputFields = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = userDataSchema.safeParse({
      name,
      email,
      message,
    });

    if (!response.success) {
      let errorArray: any[] = [];
      const { errors } = response.error;
      errors.forEach((error) => {
        errorArray.push(error.message);
      });
      setToast(errorArray[0]);
    } else {
      handleSubmit();
    }
  };

  /** Function to send message */
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key as keyof typeof userData]);
      });

      formData.append('access_key', WEB3_API_KEY);
      const data = JSON.stringify(Object.fromEntries(formData));

      const response = await fetch(WEB3_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: data,
      });
      const result = await response.json();
      setLoading(false);
      if (result.success) {
        setToast(
          '🚀 Just sent your message! I’ll be back in a flash. Stay tuned! 😎'
        );
        setUserData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setToast('Uh-oh! It seems we hit a snag. Please try again 😔');
      }
    } catch (error) {
      setToast('Uh-oh! It seems we hit a snag. Please try again 😔');
    }
  };

  return (
    <div className={classes.container}>
      <h3>Looking for a advance developer 😉?</h3>

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

      <Magnetic>
        <button
          className={classes.submitbutton}
          onClick={(e) => handleValidateInputFields(e)}
          data-loading={loading}
        >
          <p>SEND MESSAGE</p>
          <span className={classes.submitbuttonLoader} />
        </button>
      </Magnetic>

      <Toast message={toast} setMessage={setToast} />
    </div>
  );
};

export default ContactCard;
