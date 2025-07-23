import { ExperienceData } from '../types';
import { 
  Code, Database, Cloud, Server, Cpu, Monitor, 
  BarChart, TrendingUp, Award, Users, Target 
} from 'lucide-react';

export const experienceData: ExperienceData = {
  experiences: [
    {
      id: 'owner-operator-ps-shop',
      title: 'Owner - Operator',
      company: 'P & S Shop',
      location: 'Philadelphia, PA',
      startDate: '2023-09',
      endDate: 'Present',
      current: true,
      type: 'full-time',
      description: 'Built and scaled a profitable e-commerce business from 0-600k in net sales within the first year, lead cross-functional teams and built smart business systems to help optimize business practices.',
      achievements: [
        'Built and scaled a profitable e-commerce platform from conception to deployment, leading cross-functional collaboration and implementing automated systems that improved operational efficiency by 40%',
        'Developed a real-time data pipeline using Python and web scraping technologies to integrate Amazon\'s SP-API, enabling dynamic pricing decisions that reduced inventory response times by 60%',
        'Automated task delegation and scheduling systems, demonstrating ownership of complex technical challenges and end-to-end product lifecycle management'
      ],
      technologies: ['Python', 'Amazon SP-API', 'Web Scraping', 'Data Pipeline', 'E-commerce', 'Automation', 'Team Building', 'Business Development'],
      metrics: [
        { label: 'Operational Efficiency', value: '40%', improvement: 'improvement' },
        { label: 'Inventory Response Time', value: '60%', improvement: 'reduction' },
        { label: 'Gross Sales', value: '$1,000,000', improvement: 'YOY growth' },
      ]
    },
    {
      id: 'it-sector-head-wcig',
      title: 'Information Technology Sector Head',
      company: 'West Chester Investment Group',
      location: 'West Chester, PA',
      startDate: '2022-09',
      endDate: '2023-05',
      current: false,
      type: 'full-time',
      description: 'Led a team of 8 financial analysts through data-driven decision making, conducting weekly technical workshops and implementing advanced analytics.',
      achievements: [
        'Led a team of 8 financial analysts through data-driven decision making, conducting weekly technical workshops that improved team proficiency in quantitative analysis by 35%',
        'Implemented advanced analytics using Monte Carlo simulations, Value at Risk (VaR) modeling, and NLP sentiment analysis to process large financial datasets and inform investment strategies',
        'Collaborated with non-technical stakeholders to translate complex data insights into actionable business decisions, contributing to 15% improvement in portfolio risk-adjusted returns',
        'Built automated reporting systems that processed thousands of data points daily, demonstrating ability to handle large-scale data operations'
      ],
      technologies: ['Monte Carlo Simulations', 'VaR Modeling', 'NLP', 'Python', 'Financial Analytics', 'Data Visualization'],
      metrics: [
        { label: 'Team Proficiency', value: '35%', improvement: 'improvement' },
        { label: 'Risk-Adjusted Returns', value: '15%', improvement: 'improvement' },
        { label: 'Team Size', value: '8', improvement: 'analysts led' },
        { label: 'Data Processing', value: '1000s', improvement: 'daily data points' }
      ]
    }
  ],
  
  education: [
    {
      id: 'wcu-cs',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'West Chester University',
      location: 'West Chester, PA',
      startDate: '2019-08',
      endDate: '2023-12',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Machine Learning',
        'Financial Technology'
      ]
    }
  ],

  skills: [
    // Languages
    { name: 'Python', category: 'languages', proficiency: 90, yearsOfExperience: 4, icon: Code },
    { name: 'JavaScript/TypeScript', category: 'languages', proficiency: 85, yearsOfExperience: 2, icon: Code },
    { name: 'Java', category: 'languages', proficiency: 80, yearsOfExperience: 3, icon: Code },
    { name: 'R', category: 'languages', proficiency: 75, yearsOfExperience: 2, icon: BarChart },
    
    // Frameworks & Libraries
    { name: 'React', category: 'frameworks', proficiency: 90, yearsOfExperience: 3, icon: Monitor },
    { name: 'Node.js', category: 'frameworks', proficiency: 85, yearsOfExperience: 3, icon: Server },
    { name: 'FastAPI', category: 'frameworks', proficiency: 80, yearsOfExperience: 2, icon: Server },
    
    // Databases
    { name: 'PostgreSQL', category: 'databases', proficiency: 85, yearsOfExperience: 3, icon: Database },
    
    // Cloud & Tools
    { name: 'AWS', category: 'cloud', proficiency: 80, yearsOfExperience: 2, icon: Cloud },
    { name: 'Docker', category: 'tools', proficiency: 85, yearsOfExperience: 2, icon: Cloud },
    { name: 'Kubernetes', category: 'tools', proficiency: 75, yearsOfExperience: 2, icon: Cloud },
    { name: 'Jenkins', category: 'tools', proficiency: 70, yearsOfExperience: 2, icon: Cpu },
    { name: 'Apache Spark', category: 'tools', proficiency: 75, yearsOfExperience: 1, icon: Cpu },
    { name: 'Apache Kafka', category: 'tools', proficiency: 70, yearsOfExperience: 1, icon: Cpu },
    
    // Specialized Tools
    { name: 'Bloomberg Terminal', category: 'specialized', proficiency: 85, yearsOfExperience: 2, icon: TrendingUp },
    { name: 'SPSS', category: 'specialized', proficiency: 75, yearsOfExperience: 2, icon: BarChart },
  ],

  certifications: [
    {
      id: 'aws-cloud-practitioner',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      dateObtained: '2023-06',
      expirationDate: '2026-06',
      verificationUrl: 'https://aws.amazon.com/certification/'
    },
    {
      id: 'google-data-analytics',
      name: 'Google Data Analytics Certificate',
      issuer: 'Google',
      dateObtained: '2023-03',
      verificationUrl: 'https://grow.google/certificates/data-analytics/'
    }
  ]
}; 