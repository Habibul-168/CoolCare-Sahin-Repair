import { motion } from 'framer-motion';
import { FaPhone, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.08, 0.03],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Need AC, Fridge or Electrical Service?
          </motion.h2>

          <motion.p 
            className="text-xl mb-10 text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get professional service today. Fast, reliable, and affordable solutions for all your technical needs.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="tel:+916294033057" 
              className="bg-accent text-white px-10 py-5 rounded-xl font-semibold flex items-center gap-3 text-lg relative overflow-hidden group shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 25px 70px rgba(0,0,0,0.4)',
                rotate: [0, -2, 2, 0]
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaPhone />
              </motion.div>
              <span className="relative z-10">Call Now</span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%', rotate: 20 }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Click ripple */}
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-xl blur-xl opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a 
              href="/contact" 
              className="bg-white text-primary px-10 py-5 rounded-xl font-semibold flex items-center gap-3 text-lg relative overflow-hidden group shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: '0 25px 70px rgba(255,255,255,0.4)',
                rotate: [0, 2, -2, 0]
              }}
              whileTap={{ 
                scale: 0.95,
                y: 0
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <motion.div
                className="relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaCalendarAlt />
              </motion.div>
              <span className="relative z-10">Book Online</span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                initial={{ x: '-100%', rotate: 20 }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Click ripple */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-xl"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: [0.5, 0] }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary rounded-xl blur-xl opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {['24/7 Available', 'Same Day Service', 'Genuine Parts', '100% Satisfaction'].map((badge, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 cursor-pointer"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + i * 0.1, 
                  type: 'spring',
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity },
                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' }
                  }}
                >
                  <FaCheckCircle className="text-green-400 text-xl" />
                </motion.div>
                <span className="font-medium">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
