# 🎯 Setup Checklist

Use this checklist to ensure everything is configured correctly.

## ✅ Pre-Setup (One-time)

### 1. Software Installed
- [ ] Node.js v16+ installed
- [ ] npm v7+ installed  
- [ ] Git installed (optional)
- [ ] Code editor (VS Code recommended)

### 2. Accounts Created
- [ ] MongoDB Atlas account (or local MongoDB installed)
- [ ] Cloudinary account (free tier)
- [ ] Gmail account (for email notifications - optional)

## ✅ Project Setup

### 3. Dependencies Installed
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] No errors during installation

### 4. Environment Variables Configured

#### Backend `.env` file created with:
- [ ] `PORT=5000`
- [ ] `MONGODB_URI=<your_connection_string>`
- [ ] `JWT_SECRET=<random_32_char_string>`
- [ ] `CLOUDINARY_CLOUD_NAME=<your_cloud_name>`
- [ ] `CLOUDINARY_API_KEY=<your_api_key>`
- [ ] `CLOUDINARY_API_SECRET=<your_api_secret>`
- [ ] `EMAIL_HOST=smtp.gmail.com` (optional)
- [ ] `EMAIL_PORT=587` (optional)
- [ ] `EMAIL_USER=<your_email>` (optional)
- [ ] `EMAIL_PASSWORD=<your_app_password>` (optional)
- [ ] `CLIENT_URL=http://localhost:5173`

#### Frontend `.env` file:
- [ ] `VITE_API_URL=http://localhost:5000/api`

### 5. Database Setup
- [ ] MongoDB is accessible
- [ ] Connection string tested
- [ ] Database name chosen

### 6. Admin User Created
```bash
cd backend
node createAdmin.js
```
- [ ] Admin user created successfully
- [ ] Credentials noted:
  - Email: admin@techpro.com
  - Password: admin123

### 7. Upload Folder Created
- [ ] `backend/uploads/` folder exists

## ✅ Testing

### 8. Backend Server Starts
```bash
cd backend
npm run dev
```
- [ ] Server starts without errors
- [ ] Shows "MongoDB Connected Successfully"
- [ ] Shows "Server running on port 5000"
- [ ] No error messages in console

### 9. Frontend Server Starts
```bash
cd frontend
npm run dev
```
- [ ] Server starts without errors
- [ ] Shows local URL (http://localhost:5173)
- [ ] No Tailwind CSS errors
- [ ] No import errors

### 10. Website Loads
- [ ] Open http://localhost:5173 in browser
- [ ] Homepage loads correctly
- [ ] No errors in browser console (F12)
- [ ] Navigation works
- [ ] All sections visible

### 11. Pages Work
- [ ] Home page (/) loads
- [ ] Services page (/services) loads
- [ ] Works page (/works) loads
- [ ] About page (/about) loads
- [ ] Contact page (/contact) loads
- [ ] Admin login (/admin/login) loads

### 12. Admin Panel Works
- [ ] Can access /admin/login
- [ ] Can login with admin credentials
- [ ] Dashboard loads after login
- [ ] Can see overview statistics
- [ ] Can view contacts tab
- [ ] Can view bookings tab

### 13. Forms Work
- [ ] Contact form submits
- [ ] Booking form submits
- [ ] Success message appears
- [ ] Data appears in admin dashboard

### 14. Image Uploads Work
- [ ] Can select image in contact form
- [ ] Can select image in booking form
- [ ] Image uploads without error
- [ ] Image URL saved in database

## ✅ Customization

### 15. Branding Updated
- [ ] Business name updated in Navbar
- [ ] Business name updated in Footer
- [ ] Business name updated in Hero
- [ ] Logo/favicon updated (optional)

### 16. Contact Information Updated
- [ ] Phone numbers updated
- [ ] Email addresses updated
- [ ] WhatsApp link updated
- [ ] Business hours updated
- [ ] Service area updated

### 17. Colors Customized (Optional)
- [ ] Primary color chosen
- [ ] Accent color chosen
- [ ] Updated in tailwind.config.js
- [ ] Verified across all pages

### 18. Content Added
- [ ] Services added via admin or defaults updated
- [ ] Work portfolio images uploaded
- [ ] Testimonials added
- [ ] About page info updated
- [ ] Certifications added (if any)

## ✅ Production Ready (Optional)

### 19. Security
- [ ] Admin password changed from default
- [ ] JWT_SECRET is strong and unique
- [ ] .env files added to .gitignore
- [ ] No credentials in code

### 20. Performance
- [ ] Images optimized before upload
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Loading speed acceptable

### 21. Deployment (When Ready)
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Backend deployed (Render/Railway)
- [ ] MongoDB Atlas configured for production
- [ ] Environment variables set on hosting
- [ ] CORS configured for production URLs
- [ ] Custom domain connected (optional)

## 🎉 Done!

If all items are checked, your website is ready!

### Quick Start Commands

**Development:**
```bash
# Option 1: Use batch file (Windows)
start-dev.bat

# Option 2: Manual
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev
```

**Access:**
- Website: http://localhost:5173
- Admin: http://localhost:5173/admin/login
- API: http://localhost:5000/api

### Next Steps

1. **Add Content:** Use admin dashboard to add services, works, testimonials
2. **Test Features:** Try all forms, navigation, responsiveness
3. **Customize:** Update colors, images, text to match your brand
4. **Deploy:** When ready, deploy to production hosting

### Support

- Read `QUICKSTART.md` for setup help
- Read `TROUBLESHOOTING.md` for common issues
- Read `README.md` for full documentation
- Run `node verify-setup.js` to check files

---

**Congratulations on your new website! 🚀**
