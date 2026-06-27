const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Work = require('./models/Work');

dotenv.config();

const servicesData = [
  {
    title: 'AC Installation',
    description: 'Professional installation of all types of air conditioners including Split AC, Window AC, Cassette AC, and Central AC systems. Complete setup with proper mounting, gas charging, and testing.',
    icon: 'FaSnowflake',
    featured: false
  },
  {
    title: 'AC Repair & Service',
    description: 'Comprehensive AC repair services covering cooling issues, compressor problems, PCB repair, and routine maintenance. Annual maintenance contracts available.',
    icon: 'FaFan',
    featured: true
  },
  {
    title: 'AC Gas Charging',
    description: 'Expert gas leakage detection, pressure testing, vacuum creation, and refrigerant gas refilling with R22, R410A, or R32 as per AC specifications.',
    icon: 'FaThermometerHalf',
    featured: false
  },
  {
    title: 'Refrigerator Repair',
    description: 'Complete refrigerator repair services for single door, double door, and frost-free models. Fixing cooling issues, compressor problems, and thermostat malfunctions.',
    icon: 'FaWrench',
    featured: true
  },
  {
    title: 'Fridge Gas Filling',
    description: 'Refrigerant gas refilling service with proper leak testing and pressure checking. Solving cooling and freezing problems with genuine gas.',
    icon: 'FaTint',
    featured: false
  },
  {
    title: 'Fridge Maintenance',
    description: 'Complete fridge maintenance including door seal replacement, defrosting issues, ice formation problems, unusual noise fixing, and deep cleaning services.',
    icon: 'FaCogs',
    featured: false
  }
];

const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    review: 'Excellent AC repair service! My split AC was not cooling at all. Sahin bhai fixed it within an hour. Very professional and affordable.',
    featured: true
  },
  {
    name: 'Anita Das',
    rating: 4,
    review: 'Got my fridge gas refilled. Cooling is back to normal now. Good service, came on time. Would recommend.',
    featured: true
  },
  {
    name: 'Subhash Mondal',
    rating: 5,
    review: 'Sahin bhai installed our new 1.5 ton split AC perfectly. Very neat work, proper gas charging and testing done. Best technician in Basirhat!',
    featured: true
  },
  {
    name: 'Priya Sarkar',
    rating: 4,
    review: 'My refrigerator had a compressor issue. He diagnosed it quickly and repaired it at a very reasonable price. Happy with the service.',
    featured: true
  },
  {
    name: 'Md. Rahim Sheikh',
    rating: 5,
    review: 'Called for emergency AC service at night and he responded immediately. AC gas charging done with genuine gas. Very trustworthy person.',
    featured: true
  },
  {
    name: 'Tapan Ghosh',
    rating: 3,
    review: 'Service was decent. Took a bit longer than expected but the AC is working fine now. Pricing was fair.',
    featured: false
  },
  {
    name: 'Suchitra Biswas',
    rating: 5,
    review: 'We have been using CoolCore services for 3 years now. Annual maintenance for both AC and fridge. Always reliable and honest work.',
    featured: true
  },
  {
    name: 'Kamal Halder',
    rating: 4,
    review: 'Good fridge maintenance service. Door seal was replaced and deep cleaning done. Fridge is working like new. Recommended!',
    featured: true
  }
];

const worksData = [
  {
    title: 'Split AC Installation',
    category: 'AC Service',
    description: 'Complete installation of a new 1.5-ton split air conditioner in a living room.',
    problem: 'Customer needed a new energy-efficient split AC installed in their living room with clean, hidden copper pipe routing.',
    solution: 'Completed precise mounting of indoor and outdoor units, vacuumed the refrigerant lines to remove moisture, routed drainage cleanly, and fully tested the cooling system.',
    location: 'Basirhat',
    timeTaken: '3 Hours',
    images: ['/works/work1.jpg'],
    featured: true
  },
  {
    title: 'Double-Door Refrigerator Repair',
    category: 'Refrigerator',
    description: 'Diagnosed and resolved a cooling failure in a Samsung frost-free double-door refrigerator.',
    problem: 'The freezer was working, but the lower compartment was not cooling, causing food to spoil.',
    solution: 'Replaced a faulty defrost sensor and bimetal thermostat, restored proper air duct flow, and verified thermostat cycles.',
    location: 'Malancha',
    timeTaken: '1.5 Hours',
    images: ['/works/work2.jpg'],
    featured: true
  },
  {
    title: 'AC Gas Charging & Leak Repair',
    category: 'AC Service',
    description: 'Located and sealed a leak in a split AC outdoor condenser unit and recharged refrigerant.',
    problem: 'The AC was blowing room-temperature air due to a complete loss of refrigerant caused by a pipe joint leak.',
    solution: 'Identified the leak point using nitrogen pressure testing, brazed the copper joint, evacuated the system with a vacuum pump, and recharged R32 refrigerant.',
    location: 'Hasnabad',
    timeTaken: '2 Hours',
    images: ['/works/work3.jpg'],
    featured: true
  },
  {
    title: 'Fridge Compressor Replacement',
    category: 'Refrigerator',
    description: 'Replaced a burned-out compressor in a single-door refrigerator, restoring full cooling.',
    problem: 'The refrigerator was making a clicking sound and not cooling at all because of a seized compressor motor.',
    solution: 'Safely recovered the old refrigerant, unbrazed and removed the bad compressor, installed a high-quality replacement compressor, replaced the filter drier, and performed gas refilling.',
    location: 'Barasat',
    timeTaken: '2.5 Hours',
    images: ['/works/work4.jpg'],
    featured: true
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    // Clean up
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    await Work.deleteMany({});
    console.log('Cleaned up existing services, testimonials, and works');

    // Insert
    await Service.insertMany(servicesData);
    console.log('Seeded services successfully');

    await Testimonial.insertMany(testimonialsData);
    console.log('Seeded testimonials successfully');

    await Work.insertMany(worksData);
    console.log('Seeded works successfully');

    console.log('Database seeded successfully! 🎉');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seed();
