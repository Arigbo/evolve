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

    // Updated subject details for UI/UX Design Course
    const subjectDetails = {
        "Introduction to UI/UX": {
            details:
                "Get started with the basics of User Interface (UI) and User Experience (UX) design. Learn the differences, the importance of design thinking, and the impact of good design.",
            project:
                "Write a short report comparing UI and UX, including real-world examples of each.",
            topics: [
                { topic: "What is UI? What is UX?" },
                { topic: "Design Thinking Process" },
                { topic: "The Value of Good Design" },
                { topic: "UI vs. UX: Key Differences" },
                { topic: "Famous Examples of UI/UX" },
            ],
        },
        "User Research & Personas": {
            details:
                "Learn how to understand your users through research. Explore methods like interviews, surveys, and persona creation to guide your design decisions.",
            project:
                "Create user personas for a sample app based on research findings.",
            topics: [
                { topic: "User Interviews & Surveys" },
                { topic: "Empathy Mapping" },
                { topic: "Persona Creation" },
                { topic: "User Journey Mapping" },
                { topic: "Identifying Pain Points" },
            ],
        },
        "Wireframing & Prototyping": {
            details:
                "Discover how to turn ideas into visual blueprints. Learn about wireframes, low/high-fidelity prototypes, and popular prototyping tools.",
            project:
                "Design wireframes and an interactive prototype for a simple website or app using Figma or Adobe XD.",
            topics: [
                { topic: "Wireframing Basics" },
                { topic: "Low vs. High Fidelity" },
                { topic: "Prototyping Tools (Figma, XD)" },
                { topic: "Clickable Prototypes" },
                { topic: "Feedback & Iteration" },
            ],
        },
        "Visual Design Fundamentals": {
            details:
                "Master the core principles of visual design: color, typography, spacing, and layout. Learn how to create visually appealing and accessible interfaces.",
            project:
                "Redesign an existing app screen focusing on color, typography, and layout improvements.",
            topics: [
                { topic: "Color Theory" },
                { topic: "Typography & Readability" },
                { topic: "Spacing & Alignment" },
                { topic: "Visual Hierarchy" },
                { topic: "Accessibility Basics" },
            ],
        },
        "Interaction Design & Microinteractions": {
            details:
                "Explore how users interact with digital products. Learn about navigation, feedback, and microinteractions that delight users.",
            project:
                "Design a navigation flow and add microinteractions (like button animations) to a prototype.",
            topics: [
                { topic: "Navigation Patterns" },
                { topic: "Feedback & Affordances" },
                { topic: "Microinteractions" },
                { topic: "Usability Testing" },
                { topic: "Designing for Touch" },
            ],
        },
        "Design Systems & Components": {
            details:
                "Understand how to create and use design systems for consistency and scalability. Learn about reusable components, style guides, and documentation.",
            project:
                "Build a mini design system with reusable components in Figma or Storybook.",
            topics: [
                { topic: "What is a Design System?" },
                { topic: "Component Libraries" },
                { topic: "Style Guides" },
                { topic: "Tokens & Variables" },
                { topic: "Documentation Best Practices" },
            ],
        },
        "Usability Testing & Feedback": {
            details:
                "Learn how to test your designs with real users. Explore usability testing methods, gathering feedback, and iterating based on results.",
            project:
                "Conduct a usability test on your prototype and summarize the findings.",
            topics: [
                { topic: "Usability Testing Methods" },
                { topic: "A/B Testing" },
                { topic: "Collecting & Analyzing Feedback" },
                { topic: "Iterative Design" },
                { topic: "Remote Testing Tools" },
            ],
        },
        "Portfolio & Case Studies": {
            details:
                "Prepare your work for the real world. Learn how to present your projects, write case studies, and build a compelling design portfolio.",
            project:
                "Create a case study for one of your projects and add it to your portfolio.",
            topics: [
                { topic: "Writing Case Studies" },
                { topic: "Portfolio Best Practices" },
                { topic: "Presenting Your Work" },
                { topic: "Personal Branding" },
                { topic: "Getting Feedback on Your Portfolio" },
            ],
        },
        "Collaboration & Handoff": {
            details:
                "Work effectively with developers and stakeholders. Learn about design handoff, using tools like Zeplin or Figma Inspect, and communicating your designs.",
            project:
                "Prepare a design handoff package for developers, including assets and documentation.",
            topics: [
                { topic: "Design-Dev Handoff Tools" },
                { topic: "Spec & Asset Export" },
                { topic: "Design Documentation" },
                { topic: "Collaboration in Teams" },
                { topic: "Version Control for Designers" },
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
                        <h2 className="hero-title">UI/UX Design Course Overview</h2>
                    </div>
                </section>
                {/* Introduction Section */}
                <section className="intro">
                    <div className="intro-1">
                        <h1 className="intro-title">What is UI/UX Design?</h1>
                        <p className="intro-description">
                            <strong>UI/UX design</strong> is the art and science of creating digital products that are both visually appealing and easy to use. UI (User Interface) focuses on the look and layout, while UX (User Experience) ensures products are intuitive, accessible, and enjoyable.
                        </p>
                    </div>

                    <div className="intro-2">
                        <h2 className="intro-title">
                            Why is UI/UX Important?
                        </h2>
                        <p className="intro-description mb-4">
                            Great UI/UX design leads to happier users, higher engagement, and better business outcomes. It helps products stand out in a crowded market and ensures users can achieve their goals efficiently and delightfully.
                        </p>
                    </div>

                    <div className="intro-3">
                        <h2 className="intro-title">
                            Essential Tools for UI/UX Designers
                        </h2>
                        <p className="intro-description mb-4">
                            UI/UX designers use tools like <strong>Figma</strong>, <strong>Adobe XD</strong>, and <strong>Sketch</strong> for designing and prototyping. User research tools, whiteboarding apps, and collaboration platforms are also key for effective design workflows.
                        </p>

                        <p className="intro-description">
                            Our course provides a step-by-step <strong>roadmap</strong> to help you become a confident UI/UX designer. You'll build real projects and gain the skills needed to launch your own portfolio or join a professional team.
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
                            Are you an expert in UI/UX Design?
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        Join our team of experienced mentors and help shape the next
                        generation of UI/UX designers.
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
