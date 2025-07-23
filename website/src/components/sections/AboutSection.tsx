import React from 'react';
import { motion } from 'framer-motion';
import { AboutSectionProps } from '../../types';
import { cn } from '../../lib/utils';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const AboutSection: React.FC<AboutSectionProps> = ({ data, className }) => {
  return (
    <section
      id="about"
      className={cn('py-16 md:py-24 bg-white', className)}
      aria-label="About me"
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

          
          {/* Interests Grid */}
          <motion.div variants={fadeInUp} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Areas of Interest
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.name}
                    variants={fadeInUp}
                    custom={index}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 ml-3">
                        {interest.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 