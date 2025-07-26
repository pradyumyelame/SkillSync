const Skill = require('../models/Skill');

// Controller function to save skills data
exports.saveSkills = async (req, res) => {
    try {
        const { skills } = req.body;

        // Check if there's an existing entry for skills
        let skillData = await Skill.findOne();

        if (!skillData) {
            // If no existing entry, create a new one
            skillData = new Skill({
                skills
            });
        } else {
            // If existing entry found, update it
            skillData.skills = skills;
        }

        // Save or update the skills data to the database
        await skillData.save();

        res.status(201).json({ message: 'Skills saved or updated successfully' });
    } catch (error) {
        console.error('Error saving skills:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch skills data
exports.getSkills = async (req, res) => {
    try {
        // Fetch the skills data from the database
        const skillData = await Skill.findOne();
        res.json(skillData);
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
