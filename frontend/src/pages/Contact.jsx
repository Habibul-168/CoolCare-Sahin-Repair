import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import API from '../utils/api';

const Contact = () => {
  const [formType, setFormType] = useState('contact'); // 'contact' or 'booking'
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setSubmitting(true);
    setMessage('');

    try {
      const phone = '916294033057';
      let text = '';

      if (formType === 'contact') {
        text = `🔧 *New Contact Message*\n\n`
          + `👤 *Name:* ${data.name}\n`
          + `${data.email ? `📧 *Email:* ${data.email}\n` : ''}`
          + `📞 *Phone:* ${data.phone}\n`
          + `💬 *Message:* ${data.message}`;
      } else {
        text = `🔧 *New Service Booking*\n\n`
          + `👤 *Name:* ${data.name}\n`
          + `${data.email ? `📧 *Email:* ${data.email}\n` : ''}`
          + `📞 *Phone:* ${data.phone}\n`
          + `🛠️ *Service:* ${data.service}\n`
          + `📍 *Address:* ${data.address}\n`
          + `📅 *Preferred Date:* ${data.preferredDate}\n`
          + `⏰ *Preferred Time:* ${data.preferredTime}\n`
          + `${data.deviceInfo ? `📱 *Device Info:* ${data.deviceInfo}\n` : ''}`
          + `📝 *Issue:* ${data.issueDescription}`;
      }

      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');

      setMessage('Redirecting to WhatsApp...');
      reset();
    } catch (error) {
      setMessage('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Get in touch for professional service</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+916294033057" className="text-primary hover:underline">
                      +91 6294033057
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">
                      Coming soon
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">All week: 8:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Emergency: 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900">Service Areas</p>
                    <p className="text-gray-600">Basirhat, Hasnabad, Malancha, Barasat, Bhabla, Bhebhia</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Quick Contact</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/916294033057" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    WhatsApp
                  </a>
                  <a href="tel:+916294033057" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                {/* Form Type Toggle */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setFormType('contact')}
                    className={`flex-1 py-2 rounded-lg font-medium transition ${
                      formType === 'contact'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setFormType('booking')}
                    className={`flex-1 py-2 rounded-lg font-medium transition ${
                      formType === 'booking'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Book Service
                  </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('email', { pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                      placeholder="Email Address (Optional)"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="Phone Number *"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  {formType === 'booking' && (
                    <>
                      <div>
                        <input
                          {...register('service', { required: 'Service is required' })}
                          placeholder="Service Required *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <input
                          {...register('address', { required: 'Address is required' })}
                          placeholder="Service Address *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <input
                          {...register('preferredDate', { required: 'Date is required' })}
                          type="date"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <input
                          {...register('preferredTime', { required: 'Time is required' })}
                          type="time"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <input
                          {...register('deviceInfo')}
                          placeholder="Device Info (e.g., Split AC 1.5 Ton, Samsung Fridge)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <textarea
                      {...register(formType === 'booking' ? 'issueDescription' : 'message', { required: 'Message is required' })}
                      placeholder={formType === 'booking' ? 'Describe the issue *' : 'Your Message *'}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Upload Image (Optional)
                    </label>
                    <input
                      {...register('image')}
                      type="file"
                      accept="image/*"
                      className="w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : formType === 'booking' ? 'Book Service' : 'Send Message'}
                  </button>

                  {message && (
                    <p className={`text-center ${message.includes('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
