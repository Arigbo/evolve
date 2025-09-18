"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const pages = [
  {
    page: "Frontend Web Development",
    pageLink: "/courses/frontend",
    pageIcon: "fas fa-code",
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
  const currentIndex = pages.findIndex((item) => item.pageLink == path);
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
                className={
                  path == element.pageLink ? "active" : ""
                }
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
          <h2 className="line-clamp">{current.page}</h2>
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
