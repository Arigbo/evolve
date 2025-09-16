"use client";
import React, { useEffect, useState } from "react";

// Updated courses data
const dummyCourses = [
    { id: "frontend", title: "Frontend Development", description: "Learn to build beautiful and interactive user interfaces." },
    { id: "backend", title: "Backend Development", description: "Master server-side programming and databases." },
    { id: "mobile-app", title: "Mobile App Development", description: "Create mobile applications for Android and iOS." },
    { id: "cyber-security", title: "Cyber Security", description: "Understand how to protect systems and data from threats." },
    { id: "data-sci-ai", title: "Data Science & AI", description: "Analyze data and build intelligent systems." },
    { id: "cloud-devops", title: "Cloud & DevOps", description: "Deploy and manage applications in the cloud." },
    { id: "computer-appreciation", title: "Computer Appreciation", description: "Get introduced to the basics of computers and IT." },
    { id: "ui-ux", title: "UI & UX Design", description: "Design user-friendly and visually appealing interfaces." },
];

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // Simulate loading delay
        const timer = setTimeout(() => {
            setCourses(dummyCourses);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main style={{ padding: "2rem" }}>
            <h1>All Courses</h1>
            <div style={{ display: "grid", gap: "1.5rem" }}>
                {isLoading ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "120px",
                            fontSize: "1.2rem",
                            color: "#555",
                            fontWeight: "500",
                            background: "#f0f0f0",
                            borderRadius: "8px",
                        }}
                    >
                        <span className="spinner" style={{
                            width: "24px",
                            height: "24px",
                            border: "3px solid #ccc",
                            borderTop: "3px solid #0070f3",
                            borderRadius: "50%",
                            marginRight: "1rem",
                            animation: "spin 1s linear infinite",
                            display: "inline-block",
                        }} />
                        Loading courses...
                        <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                ) : courses.length === 0 ? (
                    <p>No courses available.</p>
                ) : (
                    courses.map((course) => (
                        <a
                            key={course.id}
                            href={`/courses/${course.id}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <div
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "1rem",
                                    background: "#fafafa",
                                    transition: "box-shadow 0.2s",
                                }}
                                onMouseOver={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"}
                                onMouseOut={e => e.currentTarget.style.boxShadow = "none"}
                            >
                                <h2 style={{ margin: "0 0 0.5rem 0" }}>{course.title}</h2>
                                <p style={{ margin: 0 }}>{course.description}</p>
                            </div>
                        </a>
                    ))
                )}
            </div>
        </main>
    );
}