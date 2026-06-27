import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import API from '../utils/api';
import { FaSnowflake, FaFan, FaThermometerHalf, FaWrench, FaTint, FaCogs, FaBolt, FaLightbulb, FaPlug, FaHome, FaTools, FaShieldAlt, FaCheckCircle, FaClock, FaStar, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const { language } = useLanguage();
  const t = translations[language].services;
  const tc = translations[language].common;

  const defaultServices = [
    { 
      icon: <FaSnowflake />, 
      title: 'AC Installation', 
      description: 'Professional installation of all AC types - Split, Window, Cassette, and Central AC systems',
      color: 'from-blue-500 to-cyan-500',
      features: ['All AC Types', 'Wall Mounting', 'Gas Charging'],
      price: '₹1,500',
      popular: false
    },
    { 
      icon: <FaFan />, 
      title: 'AC Repair & Service', 
      description: 'Complete AC repair, gas refilling, cooling issues, and annual maintenance contracts',
      color: 'from-cyan-500 to-blue-600',
      features: ['Cooling Issues', 'Gas Refill', 'AMC Available'],
      price: '₹500',
      popular: true
    },
    { 
      icon: <FaThermometerHalf />, 
      title: 'AC Gas Charging', 
      description: 'Gas leakage detection, vacuum, and refilling with genuine refrigerant gas',
      color: 'from-blue-600 to-indigo-500',
      features: ['Leak Detection', 'R22/R410A/R32', 'Warranty'],
      price: '₹1,200',
      popular: false
    },
    { 
      icon: <FaWrench />, 
      title: 'Refrigerator Repair', 
      description: 'Single door, double door, frost-free fridge repair and servicing',
      color: 'from-purple-500 to-pink-500',
      features: ['All Brands', 'Cooling Fix', 'Same Day'],
      price: '₹400',
      popular: true
    },
    { 
      icon: <FaTint />, 
      title: 'Fridge Gas Filling', 
      description: 'Cooling issues, compressor repair, gas refilling, and thermostat replacement',
      color: 'from-pink-500 to-rose-500',
      features: ['Gas Refill', 'Compressor', 'Quick Service'],
      price: '₹600',
      popular: false
    },
    { 
      icon: <FaCogs />, 
      title: 'Fridge Maintenance', 
      description: 'Door seal replacement, noise issues, ice formation problems, and deep cleaning',
      color: 'from-rose-500 to-orange-500',
      features: ['Door Seal', 'Noise Fix', 'Deep Clean'],
      price: '₹500',
      popular: false
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
            features: defaultServices[i]?.features || [],
            price: defaultServices[i]?.price || 'Contact',
            popular: defaultServices[i]?.popular || false
          })));
        } else {
          setServices(defaultServices);
        }
      })
      .catch(() => setServices(defaultServices));
  }, []);

  const displayServices = services.length > 0 ? services : defaultServices;

  // Function to create WhatsApp booking link
  const getWhatsAppLink = (serviceName) => {
    const phoneNumber = '916294033057';
    const message = `Hi! I would like to book *${serviceName}*. Please provide more details.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  // Function to create Call link with service info
  const getCallLink = (serviceName) => {
    return `tel:+916294033057`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            {t.title}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {displayServices.slice(0, 12).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 h-full relative overflow-hidden">
                {/* Popular badge */}
                {service.popular && (
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaStar className="text-xs" />
                    Popular
                  </motion.div>
                )}

                {/* Animated gradient background on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Corner decoration */}
                <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-br-full`} />
                
                <motion.div 
                  className={`text-6xl mb-4 bg-gradient-to-br ${service.color} bg-clip-text text-transparent relative z-10 inline-block`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed relative z-10 line-clamp-3">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-4 relative z-10">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-xs"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + i * 0.1 }}
                    >
                      <FaCheckCircle className={`text-green-500 flex-shrink-0 text-sm`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t-2 border-dashed border-gray-200 my-4" />

                {/* Price */}
                <div className="mb-4 relative z-10">
                  <p className="text-xs text-gray-500 mb-1">{t.startingFrom}</p>
                  <p className={`font-bold text-lg bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </p>
                </div>

                {/* Booking Buttons */}
                <div className="space-y-2 relative z-10">
                  <motion.a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp className="text-lg" />
                    <span className="relative z-10">{t.bookWhatsApp}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 2, opacity: [0.5, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.a>

                  <motion.a
                    href={getCallLink(service.title)}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-2.5 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPhone className="text-sm" />
                    <span className="relative z-10">{t.bookCall}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 2, opacity: [0.5, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.a>
                </div>

                {/* Service indicator */}
                <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2">
                  <motion.div 
                    className={`h-1 flex-1 bg-gradient-to-r ${service.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  />
                </div>

                {/* Corner decoration */}
                <motion.div 
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaClock className="text-primary" />
              <span>{tc.emergency24}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaShieldAlt className="text-green-500" />
              <span>{tc.warranty}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaStar className="text-yellow-500" />
              <span>{tc.rating}</span>
            </div>
          </div>
          
          <Link to="/services">
            <motion.button
              className="btn-primary inline-block text-lg px-10 py-4"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(30, 58, 138, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t.viewAll}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
