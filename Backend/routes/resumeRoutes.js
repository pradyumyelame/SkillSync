// pages/User1.jsx
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import BasicInfoForm from '../components/Forms/BasicInfoForm';
import AchievementForm from '../components/Forms/AchievementForm';
import EducationForm from '../components/Forms/EducationForm';
import ProjectForm from '../components/Forms/ProjectForm';
import SkillForm from '../components/Forms/SkillForm';
import WorkExperienceForm from '../components/Forms/WorkExperienceForm';

const User1 = () => {
  const { user, isAuthenticated, isLoading, logout, getAccessTokenSilently } = useAuth0();

  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    achievements: {},
    education: {},
    projects: {},
    skills: { skills: [] },
    workExperience: {}
  });

  const fetchResume = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('https://skillsync-yv17.onrender.com/api/resume/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setResumeData({
        basicInfo: res.data.basicInfo || {},
        achievements: res.data.achievements || {},
        education: res.data.education || {},
        projects: res.data.projects || {},
        skills: res.data.skills || { skills: [] },
        workExperience: res.data.workExperience || {}
      });

      console.log("✅ Resume loaded for:", user?.sub);
    } catch (error) {
      console.error('❌ Failed to fetch resume:', error);
      setResumeData({
        basicInfo: {},
        achievements: {},
        education: {},
        projects: {},
        skills: { skills: [] },
        workExperience: {}
      });
    }
  };

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
      alert(`${section} saved successfully!`);
    } catch (error) {
      console.error(`❌ Failed to save ${section}:`, error);
      alert(`Failed to save ${section}.`);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchResume();
    }
  }, [user, isAuthenticated]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please login first</p>;

  return (
    <>
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
        data={resumeData.skills?.skills || []}
        onSave={(data) => handleSave('skills', data)}
      />
      <WorkExperienceForm
        data={resumeData.workExperience}
        onSave={(data) => handleSave('workExperience', data)}
      />
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </>
  );
};

export default User1;
