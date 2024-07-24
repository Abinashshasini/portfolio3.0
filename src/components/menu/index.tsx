import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { menuSlide } from './animation';
import Link from './link';
import Footer from './footer';
import { navItems, sideMenuImage } from '@/utils';
import { TNavData } from '@/types';
import classes from './style.module.scss';

const SideMenu = ({
  hideSideMenu,
}: {
  hideSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <div className={classes.overlay} />
      <div className={classes.sidebarWarper}>
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className={classes.container}
        >
          <div className={classes.wraper}>
            <div className={classes.header}>
              <p>Navigation</p>
            </div>
            <div
              onMouseLeave={() => {
                setSelectedIndicator(pathname);
              }}
              className={classes.navItems}
            >
              {navItems.map((data: TNavData, index) => {
                return (
                  <Link
                    key={data.id}
                    data={{ ...data, index }}
                    isActive={selectedIndicator == data.href}
                    setSelectedIndicator={setSelectedIndicator}
                    hideSideMenu={hideSideMenu}
                  ></Link>
                );
              })}
            </div>
            <div className={classes.footercontainer}>
              <div className={classes.header}>
                <p>Social Media</p>
              </div>
              <Footer />
            </div>
          </div>
          <div className={classes.bgImage}>
            <Image
              src={sideMenuImage}
              alt="sideMenu image"
              width={245}
              height={327}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SideMenu;
