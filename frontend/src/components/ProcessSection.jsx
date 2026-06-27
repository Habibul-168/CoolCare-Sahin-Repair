import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Call, WhatsApp, or book online to schedule your service',
      icon: '📞'
    },
    {
      number: '02',
      title: 'Inspection',
      description: 'Our technician diagnoses the issue and provides a quote',
      icon: '🔍'
    },
    {
      number: '03',
      title: 'Repair/Installation',
      description: 'We complete the work with quality parts and expertise',
      icon: '🔧'
    },
    {
      number: '04',
      title: 'Delivery & Support',
      description: 'Testing, handover, and ongoing support guarantee',
      icon: '✅'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200" />
              )}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
