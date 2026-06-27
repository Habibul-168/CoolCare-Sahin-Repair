import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Projects Completed', icon: '🎯' },
    { value: 1000, suffix: '+', label: 'Devices Repaired', icon: '🔧' },
    { value: 450, suffix: '+', label: 'Happy Customers', icon: '😊' },
    { value: 10, suffix: '+', label: 'Years Experience', icon: '⭐' }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const duration = 2500;
        const increment = stat.value / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = stat.value;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="text-center relative group"
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.4)'
                }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div 
                  className="text-5xl md:text-6xl font-bold mb-3"
                  key={counters[index]}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {counters[index]}
                  </motion.span>
                  {stat.suffix}
                </motion.div>

                <motion.div 
                  className="text-white/90 font-medium text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {stat.label}
                </motion.div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional animated text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.p 
            className="text-2xl font-semibold"
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            Trusted by hundreds of satisfied customers
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
