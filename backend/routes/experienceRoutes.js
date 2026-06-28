const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json({ success: true, data: experiences });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST - Add new experience
router.post('/', async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update experience
router.put('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!experience) {
      return res.status(404).json({ success: false, error: 'Experience not found' });
    }
    res.json({ success: true, data: experience });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete experience
router.delete('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ success: false, error: 'Experience not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;