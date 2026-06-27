import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import API from '../utils/api';
import { FaSnowflake, FaFan, FaThermometerHalf, FaWrench, FaTint, FaCogs, FaBolt, FaLightbulb, FaPlug, FaHome, FaTools, FaShieldAlt, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Services = () => {
  const [services, setServices] = useState([]);
  const { language } = useLanguage();
  const t = translations[language].services;

  const defaultServices = [
    { 
      icon: <FaSnowflake />, 
      title: 'AC Installation', 
      description: 'Professional installation of all types of air conditioners including Split AC, Window AC, Cassette AC, and Central AC systems. Complete setup with proper mounting, gas charging, and testing.',
      color: 'from-blue-500 to-cyan-500',
      features: ['All AC types', 'Wall mounting', 'Gas charging', 'Testing & warranty']
    },
    { 
      icon: <FaFan />, 
      title: 'AC Repair & Service', 
      description: 'Comprehensive AC repair services covering cooling issues, compressor problems, PCB repair, and routine maintenance. Annual maintenance contracts available.',
      color: 'from-cyan-500 to-blue-600',
      features: ['Cooling issues', 'Compressor repair', 'PCB repair', 'AMC available']
    },
    { 
      icon: <FaThermometerHalf />, 
      title: 'AC Gas Charging', 
      description: 'Expert gas leakage detection, pressure testing, vacuum creation, and refrigerant gas refilling with R22, R410A, or R32 as per AC specifications.',
      color: 'from-blue-600 to-indigo-500',
      features: ['Leak detection', 'Pressure test', 'R22/R410A/R32', 'Vacuum & refill']
    },
    { 
      icon: <FaWrench />, 
      title: 'Refrigerator Repair', 
      description: 'Complete refrigerator repair services for single door, double door, and frost-free models. Fixing cooling issues, compressor problems, and thermostat malfunctions.',
      color: 'from-purple-500 to-pink-500',
      features: ['All fridge types', 'Cooling problems', 'Compressor fix', 'Thermostat repair']
    },
    { 
      icon: <FaTint />, 
      title: 'Fridge Gas Filling', 
      description: 'Refrigerant gas refilling service with proper leak testing and pressure checking. Solving cooling and freezing problems with genuine gas.',
      color: 'from-pink-500 to-rose-500',
      features: ['Gas refilling', 'Leak repair', 'Pressure check', 'Cooling restore']
    },
    { 
      icon: <FaCogs />, 
      title: 'Fridge Maintenance', 
      description: 'Complete fridge maintenance including door seal replacement, defrosting issues, ice formation problems, unusual noise fixing, and deep cleaning services.',
      color: 'from-rose-500 to-orange-500',
      features: ['Door seal', 'Noise issues', 'Ice problems', 'Deep cleaning']
    }
  ];

  useEffect(() => {
    API.get('/services')
      .then(res => {
        if (res.data.length > 0) {
          setServices(res.data.map((s, i) => ({
            ...s,
            icon: defaultServices[i]?.icon || <FaTools />,
            color: defaultServices[i]?.color || 'from-blue-500 to-cyan-500',
            features: defaultServices[i]?.features || []
          })));
        } else {
          setServices(defaultServices);
        }
      })
      .catch(() => setServices(defaultServices));
  }, []);

  const displayServices = services.length > 0 ? services : defaultServices;

  const getWhatsAppLink = (serviceName) => {
    const phoneNumber = '916294033057';
    const message = `Hi! I would like to book *${serviceName}*. Please provide more details.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const getCallLink = () => {
    return `tel:+916294033057`;
  };

  return (
    <div className="pt-28 pb-16">
      <motion.div 
        className="bg-gradient-to-r from-primary to-primary-light text-white py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                  {/* Gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10`}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`text-7xl mb-6 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3">
                    <motion.a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>{t.bookWhatsApp}</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 2, opacity: [0.5, 0] }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>

                    <motion.a
                      href={getCallLink()}
                      className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPhone className="text-sm" />
                      <span>{t.bookCall}</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 2, opacity: [0.5, 0] }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                  </div>

                  {/* Decorative corner */}
                  <motion.div 
                    className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30`}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
