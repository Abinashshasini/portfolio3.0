import React from 'react';
import Image from 'next/image';
import { MenuIcon } from '@/utils';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.container}>
      <h1>
        {'<'}Abinash shasini {'/>'}
      </h1>
      <div className={classes.menuContainer}>
        <Image src={MenuIcon.src} alt="menu icon" width={20} height={20} />
      </div>
    </header>
  );
};

export default Header;
