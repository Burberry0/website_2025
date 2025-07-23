import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavigationProps } from '../../types';
import { useScrollspy } from '../../hooks/useScrollspy';
import { useNavigation } from '../../hooks/useNavigation';
import { cn } from '../../lib/utils';

const Navigation: React.FC<NavigationProps> = ({
  logo,
  logoText = "Portfolio",
  navItems,
  className,
  onNavItemClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get section IDs for scrollspy
  const sectionIds = navItems.map(item => item.href.replace('#', ''));
  const activeSection = useScrollspy(sectionIds, 100);
  
  const { handleNavItemClick } = useNavigation();

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a nav item
  const handleItemClick = (item: any) => {
    setIsMenuOpen(false);
    handleNavItemClick(item);
    onNavItemClick?.(item);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent',
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => handleItemClick({ id: 'home', label: 'Home', href: '#hero' })}
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg p-1"
              aria-label="Go to homepage"
            >
              {logo ? (
                <img 
                  src={logo} 
                  alt={`${logoText} logo`} 
                  className="h-8 w-auto"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {logoText.charAt(0)}
                  </span>
                </div>
              )}
              <span className={cn(
                'text-xl font-bold transition-colors',
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              )}>
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                    isActive
                      ? 'text-blue-600'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-100/80'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Fixed AnimatePresence for menu icon */}
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 180, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </div>
          </motion.button>
        </div>

        {/* Fixed Mobile Menu - using conditional rendering instead of AnimatePresence */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
            role="menu"
          >
            <div className="py-4 space-y-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.button
                    key={item.id}
                    custom={index}
                    variants={menuItemVariants}
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      'w-full text-left px-4 py-3 text-base font-medium transition-colors rounded-lg mx-2',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    )}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation; 