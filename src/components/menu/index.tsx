import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './animation';
import Link from './link';
import Curve from './curve';
import Footer from './footer';
import styles from './style.module.scss';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Work',
    href: '/work',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const SideMenu = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <div className={styles.overlay} />
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.container}
      >
        <div className={styles.wraper}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.navItems}
          >
            {navItems.map((data, index) => {
              return (
                <Link
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></Link>
              );
            })}
          </div>
          <div className={styles.footercontainer}>
            <div className={styles.header}>
              <p>Social Media</p>
            </div>
            <Footer />
          </div>
        </div>
        {/* <Curve /> */}
      </motion.div>
    </>
  );
};

export default SideMenu;
