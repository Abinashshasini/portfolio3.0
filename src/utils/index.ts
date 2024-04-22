import hero from '/public/assets/images/hero.svg';
import shape1 from '/public/assets/images/shape1.svg';
import shape2 from '/public/assets/images/shape2.svg';
import shape3 from '/public/assets/images/shape3.svg';
import project1 from '/public/assets/images/project1.webp';
import project2 from '/public/assets/images/project2.webp';
import project3 from '/public/assets/images/project3.webp';
import project4 from '/public/assets/images/project4.webp';
import logo from '/public/assets/images/logo.svg';
import skills from '/public/assets/images/skills.svg';
import sideMenuSvg from '/public/assets/images/sidemenu.svg';
import ArrowSvg from '/public/assets/images/arrow.svg';

export const HeroSVG = hero;
export const LogoIcn = logo;
export const skillsIn = skills;
export const sideMenuImage = sideMenuSvg;
export const ArrowIcon = ArrowSvg;

export const skillsData = [
  {
    id: '#01',
    title: 'Frontend Development',
    description:
      'I strive for seamless experiences, empowering effortless user engagement. From concept to execution, I push web development boundaries to create immersive solutions.',
    technology: ['React JS', 'JavaScript', 'Next JS'],
    icon: shape1,
  },
  {
    id: '#02',
    title: 'Backend Development',
    description:
      "I'm on a journey to enhance my skills in digital infrastructure for dynamic web experiences. With a senior frontend background, I understand user-centric design principles and love crafting engaging online interfaces.",
    technology: ['Node JS', 'MongodB', 'Express JS'],
    icon: shape2,
  },
  {
    id: '#03',
    title: 'Apps Development',
    description:
      'As a React Native developer, I craft cross-platform apps for seamless user experiences. Passionate about mobile tech, I thrive on bringing ideas to life in app development.',
    technology: ['React Native', 'Expo', 'Android/IOS Development'],
    icon: shape3,
  },
];

export const projectData = [
  {
    id: '#01',
    img: project1,
    year: 2024,
    technology: ['React JS', 'Node JS', 'MongodB'],
    title: 'Detailed Leetcode Clone.',
    description:
      'Crafted a LeetCode-inspired platform with ReactJS, NodeJS, and MongoDB, delivering a seamless coding experience. Learned full-stack development and database architecture.',
  },
  {
    id: '#02',
    img: project2,
    year: 2023,
    technology: ['Next JS', 'JavaScript', 'SSR'],
    title: 'Complete TMDB Clone.',
    description:
      "Built TMDB's official website with Next.js, leveraging SSR for peak performance. Expertly balanced frontend finesse with backend efficiency.",
  },
  {
    id: '#03',
    img: project3,
    year: 2024,
    technology: ['React JS', 'Three JS', 'GSAP'],
    title: 'Apple iPhone 15 Website.',
    description:
      'Crafted an engaging Apple iPhone 15 website with React.js, Three.js, and GSAP, seamlessly blending stunning visuals with smooth animations for an immersive user experience.',
  },
  {
    id: '#04',
    img: project4,
    year: 2022,
    technology: ['Next JS', 'Trivia API', 'HTML', 'CSS'],
    title: 'Fun Trivia Quiz App.',
    description:
      'Engineered a dynamic trivia quiz app using React.js, JavaScript, and trivia APIs, delivering an engaging and interactive experience for users while honing skills in frontend development and API integration.',
  },
];

export const experienceData = [
  {
    id: '#01',
    company: 'Justdial | Feb 2022 - Present',
    position: 'Software Engineer',
    description: [
      'Collaborated with designers and backend developers to build responsive UIs using React and JavaScript.',
      // 'Ensured seamless cross-browser compatibility and implemented performance optimizations, boosting application speed by 30%.',
    ],
  },
  {
    id: '#02',
    company: 'ThinkZone | Feb 2021 - Jan 2022',
    position: 'Software Developer',
    description: [
      'Led the development of a React-based report website, offering users insightful data visualizations and interactive reports.',
      // 'Successfully migrated a comprehensive Ionic Angular application to React Native, prioritizing superior-quality, high-performance user interfaces.',
    ],
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
    title: 'Services',
    href: '/#services',
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
