// backend/controllers/educationController.js

const Education = require('../models/Education');

// Controller function to save education data
exports.saveEducation = async (req, res) => {
    try {
        const { institute, discipline, year, grade } = req.body;

        // Check if there's an existing entry for education
        let education = await Education.findOne();

        if (!education) {
            // If no existing entry, create a new one
            education = new Education({
                institute,
                discipline,
                year,
                grade
            });
        } else {
            // If existing entry found, update it
            education.institute = institute;
            education.discipline = discipline;
            education.year = year;
            education.grade = grade;
        }

        // Save or update the education to the database
        await education.save();

        res.status(201).json({ message: 'Education saved or updated successfully' });
    } catch (error) {
        console.error('Error saving education:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch education data
exports.getEducation = async (req, res) => {
    try {
        // Fetch the education data from the database
        const education = await Education.findOne();
        res.json(education);
    } catch (error) {
        console.error('Error fetching education:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
