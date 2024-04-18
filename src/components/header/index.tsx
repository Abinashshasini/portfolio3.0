import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { LogoIcn } from '@/utils';
import classes from './style.module.scss';
import { useGSAP } from '@gsap/react';

const Header = () => {
  /** GSAP hook for animation of list elements */
  useGSAP(() => {
    gsap.fromTo(
      '#hero_list-item',
      { y: 20 },
      { y: 0, delay: 3.3, stagger: 0.1, duration: 0.5 }
    );
  }, []);

  return (
    <header className={classes.container}>
      <a aria-label="Bake to Home">
        <Image src={LogoIcn} alt="logo" width={100} height={100} />
      </a>
      <ul className={classes.menuContainer}>
        <a href="/#services">
          <li id="hero_list-item">Services</li>
        </a>
        <a href="#work">
          <li id="hero_list-item">Works</li>
        </a>
        <a href="/#about">
          <li id="hero_list-item">About</li>
        </a>
        <a href="/#roles">
          <li id="hero_list-item">Roles</li>
        </a>
        <a href="/#contact">
          <li id="hero_list-item">Contact</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
