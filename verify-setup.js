const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Project Setup...\n');

const requiredFiles = [
  // Frontend
  'frontend/src/App.jsx',
  'frontend/src/main.jsx',
  'frontend/src/index.css',
  'frontend/src/utils/api.js',
  'frontend/src/components/Navbar.jsx',
  'frontend/src/components/Footer.jsx',
  'frontend/src/components/Hero.jsx',
  'frontend/src/pages/Home.jsx',
  'frontend/src/pages/Services.jsx',
  'frontend/src/pages/Works.jsx',
  'frontend/src/pages/About.jsx',
  'frontend/src/pages/Contact.jsx',
  'frontend/src/pages/admin/AdminLogin.jsx',
  'frontend/src/pages/admin/AdminDashboard.jsx',
  'frontend/tailwind.config.js',
  'frontend/postcss.config.js',
  'frontend/.env',
  'frontend/package.json',
  
  // Backend
  'backend/server.js',
  'backend/createAdmin.js',
  'backend/config/db.js',
  'backend/config/cloudinary.js',
  'backend/config/multer.js',
  'backend/models/User.js',
  'backend/models/Service.js',
  'backend/models/Work.js',
  'backend/models/Testimonial.js',
  'backend/models/Contact.js',
  'backend/models/Booking.js',
  'backend/models/Certification.js',
  'backend/routes/auth.js',
  'backend/routes/services.js',
  'backend/routes/works.js',
  'backend/routes/testimonials.js',
  'backend/routes/contact.js',
  'backend/routes/bookings.js',
  'backend/routes/certifications.js',
  'backend/middleware/auth.js',
  'backend/.env',
  'backend/package.json',
  
  // Docs
  'README.md',
  'QUICKSTART.md',
  'PROJECT_SUMMARY.md'
];

let allGood = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ MISSING: ${file}`);
    allGood = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('\n✅ All files are in place!');
  console.log('\n📋 Next Steps:');
  console.log('1. Setup MongoDB (Atlas or Local)');
  console.log('2. Setup Cloudinary account');
  console.log('3. Update backend/.env with your credentials');
  console.log('4. Run: node backend/createAdmin.js');
  console.log('5. Start backend: cd backend && npm run dev');
  console.log('6. Start frontend: cd frontend && npm run dev');
  console.log('\n📖 Read QUICKSTART.md for detailed instructions');
} else {
  console.log('\n❌ Some files are missing. Please check the output above.');
}

console.log('\n' + '='.repeat(50) + '\n');
