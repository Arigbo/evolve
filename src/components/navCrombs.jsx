"use client";
import React, { useState } from "react";

const pages = [
  {
    page: "Frontend Web Development",
    pageLink: "/courses/frontend",
    pageIcon: "fas fa-code",
    topics: [
      {
        id: `/courses/frontend/t1`,
        topic: "How the Internet Works (Clients, Servers)",
      },
      {
        id: `/courses/frontend/t2`,
        topic: "HTTP/HTTPS Protocols",
      },
      {
        id: `/courses/frontend/t3`,
        topic: "Domain Name System (DNS)",
      },
      {
        id: `/courses/frontend/t4`,
        topic: "Web Browsers and Rendering Engines",
      },
      {
        id: `/courses/frontend/t5`,
        topic: "Understanding URLs and Resources",
      },
      {
        id: `/courses/frontend/t6`,
        topic: "Introduction to Frontend vs. Backend",
      },
      {
        id: `/courses/frontend/t7`,
        topic: "Cookies and Session Storage",
      },
      {
        id: `/courses/frontend/t8`,
        topic: "Anatomy of a Request-Response Cycle",
      },
      {
        id: `/courses/frontend/t9`,
        topic: "Introduction to HTML and the Web",
      },
      {
        id: `/courses/frontend/t10`,
        topic: "Semantic HTML5 Tags",
      },
      {
        id: `/courses/frontend/t11`,
        topic: "HTML Forms and Inputs",
      },
      {
        id: `/courses/frontend/t12`,
        topic: "Accessibility (ARIA roles and attributes)",
      },
      {
        id: `/courses/frontend/t13`,
        topic: "Image and Multimedia Elements",
      },
      {
        id: `/courses/frontend/t14`,
        topic: "Structuring Content with Headings, Paragraphs, and Lists",
      },
      {
        id: `/courses/frontend/t15`,
        topic: "Working with Tables",
      },
      {
        id: `/courses/frontend/t16`,
        topic: "Introduction to Web Components",
      },
      {
        id: `/courses/frontend/t17`,
        topic: "Best Practices for Clean and Maintainable HTML",
      },
      {
        id: `/courses/frontend/t18`,
        topic: "CSS Syntax and Selectors",
      },
      {
        id: `/courses/frontend/t19`,
        topic: "The Box Model, Sizing, and Spacing",
      },
      {
        id: `/courses/frontend/t20`,
        topic: "Working with Colors and Backgrounds",
      },
      {
        id: `/courses/frontend/t21`,
        topic: "Typography and Fonts",
      },
      {
        id: `/courses/frontend/t22`,
        topic: "Flexbox for One-Dimensional Layouts",
      },
      {
        id: `/courses/frontend/t23`,
        topic: "CSS Grid for Two-Dimensional Layouts",
      },
      {
        id: `/courses/frontend/t24`,
        topic: "Responsive Design with Media Queries",
      },
      {
        id: `/courses/frontend/t25`,
        topic: "CSS Animations and Transitions",
      },
      {
        id: `/courses/frontend/t26`,
        topic: "Introduction to Preprocessors (Sass/Less)",
      },
      {
        id: `/courses/frontend/t27`,
        topic: "Variables, Data Types, and Operators",
      },
      {
        id: `/courses/frontend/t28`,
        topic: "Control Flow and Logic",
      },
      {
        id: `/courses/frontend/t29`,
        topic: "Functions and Scopes",
      },
      {
        id: `/courses/frontend/t30`,
        topic: "Arrays and Objects",
      },
      {
        id: `/courses/frontend/t31`,
        topic: "DOM Manipulation and Traversal",
      },
    ],
  },
  {
    page: "Backend Web Development",
    pageLink: "/courses/backend",
    pageIcon: "fas fa-database",
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
  {
    page: "UI/UX Design",
    pageLink: "/courses/ui-ux",
    pageIcon: "fas fa-pencil-ruler",
    topics: [
      { topic: "Design Principles and Fundamentals" },
      { topic: "User Research and Personas" },
      { topic: "Wireframing and Prototyping" },
      { topic: "Usability Testing" },
      { topic: "Figma and Sketch Tools" },
      { topic: "Mobile-First Design" },
    ],
  },
  {
    page: "Mobile App Development",
    pageLink: "/courses/mobileapp",
    pageIcon: " fas fa-mobile-alt",
    topics: [
      { topic: "Mobile Development Platforms (iOS, Android)" },
      { topic: "Swift and Kotlin Basics" },
      { topic: "React Native for Cross-Platform" },
      { topic: "UI/UX for Mobile Apps" },
    ],
  },
  {
    page: "Cloud Computing & DevOps",
    pageLink: "/courses/clouddevops",
    pageIcon: " fas fa-cloud",
    topics: [
      { topic: "Cloud Models (IaaS, PaaS, SaaS)" },
      { topic: "AWS, Google Cloud, Azure" },
      { topic: "Containerization (Docker)" },
      { topic: "CI/CD Pipelines" },
      { topic: "Serverless Computing" },
    ],
  },
  {
    page: "Data Science & AI",
    pageLink: "/courses/dataai",
    pageIcon: " fas fa-robot",
    topics: [
      { topic: "Data Analysis with Python" },
      { topic: "Machine Learning Concepts" },
      { topic: "Data Visualization" },
      { topic: "Big Data Technologies" },
      { topic: "Introduction to AI/ML Models" },
    ],
  },
  {
    page: "Cybersecurity",
    pageLink: "/courses/cybersecurity",
    pageIcon: "fas fa-shield-alt",
    topics: [
      { topic: "Ethical Hacking Fundamentals" },
      { topic: "Network Security" },
      { topic: "Cryptography" },
      { topic: "Incident Response" },
      { topic: "Security Policies and Compliance" },
    ],
  },
  {
    page: "Computer Appreciation",
    pageLink: "/courses/computer-appreciation",
    pageIcon: "fas fa-desktop",
    topics: [
      { topic: "Introduction to Computers" },
      { topic: "Computer Hardware" },
      { topic: "Computer Software" },
      { topic: "Introduction to the Internet" },
      { topic: "Word Processing Basics" },
    ],
  },
];

export function NavCrumbs() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const [nav, setNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const currentCourse = pages.find((item) => path.startsWith(item.pageLink));
  const currentTopic = currentCourse?.topics?.find(
    (topic) => topic.id === path
  );
  const nextCourse =
    pages[
      pages.findIndex((item) => item.pageLink === currentCourse?.pageLink) + 1
    ] || null;

  const handleDropdownClick = (page) => {
    setOpenDropdown(openDropdown === page ? null : page);
  };

  return (
      <div className="breadcrumbs-container">
        <div className={`coursesNav ${nav ? "show" : ""}`}>
          <div className="top">
            <div className="top-inner">
              <h1>All Courses</h1>
              <i
                className="fas fa-x"
                onClick={() => {
                  setNav(false);
                }}
              ></i>
            </div>
          </div>
          <div className="bottom">
            {pages.map((element) => (
              <div key={element.page} className="bottom-inner">
                <div
                  className={`dropdown-header ${
                    currentCourse?.page === element.page ? "active-course" : ""
                  }`}
                  onClick={() => handleDropdownClick(element.page)}
                >
                  <div className="dropdown-header-inner">
                    <h1>
                      <i className={element.pageIcon}></i>
                      <span className="line-clamp">{element.page}</span>
                    </h1>
                    {element.topics && (
                      <i
                        className={`fas fa-chevron-down dropdown-icon ${
                          openDropdown === element.page ? "rotated" : ""
                        }`}
                      ></i>
                    )}
                  </div>
                </div>
                {element.topics && (
                  <div
                    className={`dropdown-topics ${
                      openDropdown === element.page ||
                      currentCourse?.page === element.page
                        ? "open"
                        : ""
                    }`}
                  >
                    <a
                      href={element.pageLink}
                      className={`block hover:text-blue-400 transition-colors duration-300 ${
                        path === element.pageLink ? "active-topic" : ""
                      }`}
                    >
                      <span>Overview</span>
                    </a>
                    {element.topics.map((topic, index) => (
                      <a
                        key={index}
                        href={topic.id}
                        className={`block hover:text-blue-400 transition-colors duration-300 ${
                          topic.id === path ? "active-topic" : ""
                        }`}
                      >
                        <span>{topic.topic}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="breadcrumbs">
          {currentCourse ? (
            <div className="current">
              <h2 className="select line-clamp" onClick={() => setNav(true)}>
                {currentCourse.page}
              </h2>
              <span>&gt;</span>
              <h2 className="line-clamp">
                {currentTopic?.topic ||
                  (path === currentCourse.pageLink ? "Overview" : "Topic")}
              </h2>
            </div>
          ) : (
            <h1>
              Click <span className="select">Courses</span> to select a course
            </h1>
          )}
        </div>
        <div className="next-course">
          {nextCourse ? <h1>What's Next?</h1> : <h1>No more courses</h1>}
          {nextCourse && (
            <a href={nextCourse.pageLink} className="next">
              <span className="line-clamp"> {nextCourse.page}</span>
            </a>
          )}
        </div>
      </div>
  );
}
