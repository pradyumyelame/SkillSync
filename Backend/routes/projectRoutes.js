// backend/routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/project', projectController.saveProject);
router.get('/project', projectController.getProject);

module.exports = router;
