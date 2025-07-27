const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// GET resume by userId
router.get('/:userId', async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.params.userId });
    if (!resume) return res.status(404).json({});
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST to save or update a section
router.post('/save', async (req, res) => {
  const { userId, section, data } = req.body;
  if (!userId || !section || !data) return res.status(400).json({ error: 'Missing fields' });

  try {
    let resume = await Resume.findOne({ userId });

    if (!resume) {
      resume = new Resume({ userId });
    }

    resume[section] = data;
    await resume.save();

    res.json({ message: `${section} saved successfully` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save resume section' });
  }
});

module.exports = router;
