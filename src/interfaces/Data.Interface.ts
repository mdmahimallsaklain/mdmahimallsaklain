export interface ServiceType {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  is_Featured: boolean;
}
export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  slug: string;
  likes?: number;
  dislikes?: number;
  live_demo: string;
  github_code: string;
  is_Featured: boolean;
}

export interface SocialMediaType {
  platformName: string;
  url: string;
  icon: string;
  sortOrder: number;
}
