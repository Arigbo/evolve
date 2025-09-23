"use client";
import CourseCTA from "@/components/course-cta";
import { NavCrumbs } from "@/components/navCrombs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
export default function SingleLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const dummyCourses = [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Learn to build beautiful and interactive user interfaces.",
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Master server-side programming and databases.",
    },
    {
      id: "mobileapp",
      title: "Mobile App Development",
      description: "Create mobile applications for Android and iOS.",
    },
    {
      id: "cybersecurity",
      title: "Cyber Security",
      description: "Understand how to protect systems and data from threats.",
    },
    {
      id: "dataai",
      title: "Data Science & AI",
      description: "Analyze data and build intelligent systems.",
    },
    {
      id: "clouddevops",
      title: "Cloud & DevOps",
      description: "Deploy and manage applications in the cloud.",
    },
    {
      id: "computer-appreciation",
      title: "Computer Appreciation",
      description: "Get introduced to the basics of computers and IT.",
    },
    {
      id: "ui-ux",
      title: "UI & UX Design",
      description: "Design user-friendly and visually appealing interfaces.",
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const path = usePathname();
  const currentCourse = dummyCourses.find((course) => path.includes(course.id));
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <span
            className="text-gradient"
            style={{
              width: "24px",
              height: "24px",
              border: "3px solid #ccc",
              borderTop: "3px solid",
              borderRadius: "50%",
              marginRight: "1rem",
              animation: "spin 1s linear infinite",
              display: "inline-block",
            }}
          />
          <h1 className="text-gradient">Evolve</h1>
          <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
        </div>
      ) : (
        <div className="layout">
          <NavCrumbs />
          {children}
          <CourseCTA
            course={currentCourse ? currentCourse.title : "this course"}
          />
        </div>
      )}
    </>
  );
}
