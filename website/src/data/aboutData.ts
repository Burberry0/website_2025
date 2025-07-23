import {
  Brain,
  Code,
  Coins,
  ShoppingCart,
  Users,
  Lightbulb,
  Target,
  Workflow,
  MessageSquare,
  GitBranch,
  Gauge,
  Shield
} from 'lucide-react';
import { AboutSectionData } from '../types';

// Import image using URL imports
import profileImageUrl from '../assets/profile/profilepic.png?url';

export const aboutData: AboutSectionData = {
  shortBio: "I'm passionate about the intersection of software engineering, AI systems, and financial technology, driven by creating data-driven solutions that solve complex business challenges.",
  
  longBio: `I'm a results-driven software engineer and entrepreneur with expertise in full-stack development, cloud computing, and financial technology. As the Owner-Operator of P & S Shop, I've successfully built and scaled a profitable e-commerce store.

When I'm not building innovative systems or analyzing market trends, I enjoy skiing and exploring emerging technologies in business and financial systems. My approach combines technical expertise with business acumen to deliver scalable, user-centric solutions.`,

  profileImage: {
    src: profileImageUrl,
    alt: 'Brandon Kohler - Software Engineer and Entrepreneur'
  },

  interests: [
    {
      name: 'Artificial Intelligence',
      icon: Brain,
      description: 'Exploring advanced AI systems, machine learning models, and their practical applications in solving real-world problems.'
    },
    {
      name: 'Financial Technology',
      icon: Coins,
      description: 'Developing innovative solutions in financial systems, trading platforms, and blockchain technology.'
    },
    {
      name: 'Software Engineering',
      icon: Code,
      description: 'Building scalable, maintainable systems using modern architectures and best practices.'
    },
    {
      name: 'E-commerce Systems',
      icon: ShoppingCart,
      description: 'Creating and optimizing digital commerce platforms with focus on user experience and conversion.'
    }
  ],

  process: [
    {
      title: 'Collaborative Discovery',
      icon: Users,
      description: 'Starting with deep stakeholder engagement to understand core needs and objectives.',
      benefits: [
        'Aligned project vision and goals',
        'Clear success metrics',
        'Stakeholder buy-in from day one'
      ]
    },
    {
      title: 'Strategic Planning',
      icon: Lightbulb,
      description: 'Developing comprehensive roadmaps with focus on scalability and future growth.',
      benefits: [
        'Risk mitigation strategies',
        'Resource optimization',
        'Clear milestone definition'
      ]
    },
    {
      title: 'Agile Execution',
      icon: Target,
      description: 'Implementing solutions using iterative development with continuous feedback.',
      benefits: [
        'Rapid prototyping and validation',
        'Flexible adaptation to changes',
        'Regular delivery of value'
      ]
    },
    {
      title: 'Continuous Evolution',
      icon: Workflow,
      description: 'Maintaining and improving systems based on performance data and user feedback.',
      benefits: [
        'Performance optimization',
        'Feature enhancement',
        'Proactive maintenance'
      ]
    }
  ],

  values: {
    title: 'Development Philosophy',
    description: 'My approach to software development is built on four key principles that ensure consistent delivery of high-quality solutions.',
    points: [
      'Open Communication: Regular updates and transparent discussions about progress and challenges.',
      'Quality First: Emphasis on clean code, comprehensive testing, and robust documentation.',
      'User-Centric: Solutions designed with end-users in mind, prioritizing usability and experience.',
      'Data-Driven: Decisions backed by metrics and performance data for optimal outcomes.'
    ]
  }
}; 