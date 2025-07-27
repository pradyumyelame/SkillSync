import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useResume } from '../context/ResumeContext';
import html2pdf from 'html2pdf.js'; // Import the library for PDF generation

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
  const { resumeData, loading: isResumeLoading, fetchResume } = useResume();

  const [selectedSection, setSelectedSection] = useState('basicInfo');
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    skills: "Skills",
    achievement: "Achievements",
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchResume();
    }
  }, [user, isAuthenticated, fetchResume]);
  
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

  // Function to handle the PDF download
  const handleDownloadPdf = () => {
    const element = document.getElementById('resume-preview-content');
    const opt = {
      margin:       0.5,
      filename:     `${resumeData.basicInfo.name || 'resume'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };


  if (isAuthLoading) return <div style={{ padding: '20px' }}>Authenticating...</div>;
  if (!isAuthenticated) return <div style={{ padding: '20px' }}>Please login to build your resume.</div>;

  return (
    <>
      {/* Embedded styles for the editor tabs */}
      <style>{`
        .${styles.heading} {
          display: flex;
          gap: 20px;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .${styles.section} {
          padding: 10px 15px;
          cursor: pointer;
          font-weight: 500;
          color: #4a5568;
          border-radius: 8px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .${styles.section}:hover {
          background-color: #edf2f7;
          color: #2d3748;
        }
        .${styles.active} {
          background-color: #319795; /* Teal color to match theme */
          color: white !important;
          font-weight: 600;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>

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

          {/* Download Button - Placed below the forms for easy access */}
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <button
              onClick={handleDownloadPdf}
              style={{
                padding: '12px 24px',
                backgroundColor: '#2d3748',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1a202c'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2d3748'}
            >
              Download as PDF
            </button>
          </div>

        </div>

        {/* Right side: The Resume Preview */}
        <div 
          className={styles.template} 
          style={{ 
            flex: 1, 
            border: '1px solid #ccc', 
            padding: '15px', 
            overflowY: 'auto', 
            maxHeight: 'calc(100vh - 140px)' // Solves the overflow problem
          }}
        >
          {isResumeLoading ? (
            <p>Loading Resume...</p>
          ) : (
            // Added an ID here for the PDF generator to target
            <div id="resume-preview-content">
              <ResumeForm 
                basicInfo={resumeData.basicInfo} 
                educationData={resumeData.education} 
                experienceData={resumeData.workExperience}
                projectData={resumeData.projects}
                skills={resumeData.skills?.skills || []}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User1;
