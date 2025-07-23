import { HeroProps } from '../types';
import { Brain, Code, Award, Briefcase } from 'lucide-react';

// Import image using URL imports
import profileImageUrl from '../assets/profile/profilepic.png?url';

export const heroData: HeroProps = {
  name: 'Brandon Kohler',
  title: 'Software Engineer & Entrepreneur',
  description: 'Building innovative solutions at the intersection of AI, Financial Technology, and E-commerce.',
  profileImage: profileImageUrl,
  credibilityIndicators: [
    {
      id: 'experience',
      label: 'Years Experience',
      value: '5+',
      icon: Briefcase
    },
    {
      id: 'projects',
      label: 'Projects Completed',
      value: '20+',
      icon: Code
    },
    {
      id: 'expertise',
      label: 'Core Focus',
      value: 'FinTech',
      icon: Brain
    }
  ]
}; 