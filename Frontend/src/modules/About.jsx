import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const questions = [
    {
      id: 1,
      question: "How can a resume builder help me?",
      answer:
        "A resume builder simplifies the process of creating a professional resume. It provides templates, guidance, and formatting options to help you showcase your skills and experiences effectively.",
    },
    {
      id: 2,
      question: "What should I include in my resume?",
      answer:
        "Include your contact information, a compelling summary, work experience, education, skills, and any relevant certifications or achievements. Tailor your resume to the job you're applying for.",
    },
    {
      id: 3,
      question: "Are there specific resume formats I should use?",
      answer:
        "Yes, there are various resume formats such as chronological, functional, and combination. The choice depends on your career history and the type of job you're applying for. Our builder offers templates for different formats.",
    },
    {
      id: 4,
      question: "How can I make my resume stand out?",
      answer:
        "To make your resume stand out, focus on quantifiable achievements, use action verbs, tailor it to the job description, and showcase your unique skills. Our builder provides tips to enhance your resume's impact.",
    },
    {
      id: 5,
      question: "Can I customize the resume templates?",
      answer:
        "Yes, our resume builder allows you to customize templates. You can adjust fonts, colors, and layouts to match your personal style while ensuring a professional appearance.",
    },
    {
      id: 6,
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We prioritize the security of your personal information. All data is encrypted, and we follow industry standards to protect your privacy.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-teal-100 via-white to-white text-gray-800 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-0 flex flex-col md:flex-row gap-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mb-4">
            About Us
          </h2>
          <p>
            SkillSync: Resume Builder is an innovative web application at the forefront of modernizing the resume creation process. Our platform harnesses the power of artificial intelligence to revolutionize how users craft their resumes, ensuring they stand out in today's competitive job market. With SkillSync, users begin by inputting their basic information, after which our advanced AI algorithms analyze job descriptions and user profiles to generate ATS-friendly resumes tailored to each specific application. Our commitment to user-centric design means that SkillSync offers a seamless and intuitive interface, guiding users through the process with ease. From customizable templates to real-time industry insights, our platform empowers users to create professional resumes that accurately reflect their skills and experiences.
          </p>
          <p>
            At SkillSync, we prioritize quality and security, implementing stringent measures to safeguard user data and ensure the accuracy of generated resumes. Our platform undergoes rigorous quality assurance processes to deliver resumes that meet industry standards and exceed user expectations. With a focus on user feedback and continuous improvement, we strive to provide an unparalleled experience for our users, offering responsive customer support and a wealth of resources to assist them every step of the way. Join SkillSync today and experience the future of resume building – where AI meets expertise to help you unlock your full potential in the job market.
          </p>
          <div className="max-w-xl">
            <img src="https://devskiller.com/wp-content/uploads/2020/05/full-life-cycle-recruiting-ats-hris.png" alt="Logo" className="mt-8" />
          </div>
        </div>
        <div className="max-w-xl bg-cover bg-right md:w-3/5 bg-faq-image">
          <div className="p-6 bg-gradient-to-b from-gray-300 to-gray-100">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mb-4">
              FAQs
            </h2>
            <div className="flex flex-col gap-4">
              {questions.map((q) => (
                <div key={q.id} className="mb-6">
                  <div className="question-container">
                    <h2 className="text-xl font-semibold hover:text-teal-500 transition-colors duration-300">
                      {q.question}
                    </h2>
                    <p className="mt-2 text-base leading-6">{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center">
              Can't find what you're looking for?{" "}
              <Link
                to={"/Context"}
                className="font-semibold hover:underline text-amber-500"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
