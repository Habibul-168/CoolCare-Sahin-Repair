import { motion } from 'framer-motion';
import { FaBolt, FaStar, FaDollarSign, FaCertificate, FaHome, FaSmile, FaHeadset, FaTools, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: 'Fast Response',
      description: 'Quick turnaround time for all service requests',
      color: 'from-yellow-400 to-orange-500',
      highlights: ['2-4 Hour Response', 'Same Day Service', 'No Delays']
    },
    {
      icon: <FaStar />,
      title: 'Expert Technician',
      description: '10+ years of professional experience',
      color: 'from-blue-400 to-indigo-500',
      highlights: ['Certified Professional', '500+ Projects', 'Skilled Team']
    },
    {
      icon: <FaDollarSign />,
      title: 'Affordable Pricing',
      description: 'Competitive rates with no hidden charges',
      color: 'from-green-400 to-emerald-500',
      highlights: ['Transparent Costs', 'Best Rates', 'Free Estimates']
    },
    {
      icon: <FaCertificate />,
      title: 'Genuine Parts',
      description: 'Only authentic components and materials',
      color: 'from-purple-400 to-pink-500',
      highlights: ['100% Original', 'Warranty Included', 'Quality Assured']
    },
    {
      icon: <FaHome />,
      title: 'On-site Service',
      description: 'We come to your home or office',
      color: 'from-cyan-400 to-blue-500',
      highlights: ['Doorstep Service', 'No Travel Needed', 'Convenient']
    },
    {
      icon: <FaSmile />,
      title: 'Customer Satisfaction',
      description: '100% satisfaction guaranteed',
      color: 'from-pink-400 to-rose-500',
      highlights: ['100% Satisfaction', '5 Star Rated', 'Happy Clients']
    },
    {
      icon: <FaHeadset />,
      title: 'Emergency Support',
      description: 'Available 24/7 for urgent issues',
      color: 'from-red-400 to-orange-500',
      highlights: ['24/7 Available', 'Immediate Help', 'Always Ready']
    },
    {
      icon: <FaTools />,
      title: 'Professional Tools',
      description: 'Latest equipment and technology',
      color: 'from-indigo-400 to-purple-500',
      highlights: ['Modern Equipment', 'Advanced Tools', 'Tech-Enabled']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Why Choose Us
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
            transition={{ delay: 0.3 }}
          >
            Professional service that puts your needs first
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5`}
                  initial={false}
                  transition={{ duration: 0.5 }}
                />

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`} />

                {/* Icon with gradient and animation */}
                <motion.div 
                  className="relative mb-4 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -8, 8, -8, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg relative z-10`}>
                    <div className="text-4xl text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Icon glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40`}
                    initial={false}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 relative z-10 leading-relaxed mb-4 text-sm"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.description}
                </motion.p>

                {/* Feature highlights */}
                <div className="space-y-2 relative z-10">
                  {feature.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
                    >
                      <FaCheckCircle className={`text-green-500 flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom decorative line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                />

                {/* Corner glow */}
                <motion.div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20`}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border-2 border-primary/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <FaCertificate className="text-3xl text-primary" />
            </motion.div>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-lg">Trusted by 450+ Happy Customers</p>
              <p className="text-sm text-gray-600">Certified & Insured Professional Service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
