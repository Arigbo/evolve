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

    // Cybersecurity course subjects and details
    const subjectDetails = {
        "Introduction to Cybersecurity": {
            details:
                "Gain a foundational understanding of cybersecurity, including its importance, key concepts, and the evolving threat landscape. Learn about the CIA triad and basic security terminology.",
            project:
                "Write a report summarizing a recent cybersecurity incident, identifying the attack vector, impact, and lessons learned.",
            topics: [
                { topic: "What is Cybersecurity?" },
                { topic: "The CIA Triad (Confidentiality, Integrity, Availability)" },
                { topic: "Types of Threats and Attacks" },
                { topic: "Security Terminology" },
                { topic: "Overview of Cybersecurity Careers" },
            ],
        },
        "Network Security Fundamentals": {
            details:
                "Understand how networks operate and the security measures used to protect them. Learn about firewalls, VPNs, network protocols, and common network attacks.",
            project:
                "Design a secure network diagram for a small business, including firewalls, DMZ, and VPN access.",
            topics: [
                { topic: "Network Basics (LAN, WAN, Protocols)" },
                { topic: "Firewalls and Intrusion Detection Systems" },
                { topic: "Virtual Private Networks (VPNs)" },
                { topic: "Common Network Attacks (DDoS, MITM)" },
                { topic: "Network Segmentation" },
            ],
        },
        "Operating System Security": {
            details:
                "Explore how to secure Windows, Linux, and macOS systems. Learn about user permissions, patch management, and hardening techniques.",
            project:
                "Harden a virtual machine by disabling unnecessary services, setting strong permissions, and applying security updates.",
            topics: [
                { topic: "User Accounts and Permissions" },
                { topic: "Patch and Update Management" },
                { topic: "System Hardening Best Practices" },
                { topic: "Malware and Antivirus Tools" },
                { topic: "Logging and Monitoring" },
            ],
        },
        "Application Security": {
            details:
                "Learn how to identify and mitigate vulnerabilities in software applications. Topics include secure coding, OWASP Top 10, and web application firewalls.",
            project:
                "Perform a basic security assessment of a demo web application and document the vulnerabilities found.",
            topics: [
                { topic: "Secure Coding Principles" },
                { topic: "OWASP Top 10 Vulnerabilities" },
                { topic: "Input Validation and Output Encoding" },
                { topic: "Authentication and Authorization" },
                { topic: "Web Application Firewalls (WAF)" },
            ],
        },
        "Cryptography Basics": {
            details:
                "Understand the principles of cryptography, including encryption, hashing, and digital signatures. Learn how cryptography is used to secure data in transit and at rest.",
            project:
                "Encrypt and decrypt sample messages using symmetric and asymmetric algorithms with open-source tools.",
            topics: [
                { topic: "Symmetric vs. Asymmetric Encryption" },
                { topic: "Hash Functions and Integrity" },
                { topic: "Digital Signatures" },
                { topic: "Public Key Infrastructure (PKI)" },
                { topic: "SSL/TLS and HTTPS" },
            ],
        },
        "Incident Response & Forensics": {
            details:
                "Learn how to detect, respond to, and recover from security incidents. Introduction to digital forensics and evidence handling.",
            project:
                "Create an incident response plan for a simulated ransomware attack and outline forensic steps.",
            topics: [
                { topic: "Incident Response Lifecycle" },
                { topic: "Detection and Analysis" },
                { topic: "Containment, Eradication, Recovery" },
                { topic: "Digital Forensics Basics" },
                { topic: "Evidence Collection and Preservation" },
            ],
        },
        "Security Policies & Compliance": {
            details:
                "Explore the importance of security policies, standards, and regulatory compliance (GDPR, HIPAA, etc.). Learn how to create and enforce security policies.",
            project:
                "Draft a security policy for employee device usage and explain how it aligns with compliance requirements.",
            topics: [
                { topic: "Security Policy Development" },
                { topic: "Risk Assessment and Management" },
                { topic: "Regulatory Frameworks (GDPR, HIPAA, PCI DSS)" },
                { topic: "Security Awareness Training" },
                { topic: "Auditing and Compliance Tools" },
            ],
        },
        "Ethical Hacking & Penetration Testing": {
            details:
                "Get hands-on with ethical hacking tools and techniques. Learn about penetration testing methodologies and responsible disclosure.",
            project:
                "Conduct a basic penetration test on a test environment and report the findings.",
            topics: [
                { topic: "Ethical Hacking Principles" },
                { topic: "Penetration Testing Phases" },
                { topic: "Reconnaissance and Scanning" },
                { topic: "Exploitation and Post-Exploitation" },
                { topic: "Reporting and Remediation" },
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
                        <h2 className="hero-title">Cybersecurity Course Overview</h2>
                    </div>
                </section>
                {/* Introduction Section */}
                <section className="intro">
                    <div className="intro-1">
                        <h1 className="intro-title">What is Cybersecurity?</h1>
                        <p className="intro-description">
                            <strong>Cybersecurity</strong> is the practice of protecting systems, networks, and data from digital attacks. It involves implementing technologies, processes, and controls to defend against unauthorized access, data breaches, and other cyber threats. Cybersecurity professionals work to ensure the confidentiality, integrity, and availability of information in an increasingly connected world.
                        </p>
                    </div>

                    <div className="intro-2">
                        <h2 className="intro-title">
                            Why is Cybersecurity Important?
                        </h2>
                        <p className="intro-description mb-4">
                            In today's digital age, cyber threats are constantly evolving and can have serious consequences for individuals, businesses, and governments. Effective cybersecurity protects sensitive data, maintains trust, and ensures the smooth operation of critical infrastructure.
                        </p>
                        <p className="intro-description mb-4">
                            Cybersecurity is not just about technology—it's also about people and processes. Understanding how to identify risks, respond to incidents, and comply with regulations is essential for anyone pursuing a career in this field.
                        </p>
                    </div>

                    <div className="intro-3">
                        <h2 className="intro-title">
                            Essential Tools for Cybersecurity Professionals
                        </h2>
                        <p className="intro-description mb-4">
                            Cybersecurity experts use a variety of tools, including network scanners, vulnerability assessment tools, firewalls, SIEM platforms, and encryption utilities. Familiarity with operating systems, scripting languages, and cloud security solutions is also important.
                        </p>

                        <p className="intro-description">
                            Our course provides a structured <strong>roadmap</strong> to help you build the skills needed to protect digital assets and respond to cyber threats. You'll work on real-world projects and gain hands-on experience with industry-standard tools.
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
                            Are you an expert in Cybersecurity?
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        Join our team of experienced mentors and help shape the next
                        generation of cybersecurity professionals.
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
                            Fill out the form below to apply to our cybersecurity course. You can choose to
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
