import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSnowflake, FaWrench, FaMapMarkerAlt, FaCertificate, FaAward, FaTimes, FaSearchPlus } from 'react-icons/fa';

const About = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const skills = [
    'AC Installation',
    'AC Repair & Service',
    'AC Gas Charging',
    'Refrigerator Repair',
    'Fridge Gas Filling',
    'Fridge Maintenance',
    'Compressor Repair',
    'Leak Detection'
  ];

  const serviceAreas = [
    'Basirhat',
    'Hasnabad',
    'Malancha',
    'Barasat',
    'Bhabla',
    'Bhebhia'
  ];

  const certificates = [
    {
      image: '/certificates/bk-gulf-experience-certificate.png',
      title: 'BK Gulf LLC — Experience Certificate',
      issuer: 'BK Gulf LLC, Dubai, UAE',
      date: 'December 2016',
      description: 'Official employment certificate confirming A/C Technician role from Dec 2014 to Dec 2016 at BK Gulf LLC, one of the leading MEP contractors in the Gulf region.',
      badge: 'Work Experience',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      image: '/certificates/adco-trade-test-certificate.png',
      title: 'ADCO Skill Centre — Trade Test Certificate',
      issuer: 'ADCO Skill Centre, New Delhi',
      date: 'July 2017',
      description: 'Trade Test Certificate (No. 223891) for A/C Mechanic (Window/Split) with B+ grade, validating practical knowledge of AC training, assembly, connections, and gas charging.',
      badge: 'Certification',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const openLightbox = (image, title) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-28 pb-16">
      <div className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90">Your trusted AC & refrigerator service partner</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                alt="Professional Technician"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Professional AC & Refrigerator Services Since 2015
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                CoolCore Sahin Repair was founded in 2015 by Sahin Sardar, a skilled technician who honed his expertise working with leading AC and refrigeration companies in Dubai, UAE. After years of gaining international experience in servicing advanced cooling systems across commercial and residential projects in the Gulf region, Sahin returned to India with a vision — to bring world-class AC and refrigerator repair services to his hometown.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 10 years of hands-on experience, including international exposure to the latest cooling technologies and best practices, Sahin has built CoolCore into a trusted name across the Basirhat region. From split AC installations to complex compressor repairs, every job is handled with the precision and professionalism that comes from years of working on some of the most demanding projects in the Middle East.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, CoolCore Sahin Repair serves hundreds of satisfied customers across Basirhat, Hasnabad, Malancha, Barasat, Bhabla, and Bhebhia — delivering fast, reliable, and affordable cooling solutions with genuine parts and honest pricing.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">10+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-gray-600">Projects Done</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Team</h3>
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-2xl text-center shadow-xl"
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Sahin Sardar</h4>
                <p className="text-white/80 mb-2">Founder & Lead Technician</p>
                <p className="text-white/90 font-semibold">10+ Years Experience</p>
                <p className="text-white/70 text-sm mt-2">Former Dubai-based AC & Refrigeration Expert</p>
              </motion.div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100"
                >
                  <p className="font-medium text-gray-900">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Experience Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-blue-200/50 shadow-sm mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FaAward className="text-amber-500" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Verified Credentials</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Certifications & Experience
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Backed by international work experience and certified trade skills — proof of professional expertise you can trust
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 80 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                  {/* Certificate Image */}
                  <div
                    className={`relative bg-gradient-to-br ${cert.bgGradient} p-6 cursor-pointer`}
                    onClick={() => openLightbox(cert.image, cert.title)}
                  >
                    {/* Badge */}
                    <motion.div
                      className={`absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold bg-gradient-to-r ${cert.gradient} shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCertificate className="text-xs" />
                      {cert.badge}
                    </motion.div>

                    {/* Zoom overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center z-[5]">
                      <motion.div
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-xl"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      >
                        <FaSearchPlus className="text-xl text-gray-700" />
                      </motion.div>
                    </div>

                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500 relative z-[1]"
                      whileHover={{ scale: 1.02 }}
                      loading="lazy"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.gradient}`} />
                      <span className="text-sm font-medium text-gray-500">{cert.issuer}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Click to view hint */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => openLightbox(cert.image, cert.title)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                      >
                        <FaSearchPlus className="text-xs group-hover/btn:scale-110 transition-transform" />
                        Click to view full certificate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/20"
              onClick={closeLightbox}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
            >
              <FaTimes className="text-xl" />
            </motion.button>

            {/* Title */}
            <motion.div
              className="absolute top-6 left-6 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-white/90 font-semibold text-lg">{lightboxTitle}</p>
            </motion.div>

            {/* Image */}
            <motion.img
              src={lightboxImage}
              alt={lightboxTitle}
              className="relative z-10 max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Service Areas</h3>
          <p className="text-gray-600 mb-8">
            We proudly serve the following areas in North 24 Parganas, West Bengal
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100"
              >
                <FaMapMarkerAlt className="text-primary" />
                <span className="font-semibold text-gray-800">{area}</span>
              </motion.div>
            ))}
          </div>
          <a href="/contact" className="btn-primary inline-block">
            Check Your Area
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
