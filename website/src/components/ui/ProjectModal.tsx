import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, TrendingUp, CheckCircle, AlertCircle, Target } from 'lucide-react';
import { ProjectModalProps } from '../../types';
import { cn } from '../../lib/utils';
import Button from './Button';

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    planned: 'bg-gray-100 text-gray-800'
  };

  const categoryColors = {
    fullstack: 'bg-purple-100 text-purple-800',
    backend: 'bg-orange-100 text-orange-800',
    frontend: 'bg-blue-100 text-blue-800',
    devops: 'bg-red-100 text-red-800',
    mobile: 'bg-green-100 text-green-800'
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={cn('px-3 py-1 rounded-full text-sm font-medium', categoryColors[project.category])}>
                  {project.category}
                </span>
                <span className={cn('px-3 py-1 rounded-full text-sm font-medium', statusColors[project.status])}>
                  {project.status}
                </span>
                {project.featured && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600 font-medium mb-3">
                {project.subtitle}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {project.timeline}
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-4">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="md"
                onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="p-6 space-y-8">
            {/* Project Image */}
            {project.image ? (
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <span className="text-gray-500 font-medium text-lg">{project.category.toUpperCase()} PROJECT</span>
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Metrics */}
            {project.metrics.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics & Impact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      {metric.impact && (
                        <div className="text-sm text-gray-500">{metric.impact}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium text-center',
                      tech.color || 'bg-gray-100 text-gray-800'
                    )}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                  Key Challenges & Solutions
                </h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            {project.outcomes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Key Outcomes & Results
                </h3>
                <div className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal; 