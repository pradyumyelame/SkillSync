import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);

  // This effect is a safeguard that clears data if the user becomes unauthenticated.
  useEffect(() => {
    if (!isAuthenticated) {
      setResumeData(initialResumeState);
      setLoading(false);
    }
  }, [isAuthenticated]);

  const fetchResume = useCallback(async () => {
    if (!isAuthenticated) return;
    
    // --- THIS IS THE CRUCIAL FIX ---
    // 1. Aggressively clear any old data FIRST.
    setResumeData(initialResumeState);
    // 2. Then, set the loading state.
    setLoading(true);
    
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('https://skillsync-yv17.onrender.com/api/resume/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // If the new user has data, set it. Otherwise, the state remains empty.
      if (res.data && Object.keys(res.data).length > 1) { 
        setResumeData({
          basicInfo: res.data.basicInfo || {},
          achievements: res.data.achievements || {},
          education: res.data.education || {},
          projects: res.data.projects || {},
          skills: res.data.skills || { skills: [] },
          workExperience: res.data.workExperience || {}
        });
      }
    } catch (error) {
      console.error('Failed to fetch resume:', error);
      // The state is already cleared, so we just log the error.
    } finally {
      setLoading(false);
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  const clearResume = () => {
    setResumeData(initialResumeState);
    setLoading(false);
  };

  const value = {
    resumeData,
    loading,
    fetchResume,
    clearResume
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};
