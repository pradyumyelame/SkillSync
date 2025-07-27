const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const checkJwt = require('../middleware/checkJwt.js');

// 👇 GET resume for the authenticated user
router.get('/me', checkJwt, async (req, res) => {
  const userId = req.auth.sub; // Auth0 user unique ID

  try {
    const resume = await Resume.findOne({ userId });
    if (!resume) return res.status(404).json({});
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 👇 Save or update section securely
router.post('/save', checkJwt, async (req, res) => {
  const userId = req.auth.sub;
  const { section, data } = req.body;

  if (!section || !data) return res.status(400).json({ error: 'Missing fields' });

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
