// backend/app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db'); // Import the connectDB function
const basicInfoRoutes = require('./routes/basicInfoRoutes');
const workExperienceRoutes = require('./routes/workExperienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const educationRoutes = require('./routes/educationRoutes');
const skillRoutes = require('./routes/skillRoutes'); 

const outputRoutes = require('./routes/outputRoutes');
const resumeRoutes = require('./routes/resumeRoutes');


// const achievementRoutes = require('./routes/achievementRoutes');

const app = express();

// Middleware
app.use(express.json());
// Enable CORS middleware
app.use(cors({
  origin: "https://skill-sync-sandy.vercel.app", // <-- your Vercel frontend URL
  credentials: true,
}));

// Connect to MongoDB
connectDB();

// Define routes and other server configurations...

//1. 
app.use('/api', basicInfoRoutes);

//2. 
app.use('/api/', workExperienceRoutes);

//3.
app.use('/api/', projectRoutes);

//4.
app.use('/api/', educationRoutes);

//5.
app.use('/api/', skillRoutes )


//6.
// app.use('/api',achievementRoutes);

app.use('/api', outputRoutes); 
app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});