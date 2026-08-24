export interface Project {
  id: string;
  title: string;
  period: string;
  institution: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
}
