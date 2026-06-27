const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');
const auth = require('../middleware/auth');
const upload = require('../config/multer');
const uploadToCloudinary = require('../utils/uploadToCloudinary');

// Get all certifications
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ year: -1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create certification (admin only)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    let imageUrl = '';
    
    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.buffer, 'certifications');
    }

    const certification = new Certification({
      ...req.body,
      image: imageUrl
    });
    
    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update certification (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!certification) return res.status(404).json({ message: 'Certification not found' });
    res.json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete certification (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) return res.status(404).json({ message: 'Certification not found' });
    res.json({ message: 'Certification deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

