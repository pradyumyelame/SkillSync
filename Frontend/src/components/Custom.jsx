import React, { useState } from 'react';
import axios from 'axios';
import styles from './Custom.module.css';

// Import the pdf.js library
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

// This is a placeholder for your Body component.
// If you don't have this file, you can remove this import and the <Body /> tag below.
import Body from './Body';

// ✅ FIXED: Set up the worker for pdf.js to dynamically match the installed library version.
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

function Custom() {
  // --- STATE MANAGEMENT ---
  // Inputs
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [fileName, setFileName] = useState('');

  // Results
  const [atsScore, setAtsScore] = useState(null);
  const [atsSummary, setAtsSummary] = useState('');
  const [resumeSuggestions, setResumeSuggestions] = useState([]);
  const [responseKeywords, setResponseKeywords] = useState([]);

  // UI State
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('ats'); // 'ats' or 'keywords'

  // --- HANDLERS ---
  // This function now handles PDF files
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setLoading(true); // Start loading when file reading begins
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const pdf = await pdfjsLib.getDocument(event.target.result).promise;
            let fullText = '';
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const textContent = await page.getTextContent();
              const pageText = textContent.items.map(item => item.str).join(' ');
              fullText += pageText + '\n';
            }
            setResumeText(fullText);
            setFileName(file.name);
          } catch (error) {
            console.error('Error parsing PDF:', error);
            alert('Could not read the PDF file. Please ensure it is not corrupted.');
          } finally {
            setLoading(false); // Stop loading after file is read
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert('Please upload a PDF file (.pdf).');
      }
    }
  };

  const handleSubmit = async () => {
    // --- Validation ---
    if (!jobDescription.trim() || !resumeText.trim()) {
      alert('Please provide both a job description and a resume file.');
      return;
    }

    // --- Reset State & Start Loading ---
    setLoading(true);
    setAtsScore(null);
    setResponseKeywords([]);
    setActiveTab('ats'); // Default to ATS tab on new submission

    try {
      // --- Parallel API Calls for Efficiency ---
      const atsPromise = axios.post(
        'https://skillsync-yv17.onrender.com/api/analyze-resume',
        {
          jobDescription,
          resumeText,
        },
      );

      const keywordsPromise = axios.post(
        'https://skillsync-yv17.onrender.com/api/generate-technical-skills',
        {
          jobDescription,
        },
      );

      // --- Wait for all promises to resolve ---
      const [atsResult, keywordsResult] = await Promise.all([
        atsPromise,
        keywordsPromise,
      ]);

      // --- Set State with Results ---
      if (atsResult.data) {
        setAtsScore(atsResult.data.score || 0);
        setAtsSummary(atsResult.data.summary || '');
        setResumeSuggestions(atsResult.data.suggestions || []);
      }

      if (keywordsResult.data) {
        setResponseKeywords(keywordsResult.data.skills || []);
      }
    } catch (error) {
      console.error('Error during analysis:', error);
      alert(
        'An error occurred during analysis. Please check the console for details.',
      );
    } finally {
      setLoading(false);
    }
  };

  // --- HELPER FUNCTIONS ---
  const chunkArray = (array, size) => {
    const chunks = [];
    if (!Array.isArray(array)) return chunks;
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  // --- RENDER ---
  return (
    <div className={styles.app}>
      <h1 className={styles.mainTitle}>AI-Powered Resume Analyzer</h1>
      <p className={styles.subTitle}>
        Get an instant analysis of your resume against any job description.
      </p>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.textarea}
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          placeholder="1. Paste the Job Description here"
          rows={12}
        />
        <div className={styles.uploadBox}>
          <label htmlFor="resume-upload" className={styles.uploadLabel}>
            {/* ✅ UPDATED: Text changed to reflect PDF upload */}
            2. Upload Your Resume (.pdf)
          </label>
          <input
            id="resume-upload"
            type="file"
            // ✅ UPDATED: Accept attribute now looks for PDFs
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          {fileName && (
            <p className={styles.fileSuccess}>
              ✓ Loaded: <strong>{fileName}</strong>
            </p>
          )}
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.btn}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analyze My Resume'}
        </button>
      </div>

      {/* --- RESULTS SECTION --- */}
      {!loading && atsScore !== null && (
        <div className={styles.resultsContainer}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'ats' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('ats')}
            >
              ATS Score & Suggestions
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === 'keywords' ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab('keywords')}
            >
              Keyword Analysis
            </button>
          </div>

          {/* --- ATS Score Tab Content --- */}
          {activeTab === 'ats' && (
            <div className={styles.tabContent}>
              <div className={styles.scoreSection}>
                <div className={styles.scoreCircle}>
                  <span>{atsScore}%</span>
                  <small>Match Score</small>
                </div>
                <p className={styles.summary}>{atsSummary}</p>
              </div>
              <div className={styles.suggestionsSection}>
                <h3 className={styles.sectionTitle}>
                  ✨ How to Improve Your Resume
                </h3>
                <ul className={styles.suggestionList}>
                  {resumeSuggestions.map((suggestion, index) => (
                    <li key={index} className={styles.suggestionItem}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* --- Keywords Tab Content --- */}
          {activeTab === 'keywords' && (
            <div className={styles.tabContent}>
              <div className={styles.keywords}>
                <h3 className={styles.sectionTitle}>
                  Top Keywords from Job Description
                </h3>
                <div className={styles.keywordTable}>
                  {chunkArray(responseKeywords, 4).map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.keywordRow}>
                      {row.map((keyword, keywordIndex) => (
                        <div key={keywordIndex} className={styles.keywordCell}>
                          {keyword}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

export default Custom;
