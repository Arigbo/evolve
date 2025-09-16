"use client";
import React from "react";
import { usePathname } from "next/navigation";

const pages = [

  {
    page: "Frontend",
    pageLink: "/courses/frontend",
  },
  {
    page: "Backend",
    pageLink: "/courses/backend",
  },
  {
    page: "UI/UX",
    pageLink: "/courses/ui/ux",
  },
  {
    page: "Mobile App Development",
    pageLink: "/courses/mobileapp",
  },
  {
    page: "Cloud Computing & DevOps",
    pageLink: "/courses/clouddevops",
  },
  {
    page: "Data Science & AI",
    pageLink: "/courses/data&ai",
  },
  {
    page: "Cybersecurity",
    pageLink: "/courses/cybersecurity",
  },
  {
    page: "Computer Appreciation",
    pageLink: "/courses/computer",
  },
  {
    page: "All Courses",
    pageLink: "/courses",
  },
];

export function NavCrumbs() {
  const path = usePathname();
  const currentIndex = pages.findIndex((item) => item.pageLink === path);
  const current = pages[currentIndex];
  const next =
    currentIndex >= 0 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null;

  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs">
        <a href="/course">Courses</a>
        <span>&gt;</span>
        <span>{current ? current.page : ""}</span>
      </div>
      <div className="next-course">
        {next && (
          <a href={next.pageLink} className="next">
            {next.page} <i className="fas fa-chevron-right"></i>
          </a>
        )}
      </div>
    </div>
  );
}
