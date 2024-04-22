'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

type Tprops = {
  children: JSX.Element;
};

const SmoothScroll = ({ children }: Tprops) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
