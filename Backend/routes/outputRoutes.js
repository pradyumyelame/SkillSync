const express = require('express');
const router = express.Router();
// ✅ CHANGED: Import the Google Generative AI library
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// ✅ CHANGED: Initialize the Google AI client with your Gemini API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/generate-technical-skills', async (req, res) => {
    try {
        const { jobDescription } = req.body;

        // ✅ CHANGED: Select the Gemini model. 'gemini-1.5-flash' is fast and efficient.
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // ✅ CHANGED: The prompt is adjusted for Gemini.
        // We explicitly ask for a JSON object in the prompt itself.
        const prompt = `
            You are an expert Applicant Tracking System (ATS). Your task is to extract the most relevant technical keywords from the provided job description. 
            Return the output as a single, valid JSON object with one key named "skills". 
            The value of "skills" should be an array of strings. Each string should be a concise, atomic keyword of one to two words.
            
            Job Description:
            ---
            ${jobDescription}
            ---
        `;

        // ✅ CHANGED: This is how you call the Gemini API to generate content.
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // ✅ FIXED: More robust JSON extraction to handle extra text from the AI.
        // Find the start and end of the JSON object within the response text.
        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}');

        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
            // Extract the JSON part of the string.
            const jsonString = text.substring(startIndex, endIndex + 1);
            
            // Parse the extracted JSON string.
            const parsedSkills = JSON.parse(jsonString);
            res.json(parsedSkills); // Send the parsed JSON object
        } else {
            // If no valid JSON object is found, throw a specific error.
            console.error("Raw AI Response:", text); // Log the problematic response
            throw new Error("Could not find a valid JSON object in the AI response.");
        }

    } catch (error) {
        console.error("Error processing request with Gemini:", error);
        // Handle potential JSON parsing errors
        if (error instanceof SyntaxError) {
            return res.status(500).json({ error: "Failed to parse AI response as JSON." });
        }
        res.status(500).json({ error: "Failed to process request with Gemini API." });
    }
});

// This is the new route for generating recommendations
router.post('/generate-recommendations', async (req, res) => {
    try {
        // Get job description and keywords from the frontend
        const { jobDescription, keywords } = req.body;

        // Basic validation
        if (!jobDescription || !keywords || !Array.isArray(keywords) || keywords.length === 0) {
            return res.status(400).json({ error: "Job description and a list of keywords are required." });
        }

        // Initialize the Gemini model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Create a detailed prompt for the AI
        const prompt = `
            You are an expert career coach. Analyze the following job description and the extracted keywords.
            Provide 3-5 actionable, personalized recommendations for a candidate to improve their chances of getting this job.
            Focus on suggesting specific portfolio projects to build, skills to learn, or ways to tailor their resume.
            Return the output as a single, valid JSON object with one key named "recommendations".
            The value of "recommendations" should be an array of strings. Each string is a single recommendation.

            Job Description:
            ---
            ${jobDescription}
            ---

            Keywords to focus on: ${keywords.join(', ')}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Robustly find and extract the JSON object from the AI's response
        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}');

        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
            const jsonString = text.substring(startIndex, endIndex + 1);
            const parsedResponse = JSON.parse(jsonString);
            res.json(parsedResponse); // Send the recommendations back
        } else {
            // Log the raw response if JSON is not found
            console.error("Raw AI Response for recommendations:", text);
            throw new Error("Could not find a valid JSON object in the AI recommendation response.");
        }

    } catch (error) {
        console.error("Error processing recommendation request:", error);
        res.status(500).json({ error: "Failed to process request with Gemini API for recommendations." });
    }
});

// Add this new route to your existing Express router file (e.g., outputRoutes.js)
// This can be placed before `module.exports = router;`

router.post('/analyze-resume', async (req, res) => {
    try {
        const { jobDescription, resumeText } = req.body;

        if (!jobDescription || !resumeText) {
            return res.status(400).json({ error: "Job description and resume text are required." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // A more advanced prompt for detailed analysis
        const prompt = `
            You are an expert ATS (Applicant Tracking System) and a professional career coach.
            Your task is to analyze the provided resume against the provided job description.

            Perform the following actions:
            1.  Calculate a matching score as a percentage, representing how well the resume fits the job description.
            2.  Provide a brief, one-sentence summary of the analysis.
            3.  Generate a list of 3-5 specific, actionable suggestions for how the candidate can improve their resume to better match this specific job role.

            Return the output as a single, valid JSON object with the following keys: "score", "summary", and "suggestions".
            - "score" should be a number (0-100).
            - "summary" should be a string.
            - "suggestions" should be an array of strings.

            ---
            Job Description:
            ${jobDescription}
            ---
            Resume Text:
            ${resumeText}
            ---
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Robustly find and extract the JSON object from the AI's response
        const startIndex = text.indexOf('{');
        const endIndex = text.lastIndexOf('}');

        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
            const jsonString = text.substring(startIndex, endIndex + 1);
            const parsedResponse = JSON.parse(jsonString);
            res.json(parsedResponse);
        } else {
            console.error("Raw AI Response for ATS analysis:", text);
            throw new Error("Could not find a valid JSON object in the AI analysis response.");
        }

    } catch (error) {
        console.error("Error processing resume analysis request:", error);
        res.status(500).json({ error: "Failed to process resume analysis with Gemini API." });
    }
});


module.exports = router;
