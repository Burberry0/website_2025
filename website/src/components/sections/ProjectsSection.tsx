import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectsProps, Project } from '../../types';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import { cn } from '../../lib/utils';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';

const ProjectsSection: React.FC<ProjectsProps> = ({ projects, className }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get featured projects
  const featuredProjects = useMemo(() => 
    projects.filter(project => project.featured),
    [projects]
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects"
      className={cn('py-16 md:py-24 bg-gray-50', className)}
      aria-label="Projects showcase"
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
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of full-stack applications, data platforms, and DevOps solutions 
              built with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={fadeInUp}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  custom={index}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    onClick={handleProjectClick}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ProjectsSection; 