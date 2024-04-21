import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LogoIcn, navItems } from '@/utils';
import { AnimatePresence } from 'framer-motion';
import SideMenu from '../menu';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';
import { TNavData } from '@/types';

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
  /** Effect to fix the body to prevent scroling when sidebar is present */
  useEffect(() => {
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      const lenis = new Lenis();
      if (showSideMenu) {
        document.body.style.overflow = 'hidden';
        lenis.stop();
      } else {
        document.body.style.overflow = 'auto';
        lenis.start();
      }
    })();
  }, [showSideMenu]);

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
            {navItems.map((element: TNavData) => (
              <a href={element.href} key={element.id}>
                <Magnetic>
                  <li id="hero_list-item">{element.title}</li>
                </Magnetic>
              </a>
            ))}
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

      <AnimatePresence>{showSideMenu && <SideMenu />}</AnimatePresence>
    </header>
  );
};

export default Header;
