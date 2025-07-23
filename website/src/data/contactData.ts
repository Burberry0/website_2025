import { Calendar, Linkedin, Twitter } from 'lucide-react';
import { ContactSectionData } from '../types';

export const contactData: ContactSectionData = {
  title: 'Let\'s Work Together',
  subtitle: 'Ready to bring your next project to life? I\'d love to hear about your ideas and discuss how we can create something amazing together.',
  
  availability: {
    status: 'available',
    message: 'Currently available for new projects and collaborations'
  },

  socialLinks: [
    {
      id: 'calendly',
      name: 'Schedule a Meeting',
      url: 'https://calendly.com/shopworldwide3000/new-meeting-1',
      icon: Calendar,
      description: 'Book a free consultation call'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brandon-kohler-1788391b7/',
      icon: Linkedin,
      description: 'Connect on LinkedIn'
    },
    {
      id: 'twitter',
      name: 'Twitter / X',
      url: '#', // Placeholder - update with your X/Twitter handle
      icon: Twitter,
      description: 'Follow me on X'
    }
  ],

  contactInfo: {
    email: 'brandonkohler2000@gmail.com', // TODO: Update with your actual email
    location: 'Remote / US-based',
    timezone: 'EST (UTC-5)'
  }
}; 