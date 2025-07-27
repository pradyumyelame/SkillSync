import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useResume } from '../context/ResumeContext'; // Import the custom hook

// Import all your form components
import BasicInfoForm from '../components/Forms/BasicInfoForm';
import AchievementForm from '../components/Forms/AchievementForm';
import EducationForm from '../components/Forms/EducationForm';
import ProjectForm from '../components/Forms/ProjectForm';
import SkillForm from '../components/Forms/SkillForm';
import WorkExperienceForm from '../components/Forms/WorkExperienceForm';

const User1 = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  // Get state and fetch function from the global context
  const { resumeData, fetchResume } = useResume();

  // Fetch the user's resume data when the component mounts or the user changes
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
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // After saving, fetch the latest data to update the UI
      fetchResume(); 
      alert(`${section} saved successfully!`);
    } catch (error) {
      console.error('Failed to save:', error);
      alert(`Failed to save ${section}.`);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please login first.</p>;

  return (
    <>
      {/* Each form gets its data from the global context and calls handleSave */}
      <BasicInfoForm
        data={resumeData.basicInfo}
        onSave={(data) => handleSave('basicInfo', data)}
      />
      <AchievementForm
        data={resumeData.achievements}
        onSave={(data) => handleSave('achievements', data)}
      />
      <EducationForm
        data={resumeData.education}
        onSave={(data) => handleSave('education', data)}
      />
      <ProjectForm
        data={resumeData.projects}
        onSave={(data) => handleSave('projects', data)}
      />
      <SkillForm
        // Handle the nested structure of the skills data
        data={resumeData.skills?.skills || []}
        onSave={(data) => handleSave('skills', data)}
      />
      <WorkExperienceForm
        data={resumeData.workExperience}
        onSave={(data) => handleSave('workExperience', data)}
      />
    </>
  );
};

export default User1;
