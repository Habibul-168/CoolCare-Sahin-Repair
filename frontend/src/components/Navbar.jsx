import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt, FaSnowflake, FaTools } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.services, path: '/services' },
    { name: 'Our Work', path: '/works' },
    { name: 'About', path: '/about' },
    { name: t.contact, path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Custom Logo Design */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {/* Logo Container */}
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary-light rounded-xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ boxShadow: '0 20px 40px rgba(30, 58, 138, 0.4)' }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                
                {/* Logo Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Snowflake (AC) */}
                    <motion.div
                      className="absolute -top-1 -left-1"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <FaSnowflake className="text-white text-xs" />
                    </motion.div>

                    {/* Bolt (Electrical) */}
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <FaBolt className="text-yellow-300 text-xs" />
                    </motion.div>

                    {/* Tools (Center) */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity
                      }}
                    >
                      <FaTools className="text-white text-xl" />
                    </motion.div>
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </motion.div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-lg opacity-0 group-hover:opacity-70"
                transition={{ duration: 0.3 }}
              />

              {/* Click ripple effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-xl"
                initial={{ scale: 1, opacity: 0 }}
                whileTap={{ scale: 1.5, opacity: [0.5, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <motion.span 
                className={`text-xl md:text-2xl font-bold ${
                  scrolled || !isHomePage
                    ? 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'
                    : 'text-white drop-shadow-lg'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  letterSpacing: '0.05em'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                CoolCore
              </motion.span>
              <motion.span 
                className={`text-xs font-medium -mt-1 ${
                  scrolled || !isHomePage ? 'text-gray-600' : 'text-white/90 drop-shadow'
                }`}
                whileHover={{ x: 3 }}
              >
                Sahin Repair
              </motion.span>
            </div>

            {/* Hover background effect */}
            <motion.div
              className={`absolute inset-0 rounded-lg -z-10 ${
                scrolled || !isHomePage 
                  ? 'bg-gradient-to-r from-primary/5 to-accent/5' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2"
              >
                <motion.span
                  className={`relative z-10 font-medium transition-colors ${
                    location.pathname === link.path
                      ? scrolled || !isHomePage ? 'text-primary' : 'text-white font-bold drop-shadow-lg'
                      : scrolled || !isHomePage ? 'text-gray-700' : 'text-white/90 drop-shadow'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {link.name}
                </motion.span>

                {/* Active indicator */}
                {location.pathname === link.path && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      scrolled || !isHomePage 
                        ? 'bg-gradient-to-r from-primary to-accent' 
                        : 'bg-white shadow-lg'
                    }`}
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover background */}
                <AnimatePresence>
                  {hoveredLink === index && (
                    <motion.div
                      className={`absolute inset-0 rounded-lg -z-10 ${
                        scrolled || !isHomePage 
                          ? 'bg-gradient-to-r from-primary/10 to-accent/10' 
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                {/* Click ripple */}
                <motion.div
                  className={`absolute inset-0 rounded-lg border ${
                    scrolled || !isHomePage ? 'border-primary/30' : 'border-white/30'
                  }`}
                  initial={{ scale: 1, opacity: 0 }}
                  whileTap={{ scale: 1.5, opacity: [0.5, 0] }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            ))}

            <LanguageSwitcher isDarkText={scrolled || !isHomePage} />

            <motion.a
              href="tel:+916294033057"
              className={`relative overflow-hidden ml-4 px-6 py-3 rounded-lg font-bold ${
                scrolled || !isHomePage
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              }`}
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                y: -2
              }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <motion.span className="relative z-10">{t.bookNow}</motion.span>
              
              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.5 }}
              />

              {/* Click wave effect */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-lg relative ${
              scrolled || !isHomePage ? '' : 'bg-white/10 backdrop-blur-sm'
            }`}
            aria-label="Toggle menu"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: scrolled || !isHomePage ? 'rgba(30, 58, 138, 0.1)' : 'rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <motion.span 
                className={`block h-0.5 w-full rounded-full ${
                  scrolled || !isHomePage ? 'bg-primary' : 'bg-white'
                }`}
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              />
              <motion.span 
                className={`block h-0.5 w-full rounded-full ${
                  scrolled || !isHomePage ? 'bg-primary' : 'bg-white'
                }`}
                animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className={`block h-0.5 w-full rounded-full ${
                  scrolled || !isHomePage ? 'bg-primary' : 'bg-white'
                }`}
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              />
            </div>

            {/* Click ripple */}
            <motion.div
              className={`absolute inset-0 rounded-lg border-2 ${
                scrolled || !isHomePage ? 'border-primary/30' : 'border-white/30'
              }`}
              initial={{ scale: 1, opacity: 0 }}
              whileTap={{ scale: 1.5, opacity: [0.5, 0] }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
              className={`md:hidden overflow-hidden mt-4 rounded-xl ${
                scrolled || !isHomePage ? 'bg-white' : 'bg-white/10 backdrop-blur-lg'
              }`}
            >
              <motion.div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ 
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 300
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className={`py-3 px-4 rounded-lg font-medium ${
                          location.pathname === link.path
                            ? scrolled || !isHomePage 
                              ? 'text-primary bg-primary/10' 
                              : 'text-white bg-white/20'
                            : scrolled || !isHomePage 
                              ? 'text-gray-700' 
                              : 'text-white'
                        }`}
                        whileHover={{ 
                          x: 10,
                          backgroundColor: scrolled || !isHomePage ? 'rgba(30, 58, 138, 0.05)' : 'rgba(255, 255, 255, 0.15)',
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        {link.name}
                        
                        {/* Arrow indicator on hover */}
                        <motion.span
                          className="inline-block ml-2"
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Language Switcher */}
                <motion.div 
                  className="px-4 py-2 flex justify-center border-t border-gray-200/10 mt-2 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <LanguageSwitcher isDarkText={scrolled || !isHomePage} showName={true} />
                </motion.div>
                
                <motion.a 
                  href="tel:+916294033057" 
                  className={`block text-center mt-4 relative overflow-hidden mx-2 px-6 py-3 rounded-lg font-bold ${
                    scrolled || !isHomePage
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary'
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t.bookNow}</span>
                  
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{ scale: 2, opacity: [0.5, 0] }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
