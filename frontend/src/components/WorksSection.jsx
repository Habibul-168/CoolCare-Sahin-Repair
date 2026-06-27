import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import API from '../utils/api';

const WorksSection = () => {
  const [works, setWorks] = useState([]);

  const defaultWorks = [
    {
      _id: 'default-1',
      title: 'Split AC Installation',
      category: 'AC Service',
      description: 'Complete installation of a new 1.5-ton split air conditioner in a living room.',
      problem: 'Customer needed a new energy-efficient split AC installed in their living room with clean, hidden copper pipe routing.',
      solution: 'Completed precise mounting of indoor and outdoor units, vacuumed the refrigerant lines to remove moisture, routed drainage cleanly, and fully tested the cooling system.',
      location: 'Basirhat',
      timeTaken: '3 Hours',
      images: ['/works/work1.jpg']
    },
    {
      _id: 'default-2',
      title: 'Double-Door Refrigerator Repair',
      category: 'Refrigerator',
      description: 'Diagnosed and resolved a cooling failure in a Samsung frost-free double-door refrigerator.',
      problem: 'The freezer was working, but the lower compartment was not cooling, causing food to spoil.',
      solution: 'Replaced a faulty defrost sensor and bimetal thermostat, restored proper air duct flow, and verified thermostat cycles.',
      location: 'Malancha',
      timeTaken: '1.5 Hours',
      images: ['/works/work2.jpg']
    },
    {
      _id: 'default-3',
      title: 'AC Gas Charging & Leak Repair',
      category: 'AC Service',
      description: 'Located and sealed a leak in a split AC outdoor condenser unit and recharged refrigerant.',
      problem: 'The AC was blowing room-temperature air due to a complete loss of refrigerant caused by a pipe joint leak.',
      solution: 'Identified the leak point using nitrogen pressure testing, brazed the copper joint, evacuated the system with a vacuum pump, and recharged R32 refrigerant.',
      location: 'Hasnabad',
      timeTaken: '2 Hours',
      images: ['/works/work3.jpg']
    },
    {
      _id: 'default-4',
      title: 'Fridge Compressor Replacement',
      category: 'Refrigerator',
      description: 'Replaced a burned-out compressor in a single-door refrigerator, restoring full cooling.',
      problem: 'The refrigerator was making a clicking sound and not cooling at all because of a seized compressor motor.',
      solution: 'Safely recovered the old refrigerant, unbrazed and removed the bad compressor, installed a high-quality replacement compressor, replaced the filter drier, and performed gas refilling.',
      location: 'Barasat',
      timeTaken: '2.5 Hours',
      images: ['/works/work4.jpg']
    }
  ];

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await API.get('/works');
        if (res.data && res.data.length > 0) {
          setWorks(res.data.slice(0, 6));
        } else {
          setWorks(defaultWorks.slice(0, 6));
        }
      } catch (error) {
        console.error('Error fetching works:', error);
        setWorks(defaultWorks.slice(0, 6));
      }
    };
    fetchWorks();
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Completed Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects, real results - see our quality workmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {works.map((work, index) => (
            <motion.div
              key={work._id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={work.images?.[0] || work.afterImage || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400'}
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {work.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {work.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  {work.location && <span>📍 {work.location}</span>}
                  {work.timeTaken && <span>⏱️ {work.timeTaken}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/works" className="btn-primary inline-block">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
