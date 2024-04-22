import React, { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import './style.css';

type Tprops = {
  children: any;
  id: string;
  gsapProps: any;
  scrollTriggerProps?: any;
};

gsap.registerPlugin(ScrollTrigger);

const AnimatedText: FC<Tprops> = ({
  children,
  id = '',
  gsapProps,
  scrollTriggerProps,
}) => {
  /** GSAP hook for trigering animation */
  useGSAP(() => {
    SplitType.create(id);
    gsap.to('.char', {
      ...gsapProps,
    });
  }, []);

  return <>{children}</>;
};

export default AnimatedText;
