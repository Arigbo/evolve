"use client";
import React from "react";
import { usePathname } from "next/navigation";
export function NavCrumbs() {
  const path = usePathname();

  return (
    <div className="breadcrumbs-container">
      <div className="breadcrumbs">
        <a href="/course">Courses</a>
        <span>&gt;</span>
        <span>{path === "/course/frontend" ? "Frontend" : "Backend"}</span>
      </div>
      <a className="next">
        <a href={path === "/course/frontend" ? "/course/backend" : "/course/frontend"}>{path === "/course/frontend" ? "Backend Course" : "Frontend Course"}</a>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
