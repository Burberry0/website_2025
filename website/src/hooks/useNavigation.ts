import { useCallback } from 'react';
import { NavItem } from '../types';

export const useNavigation = () => {
  const scrollToSection = useCallback((href: string) => {
    // Remove the # from href to get the section id
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    
    if (section) {
      const navHeight = 80; // Height of the navigation bar
      const sectionTop = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavItemClick = useCallback((item: NavItem) => {
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(item.href);
    }
  }, [scrollToSection]);

  return {
    scrollToSection,
    handleNavItemClick
  };
}; 