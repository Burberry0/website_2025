import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Filter } from 'lucide-react';
import { SkillsVisualizationProps, Skill } from '../../types';
import { cn } from '../../lib/utils';
import { fadeInUp } from '../../lib/animations';

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ 
  skills, 
  certifications, 
  className 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  // Filter skills based on selected category
  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  // Category colors and styling
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'languages':
        return {
          color: 'bg-blue-500',
          lightColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          borderColor: 'border-blue-200',
          hoverColor: 'hover:bg-blue-50',
          label: 'Programming Languages'
        };
      case 'frameworks':
        return {
          color: 'bg-green-500',
          lightColor: 'bg-green-100',
          textColor: 'text-green-800',
          borderColor: 'border-green-200',
          hoverColor: 'hover:bg-green-50',
          label: 'Frameworks & Libraries'
        };
      case 'databases':
        return {
          color: 'bg-purple-500',
          lightColor: 'bg-purple-100',
          textColor: 'text-purple-800',
          borderColor: 'border-purple-200',
          hoverColor: 'hover:bg-purple-50',
          label: 'Databases'
        };
      case 'cloud':
        return {
          color: 'bg-orange-500',
          lightColor: 'bg-orange-100',
          textColor: 'text-orange-800',
          borderColor: 'border-orange-200',
          hoverColor: 'hover:bg-orange-50',
          label: 'Cloud Platforms'
        };
      case 'tools':
        return {
          color: 'bg-red-500',
          lightColor: 'bg-red-100',
          textColor: 'text-red-800',
          borderColor: 'border-red-200',
          hoverColor: 'hover:bg-red-50',
          label: 'Tools & Technologies'
        };
      case 'specialized':
        return {
          color: 'bg-indigo-500',
          lightColor: 'bg-indigo-100',
          textColor: 'text-indigo-800',
          borderColor: 'border-indigo-200',
          hoverColor: 'hover:bg-indigo-50',
          label: 'Specialized Tools'
        };
      default:
        return {
          color: 'bg-gray-500',
          lightColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          borderColor: 'border-gray-200',
          hoverColor: 'hover:bg-gray-50',
          label: category.charAt(0).toUpperCase() + category.slice(1)
        };
    }
  };

  const formatCertificationDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className={cn('space-y-8', className)}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            !selectedCategory
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          <Filter className="w-4 h-4 mr-2 inline" />
          All Skills
        </button>
        {categories.map((category) => {
          const config = getCategoryConfig(category);
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                selectedCategory === category
                  ? `${config.color} text-white shadow-md`
                  : `${config.lightColor} ${config.textColor} ${config.hoverColor}`
              )}
            >
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => {
          const config = getCategoryConfig(skill.category);
          const Icon = skill.icon;
          
          return (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={index}
              className={cn(
                'bg-white rounded-xl shadow-md border p-6 transition-all hover:shadow-lg',
                config.borderColor
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={cn('p-2 rounded-lg', config.lightColor)}>
                    {Icon && <Icon className={cn('w-5 h-5', config.textColor)} />}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                    <p className={cn('text-sm', config.textColor)}>
                      {getCategoryConfig(skill.category).label}
                    </p>
                  </div>
                </div>
                <div className="text-right">

                  <div className="text-xs text-gray-600">
                     {skill.yearsOfExperience} years exp
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={cn('h-full rounded-full', config.color)}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <motion.div variants={fadeInUp} className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Credentials
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                custom={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Award className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      {formatCertificationDate(cert.dateObtained)}
                    </div>
                    {cert.expirationDate && (
                      <div className="text-xs text-gray-500">
                        Expires: {formatCertificationDate(cert.expirationDate)}
                      </div>
                    )}
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {cert.issuer}
                </p>
                
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Verify Credential
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillsVisualization; 