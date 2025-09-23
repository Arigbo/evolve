"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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

export function NavCrumbs() {
  const path = usePathname();
  const currentIndex = pages.findIndex(
    (item) => item.pageLink || item.topics[0] == path
  );
  const current = pages[currentIndex];
  const next =
    currentIndex >= 0 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null;
  const [nav, setNav] = useState(false);
  return (
    <div className="breadcrumbs-container">
      <div className={`coursesNav ${nav ? "show" : ""}`}>
        <div className="top">
          {" "}
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
          {pages.map((element) => {
            return (
              <a
                key={element.page}
                href={element.pageLink}
                className={path == element.pageLink ? "active" : ""}
              >
                <i className={element.pageIcon}></i>
                <span className="line-clamp">{element.page}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="breadcrumbs">
        <h1
          onClick={() => {
            setNav(true);
          }}
          className="select"
        >
          Courses
        </h1>
        <span>&gt;</span>
        {current ? (
          <div className="current">
            <h2 className={`line-clamp`}>{current.page}</h2>
            {current.topics.map((topic) => {
              return (
                <div>
                  {topic.id == path && (
                    <h1>
                      <span>&gt;</span>
                      {topic.topic}
                    </h1>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <h1>
            Click <span className="select">Courses</span> to select a course
          </h1>
        )}
      </div>
      <div className="next-course">
        {next ? <h1>What's Next?</h1> : <h1>No more courses</h1>}
        {next && (
          <a href={next.pageLink} className="next">
            <span className="line-clamp"> {next.page}</span>
          </a>
        )}
      </div>
    </div>
  );
}
