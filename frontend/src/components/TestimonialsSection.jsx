import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import API from '../utils/api';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  const defaultTestimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      review: 'Excellent AC repair service! My split AC was not cooling at all. Sahin bhai fixed it within an hour. Very professional and affordable.',
      photo: null
    },
    {
      name: 'Anita Das',
      rating: 4,
      review: 'Got my fridge gas refilled. Cooling is back to normal now. Good service, came on time. Would recommend.',
      photo: null
    },
    {
      name: 'Subhash Mondal',
      rating: 5,
      review: 'Sahin bhai installed our new 1.5 ton split AC perfectly. Very neat work, proper gas charging and testing done. Best technician in Basirhat!',
      photo: null
    },
    {
      name: 'Priya Sarkar',
      rating: 4,
      review: 'My refrigerator had a compressor issue. He diagnosed it quickly and repaired it at a very reasonable price. Happy with the service.',
      photo: null
    },
    {
      name: 'Md. Rahim Sheikh',
      rating: 5,
      review: 'Called for emergency AC service at night and he responded immediately. AC gas charging done with genuine gas. Very trustworthy person.',
      photo: null
    },
    {
      name: 'Tapan Ghosh',
      rating: 3,
      review: 'Service was decent. Took a bit longer than expected but the AC is working fine now. Pricing was fair.',
      photo: null
    },
    {
      name: 'Suchitra Biswas',
      rating: 5,
      review: 'We have been using CoolCore services for 3 years now. Annual maintenance for both AC and fridge. Always reliable and honest work.',
      photo: null
    },
    {
      name: 'Kamal Halder',
      rating: 4,
      review: 'Good fridge maintenance service. Door seal was replaced and deep cleaning done. Fridge is working like new. Recommended!',
      photo: null
    }
  ];

  useEffect(() => {
    API.get('/testimonials')
      .then(res => setTestimonials(res.data.slice(0, 8)))
      .catch(() => setTestimonials(defaultTestimonials));
  }, []);

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? '' : 'opacity-30'}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm">"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
