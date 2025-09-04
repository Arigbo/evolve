"use client"
import React, { useState } from 'react';

const App = () => {
    // State to manage the visibility of the contact modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handler for form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
        closeModal();
    };

    // Data for the course cards, including SVG icon JSX
    const courseCards = [
        {
            title: "Full-Stack Web Development",
            description: "Master modern front-end and back-end frameworks to build and deploy dynamic web applications.",
            svg: (
                <g>
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </g>
            ),
            link:"/course/frontend"
        },
        {
            title: "Cybersecurity Analyst",
            description: "Become a digital protector. Learn to identify vulnerabilities, defend against threats, and secure networks.",
            svg: (
                <g>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    <path d="M12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </g>
            ),
        },
        {
            title: "Data Science & AI",
            description: "Unlock the power of data. Learn machine learning, statistical analysis, and Python to make data-driven decisions.",
            svg: (
                <g>
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </g>
            ),
        },
        {
            title: "Mobile App Development",
            description: "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
            svg: (
                <g>
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <path d="M17 2v5"></path>
                    <path d="M7 2v5"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M12 16h.01"></path>
                </g>
            ),
        },
        {
            title: "Cloud Computing & DevOps",
            description: "Manage and deploy applications on the cloud. Master services like AWS, Azure, and Google Cloud.",
            svg: (
                <g>
                    <path d="M12 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                    <path d="M12 12v10" />
                    <path d="M7 17l-5-5" />
                    <path d="M17 17l5-5" />
                </g>
            ),
        },
        {
            title: "UI/UX Design",
            description: "Create stunning and user-friendly interfaces. Learn design principles, wireframing, and prototyping.",
            svg: (
                <g>
                    <path d="M12 20s-8-4-8-12a8 8 0 1116 0c0 8-8 12-8 12z" />
                    <circle cx="12" cy="12" r="3" />
                </g>
            ),
        },
    ];

    return (
        <div className="courses-page-container">
            <style>{`
                /* SCSS Variables */
                $bg-primary: #f8fafc;
                $bg-secondary: #e5e7eb;
                $text-primary: #1f2937;
                $text-secondary: #6b7280;
                $text-accent: #4f46e5;
                $text-accent-hover: #3730a3;
                $text-light: #ffffff;
                $border-color: #e5e7eb;
                $card-bg: #ffffff;
                $modal-overlay: rgba(0, 0, 0, 0.6);
                $shadow-base: 0 10px 20px rgba(79, 70, 229, 0.2);

                /* Mixins */
                @mixin cta-button {
                    background-color: $text-accent;
                    color: $text-light;
                    font-weight: 600;
                    border-radius: 9999px;
                    padding: 0.75rem 2rem;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        background-color: $text-accent-hover;
                        box-shadow: $shadow-base;
                    }
                }

                /* General Styles */
                body {
                    font-family: 'Chivo', sans-serif;
                    background-color: $bg-primary;
                    color: $text-primary;
                    overflow-x: hidden;
                    margin: 0;
                    padding: 0;
                }

                .courses-page-container {
                    font-family: 'Chivo', sans-serif;
                }

                .container {
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                /* Scrollbar Styles */
                body::-webkit-scrollbar {
                    width: 8px;
                }
                body::-webkit-scrollbar-track {
                    background: $bg-secondary;
                }
                body::-webkit-scrollbar-thumb {
                    background-color: $text-accent;
                    border-radius: 9999px;
                    border: 2px solid $bg-secondary;
                }

                /* Modal Styles */
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: $modal-overlay;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 100;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;

                    &.open {
                        opacity: 1;
                        visibility: visible;
                    }
                }

                .modal-content {
                    background-color: $card-bg;
                    padding: 2rem;
                    border-radius: 1.5rem;
                    width: 90%;
                    max-width: 500px;
                    position: relative;
                    transform: scale(0.95);
                    transition: transform 0.3s ease;
                }

                .modal.open .modal-content {
                    transform: scale(1);
                }

                .modal-close-button {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    color: $text-secondary;
                    background: none;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        color: $text-primary;
                    }
                }

                .modal-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .form-group {
                    label {
                        display: block;
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: $text-primary;
                        margin-bottom: 0.25rem;
                    }
                    input, textarea {
                        width: 100%;
                        padding: 0.5rem 0.75rem;
                        background-color: #f3f4f6;
                        color: #1f2937;
                        border-radius: 0.5rem;
                        border: 1px solid $border-color;
                        outline: none;
                        &:focus {
                            border-color: $text-accent;
                            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
                        }
                    }
                }
                
                .form-buttons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                }

                .cancel-button {
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    background-color: $bg-secondary;
                    color: $text-primary;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        background-color: darken($bg-secondary, 5%);
                    }
                }
                
                /* Header */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 50;
                    background-color: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(8px);
                    border-bottom: 1px solid $border-color;
                    padding: 1rem 0;
                }
                
                .header-nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: $text-primary;
                    text-decoration: none;
                }

                .logo-icon {
                    height: 2rem;
                    width: 2rem;
                    color: $text-accent;
                }

                .logo-text {
                    font-size: 1.25rem;
                    font-weight: bold;
                }
                
                .nav-links {
                    display: none;
                    gap: 1.5rem;
                    @media (min-width: 768px) {
                        display: flex;
                    }

                    a {
                        color: $text-secondary;
                        text-decoration: none;
                        transition: color 0.2s ease;
                        &:hover {
                            color: $text-accent;
                        }
                    }
                }
                
                .header-cta {
                    display: none;
                    @media (min-width: 768px) {
                        display: block;
                    }
                    @include cta-button;
                    padding: 0.5rem 1rem;
                }
                
                /* Hero Section */
                .hero-section {
                    background-color: $bg-primary;
                    padding: 6rem 0;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    text-align: center;

                    .hero-title {
                        font-size: 2.25rem;
                        font-weight: 800;
                        line-height: 1.25;
                        margin-bottom: 1rem;
                        @media (min-width: 768px) {
                            font-size: 3.75rem;
                        }
                        @media (min-width: 1024px) {
                            font-size: 4.5rem;
                        }
                    }
                }

                .text-gradient {
                    background-image: linear-gradient(90deg, #4f46e5, #1d4ed8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-description {
                    font-size: 1.125rem;
                    color: $text-secondary;
                    max-width: 48rem;
                    margin: 0 auto 2rem;
                    @media (min-width: 768px) {
                        font-size: 1.25rem;
                    }
                }
                
                .hero-cta {
                    display: inline-block;
                    @include cta-button;
                    font-weight: bold;
                    font-size: 1.125rem;
                }

                /* Common Section Styles */
                .section {
                    padding: 5rem 0;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    @media (min-width: 768px) {
                        font-size: 2.25rem;
                    }
                    @media (min-width: 1024px) {
                        font-size: 3rem;
                    }
                }
                
                .section-subtitle {
                    font-size: 1.125rem;
                    color: $text-secondary;
                    max-width: 42rem;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Card Grid Layouts */
                .card-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    @media (min-width: 768px) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media (min-width: 1024px) {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                
                .card {
                    background-color: $card-bg;
                    border: 1px solid $border-color;
                    border-radius: 1.5rem;
                    padding: 2rem;
                    transition: transform 0.3s ease;
                    text-align: center;
                    &:hover {
                        transform: scale(1.05);
                    }
                }
                
                .course-card {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                }

                .card-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 4rem;
                    width: 4rem;
                    background-color: #eef2ff;
                    border-radius: 9999px;
                    color: $text-accent;
                    margin: 0 auto 1rem;
                    
                    .card.course-card & {
                        margin-left: 0;
                    }

                    svg {
                        height: 2rem;
                        width: 2rem;
                    }
                }
                
                .card-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
                
                .card-description {
                    color: $text-secondary;
                    flex-grow: 1;
                    margin-bottom: 1rem;
                }
                
                .card-link {
                    color: $text-accent;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    text-decoration: none;
                    &:hover {
                        color: lighten($text-accent, 10%);
                    }
                }
                
                /* Footer */
                .footer {
                    background-color: $bg-secondary;
                    padding: 2.5rem 0;
                    text-align: center;
                    border-top: 1px solid $border-color;
                }
                
                .footer p {
                    color: $text-secondary;
                    margin: 0;
                }
            `}</style>

            {/* Contact Modal */}
            <div id="contact-modal" className={`modal ${isModalOpen ? 'open' : ''}`} onClick={(e) => e.target.id === 'contact-modal' && closeModal()}>
                <div className="modal-content">
                    <button className="modal-close-button" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h3 className="section-title">Get in Touch</h3>
                    <p className="section-subtitle">Fill out the form below and we'll get back to you shortly.</p>
                    <form id="contact-form" onSubmit={handleFormSubmit} className="modal-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <div className="form-buttons">
                            <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
                            <button type="submit" className="cta-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Header */}
            <header className="header">
                <nav className="header-nav container">
                    <a href="#" className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="logo-text">Evolve</span>
                    </a>
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#courses">Courses</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <a href="courses.jsx" className="header-cta">Get Started</a>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <h1 className="hero-title">
                            Our Courses
                        </h1>
                        <p className="hero-description">
                            Find the right path for your career. We offer a wide range of training programs led by industry experts.
                        </p>
                        <a href="#course-list" className="hero-cta">
                            Explore All Courses
                        </a>
                    </div>
                </section>

                {/* Courses Section */}
                <section id="course-list" className="section">
                    <div className="container">
                        <div className="card-grid">
                            {courseCards.map((card, index) => (
                                <div key={index} className="card course-card">
                                    <div className="card-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {card.svg}
                                        </svg>
                                    </div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">
                                        {card.description}
                                    </p>
                                    <a href={card.link} className="card-link">
                                        <span>Learn More</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" width="1rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section id="contact" className="section testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Ready to Evolve Your Career?</h2>
                            <p className="section-subtitle">
                                Contact us today to learn more about our programs and find the perfect course for you.
                            </p>
                            <button onClick={openModal} className="cta-button">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        &copy; 2025 Evolve. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
