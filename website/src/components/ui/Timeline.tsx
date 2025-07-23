import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, 
  GraduationCap, Award
} from 'lucide-react';
import { TimelineProps, Experience, Education } from '../../types';
import { cn } from '../../lib/utils';
import Button from './Button';

interface TimelineItem extends Experience {
  itemType: 'experience';
}

interface TimelineEducationItem extends Education {
  itemType: 'education';
}

type TimelineItemUnion = TimelineItem | TimelineEducationItem;

const Timeline: React.FC<TimelineProps> = ({ experiences, education, className }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Combine and sort all timeline items by date
  const timelineItems: TimelineItemUnion[] = [
    ...experiences.map(exp => ({ ...exp, itemType: 'experience' as const })),
    ...education.map(edu => ({ ...edu, itemType: 'education' as const }))
  ].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime(); // Most recent first
  });

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const formatDate = (dateStr: string) => {
    if (dateStr === 'Present') return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getTypeColor = (type: 'experience' | 'education') => {
    return type === 'experience' ? 'text-blue-600' : 'text-purple-600';
  };

  const getTypeBgColor = (type: 'experience' | 'education') => {
    return type === 'experience' ? 'bg-blue-50' : 'bg-purple-50';
  };

  const renderExperience = (item: TimelineItem) => {
    const isExpanded = expandedItems.has(item.id);
    
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-6"
      >
        {/* Experience Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className={cn('px-3 py-1 rounded-full text-sm font-medium', getTypeBgColor(item.itemType), getTypeColor(item.itemType))}>
                {item.itemType}
              </span>
              {item.current && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Current
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-lg font-medium text-gray-700 mb-2">
              {item.company}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(item.startDate)} - {formatDate(item.endDate)}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {item.location}
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Metrics Preview */}
        {item.metrics && item.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {item.metrics.slice(0, 4).map((metric, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-600">{metric.label}</div>
                {metric.improvement && (
                  <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Expand/Collapse Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleExpanded(item.id)}
          className="w-full justify-center text-gray-600 hover:text-blue-600"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show Details
            </>
          )}
        </Button>

        {/* Expandable Content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  const renderEducation = (item: TimelineEducationItem) => {
    const isExpanded = expandedItems.has(item.id);
    
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-6"
      >
        {/* Education Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <span className={cn('px-3 py-1 rounded-full text-sm font-medium', getTypeBgColor(item.itemType), getTypeColor(item.itemType))}>
                {item.itemType}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {item.degree}
            </h3>
            <p className="text-lg font-medium text-gray-700 mb-2">
              {item.institution}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(item.startDate)} - {formatDate(item.endDate)}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {item.location}
              </div>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        {item.relevantCourses && item.relevantCourses.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleExpanded(item.id)}
            className="w-full justify-center text-gray-600 hover:text-purple-600"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Show Coursework
              </>
            )}
          </Button>
        )}

        {/* Expandable Content */}
        {isExpanded && item.relevantCourses && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {item.relevantCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className={cn('relative', className)}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

      <div className="space-y-6">
        {timelineItems.map((item) => (
          <div key={item.id} className="relative pl-20">
            {/* Timeline Dot */}
            <div className={cn(
              'absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white shadow-lg',
              item.itemType === 'experience' ? 'bg-blue-500' : 'bg-purple-500'
            )} />
            
            {/* Timeline Item */}
            {item.itemType === 'experience' 
              ? renderExperience(item as TimelineItem)
              : renderEducation(item as TimelineEducationItem)
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 