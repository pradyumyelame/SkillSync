import React, { createContext, useState, useContext, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// The initial state when no user is logged in or data is cleared
const initialResumeState = {
  basicInfo: {},
  achievements: {},
  education: {},
  projects: {},
  skills: { skills: [] },
  workExperience: {}
};

// 1. Create the context
const ResumeContext = createContext();

// 2. Create a custom hook for easy access to the context
export const useResume = () => useContext(ResumeContext);

// 3. Create the Provider Component
export const ResumeProvider = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [isResumeReady, setIsResumeReady] = useState(false); // To track if data has been loaded

  // Function to fetch data from the backend
  const fetchResume = useCallback(async () => {
    if (!isAuthenticated) return;
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('https://skillsync-yv17.onrender.com/api/resume/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // If data is found, update the state
      if (res.data && Object.keys(res.data).length > 0) {
        setResumeData({
          basicInfo: res.data.basicInfo || {},
          achievements: res.data.achievements || {},
          education: res.data.education || {},
          projects: res.data.projects || {},
          skills: res.data.skills || { skills: [] },
          workExperience: res.data.workExperience || {}
        });
        setIsResumeReady(true);
      } else {
        // If no data is found for the user, reset to initial state
        setResumeData(initialResumeState);
        setIsResumeReady(false);
      }
    } catch (error) {
      console.error('Failed to fetch resume:', error);
      setResumeData(initialResumeState); // Reset on error
      setIsResumeReady(false);
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  // Function to clear the state on logout
  const clearResume = () => {
    setResumeData(initialResumeState);
    setIsResumeReady(false);
  };

  // The value that will be provided to all consuming components
  const value = {
    resumeData,
    fetchResume,
    clearResume,
    isResumeReady // Provide this to the UI
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
