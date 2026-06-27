const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const email = process.env.ADMIN_EMAIL || 'admin@techpro.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    // Create or update admin user
    const existingAdmin = await User.findOne({ email });
    
    if (existingAdmin) {
      existingAdmin.password = password; // The pre-save hook will automatically hash this
      await existingAdmin.save();
      console.log(`Admin user ${email} password updated/reset successfully!`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      process.exit(0);
    }

    const admin = new User({
      email,
      password, // The pre-save hook will automatically hash this
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created successfully!');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createAdminUser();

