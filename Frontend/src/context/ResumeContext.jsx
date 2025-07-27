import React, { createContext, useState, useContext, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const initialResumeState = {
  basicInfo: {},
  achievements: {},
  education: {},
  projects: {},
  skills: { skills: [] },
  workExperience: {}
};

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [loading, setLoading] = useState(false); // Use a dedicated loading state

  const fetchResume = useCallback(async () => {
    if (!isAuthenticated) return;
    
    setLoading(true); // Start loading before the API call
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('https://skillsync-yv17.onrender.com/api/resume/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Check if the response contains actual resume data, not just an empty object or userId
      if (res.data && Object.keys(res.data).length > 1) { 
        setResumeData({
          basicInfo: res.data.basicInfo || {},
          achievements: res.data.achievements || {},
          education: res.data.education || {},
          projects: res.data.projects || {},
          skills: res.data.skills || { skills: [] },
          workExperience: res.data.workExperience || {}
        });
      } else {
        // If no data is found for the user, reset to the initial empty state
        setResumeData(initialResumeState);
      }
    } catch (error) {
      console.error('Failed to fetch resume:', error);
      setResumeData(initialResumeState); // Reset on error
    } finally {
      setLoading(false); // Stop loading after the API call is complete
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  // This function is called by the Header on logout
  const clearResume = () => {
    setResumeData(initialResumeState);
    setLoading(false); // Ensure loading is reset
  };

  const value = {
    resumeData,
    loading, // Provide the loading state to other components
    fetchResume,
    clearResume
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
