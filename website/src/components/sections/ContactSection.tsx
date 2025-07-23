import React from 'react';
import { motion } from 'framer-motion';
import { ContactSectionProps } from '../../types';
import { cn } from '../../lib/utils';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import ContactForm from '../ui/ContactForm';

const ContactSection: React.FC<ContactSectionProps> = ({ data, className }) => {
  const handleSocialClick = (url: string) => {
    if (url === '#') {
      // For X/Twitter placeholder
      alert('Twitter/X link coming soon!');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800 border-green-200';
      case 'busy': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'unavailable': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section
      id="contact"
      className={cn('py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white', className)}
      aria-label="Contact information"
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
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {data.subtitle}
            </p>

            {/* Availability Status */}
            <div className={cn(
              'inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium',
              getAvailabilityColor(data.availability.status)
            )}>
              <div className={cn(
                'w-2 h-2 rounded-full mr-2',
                data.availability.status === 'available' ? 'bg-green-600' :
                data.availability.status === 'busy' ? 'bg-yellow-600' : 'bg-red-600'
              )} />
              {data.availability.message}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect with Me</h3>
                <div className="space-y-4">
                  {data.socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.id}
                        onClick={() => handleSocialClick(link.url)}
                        className="w-full flex items-center p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="ml-4 text-left">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {link.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <motion.div
                        className="w-5 h-5 text-blue-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{data.contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <motion.div
                        className="w-5 h-5 text-blue-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium text-gray-900">{data.contactInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <motion.div
                        className="w-5 h-5 text-blue-600"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600">Timezone</p>
                      <p className="font-medium text-gray-900">{data.contactInfo.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 