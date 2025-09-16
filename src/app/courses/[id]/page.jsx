"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

const courseData = [
  {
    id: "computer-appreciation",
    title: "Computer Appreciation",
    overview: "Computer Appreciation Course Overview",
    intro: {
      title: "What is Computer Appreciation?",
      description:
        "Computer Appreciation introduces you to the world of computers, their history, basic concepts, and practical uses in everyday life. You'll learn about hardware, software, and how computers help us work, learn, and communicate.",
    },
    why: {
      title: "Why Learn Computer Appreciation?",
      description:
        "Understanding computers is essential in today's digital world. This course gives you the foundational knowledge to use computers confidently, whether for school, work, or personal projects.",
    },
    tools: {
      title: "Tools and Skills You'll Gain",
      description:
        "You'll get hands-on experience with word processors, spreadsheets, and presentation software. You'll also learn about safe internet use, basic troubleshooting, and ethical computer practices. Our course provides a step-by-step roadmap to help you become comfortable with computers and digital tools, preparing you for further studies or the workplace.",
    },
    subjects: {
      // ... (your subjectDetails object here)
      "Introduction to Computers": {
        details:
          "Learn the basics of what computers are, their history, and their impact on society. Understand the difference between hardware and software.",
        project:
          "Write a short essay on the evolution of computers and their importance in modern life.",
        topics: [
          { topic: "Definition of a Computer" },
          { topic: "History and Generations of Computers" },
          { topic: "Types of Computers" },
          { topic: "Basic Computer Operations" },
          { topic: "Computer Applications in Daily Life" },
        ],
      },
      // ... (rest of your subjects)
    },
  },
  // Add more courses here, keyed by their id
];

const SingleCourse = () => {
  const { id } = useParams();
  const course = courseData[id];

  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!course) {
    return (
      <main className="single-course">
        <h2>Course not found</h2>
      </main>
    );
  }

  const openEnrollmentModal = () => {
    setIsEnrollmentModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const openMentorModal = () => {
    setIsMentorRedirectModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsEnrollmentModalOpen(false);
    setIsSubjectModalOpen(false);
    setIsSuccessModalOpen(false);
    setIsMentorRedirectModalOpen(false);
    setIsBackendModalOpen(false);
    setCurrentSubject(null);
    document.body.style.overflow = "";
  };

  const openSubjectModal = (subjectTitle) => {
    setCurrentSubject({
      title: subjectTitle,
      details: course.subjects[subjectTitle].details,
      project: course.subjects[subjectTitle].project,
      topics: course.subjects[subjectTitle].topics,
    });
    setIsSubjectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsEnrollmentModalOpen(false);
      setIsSuccessModalOpen(true);
      e.target.reset();
    }, 1500);
  };

  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <main className="single-course">
        <section className="hero">
          <div className="hero-inner">
            <h2 className="hero-title">{course.overview}</h2>
          </div>
        </section>
        <section className="intro">
          <div className="intro-1">
            <h1 className="intro-title">{course.intro.title}</h1>
            <p className="intro-description">
              <strong>{course.title}</strong> {course.intro.description}
            </p>
          </div>
          <div className="intro-2">
            <h2 className="intro-title">{course.why.title}</h2>
            <p className="intro-description mb-4">{course.why.description}</p>
          </div>
          <div className="intro-3">
            <h2 className="intro-title">{course.tools.title}</h2>
            <p className="intro-description mb-4">{course.tools.description}</p>
          </div>
        </section>
        <section>
          <div className="section-header">
            <h2 className="section-title">Course Subjects</h2>
          </div>
          <div className="grid-container">
            {Object.keys(course.subjects).map((subject, index) => (
              <div
                key={subject}
                onClick={() => openSubjectModal(subject)}
                className="card"
              >
                <div className="card-header">
                  <span className="card-number">{index + 1}</span>
                  <h3 className="card-title">{subject}</h3>
                </div>
                <p className="card-text">
                  {course.subjects[subject].details.split(".")[0] + "."}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="section cta-section">
          <div className="section-header">
            <h2 className="section-title">
              Are you an expert in {course.title}?
            </h2>
          </div>
          <p className="section-subtitle">
            Join our team of experienced mentors and help others build their
            digital literacy skills.
          </p>
          <button onClick={openMentorModal} className="cta-button">
            Work with Us
          </button>
        </section>
      </main>

      {/* ...rest of your modals and styles, unchanged... */}
    </>
  );
};

export default SingleCourse;
