import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { ProjectFilterProps } from '../../types';
import { cn } from '../../lib/utils';
import Button from './Button';

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  technologies,
  categories,
  selectedTechnology,
  selectedCategory,
  onTechnologyChange,
  onCategoryChange
}) => {
  const categoryLabels = {
    fullstack: 'Full-Stack',
    backend: 'Backend',
    frontend: 'Frontend',
    devops: 'DevOps',
    mobile: 'Mobile'
  };

  const hasActiveFilters = selectedTechnology || selectedCategory;

  const clearAllFilters = () => {
    onTechnologyChange(null);
    onCategoryChange(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Projects</h3>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-600 hover:text-gray-900"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
              !selectedCategory
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Technology</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTechnologyChange(null)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
              !selectedTechnology
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            All Technologies
          </button>
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechnologyChange(tech)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                selectedTechnology === tech
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFilter; 