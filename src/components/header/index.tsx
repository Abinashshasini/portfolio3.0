import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LogoIcn } from '@/utils';
import { AnimatePresence } from 'framer-motion';
import SideMenu from '../menu';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';

const Header: FC = () => {
  /** Required states and refs */
  const [showMenuButton, setShowMenuButton] = useState<boolean>(false);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

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
            <Magnetic>
              <Image src={LogoIcn} alt="logo" width={100} height={100} />
            </Magnetic>
          </a>
          <ul className={classes.menuContainer}>
            <a href="/#services">
              <Magnetic>
                <li id="hero_list-item">Services</li>
              </Magnetic>
            </a>
            <a href="#work">
              <Magnetic>
                <li id="hero_list-item">Works</li>
              </Magnetic>
            </a>
            <a href="/#about">
              <Magnetic>
                <li id="hero_list-item">About</li>
              </Magnetic>
            </a>
            <a href="/#roles">
              <Magnetic>
                <li id="hero_list-item">Roles</li>
              </Magnetic>
            </a>
            <a href="/#contact">
              <Magnetic>
                <li id="hero_list-item">Contact</li>
              </Magnetic>
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
        onClick={() => setShowSideMenu(!showSideMenu)}
      >
        <span data-open={showSideMenu}></span>
        <span data-open={showSideMenu}></span>
      </button>

      <AnimatePresence mode="wait">
        {showSideMenu && <SideMenu />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
