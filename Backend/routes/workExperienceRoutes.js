const express = require('express');
const router = express.Router();
const workExperienceController = require('../controllers/workExperienceController');

// POST request to save work experience data
router.post('/workexperience', workExperienceController.saveWorkExperience);

// GET request to fetch work experience data
router.get('/workexperience', workExperienceController.getWorkExperience);

module.exports = router;
