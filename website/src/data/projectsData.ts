import { Project } from '../types';
import { projectImages } from '../assets/projects';

export const projectsData: Project[] = [
  {
    id: 'financial-portfolio-app',
    title: 'Financial Portfolio Management',
    subtitle: 'Full-Stack Personal Finance Platform',
    description: 'A comprehensive web application for personal finance management and investment portfolio tracking with real-time market data.',
    longDescription: 'Built a complete financial management ecosystem featuring spending tracking, savings planning, and portfolio management. The application provides unified dashboard analytics, CSV-based expense imports, questionnaire-driven investment strategies, and real-time stock trading capabilities.',
    image: projectImages['financial-app'],
    technologies: [
      { name: 'React', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
      { name: 'TypeScript', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
      { name: 'Chart.js', category: 'frontend', color: 'bg-purple-100 text-purple-800' },
      { name: 'FastAPI', category: 'backend', color: 'bg-green-100 text-green-800' },
      { name: 'PostgreSQL', category: 'database', color: 'bg-indigo-100 text-indigo-800' },
      { name: 'SQLAlchemy', category: 'backend', color: 'bg-green-100 text-green-800' },
      { name: 'OAuth2/JWT', category: 'backend', color: 'bg-red-100 text-red-800' }
    ],
    metrics: [
      { label: 'Data Processing', value: '100K+ daily transactions', impact: 'Real-time sync' },
      { label: 'User Experience', value: '65% faster research', impact: 'Reduced analysis time' },
      { label: 'Data Accuracy', value: '99.8% uptime', impact: 'Reliable tracking' }
    ],
    timeline: 'September 2023 – Present',
    status: 'completed',
    githubUrl: 'https://github.com/example/financial-app',
    liveUrl: 'https://financial-app.example.com',
    featured: true,
    category: 'fullstack',
    challenges: [
      'Data Persistence: Implemented React Context API synchronized with backend APIs for cross-component consistency',
      'Real-Time Updates: Developed useEffect hooks with async FastAPI endpoints for dynamic data flow',
      'Complex State Management: Created modular components and reusable hooks for scalability'
    ],
    outcomes: [
      'Unified dashboard for finances and portfolio with real-time stock charts',
      'Automated expense tracking via CSV uploads with category visualizations',
      'Questionnaire-driven retirement planning with compound interest projections',
      'Portfolio management with buy/sell functionality and performance metrics'
    ]
  },
  {
    id: 'data-intelligence-platform',
    title: 'Real-Time Data Intelligence Platform',
    subtitle: 'High-Throughput Web Scraping & Analytics',
    description: 'Engineered a scalable data pipeline monitoring 15+ e-commerce platforms, processing 100K+ daily data points for market intelligence.',
    longDescription: 'Built an enterprise-grade web scraping and analytics platform that monitors competitor pricing, inventory, and market trends across major e-commerce platforms. The system provides real-time dashboards, predictive analytics, and automated repricing strategies.',
    image: projectImages['data-platform'],
    technologies: [
      { name: 'Python', category: 'backend', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'Selenium', category: 'tools', color: 'bg-gray-100 text-gray-800' },
      { name: 'Elasticsearch', category: 'database', color: 'bg-yellow-100 text-yellow-800' },
      { name: 'PostgreSQL', category: 'database', color: 'bg-indigo-100 text-indigo-800' },
      { name: 'Pandas', category: 'backend', color: 'bg-green-100 text-green-800' },
      { name: 'Docker', category: 'tools', color: 'bg-blue-100 text-blue-800' },
      { name: 'AWS ECS', category: 'cloud', color: 'bg-orange-100 text-orange-800' }
    ],
    metrics: [
      { label: 'Data Volume', value: '100K+ daily data points', impact: 'Real-time market intelligence' },
      { label: 'Revenue Impact', value: '$320K+ new revenue', impact: 'From trend analysis' },
      { label: 'Margin Growth', value: '22% improvement', impact: 'Dynamic repricing' },
      { label: 'Cost Reduction', value: '30% inventory savings', impact: 'Predictive alerts' }
    ],
    timeline: 'September 2023 – Present',
    status: 'in-progress',
    featured: true,
    category: 'backend',
    challenges: [
      'High-throughput data processing: Built Python/Selenium pipeline handling 15+ platforms simultaneously',
      'Real-time analytics: Deployed Elasticsearch for millisecond-latency dashboards during peak traffic',
      'Scalability: Implemented Docker/AWS ECS with auto-scaling for 99.8% uptime during Prime Day'
    ],
    outcomes: [
      'Monitored Buy Box positioning and review velocity across Amazon, Walmart, eBay',
      'Automated ETL workflows transforming raw HTML into actionable pricing insights',
      'Achieved 22% margin growth through dynamic repricing reactions to competitor changes',
      'Identified 8 high-opportunity niches generating $320K+ in new revenue streams'
    ]
  },
  {
    id: 'microservices-platform',
    title: 'Microservices Deployment Platform',
    subtitle: 'Cloud-Native DevOps Automation',
    description: 'Comprehensive CI/CD platform managing 50+ microservices with Kubernetes orchestration, reducing deployment time by 70%.',
    longDescription: 'Designed and implemented a complete DevOps platform featuring end-to-end CI/CD automation, cloud-native orchestration, and comprehensive observability. The platform serves 12 development teams with self-service capabilities and enterprise-grade security.',
    image: projectImages['devops-platform'],
    technologies: [
      { name: 'React', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
      { name: 'Node.js', category: 'backend', color: 'bg-green-100 text-green-800' },
      { name: 'Docker', category: 'tools', color: 'bg-blue-100 text-blue-800' },
      { name: 'Kubernetes', category: 'cloud', color: 'bg-blue-100 text-blue-800' },
      { name: 'Jenkins', category: 'tools', color: 'bg-red-100 text-red-800' },
      { name: 'AWS EKS', category: 'cloud', color: 'bg-orange-100 text-orange-800' },
      { name: 'Terraform', category: 'tools', color: 'bg-purple-100 text-purple-800' },
      { name: 'Prometheus', category: 'tools', color: 'bg-orange-100 text-orange-800' }
    ],
    metrics: [
      { label: 'Deployment Speed', value: '70% faster', impact: 'Reduced from hours to minutes' },
      { label: 'Operational Savings', value: '15+ hrs/week', impact: 'Manual work eliminated' },
      { label: 'Cost Optimization', value: '35% reduction', impact: 'Cloud resource efficiency' },
      { label: 'Developer Productivity', value: '5 days → 2 hours', impact: 'Onboarding time' }
    ],
    timeline: 'January 2023 – May 2023',
    status: 'completed',
    featured: true,
    category: 'devops',
    challenges: [
      'Complex orchestration: Deployed 50+ microservices on AWS EKS with Helm charts and Istio service mesh',
      'Infrastructure automation: Managed cloud resources via Terraform, reducing provisioning from 8 hours to 15 minutes',
      'Security integration: Implemented OPA policies and Trivy scanning, blocking 50+ high-risk deployments'
    ],
    outcomes: [
      'End-to-end Jenkins pipeline with automated testing, containerization, and Kubernetes deployment',
      'Self-service portal enabling developers to manage environments independently',
      'Centralized monitoring with Prometheus/Grafana tracking 200+ metrics across services',
      'Blue/green deployment strategy achieving 99.99% uptime with zero-downtime releases'
    ]
  }
];

// Helper function to get unique technologies for filtering
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projectsData.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech.name));
  });
  return Array.from(techSet).sort();
};

// Helper function to get unique categories for filtering
export const getAllCategories = (): Project['category'][] => {
  const categorySet = new Set<Project['category']>();
  projectsData.forEach(project => categorySet.add(project.category));
  return Array.from(categorySet);
}; 