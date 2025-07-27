import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useResume } from '../context/ResumeContext';

// Import all your form and display components
import BasicInfoForm from '../components/Forms/BasicInfoForm';
import AchievementForm from '../components/Forms/AchievementForm';
import EducationForm from '../components/Forms/EducationForm';
import ProjectForm from '../components/Forms/ProjectForm';
import SkillForm from '../components/Forms/SkillForm';
import WorkExperienceForm from '../components/Forms/WorkExperienceForm';
import ResumeForm from '../components/ResumeForm'; 
import styles from '../components/Editor.module.css';

const User1 = () => {
  const { user, isAuthenticated, isLoading: isAuthLoading, getAccessTokenSilently } = useAuth0();
  // Get the new loading state from the context
  const { resumeData, loading: isResumeLoading, fetchResume } = useResume();

  // This state is only for the UI (which editor tab is selected)
  const [selectedSection, setSelectedSection] = useState('basicInfo');
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    skills: "Skills",
    achievement: "Achievements",
  };

  // Fetch resume data when the user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      fetchResume();
    }
  }, [user, isAuthenticated, fetchResume]);
  
  // Securely save a section of the resume to the backend
  const handleSave = async (section, data) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.post('https://skillsync-yv17.onrender.com/api/resume/save', {
        section,
        data
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchResume(); 
      alert(`${section} saved successfully!`);
    } catch (error) {
      console.error('Failed to save:', error);
      alert(`Failed to save ${section}.`);
    }
  };

  // Show a loading message while Auth0 is authenticating the user
  if (isAuthLoading) return <p>Authenticating...</p>;
  if (!isAuthenticated) return <p>Please login to build your resume.</p>;

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Left side: The Editor */}
      <div className={styles.container} style={{ flex: 1 }}>
        <div className={styles.heading}>
          {Object.entries(sections).map(([key, value]) => (
            <div 
              className={`${styles.section} ${selectedSection === key ? styles.active : ""}`} 
              key={key} 
              onClick={() => setSelectedSection(key)}
            >
              {value}
            </div>
          ))}
        </div>
        
        <div className={styles.formdata}>
          {selectedSection === 'basicInfo' && <BasicInfoForm data={resumeData.basicInfo} onSave={(data) => handleSave('basicInfo', data)} />}
          {selectedSection === 'workExp' && <WorkExperienceForm data={resumeData.workExperience} onSave={(data) => handleSave('workExperience', data)} />}
          {selectedSection === 'project' && <ProjectForm data={resumeData.projects} onSave={(data) => handleSave('projects', data)} />}
          {selectedSection === 'education' && <EducationForm data={resumeData.education} onSave={(data) => handleSave('education', data)} />}
          {selectedSection === 'skills' && <SkillForm data={resumeData.skills?.skills || []} onSave={(data) => handleSave('skills', data)} />}
          {selectedSection === 'achievement' && <AchievementForm data={resumeData.achievements} onSave={(data) => handleSave('achievements', data)} />}
        </div>
      </div>

      {/* Right side: The Resume Preview */}
      <div className={styles.template} style={{ flex: 1, border: '1px solid #ccc', padding: '15px' }}>
        {/* This is the crucial change: check the resume loading state */}
        {isResumeLoading ? (
          <p>Loading Resume...</p>
        ) : (
          <ResumeForm 
            basicInfo={resumeData.basicInfo} 
            educationData={resumeData.education} 
            experienceData={resumeData.workExperience}
            projectData={resumeData.projects}
            skills={resumeData.skills?.skills || []}
          />
        )}
      </div>
    </div>
  );
};

export default User1;
