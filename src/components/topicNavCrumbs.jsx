"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const topics = [
  {
    id: "/courses/topic/t1",
    topic: "How the Internet Works (Clients, Servers)",
  },
  {
    id: "/courses/topic/t2",
    topic: "HTTP/HTTPS Protocols",
  },
  {
    id: "/courses/topic/t3",
    topic: "Domain Name System (DNS)",
  },
  {
    id: "/courses/topic/t4",
    topic: "Web Browsers and Rendering Engines",
  },
  {
    id: "/courses/topic/t5",
    topic: "Understanding URLs and Resources",
  },
  {
    id: "/courses/topic/t6",
    topic: "Introduction to Frontend vs. Backend",
  },
  {
    id: "/courses/topic/t7",
    topic: "Cookies and Session Storage",
  },
  {
    id: "/courses/topic/t8",
    topic: "Anatomy of a Request-Response Cycle",
  },
  {
    id: "/courses/topic/t9",
    topic: "Introduction to HTML and the Web",
  },
  {
    id: "/courses/topic/t10",
    topic: "Semantic HTML5 Tags",
  },
  {
    id: "/courses/topic/t11",
    topic: "HTML Forms and Inputs",
  },
  {
    id: "/courses/topic/t12",
    topic: "Accessibility (ARIA roles and attributes)",
  },
  {
    id: "/courses/topic/t13",
    topic: "Image and Multimedia Elements",
  },
  {
    id: "/courses/topic/t14",
    topic: "Structuring Content with Headings, Paragraphs, and Lists",
  },
  {
    id: "/courses/topic/t15",
    topic: "Working with Tables",
  },
  {
    id: "/courses/topic/t16",
    topic: "Introduction to Web Components",
  },
  {
    id: "/courses/topic/t17",
    topic: "Best Practices for Clean and Maintainable HTML",
  },
  {
    id: "/courses/topic/t18",
    topic: "CSS Syntax and Selectors",
  },
  {
    id: "/courses/topic/t19",
    topic: "The Box Model, Sizing, and Spacing",
  },
  {
    id: "/courses/topic/t20",
    topic: "Working with Colors and Backgrounds",
  },
  {
    id: "/courses/topic/t21",
    topic: "Typography and Fonts",
  },
  {
    id: "/courses/topic/t22",
    topic: "Flexbox for One-Dimensional Layouts",
  },
  {
    id: "/courses/topic/t23",
    topic: "CSS Grid for Two-Dimensional Layouts",
  },
  {
    id: "/courses/topic/t24",
    topic: "Responsive Design with Media Queries",
  },
  {
    id: "/courses/topic/t25",
    topic: "CSS Animations and Transitions",
  },
  {
    id: "/courses/topic/t26",
    topic: "Introduction to Preprocessors (Sass/Less)",
  },
  {
    id: "/courses/topic/t27",
    topic: "Variables, Data Types, and Operators",
  },
  {
    id: "/courses/topic/t28",
    topic: "Control Flow and Logic",
  },
  {
    id: "/courses/topic/t29",
    topic: "Functions and Scopes",
  },
  {
    id: "/courses/topic/t30",
    topic: "Arrays and Objects",
  },
  {
    id: "/courses/topic/t31",
    topic: "DOM Manipulation and Traversal",
  },
];

export function TopicNavCrumbs() {
  const path = usePathname();
  const currentIndex = topics.findIndex((item) => item.id == path);
  const current = topics[currentIndex];
  const next =
    currentIndex >= 0 && currentIndex < topics.length - 1
      ? topics[currentIndex + 1]
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
          {topics.map((element) => {
            return (
              <a
                key={element.topic}
                href={element.id}
                className={path == element.id ? "active" : ""}
              >
                <span className="line-clamp">{element.topic}</span>
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
          <h2 className="line-clamp">{current.topic}</h2>
        ) : (
          <h1>
            Click <span className="select">Courses</span> to select a course
          </h1>
        )}
      </div>
      <div className="next-course">
        {next ? <h1>What's Next?</h1> : <h1>No more courses</h1>}
        {next && (
          <a href={next.id} className="next">
            <span className="line-clamp"> {next.topic}</span>
          </a>
        )}
      </div>
    </div>
  );
}
