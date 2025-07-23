import { ReactNode, MouseEvent } from 'react';
import { LucideIcon } from 'lucide-react';

// Section component interface from the brief
export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

// Button component interface from the brief
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

// Navigation component interfaces
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  logo?: string;
  logoText?: string;
  navItems: NavItem[];
  className?: string;
  onNavItemClick?: (item: NavItem) => void;
}

// Experience component interfaces
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  description: string;
  achievements: string[];
  technologies: string[];
  metrics?: ExperienceMetric[];
}

export interface ExperienceMetric {
  label: string;
  value: string;
  improvement?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'databases' | 'cloud' | 'specialized';
  proficiency: number; // 1-100
  yearsOfExperience: number;
  icon?: LucideIcon;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateObtained: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface ExperienceData {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
}

export interface ExperienceProps {
  data: ExperienceData;
  className?: string;
}

export interface TimelineProps {
  experiences: Experience[];
  education: Education[];
  className?: string;
}

export interface SkillsVisualizationProps {
  skills: Skill[];
  certifications: Certification[];
  className?: string;
}

// Project component interfaces
export interface ProjectTechnology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'other';
  color?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: ProjectTechnology[];
  metrics: ProjectMetric[];
  timeline: string;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'fullstack' | 'backend' | 'frontend' | 'devops' | 'mobile';
  challenges: string[];
  outcomes: string[];
}

export interface ProjectsProps {
  projects: Project[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  className?: string;
}

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ProjectFilterProps {
  technologies: string[];
  categories: Project['category'][];
  selectedTechnology: string | null;
  selectedCategory: string | null;
  onTechnologyChange: (tech: string | null) => void;
  onCategoryChange: (category: string | null) => void;
}

// Hero section specific interfaces
export interface HeroProps {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
  credibilityIndicators: CredibilityIndicator[];
  className?: string;
}

export interface CredibilityIndicator {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
}

// SEO Props from the brief
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}

// About section interfaces
export interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface AboutSectionData {
  shortBio: string;
  longBio: string;
  profileImage: {
    src: string;
    alt: string;
  };
  interests: Interest[];
  process: ProcessStep[];
  values: {
    title: string;
    description: string;
    points: string[];
  };
}

export interface AboutSectionProps {
  data: AboutSectionData;
  className?: string;
}

// Contact section interfaces
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  description: string;
}

export interface ContactSectionData {
  title: string;
  subtitle: string;
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    message: string;
  };
  socialLinks: SocialLink[];
  contactInfo: {
    email: string;
    location: string;
    timezone: string;
  };
}

export interface ContactSectionProps {
  data: ContactSectionData;
  className?: string;
} 