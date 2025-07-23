import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../../types';
import { cn } from '../../lib/utils';
import Button from './Button';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'contact_service',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'contact_form',
        templateParams
      );
      
      console.log('EmailJS Success:', response);
      console.log('Email sent successfully!');
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      console.log('Environment Variables:');
      console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
      console.log('Email failed to send');
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('bg-green-50 border border-green-200 rounded-2xl p-8 text-center', className)}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thanks for reaching out! I'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      {/* Name and Email Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
            )}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
            )}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company and Subject Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500',
              errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
            )}
          >
            <option value="">Select a subject</option>
            <option value="web-development">Web Development Project</option>
            <option value="fintech-consultation">FinTech Consultation</option>
            <option value="ai-implementation">AI Implementation</option>
            <option value="ecommerce-solution">E-commerce Solution</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none',
            errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
          )}
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            {submitError}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="w-full"
      >
        <Send className="w-5 h-5 mr-2" />
        
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
        
      </Button>
    </form>
  );
};

export default ContactForm; 