export type TAboutData = {
  id: string;
  title: string;
  description: string;
  technology: string[];
  icon: string;
};

export type TProjectData = {
  id: string;
  title: string;
  description: string;
  technology: string[];
  img: string;
  year: number;
};

export type TExperienceData = {
  id: string;
  company: string;
  position: string;
  location: string;
  href: string;
  description: string;
};

export type TNavData = {
  id: string;
  title: string;
  href: string;
  index?: number;
};
