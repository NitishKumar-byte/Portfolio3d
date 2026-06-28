const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 });
    res.json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST - Add new category
router.post('/', async (req, res) => {
  try {
    const { category, skills } = req.body;
    const skill = await Skill.create({ category, skills: skills || [] });
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update category
router.put('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!skill) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.json({ success: true, data: skill });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete category
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;