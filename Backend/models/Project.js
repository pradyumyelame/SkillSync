// backend/models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    deployedLink: {
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
