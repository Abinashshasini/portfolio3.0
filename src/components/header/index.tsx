import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LogoIcn } from '@/utils';
import classes from './style.module.scss';

const Header = () => {
  /** Required states and refs */
  const [showMenuButton, setShowMenuButton] = useState(false);

  /** GSAP hook for animation of list elements */
  useGSAP(() => {
    gsap.fromTo(
      '#hero_list-item',
      { y: 20 },
      { y: 0, delay: 3.3, stagger: 0.1, duration: 0.5 }
    );
  }, []);

  /** Function to keep track of page scroll to show the hamburger menu */
  const handleScroll = () => {
    if (window && window.scrollY > 200) {
      setShowMenuButton(true);
    } else {
      setShowMenuButton(false);
    }
  };

  /** Effect to add scroll event listener */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={classes.container}>
      {!showMenuButton && (
        <>
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
        </>
      )}

      <button
        aria-label="Hamburger Menu button"
        aria-expanded="false"
        aria-controls="menu"
        data-visible={showMenuButton}
        className={classes.hamBurgerMenu}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
