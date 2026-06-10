export type SkillCategory = 'software' | 'hardware' | 'ferramentas';

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  href?: string;
  icon: 'award' | 'book' | 'layers';
};

export type Project = {
  title: string;
  image: string;
  imageAlt: string;
  type: string;
  badge: 'Solo' | 'Equipe';
  description: string;
  contribution?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
};
