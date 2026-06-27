import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you provide home service?',
      answer: 'Yes, we provide on-site service at your home or office location for your convenience.'
    },
    {
      question: 'Is there a warranty on repairs?',
      answer: 'Yes, all our repairs come with a warranty. The warranty period depends on the type of repair and parts used.'
    },
    {
      question: 'What are your service charges?',
      answer: 'Our charges vary based on the service required. We provide transparent quotes before starting any work.'
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We serve Basirhat, Hasnabad, Malancha, Barasat, Bhabla, Bhebhia, and surrounding areas in North 24 Parganas, West Bengal. Contact us to check if we cover your location.'
    },
    {
      question: 'How quickly can you respond?',
      answer: 'We typically respond within 2-4 hours for regular service and offer same-day emergency support.'
    },
    {
      question: 'Do you use genuine parts?',
      answer: 'Yes, we only use authentic, high-quality parts to ensure the longevity and performance of your devices.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-primary text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
