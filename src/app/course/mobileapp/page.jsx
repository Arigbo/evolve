"use client";
import React, { useState } from "react";

const SingleCourse = () => {
    const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
    const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
        useState(false);
    const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
    const [currentSubject, setCurrentSubject] = useState(null);

    // Updated subject details for Mobile App Development
    const subjectDetails = {
        "Introduction to Mobile Development": {
            details:
                "Get started with the basics of mobile app development. Learn about the mobile ecosystem, platforms (iOS & Android), and the differences between native and cross-platform development.",
            project:
                "Write a short report comparing native and cross-platform mobile development, including pros and cons of each approach.",
            topics: [
                { topic: "Mobile Platforms Overview (iOS, Android)" },
                { topic: "Native vs. Cross-Platform Development" },
                { topic: "App Store & Play Store Basics" },
                { topic: "Development Tools & IDEs" },
                { topic: "Mobile App Lifecycle" },
            ],
        },
        "UI/UX Design Principles": {
            details:
                "Learn the fundamentals of designing intuitive and attractive mobile interfaces. Explore mobile design patterns, usability, and accessibility best practices.",
            project:
                "Design wireframes for a simple mobile app using Figma or a similar tool, focusing on user flow and accessibility.",
            topics: [
                { topic: "Mobile UI Patterns" },
                { topic: "Touch Interactions & Gestures" },
                { topic: "Responsive Layouts" },
                { topic: "Accessibility in Mobile Apps" },
                { topic: "Prototyping Tools (Figma, Sketch)" },
            ],
        },
        "React Native Fundamentals": {
            details:
                "Dive into React Native, a popular framework for building cross-platform mobile apps using JavaScript and React. Learn about components, navigation, and styling.",
            project:
                "Build a simple 'To-Do List' app in React Native that allows users to add, complete, and delete tasks.",
            topics: [
                { topic: "Setting Up React Native Environment" },
                { topic: "JSX & Components" },
                { topic: "Props & State" },
                { topic: "Styling with StyleSheet" },
                { topic: "Navigation (React Navigation)" },
                { topic: "Handling User Input" },
            ],
        },
        "Working with APIs & Data": {
            details:
                "Connect your mobile app to external data sources. Learn how to fetch data from REST APIs, handle asynchronous operations, and manage app state.",
            project:
                "Create a weather app that fetches and displays weather data for a user-entered city using a public API.",
            topics: [
                { topic: "Fetching Data with Fetch/Axios" },
                { topic: "Async/Await in React Native" },
                { topic: "State Management (useState, useEffect)" },
                { topic: "Displaying Lists & Data" },
                { topic: "Error Handling" },
            ],
        },
        "Device Features & Permissions": {
            details:
                "Explore how to access device features such as camera, location, and notifications. Learn about requesting permissions and handling user privacy.",
            project:
                "Build a photo capture app that uses the device camera and saves images to the gallery.",
            topics: [
                { topic: "Accessing Camera & Media Library" },
                { topic: "Geolocation & Maps" },
                { topic: "Push Notifications" },
                { topic: "Permissions API" },
                { topic: "Handling User Data Securely" },
            ],
        },
        "App Performance & Optimization": {
            details:
                "Learn techniques to optimize your mobile app for speed and efficiency. Cover topics like lazy loading, optimizing images, and reducing app size.",
            project:
                "Profile and optimize a sample app to improve its load time and responsiveness.",
            topics: [
                { topic: "Performance Profiling Tools" },
                { topic: "Optimizing Images & Assets" },
                { topic: "Reducing App Bundle Size" },
                { topic: "Lazy Loading Components" },
                { topic: "Memory Management" },
            ],
        },
        "Testing & Debugging": {
            details:
                "Understand how to test and debug your mobile apps. Learn about unit testing, UI testing, and using debugging tools.",
            project:
                "Write unit tests for a React Native component and debug a sample app using React Native Debugger.",
            topics: [
                { topic: "Debugging Tools (React Native Debugger, Flipper)" },
                { topic: "Unit Testing with Jest" },
                { topic: "UI Testing with Detox" },
                { topic: "Error Tracking & Crash Reporting" },
            ],
        },
        "Publishing & Deployment": {
            details:
                "Prepare your app for release. Learn about app signing, building for production, and publishing to the App Store and Google Play.",
            project:
                "Package and deploy a sample app to the Google Play Store (test track) or App Store (TestFlight).",
            topics: [
                { topic: "App Signing & Certificates" },
                { topic: "Building for Production" },
                { topic: "App Store & Play Store Submission" },
                { topic: "Versioning & Updates" },
                { topic: "Monitoring & Analytics" },
            ],
        },
        "Git & Collaboration": {
            details:
                "Master version control with Git and collaborate with others using GitHub. Learn branching, merging, and pull requests.",
            project:
                "Work with a teammate to build a feature and submit a pull request for review.",
            topics: [
                { topic: "Git Basics (add, commit, push)" },
                { topic: "Branching & Merging" },
                { topic: "Pull Requests & Code Review" },
                { topic: "Resolving Merge Conflicts" },
                { topic: "Using .gitignore" },
            ],
        },
    };

    const openEnrollmentModal = () => {
        setIsEnrollmentModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const openMentorModal = () => {
        setIsMentorRedirectModalOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setIsEnrollmentModalOpen(false);
        setIsSubjectModalOpen(false);
        setIsSuccessModalOpen(false);
        setIsMentorRedirectModalOpen(false);
        setIsBackendModalOpen(false);
        setCurrentSubject(null);
        document.body.style.overflow = "";
    };

    const openSubjectModal = (subjectTitle) => {
        setCurrentSubject({
            title: subjectTitle,
            details: subjectDetails[subjectTitle].details,
            project: subjectDetails[subjectTitle].project,
            topics: subjectDetails[subjectTitle].topics,
        });
        setIsSubjectModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const handleEnrollmentSubmit = (e) => {
        e.preventDefault();
        setIsEnrollmentModalOpen(false);
        setIsSuccessModalOpen(true);
        e.target.reset();
    };

    return (
        <>
            {/* Main Content */}
            <main className="single-course">
                {/* Breadcrumbs and Backend Link */}

                <section className="hero">
                    <div className="hero-inner">
                        <h2 className="hero-title">Mobile App Development Course Overview</h2>
                    </div>
                </section>
                {/* Introduction Section */}
                <section className="intro">
                    <div className="intro-1">
                        <h1 className="intro-title">What is Mobile App Development?</h1>
                        <p className="intro-description">
                            <strong>Mobile app development</strong> is the process of creating software applications that run on mobile devices like smartphones and tablets. It involves designing user interfaces, implementing features, and ensuring performance across different platforms such as iOS and Android.
                        </p>
                    </div>

                    <div className="intro-2">
                        <h2 className="intro-title">
                            Native vs. Cross-Platform Development
                        </h2>
                        <p className="intro-description mb-4">
                            <strong>Native development</strong> uses platform-specific languages and tools (like Swift for iOS or Kotlin for Android) to build apps that fully leverage device features. <strong>Cross-platform development</strong> uses frameworks like React Native or Flutter to create apps that work on multiple platforms from a single codebase, speeding up development and reducing costs.
                        </p>
                    </div>

                    <div className="intro-3">
                        <h2 className="intro-title">
                            Essential Tools for Mobile Developers
                        </h2>
                        <p className="intro-description mb-4">
                            Mobile developers use tools like <strong>Android Studio</strong>, <strong>Xcode</strong>, or <strong>Expo</strong> for building and testing apps. Version control with <strong>Git</strong>, design tools like <strong>Figma</strong>, and package managers such as <strong>npm</strong> are also essential for efficient development and collaboration.
                        </p>

                        <p className="intro-description">
                            Our course provides a step-by-step <strong>roadmap</strong> to help you become a confident mobile app developer. You'll build real projects and gain the skills needed to launch your own apps or join a professional team.
                        </p>
                    </div>
                </section>

                {/* What You'll Learn Section */}
                <section>
                    <div className="section-header">
                        <h2 className="section-title">Course Subjects</h2>
                    </div>
                    <div className="grid-container">
                        {Object.keys(subjectDetails).map((subject, index) => (
                            <div
                                key={subject}
                                onClick={() => openSubjectModal(subject)}
                                className="card"
                            >
                                <div className="card-header">
                                    <span className="card-number">{index + 1}</span>
                                    <h3 className="card-title">{subject}</h3>
                                </div>
                                <p className="card-text">
                                    {subjectDetails[subject].details.split(".")[0] + "."}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mentor CTA Section */}
                <section className="section cta-section">
                    <div className="section-header">
                        <h2 className="section-title">
                            Are you an expert in Mobile App Development?
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        Join our team of experienced mentors and help shape the next
                        generation of mobile developers.
                    </p>
                    <button onClick={openMentorModal} className="cta-button">
                        Work with Us
                    </button>
                </section>
            </main>

            {/* Enrollment Modal (for Students and Mentees) */}
            {isEnrollmentModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Course Application</h3>
                            <i
                                onClick={closeModal}
                                className="fas fa-x modal-close-button"
                            ></i>
                        </div>
                        <p className="modal-description">
                            Fill out the form below to apply to our course. You can choose to
                            be a general student or a mentee for more personalized guidance.
                        </p>
                        <form onSubmit={handleEnrollmentSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role" className="form-label">
                                    I want to apply as a...
                                </label>
                                <select id="role" name="role" required className="form-select">
                                    <option value="student">Student</option>
                                    <option value="mentee">Mentee</option>
                                </select>
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="cta-button">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Subject Details Modal */}
            {isSubjectModalOpen && currentSubject && (
                <div className="modal-overlay subject-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{currentSubject.title}</h3>
                            <i
                                onClick={closeModal}
                                className="fas fa-x modal-close-button"
                            ></i>
                        </div>
                        <div className="modal-content-inner">
                            <div className="subject-section">
                                <p className="modal-description">
                                    <strong>About this Subject:</strong> {currentSubject.details}
                                </p>
                            </div>
                            <div className="subject-section">
                                <h4>Course Topics</h4>
                                <div className="topics-grid">
                                    {currentSubject.topics.map((topic, index) => (
                                        <div key={index} className="topic-link-card">
                                            <span>{topic.topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="subject-section">
                                <p className="modal-description">
                                    <strong>Project to Work On:</strong> {currentSubject.project}
                                </p>
                            </div>
                        </div>
                        <div className="text-right mt-4">
                            <button onClick={closeModal} className="cta-button">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal for Mentees and Students */}
            {isSuccessModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Application Submitted!</h3>
                            <i
                                onClick={closeModal}
                                className="fas fa-x modal-close-button"
                            ></i>
                        </div>
                        <p className="modal-description">
                            Thank you for your application! A member of our team will contact
                            you shortly to confirm your enrollment and discuss your next
                            steps.
                        </p>
                        <div className="text-right mt-4">
                            <button onClick={closeModal} className="cta-button">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mentor Redirect Modal */}
            {isMentorRedirectModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Work with Us</h3>
                            <i
                                onClick={closeModal}
                                className="fas fa-x modal-close-button"
                            ></i>
                        </div>
                        <p className="modal-description">
                            Thank you for your interest in becoming a mentor! Please contact
                            us at <strong>mentors@evolve.com</strong> with your resume and a brief
                            description of your experience to get started.
                        </p>
                        <div className="text-right mt-4">
                            <button onClick={closeModal} className="cta-button">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleCourse;
