# Quick Start Guide

## Step 1: Install MongoDB

### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free
3. Create a cluster (Free tier available)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your password
7. Use this in `backend/.env` as `MONGODB_URI`

### Option B: Local MongoDB
1. Download from https://www.mongodb.com/try/download/community
2. Install and run MongoDB service
3. Use `mongodb://localhost:27017/technician-service` in `backend/.env`

## Step 2: Install Cloudinary (for image uploads)

1. Go to https://cloudinary.com
2. Sign up for free account
3. Go to Dashboard
4. Copy: Cloud Name, API Key, API Secret
5. Add these to `backend/.env`

## Step 3: Setup Email (Optional)

For Gmail:
1. Enable 2-factor authentication on your Google account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Use this app password in `backend/.env` as `EMAIL_PASSWORD`

## Step 4: Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend  
cd ../frontend
npm install
```

## Step 5: Configure Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=any_random_string_min_32_characters

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password

CLIENT_URL=http://localhost:5173
```

### Frontend (.env)
Already configured - no changes needed for local development.

## Step 6: Create Admin User

```bash
cd backend
node createAdmin.js
```

This creates:
- Email: admin@techpro.com
- Password: admin123

**⚠️ Change this password after first login!**

## Step 7: Start Development Servers

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on: http://localhost:5173

## Step 8: Access the Website

- **Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin/login
  - Email: admin@techpro.com
  - Password: admin123

## Customization Checklist

### 1. Branding
- [ ] Update business name in `frontend/src/components/Navbar.jsx`
- [ ] Update business name in `frontend/src/components/Footer.jsx`
- [ ] Update hero section in `frontend/src/components/Hero.jsx`
- [ ] Update contact information throughout

### 2. Contact Details
Replace placeholder contact info in these files:
- [ ] `frontend/src/components/Hero.jsx` - Phone number, WhatsApp
- [ ] `frontend/src/components/Footer.jsx` - All contact details
- [ ] `frontend/src/pages/Contact.jsx` - Phone, email, address

### 3. Colors (Optional)
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a8a', // Change this
    dark: '#1e40af',
    light: '#3b82f6'
  },
  accent: {
    DEFAULT: '#f97316', // Change this
    dark: '#ea580c',
    light: '#fb923c'
  }
}
```

### 4. Add Content via Admin Dashboard
- [ ] Add your actual services
- [ ] Upload completed work photos
- [ ] Add customer testimonials
- [ ] Upload certifications

## Common Issues

### MongoDB Connection Error
- Check if MongoDB is running (local) or connection string is correct (Atlas)
- Whitelist your IP in MongoDB Atlas Network Access

### Cloudinary Upload Error
- Verify credentials are correct
- Check if `uploads/` folder exists in backend directory

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Change port in backend/.env if needed
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Production Deployment

### Frontend (Vercel - Free)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Set environment variable: `VITE_API_URL=your_backend_url/api`
5. Deploy

### Backend (Render - Free)
1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect your repository, select `backend` folder
5. Add all environment variables
6. Deploy

### Update CORS
In `backend/server.js`, update CORS origin to your frontend URL.

## Need Help?

Check `README.md` for detailed documentation.

---

**You're all set! 🎉**
