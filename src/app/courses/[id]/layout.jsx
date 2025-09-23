"use client";
import { NavCrumbs } from "@/components/navCrombs";
export default function SingleCourseLayout({ children }) {
  return (
    <>
      <div className="layout">
        <NavCrumbs></NavCrumbs>
        {children}
      </div>
    </>
  );
}
