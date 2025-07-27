import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BasicInfoForm from '../components/Forms/BasicInfoForm';
import AchievementForm from '../components/Forms/AchievementForm';
import EducationForm from '../components/Forms/EducationForm';
import ProjectForm from '../components/Forms/ProjectForm';
import SkillForm from '../components/Forms/SkillForm';
import WorkExperienceForm from '../components/Forms/WorkExperienceForm';

const User = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    achievements: {},
    education: {},
    projects: {},
    skills: { skills: [] },
    workExperience: {}
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      axios.get(`https://skillsync-yv17.onrender.com/api/resume/${user.sub}`)
        .then((res) => {
          setResumeData({
            basicInfo: res.data.basicInfo || {},
            achievements: res.data.achievements || {},
            education: res.data.education || {},
            projects: res.data.projects || {},
            skills: res.data.skills || { skills: [] },
            workExperience: res.data.workExperience || {}
          });
        })
        .catch(() => {
          setResumeData({
            basicInfo: {},
            achievements: {},
            education: {},
            projects: {},
            skills: { skills: [] },
            workExperience: {}
          });
        });
    }
  }, [user, isAuthenticated]);

  const handleSave = (section, data) => {
    axios.post('https://skillsync-yv17.onrender.com/api/resume/save', {
      userId: user.sub,
      section,
      data,
    }).then(() => {
      alert(`${section} saved successfully!`);
    });
  };

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

export default User;
