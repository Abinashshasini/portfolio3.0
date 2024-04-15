import menu from '/public/assets/images/menu.svg';
import hero from '/public/assets/images/hero.svg';
import shape1 from '/public/assets/images/shape1.svg';
import shape2 from '/public/assets/images/shape2.svg';
import shape3 from '/public/assets/images/shape3.svg';

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
