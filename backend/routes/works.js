const express = require('express');
const router = express.Router();
const Work = require('../models/Work');
const auth = require('../middleware/auth');
const upload = require('../config/multer');
const uploadToCloudinary = require('../utils/uploadToCloudinary');

// Get all works
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const works = await Work.find(filter).sort({ createdAt: -1 });
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single work
router.get('/:id', async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json(work);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create work (admin only)
router.post('/', auth, upload.array('images', 5), async (req, res) => {
  try {
    const imageUrls = [];
    
    if (req.files) {
      for (const file of req.files) {
        const url = await uploadToCloudinary(file.buffer, 'works');
        imageUrls.push(url);
      }
    }

    const work = new Work({
      ...req.body,
      images: imageUrls
    });
    
    await work.save();
    res.status(201).json(work);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update work (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json(work);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete work (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json({ message: 'Work deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

