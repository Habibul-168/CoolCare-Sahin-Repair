# Troubleshooting Guide

## Common Issues & Solutions

### 1. Frontend Won't Start

#### Error: "Failed to resolve import"
**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

#### Error: Tailwind CSS / PostCSS issues
**Solution:** Already fixed with Tailwind CSS v3.4.1
- Check `postcss.config.js` uses `module.exports`
- Check `tailwind.config.js` uses `module.exports`

#### Error: Port 5173 already in use
**Solution:**
```bash
# Find and kill process on Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or change port in vite.config.js
```

### 2. Backend Won't Start

#### Error: Cannot find module
**Solution:**
```bash
cd backend
npm install
```

#### Error: MongoDB connection failed
**Solutions:**
1. **If using MongoDB Atlas:**
   - Check connection string format
   - Verify password has no special characters (or encode them)
   - Whitelist your IP in Network Access
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

2. **If using Local MongoDB:**
   - Ensure MongoDB service is running
   - Use: `mongodb://localhost:27017/technician-service`

#### Error: Port 5000 already in use
**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in backend/.env
```

### 3. File Upload Issues

#### Error: Cloudinary upload failed
**Solutions:**
1. Verify credentials in `.env` are correct
2. Check internet connection
3. Ensure `uploads/` folder exists:
```bash
cd backend
mkdir uploads
```

#### Error: File too large
**Solution:** Increase limit in `backend/config/multer.js`:
```javascript
limits: { fileSize: 10 * 1024 * 1024 } // 10MB
```

### 4. Admin Login Issues

#### Error: "User not found" or "Invalid credentials"
**Solutions:**
1. Create admin user first:
```bash
cd backend
node createAdmin.js
```

2. Use correct credentials:
   - Email: `admin@techpro.com`
   - Password: `admin123`

3. Check MongoDB connection

#### Error: "Invalid token" after login
**Solutions:**
1. Clear browser localStorage
2. Check JWT_SECRET is same in `.env`
3. Re-login

### 5. CORS Issues

#### Error: "CORS policy blocked"
**Solution:** Update `backend/server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  credentials: true
}));
```

### 6. Email Notifications Not Working

**Solutions:**
1. **For Gmail:**
   - Enable 2-factor authentication
   - Create App Password
   - Use App Password in `.env`

2. **Email not sending but no error:**
   - Check spam folder
   - Verify `EMAIL_USER` and `EMAIL_PASSWORD` are correct
   - Test with a simple script first

3. **Skip email for testing:**
   - Comment out email code in routes
   - Or leave EMAIL_USER empty in `.env`

### 7. Images Not Showing

#### Frontend images broken
**Solutions:**
1. Check image URLs from Cloudinary
2. Verify CORS on Cloudinary dashboard
3. Use placeholder images for testing

#### Uploaded images not displaying
**Solutions:**
1. Check Cloudinary credentials
2. Verify upload was successful (check Cloudinary dashboard)
3. Check image URL in database

### 8. API Connection Issues

#### Error: "Network Error" or "ERR_CONNECTION_REFUSED"
**Solutions:**
1. Ensure backend is running on correct port
2. Check `VITE_API_URL` in `frontend/.env`
3. Verify no firewall blocking
4. Check backend console for errors

#### Error: 404 on API routes
**Solutions:**
1. Check route paths match exactly
2. Verify backend routes are registered in `server.js`
3. Test API with Postman/Thunder Client first

### 9. Database Issues

#### Error: "Validation Error"
**Solutions:**
1. Check required fields in models
2. Verify data format matches schema
3. Check for unique field violations

#### Error: "Cannot read property '_id' of null"
**Solutions:**
1. Check if document exists before querying
2. Add error handling
3. Seed some test data

### 10. Build Issues

#### Frontend build fails
**Solutions:**
```bash
cd frontend
rm -rf node_modules dist .vite
npm install
npm run build
```

#### Backend deploy fails
**Solutions:**
1. Ensure all dependencies are in `dependencies`, not `devDependencies`
2. Set correct Node version
3. Set all environment variables on hosting platform

## Quick Fixes Checklist

### Backend Not Working?
- [ ] MongoDB is running / connected
- [ ] `.env` file exists with all variables
- [ ] `node_modules` installed
- [ ] Port 5000 is free
- [ ] Admin user created

### Frontend Not Working?
- [ ] Backend is running on port 5000
- [ ] `node_modules` installed
- [ ] `.env` file exists
- [ ] Port 5173 is free
- [ ] Tailwind CSS v3.4.1 installed

### Features Not Working?
- [ ] Check browser console for errors
- [ ] Check backend terminal for errors
- [ ] Test API endpoint with Postman
- [ ] Verify database has data
- [ ] Check authentication token

## Getting Help

1. **Check logs:**
   - Backend: Look at terminal where `npm run dev` is running
   - Frontend: Open browser DevTools (F12) → Console

2. **Test API separately:**
   - Use Postman or Thunder Client
   - Test endpoints directly
   - Verify responses

3. **Verify environment:**
   - Node.js version: v16+
   - npm version: v7+
   - MongoDB: running and accessible

4. **Start fresh:**
   ```bash
   # Backend
   cd backend
   rm -rf node_modules package-lock.json
   npm install
   
   # Frontend
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

## Environment Variables Template

### Backend `.env`
```env
# Required
PORT=5000
MONGODB_URI=mongodb://localhost:27017/technician-service
JWT_SECRET=minimum_32_character_secret_key_here

# Required for image uploads
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional - for email notifications
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Required
CLIENT_URL=http://localhost:5173
```

### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000/api
```

## Still Having Issues?

1. Run the verification script:
```bash
node verify-setup.js
```

2. Check that all files exist and are not corrupted

3. Ensure correct Node.js version (16+)

4. Try running with clean slate:
```bash
# Remove all node_modules
rm -rf frontend/node_modules backend/node_modules
rm frontend/package-lock.json backend/package-lock.json

# Reinstall
cd backend && npm install
cd ../frontend && npm install
```

---

**Most issues are related to:**
1. Missing environment variables
2. MongoDB connection
3. Cloudinary credentials
4. Port conflicts
5. Missing dependencies

**Check these first!**
