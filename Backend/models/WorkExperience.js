// backend/models/WorkExperience.js

const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    },
    description3: {
        type: String,
        required: true
    },
    description4: {
        type: String,
        required: true
    }
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

module.exports = WorkExperience;
