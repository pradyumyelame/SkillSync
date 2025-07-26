// backend/controllers/basicInfoController.js

const BasicInfo = require('../models/BasicInfo');

// Controller function to save basic info data
exports.saveBasicInfo = async (req, res) => {
    try {
        const { name, title, linkedin, github, email, phone } = req.body;

        // Check if there's an existing entry for basic info
        let basicInfo = await BasicInfo.findOne();

        if (!basicInfo) {
            // If no existing entry, create a new one
            basicInfo = new BasicInfo({
                name,
                title,
                linkedin,
                github,
                email,
                phone
            });
        } else {
            // If existing entry found, update it
            basicInfo.name = name;
            basicInfo.title = title;
            basicInfo.linkedin = linkedin;
            basicInfo.github = github;
            basicInfo.email = email;
            basicInfo.phone = phone;
        }

        // Save or update the basicInfo to the database
        await basicInfo.save();

        res.status(201).json({ message: 'Basic info saved or updated successfully' });
    } catch (error) {
        console.error('Error saving basic info:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch basic info data
exports.getBasicInfo = async (req, res) => {
    try {
        // Fetch the basic info data from the database
        const basicInfo = await BasicInfo.findOne();
        res.json(basicInfo);
    } catch (error) {
        console.error('Error fetching basic info:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
