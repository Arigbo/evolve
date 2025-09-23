"use client";
import React from "react";

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
      { id: `/courses/frontend/t2`, topic: "HTTP/HTTPS Protocols" },
      { id: `/courses/frontend/t3`, topic: "Domain Name System (DNS)" },
      {
        id: `/courses/frontend/t4`,
        topic: "Web Browsers and Rendering Engines",
      },
      { id: `/courses/frontend/t5`, topic: "Understanding URLs and Resources" },
      {
        id: `/courses/frontend/t6`,
        topic: "Introduction to Frontend vs. Backend",
      },
      { id: `/courses/frontend/t7`, topic: "Cookies and Session Storage" },
      {
        id: `/courses/frontend/t8`,
        topic: "Anatomy of a Request-Response Cycle",
      },
      { id: `/courses/frontend/t9`, topic: "Introduction to HTML and the Web" },
      { id: `/courses/frontend/t10`, topic: "Semantic HTML5 Tags" },
      { id: `/courses/frontend/t11`, topic: "HTML Forms and Inputs" },
      {
        id: `/courses/frontend/t12`,
        topic: "Accessibility (ARIA roles and attributes)",
      },
      { id: `/courses/frontend/t13`, topic: "Image and Multimedia Elements" },
      {
        id: `/courses/frontend/t14`,
        topic: "Structuring Content with Headings, Paragraphs, and Lists",
      },
      { id: `/courses/frontend/t15`, topic: "Working with Tables" },
      { id: `/courses/frontend/t16`, topic: "Introduction to Web Components" },
      {
        id: `/courses/frontend/t17`,
        topic: "Best Practices for Clean and Maintainable HTML",
      },
      { id: `/courses/frontend/t18`, topic: "CSS Syntax and Selectors" },
      {
        id: `/courses/frontend/t19`,
        topic: "The Box Model, Sizing, and Spacing",
      },
      {
        id: `/courses/frontend/t20`,
        topic: "Working with Colors and Backgrounds",
      },
      { id: `/courses/frontend/t21`, topic: "Typography and Fonts" },
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
      { id: `/courses/frontend/t25`, topic: "CSS Animations and Transitions" },
      {
        id: `/courses/frontend/t26`,
        topic: "Introduction to Preprocessors (Sass/Less)",
      },
      {
        id: `/courses/frontend/t27`,
        topic: "Variables, Data Types, and Operators",
      },
      { id: `/courses/frontend/t28`, topic: "Control Flow and Logic" },
      { id: `/courses/frontend/t29`, topic: "Functions and Scopes" },
      { id: `/courses/frontend/t30`, topic: "Arrays and Objects" },
      { id: `/courses/frontend/t31`, topic: "DOM Manipulation and Traversal" },
    ],
  },
  {
    page: "Backend Web Development",
    pageLink: "/courses/backend",
    pageIcon: "fas fa-database",
  },
  {
    page: "UI/UX Design",
    pageLink: "/courses/ui-ux",
    pageIcon: "fas fa-pencil-ruler",
  },
  {
    page: "Mobile App Development",
    pageLink: "/courses/mobileapp",
    pageIcon: " fas fa-mobile-alt",
  },
  {
    page: "Cloud Computing & DevOps",
    pageLink: "/courses/clouddevops",
    pageIcon: " fas fa-cloud",
  },
  {
    page: "Data Science & AI",
    pageLink: "/courses/dataai",
    pageIcon: " fas fa-robot",
  },
  {
    page: "Cybersecurity",
    pageLink: "/courses/cybersecurity",
    pageIcon: "fas fa-shield-alt",
  },
  {
    page: "Computer Appreciation",
    pageLink: "/courses/computer-appreciation",
    pageIcon: "fas fa-desktop",
  },
];

export function FooterCrumbs() {
  const path = window.location.pathname;

  const currentCourse = pages.find((course) =>
    path.startsWith(course.pageLink)
  );
  const currentTopicIndex = currentCourse?.topics?.findIndex(
    (topic) => topic.id === path
  );

  const previousTopic =
    currentCourse?.topics && currentTopicIndex > 0
      ? currentCourse.topics[currentTopicIndex - 1]
      : null;

  const nextTopic =
    currentCourse?.topics &&
    currentTopicIndex !== -1 &&
    currentTopicIndex < currentCourse.topics.length - 1
      ? currentCourse.topics[currentTopicIndex + 1]
      : null;

  const currentCourseIndex = pages.findIndex(
    (c) => c.pageLink === (currentCourse?.pageLink || path)
  );
  const nextCourse = pages[currentCourseIndex + 1] || null;

  return (
    <section className="footerNav">
      <div className="footerNav-inner">
        {/* Previous Topic Section */}
        <div className="flex-1">
          <h1 className="course-title">Previous Topic</h1>
          {previousTopic ? (
            <a href={previousTopic.id} className="topic-link">
              <span className="line-clamp-1">{previousTopic.topic}</span>
            </a>
          ) : (
            <p className="no-topic-text">
              You are at the start of this course.
            </p>
          )}
        </div>

        <div className="line-separator"></div>

        {/* Next Topic / Next Course Section */}
        <div className="flex-1">
          <h1 className="course-title">What's Next?</h1>
          {nextTopic ? (
            <a href={nextTopic.id} className="topic-link">
              <span className="line-clamp">{nextTopic.topic}</span>
            </a>
          ) : nextCourse ? (
            <a href={nextCourse.pageLink} className="topic-link">
              <span className="line-clamp">{nextCourse.page}</span>
            </a>
          ) : (
            <p className="no-topic-text">
              You've reached the end of the courses.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
