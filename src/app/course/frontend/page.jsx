"use client"
import React, { useState } from 'react';

const App = () => {
    const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
    const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
    const [currentSubject, setCurrentSubject] = useState(null);

    const subjectDetails = {
        'HTML & CSS Fundamentals': 'Master the foundational languages of the web. This section covers semantic HTML5 for structuring content and modern CSS3 for styling. You will learn advanced layout techniques using Flexbox and CSS Grid to build responsive and aesthetically pleasing interfaces.',
        'JavaScript & DOM': 'Dive into the core logic of web applications. This module focuses on modern JavaScript (ES6+), teaching you how to manipulate the Document Object Model (DOM) to create interactive and dynamic user experiences. You will also learn about event handling and asynchronous operations.',
        'Modern Frameworks (React)': 'Build scalable and complex single-page applications using the React library. You will learn about component-based architecture, state management with hooks (useState, useEffect), and efficient data flow to create reusable UI components.',
        'APIs & Asynchronous Data': 'Connect your frontend applications to backend services. This part of the course teaches you how to fetch data from RESTful APIs using the Fetch API and `async/await`. You will also learn to handle data and display it dynamically in your application.',
        'Performance & Deployment': 'Learn to optimize your code for speed and efficiency. This section covers techniques for reducing page load times, lazy loading, and code splitting. You will also learn how to deploy your projects to platforms like Vercel and Netlify.',
        'Git & GitHub': 'Understand the essential tools for professional software development. This module introduces you to Git for version control and GitHub for collaborative development. You will learn how to create repositories, make commits, handle branches, and work in a team.',
    };

    const openEnrollmentModal = () => {
        setIsEnrollmentModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeEnrollmentModal = () => {
        setIsEnrollmentModalOpen(false);
        document.body.style.overflow = '';
    };

    const openSubjectModal = (subjectTitle) => {
        setCurrentSubject({
            title: subjectTitle,
            details: subjectDetails[subjectTitle],
        });
        setIsSubjectModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeSubjectModal = () => {
        setIsSubjectModalOpen(false);
        setCurrentSubject(null);
        document.body.style.overflow = '';
    };

    const handleEnrollmentSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Enrollment data submitted:', data);
        closeEnrollmentModal();
        e.target.reset();
    };

    return (
        <div className="App">
            <style jsx>{`
                .App {
                    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                    background-color: #f9fafb;
                    color: #1f2937;
                }
                .container {
                    max-width: 1280px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 1rem;
                }
                @media (min-width: 640px) {
                    .container {
                        padding: 1.5rem;
                    }
                }
                header {
                    background-color: #fff;
                    position: sticky;
                    top: 0;
                    z-index: 40;
                    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                    border-bottom: 1px solid #e5e7eb;
                }
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1f2937;
                }
                .header-button {
                    background-color: #4f46e5;
                    color: #fff;
                    font-weight: 500;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    transition: background-color 0.2s ease-in-out;
                }
                .header-button:hover {
                    background-color: #4338ca;
                }
                main {
                    padding: 2rem;
                }
                @media (min-width: 640px) {
                    main {
                        padding: 4rem 2rem;
                    }
                }
                .hero-section {
                    text-align: center;
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                }
                @media (min-width: 640px) {
                    .hero-section {
                        padding-top: 6rem;
                        padding-bottom: 6rem;
                    }
                }
                .hero-title {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: #1f2937;
                    line-height: 1.25;
                    margin-bottom: 1rem;
                }
                @media (min-width: 640px) {
                    .hero-title {
                        font-size: 3rem;
                    }
                }
                .hero-title-span {
                    color: #4f46e5;
                }
                .hero-subtitle {
                    font-size: 1.125rem;
                    color: #4b5563;
                    max-width: 48rem;
                    margin: 0 auto 2rem;
                }
                @media (min-width: 640px) {
                    .hero-subtitle {
                        font-size: 1.25rem;
                    }
                }
                .hero-buttons {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }
                @media (min-width: 640px) {
                    .hero-buttons {
                        flex-direction: row;
                        gap: 1rem;
                    }
                }
                .cta-button-primary {
                    background-color: #4f46e5;
                    color: #fff;
                    font-weight: 700;
                    padding: 0.75rem 2rem;
                    border-radius: 9999px;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    transition: background-color 0.2s ease-in-out;
                }
                .cta-button-primary:hover {
                    background-color: #4338ca;
                }
                .cta-button-secondary {
                    background-color: #e5e7eb;
                    color: #1f2937;
                    font-weight: 500;
                    padding: 0.75rem 2rem;
                    border-radius: 9999px;
                    transition: background-color 0.2s ease-in-out;
                }
                .cta-button-secondary:hover {
                    background-color: #d1d5db;
                }
                .section-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 2.5rem;
                    color: #1f2937;
                }
                @media (min-width: 640px) {
                    .section-title {
                        font-size: 2.25rem;
                    }
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                    gap: 2rem;
                }
                @media (min-width: 768px) {
                    .grid-container {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
                @media (min-width: 1024px) {
                    .grid-container {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }
                .card {
                    background-color: #fff;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    border: 1px solid #e5e7eb;
                    transition: box-shadow 0.2s ease-in-out;
                    cursor: pointer;
                }
                .card:hover {
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                }
                .card-icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 9999px;
                    margin-bottom: 1rem;
                }
                .card-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .card-text {
                    color: #4b5563;
                }
                .cta-banner {
                    text-align: center;
                    background-color: #eef2ff;
                    border-radius: 1rem;
                    padding: 2rem;
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                }
                @media (min-width: 640px) {
                    .cta-banner {
                        padding: 3rem;
                    }
                }
                .cta-banner-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 1rem;
                }
                @media (min-width: 640px) {
                    .cta-banner-title {
                        font-size: 2.25rem;
                    }
                }
                .cta-banner-text {
                    color: #4b5563;
                    font-size: 1.125rem;
                    max-width: 42rem;
                    margin: 0 auto 2rem;
                }
                @media (min-width: 640px) {
                    .cta-banner-text {
                        font-size: 1.25rem;
                    }
                }
                footer {
                    background-color: #1f2937;
                    color: #9ca3af;
                    padding: 1.5rem;
                    text-align: center;
                }
                .footer-text {
                    font-size: 0.875rem;
                }
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    background-color: rgba(0, 0, 0, 0.5);
                    transition: opacity 0.3s ease-in-out;
                    z-index: 50;
                }
                .modal-content {
                    background-color: #fff;
                    padding: 1.5rem;
                    border-radius: 1rem;
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
                    width: 100%;
                    max-width: 28rem;
                }
                @media (min-width: 640px) {
                    .modal-content {
                        padding: 2rem;
                    }
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .modal-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1f2937;
                }
                .modal-close-button {
                    color: #9ca3af;
                    transition: color 0.2s ease-in-out;
                }
                .modal-close-button:hover {
                    color: #4b5563;
                }
                .modal-description {
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                .form-label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.25rem;
                }
                .form-input, .form-select, .form-textarea {
                    width: 100%;
                    padding: 0.5rem 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    transition: all 0.2s ease-in-out;
                }
                .form-input:focus, .form-select:focus, .form-textarea:focus {
                    outline: 2px solid transparent;
                    outline-offset: 2px;
                    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4f46e5;
                }
                .form-footer {
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 0.5rem;
                }
                .subject-modal .modal-content {
                    max-width: 32rem;
                }
            `}</style>

            {/* Header */}
            <header>
                <div className="container flex justify-between items-center py-4">
                    <a href="#" className="logo-link">
                        <svg className="w-8 h-8" fill="#4f46e5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50,0 C77.61,0 100,22.39 100,50 C100,77.61 77.61,100 50,100 C22.39,100 0,77.61 0,50 C0,22.39 22.39,0 50,0 Z M50,10 C27.91,10 10,27.91 10,50 C10,72.09 27.91,90 50,90 C72.09,90 90,72.09 90,50 C90,27.91 72.09,10 50,10 Z M50,20 C66.57,20 80,33.43 80,50 C80,66.57 66.57,80 50,80 C33.43,80 20,66.57 20,50 C20,33.43 33.43,20 50,20 Z" fillRule="evenodd" />
                            <circle cx="50" cy="50" r="10" />
                        </svg>
                        <span className="logo-text">Evolve</span>
                    </a>
                    <button onClick={openEnrollmentModal} className="header-button">
                        Enroll Now
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container space-y-16">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1 className="hero-title">
                        Become a <span className="hero-title-span">Frontend Master</span>
                    </h1>
                    <p className="hero-subtitle">
                        Learn to build beautiful, responsive, and high-performance websites from scratch using modern tools and frameworks.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={openEnrollmentModal} className="cta-button-primary">
                            Get Started Today
                        </button>
                        <button className="cta-button-secondary">
                            Download Syllabus
                        </button>
                    </div>
                </section>

                {/* What You'll Learn Section */}
                <section>
                    <h2 className="section-title">What You'll Learn</h2>
                    <div className="grid-container">
                        {/* Card 1: HTML & CSS */}
                        <div onClick={() => openSubjectModal('HTML & CSS Fundamentals')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="card-title">HTML & CSS Fundamentals</h3>
                            <p className="card-text">Master the building blocks of the web. Learn semantic HTML and modern CSS for styling and layouts, including Flexbox and Grid.</p>
                        </div>

                        {/* Card 2: JavaScript */}
                        <div onClick={() => openSubjectModal('JavaScript & DOM')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.102l1.102-1.102M12 21.5V17M12 7V2.5" />
                                </svg>
                            </div>
                            <h3 className="card-title">JavaScript & DOM</h3>
                            <p className="card-text">Dive into the core logic of the web. Learn ES6+, manipulate the DOM, handle events, and create dynamic user experiences.</p>
                        </div>

                        {/* Card 3: React */}
                        <div onClick={() => openSubjectModal('Modern Frameworks (React)')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#cfd2f3', color: '#6840d2' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="card-title">Modern Frameworks (React)</h3>
                            <p className="card-text">Build scalable and complex applications using React. Understand components, state management, hooks, and routing.</p>
                        </div>

                        {/* Card 4: APIs & Data */}
                        <div onClick={() => openSubjectModal('APIs & Asynchronous Data')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#d1f5e0', color: '#10b981' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <h3 className="card-title">APIs & Asynchronous Data</h3>
                            <p className="card-text">Connect your frontend to the backend. Learn how to fetch data from APIs and handle asynchronous operations with Promises and async/await.</p>
                        </div>

                        {/* Card 5: Performance & Deployment */}
                        <div onClick={() => openSubjectModal('Performance & Deployment')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#e9d5ff', color: '#8b5cf6' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.418 2.032v5m-4.802 0h-4.667m9.334 0a8.001 8.001 0 00-15.683-1.018M9.696 15l1.64 1.64a2 2 0 002.828 0l2.64-2.64M7.854 4.854a2 2 0 012.828 0l1.64 1.64" />
                                </svg>
                            </div>
                            <h3 className="card-title">Performance & Deployment</h3>
                            <p className="card-text">Optimize your code for speed and learn to deploy your projects to the web using services like Vercel and Netlify.</p>
                        </div>

                        {/* Card 6: Version Control */}
                        <div onClick={() => openSubjectModal('Git & GitHub')} className="card">
                            <div className="card-icon-container" style={{ backgroundColor: '#fee2e2', color: '#ef4444' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="card-title">Git & GitHub</h3>
                            <p className="card-text">Collaborate effectively with teams. Learn Git for version control and manage your code on GitHub.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-banner">
                    <h2 className="cta-banner-title">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="cta-banner-text">
                        Spaces are limited! Take the first step towards a rewarding career in web development.
                    </p>
                    <button onClick={openEnrollmentModal} className="cta-button-primary">
                        Enroll in the Course
                    </button>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p className="footer-text">&copy; 2025 Evolve. All rights reserved.</p>
            </footer>

            {/* Enrollment Modal */}
            {isEnrollmentModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Enrollment Form</h3>
                            <button onClick={closeEnrollmentModal} className="modal-close-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="modal-description">Fill out the form below to apply for the course.</p>
                        <form onSubmit={handleEnrollmentSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" id="name" name="name" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" id="email" name="email" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role" className="form-label">I am applying to be a...</label>
                                <select id="role" name="role" required className="form-input form-select">
                                    <option value="student">Student</option>
                                    <option value="mentor">Mentor</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message (Optional)</label>
                                <textarea id="message" name="message" rows="3" className="form-textarea"></textarea>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="header-button">
                                    Submit
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
                            <button onClick={closeSubjectModal} className="modal-close-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="modal-description">{currentSubject.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
