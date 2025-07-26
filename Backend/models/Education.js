// backend/models/Education.js

const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institute: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
