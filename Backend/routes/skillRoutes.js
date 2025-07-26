const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// POST request to save skills data
router.post('/skills', skillController.saveSkills);

// GET request to fetch skills data
router.get('/skills', skillController.getSkills);

module.exports = router;
