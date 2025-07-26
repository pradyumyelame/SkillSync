// backend/routes/basicInfoRoutes.js

const express = require('express');
const router = express.Router();
const basicInfoController = require('../controllers/basicInfoController');

// POST request to save basic info data
router.post('/basicinfo', basicInfoController.saveBasicInfo);

// GET request to fetch basic info data
router.get('/basicinfo', basicInfoController.getBasicInfo);


module.exports = router;
