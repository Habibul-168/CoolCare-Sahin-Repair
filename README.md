# Premium Technician Service Website

A modern, professional, customer-focused technician service website built with React.js, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, and GSAP.

## Features

### Frontend
- **Hero Section** - Professional introduction with call-to-action buttons
- **Why Choose Us** - Trust-building features showcase
- **Services** - Clean grid display of all services
- **Completed Work Portfolio** - Showcase real projects with before/after images
- **Testimonials** - Customer reviews and ratings
- **Statistics** - Animated counters showing achievements
- **Work Process** - Step-by-step service workflow
- **FAQ** - Accordion-style frequently asked questions
- **Contact & Booking Forms** - Easy communication with image upload
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Professional, subtle animations

### Backend
- **RESTful API** - Complete CRUD operations
- **Authentication** - Secure JWT-based admin login
- **File Uploads** - Cloudinary integration for images
- **Email Notifications** - Nodemailer for contact/booking alerts
- **MongoDB Database** - Scalable data storage

### Admin Dashboard
- Manage services, completed work, testimonials
- View contact messages and bookings
- Upload certifications
- Track statistics

## Technology Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- Axios
- React Hook Form
- Framer Motion
- GSAP

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer & Cloudinary
- Nodemailer

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
cd "Technician Portfolio"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Configure `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

CLIENT_URL=http://localhost:5173
```

Start backend:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Configure `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev
```

### 4. Create Admin User

Connect to your MongoDB database and create an admin user:

```javascript
// Using MongoDB shell or MongoDB Compass
db.users.insertOne({
  email: "admin@techpro.com",
  password: "$2a$10$your_hashed_password", // Use bcrypt to hash
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
})
```

Or use this Node.js script:
```javascript
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.connect('your_mongodb_uri');

const password = await bcrypt.hash('yourpassword', 10);
console.log(password); // Use this in MongoDB
```

## Usage

### Access the Website
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Admin Login**: http://localhost:5173/admin/login

### Admin Login
Use the credentials you created in the database.

### Managing Content

1. **Services**: Add/edit/delete service offerings
2. **Completed Work**: Upload project photos with descriptions
3. **Testimonials**: Add customer reviews
4. **Contact Messages**: View and manage inquiries
5. **Bookings**: Track service appointments
6. **Certifications**: Display professional credentials

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

Update environment variables on your hosting platform.

### Backend (Railway/Render/Heroku)
- Set all environment variables
- Deploy from GitHub or use CLI
- Update CORS settings if needed

### MongoDB Atlas
- Create a cluster on MongoDB Atlas
- Whitelist your deployment IP
- Update connection string in backend .env

### Cloudinary
- Sign up for free account
- Get API credentials
- Add to backend .env

## Customization

### Branding
Update these files:
- `frontend/src/components/Navbar.jsx` - Business name
- `frontend/src/components/Hero.jsx` - Tagline and contact info
- `frontend/src/components/Footer.jsx` - Contact details
- `frontend/tailwind.config.js` - Colors and styling

### Content
- Services: Add your specific services in the database or defaults
- Contact Info: Update phone, email, address throughout components
- Images: Replace placeholder images with your own
- Social Links: Add to Footer component

## API Endpoints

### Public Routes
- `GET /api/services` - Get all services
- `GET /api/works` - Get completed work
- `GET /api/testimonials` - Get testimonials
- `GET /api/certifications` - Get certifications
- `POST /api/contact` - Submit contact form
- `POST /api/bookings` - Submit booking

### Protected Routes (Admin)
- `POST /api/auth/login` - Admin login
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service
- Similar CRUD for works, testimonials, certifications
- `GET /api/contact` - View all contacts
- `GET /api/bookings` - View all bookings

## Performance Tips

1. **Optimize Images**: Compress before uploading to Cloudinary
2. **Lazy Loading**: Images load as needed
3. **Code Splitting**: React Router handles this automatically
4. **Caching**: Configure browser caching for static assets
5. **CDN**: Use Cloudinary's CDN for image delivery

## Support

For issues or questions, please check:
- MongoDB connection string format
- Cloudinary credentials are correct
- Environment variables are properly set
- Node.js version compatibility

## License

This project is licensed for personal and commercial use.

---

**Built with ❤️ for professional technicians**
