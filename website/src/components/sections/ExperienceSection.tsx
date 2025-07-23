import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';
import { ExperienceProps } from '../../types';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { cn } from '../../lib/utils';
import Timeline from '../ui/Timeline';
import SkillsVisualization from '../ui/SkillsVisualization';

const ExperienceSection: React.FC<ExperienceProps> = ({ data, className }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'skills'>('timeline');

  const tabs = [
    { 
      key: 'timeline', 
      label: 'Professional Journey', 
      icon: Briefcase,
      description: 'Experience & Education Timeline'
    },
    { 
      key: 'skills', 
      label: 'Technical Skills', 
      icon: TrendingUp,
      description: 'Skills & Certifications'
    }
  ];

  const experienceStats = {
    totalExperience: data.experiences.reduce((total, exp) => {
      const start = new Date(exp.startDate);
      const end = exp.current ? new Date() : new Date(exp.endDate);
      const years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
      return total + years;
    }, 0),
    companiesWorked: data.experiences.length,
    skillsCount: data.skills.length,
    certificationsCount: data.certifications.length
  };

  return (
    <section 
      id="experience"
      className={cn('py-16 md:py-24 bg-white', className)}
      aria-label="Professional experience and skills"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey through technical leadership, innovative solutions, and continuous learning 
              in software engineering and financial technology.
            </p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {Math.ceil(experienceStats.totalExperience)}+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {experienceStats.companiesWorked}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {experienceStats.skillsCount}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Technical Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {experienceStats.certificationsCount}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Certifications</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-2">
              <div className="grid grid-cols-2 gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as 'timeline' | 'skills')}
                      className={cn(
                        'flex items-center justify-center space-x-2 px-6 py-4 rounded-xl transition-all',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                        activeTab === tab.key
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="text-left">
                        <div className="font-semibold">{tab.label}</div>
                        <div className={cn(
                          'text-xs',
                          activeTab === tab.key ? 'text-blue-100' : 'text-gray-500'
                        )}>
                          {tab.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div variants={fadeInUp}>
            {activeTab === 'timeline' ? (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                    Professional Journey
                  </h3>
                  <p className="text-gray-600">
                    Detailed timeline of professional experience and educational background with 
                    expandable details for each role.
                  </p>
                </div>
                
                <Timeline 
                  experiences={data.experiences} 
                  education={data.education}
                  className="mb-8"
                />
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                    Technical Skills & Certifications
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive overview of technical competencies, proficiency levels, 
                    and professional certifications.
                  </p>
                </div>
                
                <SkillsVisualization 
                  skills={data.skills}
                  certifications={data.certifications}
                />
              </div>
            )}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 