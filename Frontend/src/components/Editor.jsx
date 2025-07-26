import React, { useState,useEffect } from 'react';
import BasicInfoForm from "./Forms/BasicInfoForm";
import WorkExperienceForm from './Forms/WorkExperienceForm';
import ProjectForm from './Forms/ProjectForm';
import EducationForm from './Forms/EducationForm';
import SkillForm from './Forms/SkillForm';
import AchievementForm from './Forms/AchievementForm';
import styles from "./Editor.module.css";

import ResumeForm from './ResumeForm';



import axios from 'axios'; // Import Axios
import moment from 'moment';


const Editor = () => {
    
    const [selectedSection, setSelectedSection] = useState('basicInfo');
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        skills: "Skills",
        achievement: "Achievements",
        // other: "Other",
    };

    //1. Basic Info
    const [basicInfo, setBasicInfo] = useState(null);
    // Function to handle saving basic info
    const handleSaveBasicInfo = async (data) => {
        try {
            // Send POST request to backend to save basic info
            const response = await axios.post('https://skillsync-yv17.onrender.com/api/basicinfo', data); // Replace with your backend URL
            console.log(response.data); // Log the response from backend
            setBasicInfo(data); // Update basicInfo state if save is successful
        } catch (error) {
            console.error('Error saving basic info:', error);
        }
    };
    // Function to fetch basic info from backend when component mounts
    useEffect(() => {
        const fetchBasicInfo = async () => {
            try {
                const response = await axios.get('https://skillsync-yv17.onrender.com/api/basicinfo');
                setBasicInfo(response.data); // Assuming the response.data is the stored basic info object
                // console.log(response.data); // Log the response
            } catch (error) {
                console.error('Error fetching basic info:', error);
            }
        };

        fetchBasicInfo(); // Call fetchBasicInfo when component mounts
    }, []); // Empty dependency array ensures this effect runs only once when component mounts


    //2. Work Experience Form
    const [experienceData, setExperienceData] = useState(null);

    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                const response = await axios.get('https://skillsync-yv17.onrender.com/api/workexperience');
                const experienceData = response.data;
    
                // Parse and format the dates from "yyyy-MM-dd" to "MM-yyyy"
                const formattedData = {
                    ...experienceData,
                    startDate: moment(experienceData.startDate).format('MM-yyyy'),
                    endDate: moment(experienceData.endDate).format('MM-yyyy')
                };
    
                setExperienceData(formattedData);
            } catch (error) {
                console.error('Error fetching work experience data:', error);
            }
        };
    
        fetchExperienceData();
    }, []);

    const handleSaveWorkExperiences = async (data) => {
        try {
            await axios.post('https://skillsync-yv17.onrender.com/api/workexperience', data);
            console.log('Work experience data saved successfully');
            setExperienceData(data);
        } catch (error) {
            console.error('Error saving work experience data:', error);
        }
    };


    //3.projects
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await axios.get('https://skillsync-yv17.onrender.com/api/project');
                const projectData = response.data;

                // Parse and format the dates from "yyyy-MM-dd" to "MM-yyyy"
                const formattedData = {
                    ...projectData,
                    date: moment(projectData.date).format('MM-yyyy')
                };

                setProjectData(formattedData);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, []);

    const handleSaveProject = async (data) => {
        try {
            await axios.post('https://skillsync-yv17.onrender.com/api/project', data);
            console.log('Project data saved successfully');
            setProjectData(data);
        } catch (error) {
            console.error('Error saving project data:', error);
        }
    };

    //4.
    const [educationData, setEducationData] = useState(null);

    useEffect(() => {
        const fetchEducationData = async () => {
            try {
                const response = await axios.get('https://skillsync-yv17.onrender.com/api/education'); // Adjust the API endpoint according to your backend route
                setEducationData(response.data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };

        fetchEducationData();
    }, []);

    const handleSaveEducation = async (data) => {
        try {
            await axios.post('https://skillsync-yv17.onrender.com/api/education', data); // Adjust the API endpoint according to your backend route
            console.log('Education data saved successfully');
            setEducationData(data);
        } catch (error) {
            console.error('Error saving education data:', error);
        }
    };

    //5
    const [skills, setSkills] = useState([]);

    // Function to fetch skills from backend when component mounts
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://skillsync-yv17.onrender.com/api/skills');
                if (response.data && response.data.skills) {
                    console.log(response.data);
                    setSkills(response.data.skills);
                }
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []);

    // Function to handle saving skills
    const handleSaveSkills = async (data) => {
        try {
            // Check if data is an object with a 'skills' property containing an array
            if (!data || !Array.isArray(data.skills)) {
                console.error('Data is not in the expected format:', data);
                return; // Exit the function if data is not in the expected format
            }

            // Extract skills from the 'skills' property of the data object
            const skillStrings = data.skills;

            // Send POST request to backend to save skills
            await axios.post('https://skillsync-yv17.onrender.com/api/skills', { skills: skillStrings });
            console.log('Skills saved successfully');

            // Update skills state if save is successful
            setSkills(skillStrings);
        } catch (error) {
            console.error('Error saving skills:', error);
        }
    };


    //
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };
    


    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    {Object.entries(sections).map(([key, value]) => (
                        <div className={`${styles.section} ${selectedSection === key ? styles.active : ""}`} key={key} onClick={() => handleSectionClick(key)}>
                            {value}
                        </div>
                    ))}
                </div>          

                <div className={styles.formdata}>
                    {selectedSection === 'basicInfo' && <BasicInfoForm data={basicInfo} onSave={handleSaveBasicInfo} /> }
                    {selectedSection === 'workExp' && <WorkExperienceForm data={experienceData} onSave={handleSaveWorkExperiences}/>} 
                    {selectedSection === 'project' && <ProjectForm onSave={handleSaveProject} data={projectData}/>}
                    {selectedSection === 'education' && <EducationForm onSave={handleSaveEducation} data={educationData}  />}
                    {selectedSection === 'skills' && <SkillForm onSave={handleSaveSkills} data={skills} />}
                    {selectedSection === 'achievement' && <AchievementForm />} 
                    {/* <AchievementForm  /> */}
                </div>
            </div>

            <div className={styles.template}>
                {
                    basicInfo && educationData && experienceData && projectData && skills &&
                    <ResumeForm 
                        basicInfo={basicInfo} 
                        educationData={educationData} 
                        experienceData={experienceData}
                        projectData={projectData}
                        skills={skills}

                    />
                }
            </div>
            

        </>
    );
};

export default Editor;
