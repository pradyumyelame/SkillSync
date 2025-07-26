const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skills: [String]
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
