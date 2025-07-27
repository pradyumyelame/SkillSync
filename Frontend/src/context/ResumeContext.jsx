import React, { createContext, useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// 1. Create the context
const ResumeContext = createContext();

// Custom hook to use the context easily
export const useResume = () => useContext(ResumeContext);

// 2. Create the provider component
export const ResumeProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  
  // Central state for all resume data
  const initialResumeState = {
    basicInfo: {},
    achievements: {},
    education: {},
    projects: {},
    skills: { skills: [] },
    workExperience: {}
  };

  const [resumeData, setResumeData] = useState(initialResumeState);

  // Function to fetch data (moved from User1.jsx)
  const fetchResume = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('https://skillsync-yv17.onrender.com/api/resume/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResumeData({
        basicInfo: res.data.basicInfo || {},
        achievements: res.data.achievements || {},
        education: res.data.education || {},
        projects: res.data.projects || {},
        skills: res.data.skills || { skills: [] },
        workExperience: res.data.workExperience || {}
      });
    } catch (error) {
      console.error('Failed to fetch resume:', error);
      setResumeData(initialResumeState); // Reset on error
    }
  };
  
  // Function to clear the state
  const clearResume = () => {
    setResumeData(initialResumeState);
  };

  // 3. Provide state and functions to children
  const value = {
    resumeData,
    fetchResume,
    clearResume
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};