import React from 'react';
import { 
  Navigation, 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  ExperienceSection,
  ContactSection 
} from './components';
import { heroData } from './data/heroData';
import { navigationData } from './data/navigationData';
import { aboutData } from './data/aboutData';
import { projectsData } from './data/projectsData';
import { experienceData } from './data/experienceData';
import { contactData } from './data/contactData';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation {...navigationData} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection {...heroData} />
        
        {/* About Section */}
        <AboutSection data={aboutData} />
        
        {/* Projects Section */}
        <ProjectsSection projects={projectsData} />
        
        {/* Experience Section */}
        <ExperienceSection data={experienceData} />
        
        {/* Contact Section */}
        <ContactSection data={contactData} />
      </main>
    </div>
  );
}

export default App;
