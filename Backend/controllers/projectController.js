// backend/controllers/projectController.js

const Project = require('../models/Project');
const moment = require('moment');

// Controller function to save project data
exports.saveProject = async (req, res) => {
    try {
        const { title, date, deployedLink, description1, description2, description3, description4 } = req.body;

        // Convert date strings from "MM-yyyy" format to "yyyy-MM-dd" format
        const formattedDate = moment(date, 'MM-yyyy').format('YYYY-MM-DD');

        let project = await Project.findOne();

        if (!project) {
            project = new Project({
                title,
                date: formattedDate,
                deployedLink,
                description1,
                description2,
                description3,
                description4
            });
        } else {
            project.title = title;
            project.date = formattedDate;
            project.deployedLink = deployedLink;
            project.description1 = description1;
            project.description2 = description2;
            project.description3 = description3;
            project.description4 = description4;
        }

        await project.save();

        res.status(201).json({ message: 'Project saved or updated successfully' });
    } catch (error) {
        console.error('Error saving project:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch project data
exports.getProject = async (req, res) => {
    try {
        const project = await Project.findOne();
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
