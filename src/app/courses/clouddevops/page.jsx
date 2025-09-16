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

    // Updated subject details for Cloud & DevOps
    const subjectDetails = {
        "Introduction to Cloud Computing": {
            details:
                "Get started with the basics of cloud computing. Learn about cloud service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and the benefits of cloud adoption.",
            project:
                "Write a short report comparing the major cloud providers (AWS, Azure, GCP) and their core services.",
            topics: [
                { topic: "Cloud Service Models (IaaS, PaaS, SaaS)" },
                { topic: "Deployment Models (Public, Private, Hybrid)" },
                { topic: "Major Cloud Providers Overview" },
                { topic: "Cloud Adoption Benefits" },
                { topic: "Cloud Terminology" },
            ],
        },
        "Linux & Scripting Fundamentals": {
            details:
                "Learn the essentials of Linux for cloud and DevOps work. Explore basic commands, file systems, permissions, and shell scripting.",
            project:
                "Write a shell script to automate backup of a directory to a remote server.",
            topics: [
                { topic: "Linux Command Line Basics" },
                { topic: "File Systems & Permissions" },
                { topic: "Shell Scripting (bash/sh)" },
                { topic: "Process Management" },
                { topic: "Remote Access (SSH)" },
            ],
        },
        "Networking & Security Basics": {
            details:
                "Understand networking concepts crucial for cloud and DevOps. Learn about IP addressing, firewalls, VPNs, and basic security best practices.",
            project:
                "Configure a secure VPC (Virtual Private Cloud) with subnets and firewall rules in a cloud provider.",
            topics: [
                { topic: "IP Addressing & Subnets" },
                { topic: "Firewalls & Security Groups" },
                { topic: "VPNs & Private Networking" },
                { topic: "TLS/SSL Basics" },
                { topic: "Identity & Access Management" },
            ],
        },
        "Infrastructure as Code (IaC)": {
            details:
                "Automate infrastructure provisioning using tools like Terraform or AWS CloudFormation. Learn about declarative configuration and versioning infrastructure.",
            project:
                "Write a Terraform script to deploy a web server and database in the cloud.",
            topics: [
                { topic: "IaC Concepts & Benefits" },
                { topic: "Terraform Basics" },
                { topic: "State Management" },
                { topic: "Modular Infrastructure" },
                { topic: "CloudFormation Overview" },
            ],
        },
        "Continuous Integration & Continuous Deployment (CI/CD)": {
            details:
                "Implement CI/CD pipelines to automate testing and deployment. Explore tools like GitHub Actions, Jenkins, or GitLab CI.",
            project:
                "Set up a CI/CD pipeline to build, test, and deploy a sample application automatically.",
            topics: [
                { topic: "CI/CD Concepts" },
                { topic: "Pipeline as Code" },
                { topic: "Popular CI/CD Tools" },
                { topic: "Automated Testing" },
                { topic: "Deployment Strategies" },
            ],
        },
        "Containers & Orchestration": {
            details:
                "Learn about containerization with Docker and orchestration with Kubernetes. Understand how to package, deploy, and scale applications.",
            project:
                "Containerize a simple app with Docker and deploy it to a Kubernetes cluster.",
            topics: [
                { topic: "Docker Basics" },
                { topic: "Container Images & Registries" },
                { topic: "Kubernetes Fundamentals" },
                { topic: "Pods, Services, Deployments" },
                { topic: "Scaling & Rolling Updates" },
            ],
        },
        "Monitoring & Logging": {
            details:
                "Set up monitoring and logging for cloud infrastructure and applications. Use tools like Prometheus, Grafana, and ELK Stack.",
            project:
                "Configure monitoring and alerting for a cloud-based application using open-source tools.",
            topics: [
                { topic: "Metrics & Monitoring Tools" },
                { topic: "Log Aggregation" },
                { topic: "Alerting & Incident Response" },
                { topic: "Tracing & Observability" },
            ],
        },
        "Cloud Cost Optimization": {
            details:
                "Learn strategies to optimize cloud costs, including resource right-sizing, reserved instances, and monitoring usage.",
            project:
                "Analyze a sample cloud bill and suggest optimizations to reduce costs.",
            topics: [
                { topic: "Cost Management Tools" },
                { topic: "Resource Optimization" },
                { topic: "Billing Alerts" },
                { topic: "Tagging & Resource Organization" },
                { topic: "FinOps Basics" },
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
                        <h2 className="hero-title">Cloud & DevOps Course Overview</h2>
                    </div>
                </section>
                {/* Introduction Section */}
                <section className="intro">
                    <div className="intro-1">
                        <h1 className="intro-title">What is Cloud & DevOps?</h1>
                        <p className="intro-description">
                            <strong>Cloud computing</strong> delivers computing services—servers, storage, databases, networking, software—over the internet, enabling faster innovation and flexible resources. <strong>DevOps</strong> is a set of practices that combines software development and IT operations to shorten the development lifecycle and deliver high-quality software continuously.
                        </p>
                    </div>

                    <div className="intro-2">
                        <h2 className="intro-title">
                            Why Cloud & DevOps Matter
                        </h2>
                        <p className="intro-description mb-4">
                            Cloud platforms like AWS, Azure, and Google Cloud have become the backbone of modern IT infrastructure. DevOps practices such as automation, CI/CD, and Infrastructure as Code help teams deliver reliable software at scale, reduce downtime, and respond quickly to business needs.
                        </p>
                    </div>

                    <div className="intro-3">
                        <h2 className="intro-title">
                            Essential Tools for Cloud & DevOps Engineers
                        </h2>
                        <p className="intro-description mb-4">
                            Cloud & DevOps engineers use tools like <strong>Terraform</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Git</strong>, and CI/CD platforms such as <strong>GitHub Actions</strong> or <strong>Jenkins</strong>. Monitoring tools like <strong>Prometheus</strong> and <strong>Grafana</strong> are also crucial for maintaining healthy systems.
                        </p>

                        <p className="intro-description">
                            Our course provides a step-by-step <strong>roadmap</strong> to help you become a skilled Cloud & DevOps engineer. You'll build real projects and gain the skills needed to manage cloud infrastructure and automate deployments.
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
                            Are you an expert in Cloud or DevOps?
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        Join our team of experienced mentors and help shape the next
                        generation of cloud and DevOps engineers.
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
