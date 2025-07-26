// backend/routes/educationRoutes.js

const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

router.post('/education', educationController.saveEducation);
router.get('/education', educationController.getEducation);

module.exports = router;
