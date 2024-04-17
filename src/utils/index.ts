import menu from '/public/assets/images/menu.svg';
import hero from '/public/assets/images/hero.svg';
import shape1 from '/public/assets/images/shape1.svg';
import shape2 from '/public/assets/images/shape2.svg';
import shape3 from '/public/assets/images/shape3.svg';
import project1 from '/public/assets/images/project1.webp';
import project2 from '/public/assets/images/project2.webp';
import project3 from '/public/assets/images/project3.webp';
import project4 from '/public/assets/images/project4.webp';

export const MenuIcon = menu;
export const HeroSVG = hero;

export const skillsData = [
  {
    id: '#01',
    title: 'Frontend Development',
    description:
      'I strive for seamless cross-device experiences, empowering effortless user engagement. From concept to execution, I push web development boundaries to create immersive solutions.',
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
    title: 'Mobile Apps Development',
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
    company: 'Justdial.com | 2022 - Present',
    position: 'Software Engineer',
    description: [
      'Collaborated with designers and backend developers to implement responsive and visually appealing user interfaces using React and Javascript',
      'Implemented performance optimization techniques, including web-vitals optimization, which yielded an impressive enhancement of nearly 30% in the overall application speed.',
    ],
  },
  {
    id: '#02',
    company: 'ThinkZone Pvt Ltd | 2021 - 2022',
    position: 'Software Developer',
    description: [
      'Led the development of a report website using React, providing users with insightful data visualizations and interactive reports.',
      'Successfully migrated a comprehensive Ionic Angular application to React Native, accomplishing the transition with a focus on delivering superior-quality, high-performance user interfaces. Additionally, extended support for cross-platform mobile applications was established, ensuring a seamless and consistent user experience across various devices.',
    ],
  },
  {
    id: '#03',
    company: 'EXPOSYS Data Labs | 2020 - 2021',
    position: 'Software Developer Intern',
    description: [
      'Learned React and Javascript and participated in different activities and tasks, gained insight into software development practices and procedures.',
      'Created one Fully functional Language translator that can translate 30+ languages. Used IBM Watson language-translator API with Next.js, Node.js, and Express to develop this application and deployed in Vercel',
    ],
  },
];
