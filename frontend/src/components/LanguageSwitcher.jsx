import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = ({ isDarkText = false, showName = false }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
          isDarkText
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200/50'
            : 'bg-white/10 hover:bg-white/25 text-white'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-xl">{currentLang?.flag}</span>
        <span className={`text-sm font-medium ${showName ? 'inline' : 'hidden md:inline'}`}>
          {currentLang?.name}
        </span>
        <FaGlobe className="text-sm opacity-80" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                language === lang.code
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ x: 5 }}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
