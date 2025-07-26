import React from 'react';
import html2pdf from 'html2pdf.js';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


function ResumeForm({ basicInfo, educationData, experienceData, projectData, skills }) {

  useEffect(() => {

  }, [basicInfo, educationData, experienceData, projectData, skills]);


  const downloadPDF = () => {
    const element = document.getElementById('pdf-content');

    html2pdf()
      .set({
        margin: 0, // Remove margin from all sides
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .from(element)
      .save();
  };

  useEffect(() => {

  }, [basicInfo]);

  return (

    <>
      <div id="pdf-content" className="h-full w-full">
        <div className="flex flex-col h-full">
          {/* First Row */}
          <div className="text-center font-bold text-3xl">
            {basicInfo.name}
          </div>

          {/* Second Row */}
          <div className="text-center">
            {basicInfo.title}
          </div>

          {/* Third Row */}
          <div className="flex flex-row justify-around items-center gap-10">
            <div className="flex flex-col">
              <span className="flex items-center">
                <i className="fas fa-phone-alt mr-2 "></i>
                {basicInfo.phone}
              </span>
              <span className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                {basicInfo.email}
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <i className="fab fa-github mr-2"></i>
                {basicInfo.github}
              </span>
              <span className="flex items-center">
                <i className="fab fa-linkedin mr-2"></i>
                {basicInfo.linkedin}
              </span>
            </div>
          </div>
        </div>

        {/* Education */}
        <h2 className="text-lg font-bold mt-3 ml-5 left-0">Education</h2>
        <hr className=" mx-4 border-t border-black mt-3" />
        <div className="flex w-full justify-between gap-50">
          <div className="flex-row mr-0 ml-5">
            <h3 className="font-bold">{educationData.institute}</h3>
            <p>{educationData.discipline}</p>
          </div>
          <div className="flex-row ml-auto mr-5">
            <h3 className="font-bold">{educationData.year}</h3>
            <p>{educationData.grade}</p>
          </div>
        </div>

        <div className="flex w-full justify-between gap-50">
          <div className="flex-row mr-0 ml-5">
            <h3 className="font-bold">{educationData.institute}</h3>
            <p>{educationData.discipline}</p>
          </div>
          <div className="flex-row ml-auto mr-5">
            <h3 className="font-bold">{educationData.year}</h3>
            <p>{educationData.grade}</p>
          </div>
        </div>

        {/* Experience */}
        <h2 className="text-lg font-bold mt-3 ml-5 left-0">Experience</h2>
        <hr className="mt-3 mx-4 border-t border-black" />

        {/* Electronics Company */}
        <div className="flex-col w-full justify-between gap-50">
          <div className="flex w-full justify-between gap-50">
            <div className="flex-row mr-0 ml-5">
              <h3 className="font-bold">{experienceData.company}</h3>
              <p className='italic'>{experienceData.title}</p>
            </div>
            <div className="flex-row ml-auto mr-5">
              <h3 className="font-bold">{experienceData.startDate + ' to ' + experienceData.endDate}</h3>
              <p>{experienceData.location}</p>
            </div>
          </div>
          <div className="flex-row mr-0 ml-10">
            <li>{experienceData.description1}</li>
            <li>{experienceData.description2}</li>
            <li>{experienceData.description3}</li>
            <li> {experienceData.description4}</li>
          </div>
        </div>

        {/* Service Based Company */}
        <div className="flex-col w-full justify-between gap-50">
          <div className="flex w-full justify-between gap-50">
            <div className="flex-row mr-0 ml-5">
              <h3 className="font-bold">{experienceData.company}</h3>
              <p className='italic'>{experienceData.title}</p>
            </div>
            <div className="flex-row ml-auto mr-5">
              <h3 className="font-bold">{experienceData.startDate + ' to ' + experienceData.endDate}</h3>
              <p>{experienceData.location}</p>
            </div>
          </div>
          <div className="flex-row mr-0 ml-10">
            <li>{experienceData.description1}</li>
            <li>{experienceData.description2}</li>
            <li>{experienceData.description3}</li>
            <li> {experienceData.description4}</li>
          </div>
        </div>

        {/* Projects */}
        <h2 className="text-lg font-bold mt-3 ml-5 left-0">Projects</h2>
        <hr className="mt-3 mx-4 border-t border-black" />
        <div className="flex-col gap-0">
          {/* Project 1 */}
          <div className="flex justify-between gap-50">
            <div className="flex mr-0 ml-5 items-center">
              <h3 className="font-bold">{projectData.title}</h3>
              <span className="mx-2">|</span>
              <p className='italic'> Link</p>
            </div>
            <div className="flex-row ml-auto mr-5">
              <h3 className="font-bold">{projectData.date}</h3>
            </div>
          </div>
          <div className="flex-row  ml-10 ">
            <li> {projectData.description1}</li>
            <li>{projectData.description2}</li>
            <li> {projectData.description3}</li>
            <li>{projectData.description4}</li>
          </div>


          {/* Project 2 */}
          <div className="flex justify-between gap-50">
            <div className="flex mr-0 ml-5 items-center">
              <h3 className="font-bold">{projectData.title}</h3>
              <span className="mx-2">|</span>
              <p className='italic'> Link</p>
            </div>
            <div className="flex-row ml-auto mr-5">
              <h3 className="font-bold">{projectData.date}</h3>
            </div>
          </div>
          <div className="flex-row  ml-10 ">
            <li> {projectData.description1}</li>
            <li>{projectData.description2}</li>
            <li> {projectData.description3}</li>
            <li>{projectData.description4}</li>
          </div>

        </div>

        {/* Technical Skills */}
        <h2 className="text-lg font-bold mt-3 ml-5 left-0">Technical Skills</h2>
        <hr className="mt-3 mx-4 border-t border-black" />
        <div className="flex-row w-full justify-between gap-50">
          <div className="flex ml-0 items-center">
            <p className="ml-2">{skills.join(', ')}</p>
          </div>


        </div>


        <hr className="mt-3 mx-4 border-t border-black" />

        <div className="flex w-full justify-between gap-50">

          <div className="flex-row mr-0 ml-5">
            <h3 className="font-bold">Achievements</h3>
          </div>


        </div>

        <div className="flex-row  ml-10 mb-5 ">
          <li>Sports Club: Member of the basketball team</li>
          <li>Cultural Society: Participated in annual dance competition</li>
          <li>Technical Club: Organized coding competitions</li>
        </div>


      </div>


      <div className="flex justify-center">
        <button
          onClick={downloadPDF}
          className="inline-block px-4 py-2 text-lg font-bold text-center text-white bg-blue-500 border border-blue-500 rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Download PDF
        </button>
      </div>


    </>


  );
};

export default ResumeForm;
