"use client";
import React, { useState } from "react";

const SingleCourse = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);

  const subjectDetails = {
    "Internet & the Web": {
      details:
        "This module demystifies how the internet works, focusing on the backend perspective. You'll learn about protocols, servers, DNS, and how backend systems communicate with clients and other services.",
      project:
        "Write a technical report explaining the journey of an HTTP request from a browser to a backend server and back, detailing each step and technology involved.",
      topics: [
        { topic: "How the Internet Works (Clients, Servers, Backend Focus)" },
        { topic: "HTTP/HTTPS Protocols & Methods" },
        { topic: "Domain Name System (DNS) for Backend Routing" },
        { topic: "Web Servers (Nginx, Apache, Node.js)" },
        { topic: "Request-Response Lifecycle" },
        { topic: "RESTful APIs and Endpoints" },
        { topic: "Cookies, Sessions, and Authentication" },
        { topic: "Status Codes and Error Handling" },
      ],
    },
    "Node.js & JavaScript": {
      details:
        "Master backend development with Node.js and modern JavaScript (ES6+). Learn about the event loop, asynchronous programming, and how to build scalable server-side applications.",
      project:
        "Build a RESTful API for a simple blog platform using Node.js and Express, supporting CRUD operations for posts.",
      topics: [
        { topic: "Node.js Runtime & Architecture" },
        { topic: "Modules, npm, and Dependency Management" },
        { topic: "Asynchronous Programming (Callbacks, Promises, async/await)" },
        { topic: "Express.js Basics" },
        { topic: "Routing and Middleware" },
        { topic: "Environment Variables & Configuration" },
        { topic: "Error Handling in Node.js" },
        { topic: "Serving Static Files" },
      ],
    },
    "Databases (SQL & NoSQL)": {
      details:
        "Explore how to store and manage data using both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Learn about data modeling, querying, and integrating databases with backend applications.",
      project:
        "Design and implement a user management system with authentication, using MongoDB or PostgreSQL as the database.",
      topics: [
        { topic: "Relational Databases (PostgreSQL/MySQL) Basics" },
        { topic: "NoSQL Databases (MongoDB) Basics" },
        { topic: "Data Modeling & Relationships" },
        { topic: "CRUD Operations" },
        { topic: "ORMs & ODMs (Sequelize, Mongoose)" },
        { topic: "Database Connections in Node.js" },
        { topic: "Indexes and Performance" },
        { topic: "Database Security Best Practices" },
      ],
    },
    "Authentication & Security": {
      details:
        "Learn how to secure your backend applications. Topics include user authentication (JWT, OAuth), password hashing, authorization, and common security vulnerabilities.",
      project:
        "Implement secure user authentication and authorization in your blog API, using JWT tokens and password hashing.",
      topics: [
        { topic: "User Authentication (Sessions, JWT, OAuth)" },
        { topic: "Password Hashing (bcrypt)" },
        { topic: "Authorization & Access Control" },
        { topic: "CORS and Security Headers" },
        { topic: "Common Vulnerabilities (SQL Injection, XSS, CSRF)" },
        { topic: "Environment Variables for Secrets" },
        { topic: "HTTPS and SSL/TLS" },
      ],
    },
    "APIs & RESTful Design": {
      details:
        "Design and build robust RESTful APIs. Learn about API versioning, documentation (OpenAPI/Swagger), and best practices for scalable API development.",
      project:
        "Document and test your blog API using Swagger (OpenAPI), and implement versioning for future updates.",
      topics: [
        { topic: "RESTful Principles & Resource Modeling" },
        { topic: "API Versioning" },
        { topic: "Request Validation & Error Responses" },
        { topic: "API Documentation (Swagger/OpenAPI)" },
        { topic: "Testing APIs (Postman, Jest, Supertest)" },
        { topic: "Rate Limiting & Throttling" },
        { topic: "Pagination & Filtering" },
      ],
    },
    "DevOps & Deployment": {
      details:
        "Deploy and manage backend applications in production. Learn about environment management, CI/CD, cloud platforms (Heroku, Vercel, AWS), and monitoring.",
      project:
        "Deploy your blog API to a cloud platform (Heroku, Vercel, or AWS) with environment variables and automated deployment.",
      topics: [
        { topic: "Environment Variables & Config Management" },
        { topic: "Process Managers (PM2, nodemon)" },
        { topic: "Continuous Integration/Deployment (CI/CD)" },
        { topic: "Cloud Deployment (Heroku, Vercel, AWS)" },
        { topic: "Logging & Monitoring (Winston, Loggly)" },
        { topic: "Scaling & Load Balancing" },
        { topic: "Backups & Disaster Recovery" },
      ],
    },
    "Version Control (Git & GitHub)": {
      details:
        "Understand the essential tools for backend collaboration. Learn Git for version control and GitHub for code hosting, collaboration, and workflow management.",
      project:
        "Collaborate with peers on your backend project using Git branches, pull requests, and code reviews on GitHub.",
      topics: [
        { topic: "Git Basics (init, add, commit, push)" },
        { topic: "Branching, Merging, and Pull Requests" },
        { topic: "Resolving Merge Conflicts" },
        { topic: "GitHub Actions for CI/CD" },
        { topic: "Managing Issues and Projects" },
        { topic: "Using .gitignore and Environment Files" },
      ],
    },
  };

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
      details: subjectDetails[subjectTitle].details,
      project: subjectDetails[subjectTitle].project,
      topics: subjectDetails[subjectTitle].topics,
    });
    setIsSubjectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    setIsEnrollmentModalOpen(false);
    setIsSuccessModalOpen(true);
    e.target.reset();
  };

  return (
    <>
      {/* Main Content */}
      <main className="single-course">
        {/* Breadcrumbs and Backend Link */}

        <section className="hero">
          <div className="hero-inner">
            <h2 className="hero-title">Backend Development Course Overview</h2>
          </div>
        </section>
        {/* Introduction Section */}
          <section className="intro">
            <div className="intro-1">
              <h1 className="intro-title">What is Backend Development?</h1>
              <p className="intro-description">
                <strong>Backend development</strong> is the practice of building
                the server-side logic and infrastructure that power web and mobile applications.
                It involves working with languages and frameworks such as Node.js, Express, Python, or Java,
                and managing databases like MongoDB, PostgreSQL, or MySQL. Backend developers handle
                authentication, data storage, APIs, and business logic, ensuring that applications are secure,
                scalable, and efficient for users and clients.
              </p>
            </div>
            <div className="intro-3">
              <h2 className="intro-title">
                Essential Tools for Backend Developers
              </h2>
              <p className="intro-description mb-4">
                Backend developers rely on a variety of tools to build robust systems. Key tools include a{" "}
                <strong>code editor</strong> like Visual Studio Code, a{" "}
                <strong>version control system</strong> such as Git for tracking changes, and a{" "}
                <strong>package manager</strong> like npm or Yarn for managing dependencies. You'll also use{" "}
                <strong>API testing tools</strong> (Postman, Insomnia), <strong>database clients</strong> for managing data,
                and <strong>deployment platforms</strong> (Vercel, Heroku, or cloud services) to launch your applications.
              </p>

              <p className="intro-description">
                This course provides a structured <strong>roadmap</strong> to guide you from the basics of backend development
                to building and deploying real-world projects. You'll gain the skills needed to create secure APIs,
                connect to databases, and deploy scalable backend services.
              </p>
            </div>
          </section>

          {/* What You'll Learn Section */}
        <section>
          <div className="section-header">
            <h2 className="section-title">Course Subjects</h2>
          </div>
          <div className="grid-container">
            {Object.keys(subjectDetails).map((subject, index) => (
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
                  {subjectDetails[subject].details.split(".")[0] + "."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentor CTA Section */}
        <section className="section cta-section">
          <div className="section-header">
            <h2 className="section-title">
              Are you an expert in Frontend Web Development?
            </h2>
          </div>
          <p className="section-subtitle">
            Join our team of experienced mentors and help shape the next
            generation of developers.
          </p>
          <button onClick={openMentorModal} className="cta-button">
            Work with Us
          </button>
        </section>
      </main>

      {/* Enrollment Modal (for Students and Mentees) */}
      {isEnrollmentModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Course Application</h3>
              <i
                onClick={closeModal}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <p className="modal-description">
              Fill out the form below to apply to our course. You can choose to
              be a general student or a mentee for more personalized guidance.
            </p>
            <form onSubmit={handleEnrollmentSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  I want to apply as a...
                </label>
                <select id="role" name="role" required className="form-select">
                  <option value="student">Student</option>
                  <option value="mentee">Mentee</option>
                </select>
              </div>
              <div className="form-group text-right">
                <button type="submit" className="cta-button">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Subject Details Modal */}
      {isSubjectModalOpen && currentSubject && (
        <div className="modal-overlay subject-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{currentSubject.title}</h3>
              <i
                onClick={closeModal}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <div className="modal-content-inner">
              <div className="subject-section">
                <p className="modal-description">
                  <strong>About this Subject:</strong> {currentSubject.details}
                </p>
              </div>
              <div className="subject-section">
                <h4>Course Topics</h4>
                <div className="topics-grid">
                  {currentSubject.topics.map((topic, index) => (
                    <div key={index} className="topic-link-card">
                      <span>{topic.topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="subject-section">
                <p className="modal-description">
                  <strong>Project to Work On:</strong> {currentSubject.project}
                </p>
              </div>
            </div>
            <div className="text-right mt-4">
              <button onClick={closeModal} className="cta-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal for Mentees and Students */}
      {isSuccessModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Application Submitted!</h3>
              <i
                onClick={closeModal}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <p className="modal-description">
              Thank you for your application! A member of our team will contact
              you shortly to confirm your enrollment and discuss your next
              steps.
            </p>
            <div className="text-right mt-4">
              <button onClick={closeModal} className="cta-button">
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mentor Redirect Modal */}
      {isMentorRedirectModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Work with Us</h3>
              <i
                onClick={closeModal}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <p className="modal-description">
              Thank you for your interest in becoming a mentor! Please contact
              us at **mentors@evolve.com** with your resume and a brief
              description of your experience to get started.
            </p>
            <div className="text-right mt-4">
              <button onClick={closeModal} className="cta-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
