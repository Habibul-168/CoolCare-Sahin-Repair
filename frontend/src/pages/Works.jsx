import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import API from '../utils/api';

const Works = () => {
  const [works, setWorks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState(['all']);

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
          setWorks(res.data);
          const uniqueCategories = ['all', ...new Set(res.data.map(w => w.category))];
          setCategories(uniqueCategories);
        } else {
          setWorks(defaultWorks);
          const uniqueCategories = ['all', ...new Set(defaultWorks.map(w => w.category))];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error fetching works:', error);
        setWorks(defaultWorks);
        const uniqueCategories = ['all', ...new Set(defaultWorks.map(w => w.category))];
        setCategories(uniqueCategories);
      }
    };
    fetchWorks();
  }, []);

  const filteredWorks = selectedCategory === 'all' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <div className="pt-28 pb-16">
      <div className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Completed Work</h1>
          <p className="text-xl text-white/90">Real projects showcasing our expertise</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
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
                  <p className="text-gray-600 mb-3">{work.description}</p>
                  
                  {work.problem && (
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700">Problem:</p>
                      <p className="text-sm text-gray-600">{work.problem}</p>
                    </div>
                  )}
                  
                  {work.solution && (
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700">Solution:</p>
                      <p className="text-sm text-gray-600">{work.solution}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t">
                    {work.location && <span>📍 {work.location}</span>}
                    {work.timeTaken && <span>⏱️ {work.timeTaken}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Works;
