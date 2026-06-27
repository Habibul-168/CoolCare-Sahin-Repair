import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CoolCore Sahin Repair</h3>
            <p className="text-gray-400">
              Professional AC & refrigerator repair services for homes and businesses. Quality work, affordable prices, 10+ years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/works" className="text-gray-400 hover:text-white transition">Our Work</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AC Installation</li>
              <li>AC Repair & Service</li>
              <li>AC Gas Charging</li>
              <li>Refrigerator Repair</li>
              <li>Fridge Gas Filling</li>
              <li>Fridge Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91 6294033057</li>
              <li>WhatsApp: +91 6294033057</li>
              <li>All week: 8AM - 9PM</li>
              <li>Emergency: Available 24/7</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-white">Service Areas</h4>
              <p className="text-gray-400 text-sm">Basirhat, Hasnabad, Malancha, Barasat, Bhabla, Bhebhia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} CoolCore Sahin Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
