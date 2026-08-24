export interface Profile {
  name: string;
  headline: string;
  bio: string;
  github: string;
  linkedin: string;
  email?: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}
