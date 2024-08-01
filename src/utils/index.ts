import hero from '/public/assets/images/hero.svg';
import shape1 from '/public/assets/images/shape1.svg';
import shape2 from '/public/assets/images/shape2.svg';
import shape3 from '/public/assets/images/shape3.svg';
import project1 from '/public/assets/images/project1.png';
import project2 from '/public/assets/images/project2.svg';
import project3 from '/public/assets/images/project3.svg';
import project4 from '/public/assets/images/project4.svg';
import logo from '/public/assets/images/logo.svg';
import skills from '/public/assets/images/skills.svg';
import sideMenuSvg from '/public/assets/images/sidemenu.svg';
import ArrowSvg from '/public/assets/images/arrow.svg';
import ShubhamPhoto from '/public/assets/images/shubham.png';
import AsutoshPhoto from '/public/assets/images/ashutosh.jpeg';
import AbinashPhoto from '/public/assets/images/abinash.jpg';

/** Skills images */
import react from '/public/assets/images/react.svg';
import next from '/public/assets/images/next.svg';
import node from '/public/assets/images/node.png';
import tailwind from '/public/assets/images/tailwind.svg';
import three from '/public/assets/images/three.svg';
import typescript from '/public/assets/images/typescript.svg';
import gsap from '/public/assets/images/gsap.svg';
import html from '/public/assets/images/html.svg';
import css from '/public/assets/images/css.svg';
import emailPic from '/public/assets/images/email.png';

export const HeroSVG = hero;
export const LogoIcn = logo;
export const skillsIn = skills;
export const sideMenuImage = sideMenuSvg;
export const ArrowIcon = ArrowSvg;
export const AbinashImage = AbinashPhoto;
export const AbinashEmailPic = emailPic;

export const skillsData = [
  {
    id: '#01',
    title: 'Web Development',
    description:
      'I design seamless, user-friendly websites, pushing the limits of web development from start to finish to deliver engaging solutions.',
    technology: ['React JS', 'JavaScript', 'Next JS'],
    icon: shape1,
  },
  {
    id: '#02',
    title: 'API Building',
    description:
      'I aim to enhance my digital infrastructure skills for dynamic web experiences. I excel in user-centric design and love creating engaging interfaces.',
    technology: ['Node JS', 'MongodB', 'Express JS'],
    icon: shape2,
  },
  {
    id: '#03',
    title: 'APP Creation',
    description:
      'As a React Native developer, I create cross-platform apps for seamless user experiences. Passionate about mobile tech, I bring ideas to life through innovative app development.',
    technology: ['React Native', 'Expo', 'Android/IOS Development'],
    icon: shape3,
  },
];

export const projectData = [
  {
    id: '#01',
    img: project1,
    year: 2024,
    technology: [next, node, typescript, html, css],
    title: 'Leetcode Clone.',
    description:
      'Crafted a LeetCode-inspired platform with ReactJS, NodeJS, and MongoDB, delivering a seamless coding experience. Learned full-stack development and database architecture.',
  },
  {
    id: '#02',
    img: project2,
    year: 2023,
    technology: [next, typescript, tailwind, react, css],
    title: 'TMDB Clone.',
    description:
      "Built TMDB's official website with Next.js, leveraging SSR for peak performance. Expertly balanced frontend finesse with backend efficiency.",
  },
  {
    id: '#03',
    img: project3,
    year: 2024,
    technology: [react, three, tailwind, gsap, typescript],
    title: 'iPhone 15 Website.',
    description:
      'Crafted an engaging Apple iPhone 15 website with React.js, Three.js, and GSAP, seamlessly blending stunning visuals with smooth animations for an immersive user experience.',
  },
  {
    id: '#04',
    img: project4,
    year: 2022,
    technology: [react, next, tailwind, html, css],
    title: 'Trivia Quiz App.',
    description:
      'Engineered a dynamic trivia quiz app using React.js, JavaScript, and trivia APIs, delivering an engaging and interactive experience for users while honing skills in frontend development and API integration.',
  },
];

export const experienceData = [
  {
    id: '#01',
    company: 'justdial.com',
    position: 'Software Engineer',
    location: 'Bangalore, India',
    href: 'https://www.justdial.com',
    description:
      'Developing front-end mobile solutions (B2C, B2B) in Ecommerse Tech on React/Next.js framework and Javascript.',
  },
  {
    id: '#02',
    company: 'thinkzone.in',
    location: 'Cuttack, India',
    position: 'Software Developer',
    href: 'https://thinkzone.in',
    description:
      'Successfully migrated a full ionic angular mobile app to React native and maintianed core business requirements.',
  },
];

export const navItems = [
  {
    id: '#01@',
    title: 'Home',
    href: '/',
  },
  {
    id: '#02@',
    title: 'Skills',
    href: '/#skills',
  },
  {
    id: '#03@',
    title: 'Works',
    href: '/#work',
  },
  {
    id: '#04@',
    title: 'About',
    href: '/#about',
  },
  {
    id: '#05@',
    title: 'Contact',
    href: '/#contact',
  },
];

export const reviewsData = [
  {
    id: '#01',
    review:
      "Abinash is a fantastic addition to any team. We've worked together at Justdial on multiple projects, and I can vouch for his dedication and willingness to go the extra mile whenever needed. His contributions are consistently valuable, and I highly recommend collaborating with someone as reliable and hardworking as Abinash.",
    name: 'Shubham Singla',
    designation: 'Product Manager @justdial.com',
    photo: ShubhamPhoto,
    href: 'https://shubhamsingla807.github.io',
  },
  {
    id: '#02',
    review:
      "Collaborating with — Abinash at Justdial was seamless. His knack for bug-solving and time management made our projects run like clockwork. I highly recommend Abinash as a reliable and diligent developer who elevates any team he's a part of.",
    name: 'Ashutosh Verma',
    designation: 'Solution Architect @justdial.com',
    photo: AsutoshPhoto,
    href: 'https://www.linkedin.com/in/ashutosh-is-here/',
  },
];
