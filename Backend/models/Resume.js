const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  basicInfo: Object,
  achievements: Object,
  education: Object,
  projects: Object,        // ✅ New field
  skills: Object,          // ✅ New field
  workExperience: Object   // ✅ New field
});

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
