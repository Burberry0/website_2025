import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HeroProps } from '../../types';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '../../lib/animations';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const HeroSection: React.FC<HeroProps> = ({
  name,
  title,
  description,
  profileImage,
  credibilityIndicators,
  className
}) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className={cn(
        'min-h-screen flex items-center justify-center relative',
        'bg-white py-16 md:py-24',
        className
      )}
      aria-label="Hero section with introduction and key achievements"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Column - Content */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left space-y-8 md:space-y-10"
            variants={slideInFromLeft}
          >
            {/* Name and Title */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Hi, I'm{' '}
                <span className="text-blue-600 inline-block">
                  {name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600">
                {title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Credibility Indicators */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-4"
            >
              {credibilityIndicators.map((indicator) => {
                const Icon = indicator.icon;
                return (
                  <motion.div
                    key={indicator.id}
                    variants={fadeInUp}
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {indicator.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {indicator.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-semibold px-8 py-4 text-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            variants={slideInFromRight}
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                className="w-[320px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 shadow-2xl"
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt={`Professional photo of ${name}`}
                      className="w-full h-full object-cover object-[40%_top] scale-[1.15]"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-bold text-gray-400">
                        {name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Floating indicators */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Available for hire
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 