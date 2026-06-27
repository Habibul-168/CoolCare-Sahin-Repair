import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaSnowflake, FaTools, FaBolt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].hero;
  
  // Desktop images (landscape)
  const desktopImages = [
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80',
    'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1920&q=80',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80'
  ];

  // Mobile images (portrait/square optimized)
  const mobileImages = [
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=1200&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1200&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=1200&fit=crop&q=80',
    'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=1200&fit=crop&q=80',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=1200&fit=crop&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=1200&fit=crop&q=80'
  ];

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  const floatingIcons = [
    { Icon: FaSnowflake, delay: 0, duration: 8, x: 20 },
    { Icon: FaTools, delay: 2, duration: 10, x: 70 },
    { Icon: FaBolt, delay: 4, duration: 9, x: 40 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen image slideshow background - extends behind navbar */}
      <div className="absolute inset-0 z-0" style={{ top: 0 }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentImage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt="Professional Technician Work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated floating icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {floatingIcons.map(({ Icon, delay, duration, x }, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            style={{ left: `${x}%` }}
            initial={{ y: '100vh', rotate: 0 }}
            animate={{ 
              y: '-100vh',
              rotate: 360 
            }}
            transition={{ 
              duration, 
              delay, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          >
            <Icon size={100} />
          </motion.div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="container-custom relative z-20 py-32 pt-40">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            {t.title}
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-4 text-white/95 drop-shadow-lg font-semibold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Specializing in AC installation & repair, refrigerator servicing, and complete electrical solutions. Fast response, genuine parts, affordable pricing.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a 
              href="tel:+916294033057" 
              className="bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{translations[language].nav.bookNow}</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            
            <motion.a 
              href="/contact" 
              className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl text-lg relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t.bookService}</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            
            <motion.a 
              href="https://wa.me/916294033057" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl flex items-center gap-3 text-lg relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">WhatsApp</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-12 justify-center text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div 
              className="text-center backdrop-blur-sm bg-white/10 px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-bold text-3xl mb-1">500+</p>
              <p className="text-white/90">{translations[language].stats.projects}</p>
            </motion.div>
            <motion.div 
              className="text-center backdrop-blur-sm bg-white/10 px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-bold text-3xl mb-1">24/7</p>
              <p className="text-white/90">{translations[language].common.emergency24}</p>
            </motion.div>
            <motion.div 
              className="text-center backdrop-blur-sm bg-white/10 px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="font-bold text-3xl mb-1">100%</p>
              <p className="text-white/90">Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentImage ? 1 : -1);
              setCurrentImage(index);
            }}
            className={`h-3 rounded-full transition-all backdrop-blur-sm ${
              index === currentImage 
                ? 'bg-white w-12 shadow-lg' 
                : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full z-30 text-white"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full z-30 text-white"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Floating badges */}
      <motion.div
        className="absolute top-24 right-8 bg-accent text-white px-6 py-3 rounded-full shadow-2xl z-30 hidden md:block"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{ scale: 1.1 }}
      >
        <p className="font-bold text-lg">AC Expert</p>
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 left-8 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-30 hidden md:block"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{ scale: 1.1 }}
      >
        <p className="font-bold text-lg">24/7 Available</p>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2 opacity-80">Scroll Down</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
