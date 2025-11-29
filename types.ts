
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  description?: string;
  tech?: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  years: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tech?: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface UIContent {
  portfolio: string;
  contactMe: string;
  linkedin: string;
  github: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
  footerRights: string;
  footerTagline: string;
  present: string;
  themeLabel: string;
  languageLabel: string;
  backToTop: string;
}

export interface ContentData {
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  ui: UIContent;
}