// models/Resume.js
const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  basicInfo: Object,
  achievements: Object,
  education: Object,
  projects: Object,
  skills: Object,
  workExperience: Object
});

module.exports = mongoose.model('Resume', ResumeSchema);
