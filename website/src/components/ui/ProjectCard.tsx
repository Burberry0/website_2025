import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectCardProps } from '../../types';
import { cn } from '../../lib/utils';
import Button from './Button';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, className }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ y: 0 }}
      onClick={() => onClick(project)}
      className={cn(
        'group cursor-pointer bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {project.image ? (
          <div className="absolute inset-0 p-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">
              {project.category.toUpperCase()}
            </span>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <div className={cn(
            'px-3 py-1 rounded-full text-sm font-medium',
            project.status === 'completed' ? 'bg-green-100 text-green-800' :
            project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          )}>
            {project.status === 'in-progress' ? 'In Progress' : 
             project.status === 'completed' ? 'Completed' : 
             'Planned'}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={cn(
                  'px-2 py-1 rounded-md text-xs font-medium',
                  tech.color || 'bg-gray-100 text-gray-800'
                )}
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              className="bg-white/90 hover:bg-white"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
              }}
              className="bg-white/90 hover:bg-white"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 