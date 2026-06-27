const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const upload = require('../config/multer');
const uploadToCloudinary = require('../utils/uploadToCloudinary');
const nodemailer = require('nodemailer');

// Submit booking
router.post('/', upload.single('image'), async (req, res) => {
  try {
    let imageUrl = '';
    
    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.buffer, 'bookings');
    }

    const booking = new Booking({
      ...req.body,
      image: imageUrl
    });
    
    await booking.save();

    // Send email notification
    if (process.env.EMAIL_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Service Booking',
        html: `
          <h3>New Service Booking</h3>
          <p><strong>Name:</strong> ${booking.name}</p>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Phone:</strong> ${booking.phone}</p>
          <p><strong>Service:</strong> ${booking.service}</p>
          <p><strong>Address:</strong> ${booking.address}</p>
          <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
          <p><strong>Issue:</strong> ${booking.issueDescription}</p>
        `
      });
    }

    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update booking (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete booking (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

