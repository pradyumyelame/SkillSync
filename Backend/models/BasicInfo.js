// backend/models/BasicInfo.js

const mongoose = require('mongoose');

const basicInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    linkedin: String,
    github: String,
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const BasicInfo = mongoose.model('BasicInfo', basicInfoSchema);

module.exports = BasicInfo;
