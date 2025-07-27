import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import moment from 'moment'; // Import moment for date formatting

function ResumeForm({ basicInfo, educationData, experienceData, projectData, skills }) {

  // A small helper to ensure we are working with an array
  const toArray = (data) => Array.isArray(data) ? data : [];

  return (
    // The id="pdf-content" is now on the User1.jsx component, so it's removed from here
    // to avoid confusion. The download button is also handled by User1.jsx.
    <div className="h-full w-full">
      <div className="flex flex-col h-full">
        {/* Basic Info Section */}
        {basicInfo && (
          <>
            <div className="text-center font-bold text-3xl mb-1">
              {basicInfo.name}
            </div>
            <div className="text-center mb-4">
              {basicInfo.title}
            </div>
            <div className="flex flex-row justify-center items-center gap-x-10 gap-y-2 flex-wrap mb-4">
              <span className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                {basicInfo.phone}
              </span>
              <span className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                {basicInfo.email}
              </span>
              <span className="flex items-center">
                <i className="fab fa-github mr-2"></i>
                {basicInfo.github}
              </span>
              <span className="flex items-center">
                <i className="fab fa-linkedin mr-2"></i>
                {basicInfo.linkedin}
              </span>
            </div>
          </>
        )}

        {/* Education Section */}
        {educationData && (
          <>
            <h2 className="text-lg font-bold mt-3 ml-5">Education</h2>
            <hr className="mx-4 border-t border-black mt-1 mb-2" />
            <div className="flex w-full justify-between gap-4 px-5">
              <div className="flex-row">
                <h3 className="font-bold">{educationData.institute}</h3>
                <p>{educationData.discipline}</p>
              </div>
              <div className="flex-row text-right">
                <h3 className="font-bold">{educationData.year}</h3>
                <p>{educationData.grade}</p>
              </div>
            </div>
          </>
        )}

        {/* Experience Section - FIX: Now maps over an array */}
        {toArray(experienceData).length > 0 && (
          <>
            <h2 className="text-lg font-bold mt-4 ml-5">Experience</h2>
            <hr className="mt-1 mx-4 border-t border-black" />
            {toArray(experienceData).map((exp, index) => (
              <div key={index} className="mt-2 px-5">
                <div className="flex w-full justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{exp.company}</h3>
                    <p className='italic'>{exp.title}</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold">
                      {moment(exp.startDate).format('MMM YYYY')} - {exp.endDate ? moment(exp.endDate).format('MMM YYYY') : 'Present'}
                    </h3>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-1">
                  {exp.description1 && <li>{exp.description1}</li>}
                  {exp.description2 && <li>{exp.description2}</li>}
                  {exp.description3 && <li>{exp.description3}</li>}
                  {exp.description4 && <li>{exp.description4}</li>}
                </ul>
              </div>
            ))}
          </>
        )}

        {/* Projects Section - FIX: Now maps over an array */}
        {toArray(projectData).length > 0 && (
          <>
            <h2 className="text-lg font-bold mt-4 ml-5">Projects</h2>
            <hr className="mt-1 mx-4 border-t border-black" />
            {toArray(projectData).map((proj, index) => (
              <div key={index} className="mt-2 px-5">
                <div className="flex w-full justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{proj.title}</h3>
                    {proj.link && (
                      <>
                        <span className="mx-1">|</span>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className='italic text-blue-600 hover:underline'>
                          Link
                        </a>
                      </>
                    )}
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold">{moment(proj.date).format('MMM YYYY')}</h3>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-1">
                  {proj.description1 && <li>{proj.description1}</li>}
                  {proj.description2 && <li>{proj.description2}</li>}
                  {proj.description3 && <li>{proj.description3}</li>}
                  {proj.description4 && <li>{proj.description4}</li>}
                </ul>
              </div>
            ))}
          </>
        )}

        {/* Technical Skills Section */}
        {toArray(skills).length > 0 && (
          <>
            <h2 className="text-lg font-bold mt-4 ml-5">Technical Skills</h2>
            <hr className="mt-1 mx-4 border-t border-black" />
            <div className="px-5 mt-2">
              <p>{skills.join(', ')}</p>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default ResumeForm;
