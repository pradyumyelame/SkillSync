// backend/controllers/workExperienceController.js

const WorkExperience = require('../models/WorkExperience');
const moment = require('moment'); // Import Moment.js library

// Controller function to save work experience data
exports.saveWorkExperience = async (req, res) => {
    try {
        const { title, company, location, startDate, endDate, description1, description2, description3, description4 } = req.body;

        // Convert date strings from "MM-yyyy" format to "yyyy-MM-dd" format
        const formattedStartDate = moment(startDate, 'MM-yyyy').format('YYYY-MM-DD');
        const formattedEndDate = moment(endDate, 'MM-yyyy').format('YYYY-MM-DD');

        // Check if there's an existing entry for work experience
        let workExperience = await WorkExperience.findOne();

        if (!workExperience) {
            // If no existing entry, create a new one
            workExperience = new WorkExperience({
                title,
                company,
                location,
                startDate: formattedStartDate,
                endDate: formattedEndDate,
                description1,
                description2,
                description3,
                description4
            });
        } else {
            // If existing entry found, update it
            workExperience.title = title;
            workExperience.company = company;
            workExperience.location = location;
            workExperience.startDate = formattedStartDate;
            workExperience.endDate = formattedEndDate;
            workExperience.description1 = description1;
            workExperience.description2 = description2;
            workExperience.description3 = description3;
            workExperience.description4 = description4;
        }

        // Save or update the workExperience to the database
        await workExperience.save();

        res.status(201).json({ message: 'Work experience saved or updated successfully' });
    } catch (error) {
        console.error('Error saving work experience:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch work experience data
exports.getWorkExperience = async (req, res) => {
    try {
        // Fetch the work experience data from the database
        const workExperience = await WorkExperience.findOne();
        res.json(workExperience);
    } catch (error) {
        console.error('Error fetching work experience:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
