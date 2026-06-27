import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState({
    services: [],
    works: [],
    testimonials: [],
    contacts: [],
    bookings: [],
    certifications: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [services, works, testimonials, contacts, bookings, certifications] = await Promise.all([
        API.get('/services'),
        API.get('/works'),
        API.get('/testimonials'),
        API.get('/contact'),
        API.get('/bookings'),
        API.get('/certifications')
      ]);

      setData({
        services: services.data,
        works: works.data,
        testimonials: testimonials.data,
        contacts: contacts.data,
        bookings: bookings.data,
        certifications: certifications.data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'works', label: 'Completed Work', icon: '💼' },
    { id: 'testimonials', label: 'Testimonials', icon: '⭐' },
    { id: 'contacts', label: 'Contacts', icon: '📧' },
    { id: 'bookings', label: 'Bookings', icon: '📅' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="text-2xl font-bold text-gray-900">{data.services.length}</p>
              <p className="text-gray-600">Total Services</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">💼</div>
              <p className="text-2xl font-bold text-gray-900">{data.works.length}</p>
              <p className="text-gray-600">Completed Works</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-2xl font-bold text-gray-900">{data.testimonials.length}</p>
              <p className="text-gray-600">Testimonials</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">📧</div>
              <p className="text-2xl font-bold text-gray-900">{data.contacts.length}</p>
              <p className="text-gray-600">Contact Messages</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-2xl font-bold text-gray-900">{data.bookings.length}</p>
              <p className="text-gray-600">Service Bookings</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-2xl font-bold text-gray-900">{data.certifications.length}</p>
              <p className="text-gray-600">Certifications</p>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Contact Messages</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Message</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.contacts.map((contact) => (
                    <tr key={contact._id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">{contact.name}</td>
                      <td className="px-6 py-4">{contact.email}</td>
                      <td className="px-6 py-4">{contact.phone}</td>
                      <td className="px-6 py-4">{contact.message.substring(0, 50)}...</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                          {contact.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Service Bookings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date & Time</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Address</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.bookings.map((booking) => (
                    <tr key={booking._id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">{booking.name}</td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4">
                        {new Date(booking.preferredDate).toLocaleDateString()} {booking.preferredTime}
                      </td>
                      <td className="px-6 py-4">{booking.address}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                          booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other tabs content */}
        {(activeTab === 'services' || activeTab === 'works' || activeTab === 'testimonials' || activeTab === 'certifications') && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
              </p>
              <p className="text-sm text-gray-500">
                CRUD operations for {activeTab} can be implemented here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
