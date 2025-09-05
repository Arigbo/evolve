"use client";
import React, { useState } from "react";

const SingleCourse = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);

  const subjectDetails = {
    "Internet & the Web": {
      details:
        "This module demystifies how the internet works, from browsers to servers. You will learn about key concepts like DNS, HTTP/HTTPS, and how client-side applications communicate with the backend.",
      project:
        "Write a simple report explaining the journey of a webpage from a user clicking a link to it appearing on their screen, detailing each step and technology involved.",
      topics: [
        "How the Internet Works (Clients, Servers)",
        "HTTP/HTTPS Protocols",
        "Domain Name System (DNS)",
        "Web Browsers and Rendering Engines",
        "Understanding URLs and Resources",
        "Introduction to Frontend vs. Backend",
        "Cookies and Session Storage",
        "Anatomy of a Request-Response Cycle",
      ],
    },
    "HTML Fundamentals": {
      details:
        "Master the foundational language of the web. This section covers semantic HTML5 for structuring content, accessibility standards, and modern best practices for building robust and well-organized web pages.",
      project:
        "Build a multi-page portfolio website using only semantic HTML5. The site must include a home page, about page, and projects page, and must pass an accessibility checker.",
      topics: [
        "Introduction to HTML and the Web",
        "Semantic HTML5 Tags",
        "HTML Forms and Inputs",
        "Accessibility (ARIA roles and attributes)",
        "Image and Multimedia Elements",
        "Structuring Content with Headings, Paragraphs, and Lists",
        "Working with Tables",
        "Introduction to Web Components",
      ],
    },
    "CSS Fundamentals": {
      details:
        "Dive into the language of web styling. This module covers modern CSS3 for creating visually stunning interfaces. You will learn about the box model, responsive design with media queries, and advanced layout techniques using Flexbox and CSS Grid.",
      project:
        "Take a basic HTML page and style it to match a provided design mockup. You will create a fully responsive layout and implement custom fonts and animations using CSS.",
      topics: [
        "CSS Syntax and Selectors",
        "The Box Model, Sizing, and Spacing",
        "Working with Colors and Backgrounds",
        "Typography and Fonts",
        "Flexbox for One-Dimensional Layouts",
        "CSS Grid for Two-Dimensional Layouts",
        "Responsive Design with Media Queries",
        "CSS Animations and Transitions",
        "Introduction to Preprocessors (Sass/Less)",
      ],
    },
    "JavaScript & DOM": {
      details:
        "Dive into the core logic of web applications. This module focuses on modern JavaScript (ES6+), teaching you how to manipulate the Document Object Model (DOM) to create interactive and dynamic user experiences. You will also learn about event handling and asynchronous operations.",
      project:
        "Create a fully functional to-do list application that allows users to add, remove, and mark tasks as complete, all without reloading the page.",
      topics: [
        "Variables, Data Types, and Operators",
        "Control Flow and Logic",
        "Functions and Scopes",
        "Arrays and Objects",
        "DOM Manipulation and Traversal",
        "Event Handling and Listeners",
        "Introduction to Asynchronous JavaScript",
        "Error Handling with Try/Catch",
      ],
    },
    "Modern Frameworks (React)": {
      details:
        "Build scalable and complex single-page applications using the React library. You will learn about component-based architecture, state management with hooks (useState, useEffect), and efficient data flow to create reusable UI components.",
      project:
        "Develop a simple e-commerce product gallery with a shopping cart. The application should use React components and manage state with hooks.",
      topics: [
        "Introduction to React and JSX",
        "Component-Based Architecture",
        "State and Props",
        "React Hooks (useState, useEffect, useContext)",
        "Conditional Rendering and Lists",
        "Handling Forms in React",
        "Working with Third-Party Libraries",
        "React Router for Navigation",
      ],
    },
    "APIs & Asynchronous Data": {
      details:
        "Connect your frontend applications to backend services. This part of the course teaches you how to fetch data from RESTful APIs using the Fetch API and `async/await`. You will also learn to handle data and display it dynamically in your application.",
      project:
        "Create a weather application that fetches and displays current weather data for a user-entered city using a public weather API.",
      topics: [
        "Introduction to APIs and RESTful Principles",
        "Using the Fetch API for Data Requests",
        "Asynchronous JavaScript with `async`/`await`",
        "Handling JSON Data and Response Objects",
        "Error Handling for API Calls",
        "Understanding CORS (Cross-Origin Resource Sharing)",
      ],
    },
    "Performance & Deployment": {
      details:
        "Learn to optimize your code for speed and efficiency. This section covers techniques for reducing page load times, lazy loading, and code splitting. You will also learn how to deploy your projects to platforms like Vercel and Netlify.",
      project:
        "Optimize a sample website by compressing images, lazy-loading content, and deploying it to a free hosting service to achieve a high PageSpeed Insights score.",
      topics: [
        "Web Performance Metrics",
        "Code Splitting and Lazy Loading",
        "Image and Asset Optimization",
        "Minification and Bundling",
        "Web Vitals and Lighthouse Audits",
        "Domain Name Systems (DNS) and Hosting",
        "Deployment with Vercel and Netlify",
        "Content Delivery Networks (CDNs)",
      ],
    },
    "Git & GitHub": {
      details:
        "Understand the essential tools for professional software development. This module introduces you to Git for version control and GitHub for collaborative development. You will learn how to create repositories, make commits, handle branches, and work in a team.",
      project:
        "Collaborate with peers on a small web project, managing all code changes using Git commands and submitting pull requests on GitHub.",
      topics: [
        "Git Basics (add, commit, push)",
        "Branching and Merging",
        "Working with Remote Repositories",
        "Handling Merge Conflicts",
        "Understanding Pull Requests",
        "Collaborative Workflows",
        "Using `.gitignore`",
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

  const openBackendModal = () => {
    setIsBackendModalOpen(true);
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
      <main>
        {/* Breadcrumbs and Backend Link */}
        <div className="breadcrumbs-container">
          <div className="breadcrumbs">
            <a href="/course">Courses</a>
            <span>&gt;</span>
            <span>Frontend</span>
          </div>
          <button onClick={openBackendModal} className="header-button">
            Explore Backend Course
          </button>
        </div>

        {/* Introduction Section */}
        <section className="intro">
          <h1 className="intro-title">Master Frontend Development</h1>
          <p className="intro-description mb-4">
            <strong>Frontend development</strong> is the practice of building the visual and
            interactive parts of a website that users see and interact with
            directly. It involves using languages and frameworks like HTML, CSS,
            and JavaScript to create everything from the page layout and design
            to animations and functionality. The goal is to deliver a smooth,
            responsive, and visually appealing user experience.
          </p>

          <h2 className="intro-title">
            What is Frontend vs. Backend Development?
          </h2>
          <p className="intro-description mb-4">
            <strong>Frontend</strong> development is all about the <strong>client-side</strong> of a web
            application. It's the part the user can see and interact with in
            their web browser. This includes everything from the layout and
            fonts to buttons, forms, and animations. Frontend developers work
            with languages like HTML, CSS, and JavaScript to bring designs to
            life and ensure a seamless user experience.
          </p>
          <p className="intro-description mb-4">
            <strong>Backend</strong> development, on the other hand, is the <strong>server-side</strong>
            of a web application. It's the logic and functionality that happens
            behind the scenes. This includes databases, APIs, server scripts,
            and the business logic that makes the application work. While users
            don't see the backend directly, it is essential for storing data,
            processing requests, and authenticating users.
          </p>

          <h2 className="intro-title">
            Essential Tools for Frontend Developers
          </h2>
          <p className="intro-description mb-4">
            To build modern web applications, frontend developers use a variety
            of tools. The core tools include a <strong>code editor</strong> like Visual
            Studio Code, a <strong>version control system</strong> like Git for tracking
            changes, and a <strong>package manager</strong> such as npm or Yarn for managing
            project dependencies. You will also use the <strong>browser's developer
            tools</strong> for debugging and a <strong>build tool</strong> like Webpack or Vite for
            bundling your code.
          </p>

          <p className="intro-description">
            Our course provides a structured <strong>roadmap</strong> designed to take you
            from a complete beginner to a confident developer. You'll learn the
            core skills needed to build modern web applications and create a
            portfolio of real projects along the way.
          </p>
        </section>

        {/* What You'll Learn Section */}
        <section>
          <h2 className="section-title">Course Subjects</h2>
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
        <section className="cta-banner">
          <h2 className="cta-banner-title">
            Are you an expert in frontend development?
          </h2>
          <p className="cta-banner-text">
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
                  **About this Subject:** {currentSubject.details}
                </p>
              </div>
              <div className="subject-section">
                <p className="modal-description">
                  **Project to Work On:** {currentSubject.project}
                </p>
              </div>
              <div className="subject-section">
                <h4>Course Topics</h4>
                <div className="topics-grid">
                  {currentSubject.topics.map((topic, index) => (
                    <div key={index} className="topic-link-card">
                      <span>{index + 1}.</span> {topic}
                    </div>
                  ))}
                </div>
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

      {/* Backend Modal */}
      {isBackendModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Backend Course</h3>
              <i
                onClick={closeModal}
                className="fas fa-x modal-close-button"
              ></i>
            </div>
            <p className="modal-description">
              Our backend course is coming soon! Check back later for a full
              list of subjects and projects.
            </p>
            <div className="text-right mt-4">
              <button onClick={closeModal} className="cta-button">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
