"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const App = () => {
    // State to manage the visibility of the contact modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to track the active testimonial index for the carousel
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    // State to manage the index of the memory item with an active text overlay
    const [activeMemoryIndex, setActiveMemoryIndex] = useState(null);
    // New state to track which video is hovered for playback control
    const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);

    // Ref to hold the timeout ID for the overlay text
    const timeoutRef = useRef(null);
    // Refs to hold the video elements
    const videoRefs = useRef([]);

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

    // Function to navigate to the next testimonial
    const goToNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Function to navigate to the previous testimonial
    const goToPreviousTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Click handler for memories to show/hide the overlay text
    const handleMemoryClick = (index) => {
        // Clear any existing timeout to prevent conflicts
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (activeMemoryIndex === index) {
            // If the same item is clicked, hide the overlay
            setActiveMemoryIndex(null);
        } else {
            // Show the overlay for the new item
            setActiveMemoryIndex(index);
            // Set a new timeout to hide the overlay after 0.9 seconds
            timeoutRef.current = setTimeout(() => {
                setActiveMemoryIndex(null);
            }, 900);
        }
    };

    // New useEffect to handle video play/pause based on state
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === hoveredVideoIndex) {
                    video.play().catch(error => {
                        console.log('Video playback error:', error);
                    });
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [hoveredVideoIndex]);


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
        }
    ];

    // Data for the "Why Choose Us" cards, including SVG icon JSX
    const whyChooseUsCards = [
        {
            title: "Expert Instructors",
            description: "Learn from seasoned professionals with years of industry experience and a passion for teaching.",
            svg: (
                <g>
                    <path d="M12 11h.01M17 11h.01M19 11h.01M5 11h.01M7 11h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                    <path d="M9 16c0 2 2 3 3 3s3-1 3-3" />
                </g>
            ),
        },
        {
            title: "Hands-On Projects",
            description: "Apply what you learn by building real-world projects that you can showcase to potential employers.",
            svg: (
                <g>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </g>
            ),
        },
        {
            title: "Career Support",
            description: "From resume reviews to interview prep, we'll help you land your dream job after graduation.",
            svg: (
                <g>
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.186 0-6.239-.773-9-2.245M12 14v7m-7 0h14a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-12 0H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v-4" />
                </g>
            ),
        }
    ];

    // Testimonial data
    const testimonials = [
        {
            quote: "The Evolve team helped me transition from a non-technical role into a web development job in just six months. The curriculum was challenging yet manageable, and the career support was invaluable.",
            name: "Alex Johnson",
            title: "Web Developer, Tech Innovators",
        },
        {
            quote: "I gained the confidence and skills needed to pass my CompTIA Security+ exam, thanks to Evolve's comprehensive cybersecurity course. I landed a job as a junior security analyst soon after.",
            name: "Maria Rodriguez",
            title: "Security Analyst, Global Solutions",
        },
        {
            quote: "I highly recommend Evolve for anyone looking to switch careers. The instructors are top-notch and the community support is fantastic. The data science program was a game-changer for me.",
            name: "David Chen",
            title: "Data Scientist, DataForge",
        }
    ];

    // Data for previous sessions and memories with videos and images
    const memories = [
        { type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', poster: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Big+Buck+Bunny', description: 'A clip from our Python for Data Science workshop.' },
        { type: 'image', url: 'https://placehold.co/600x400/94A3B8/FFFFFF?text=Coding+Session', description: 'Team building after a successful session.' },
        { type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', poster: 'https://placehold.co/600x400/9333EA/FFFFFF?text=Sintel', description: 'A quick look at our UI/UX design class.' },
        { type: 'image', url: 'https://placehold.co/600x400/6B7280/FFFFFF?text=Group+Work', description: 'Brainstorming new projects with our students.' },
        { type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', poster: 'https://placehold.co/600x400/F97316/FFFFFF?text=For+Bigger+Joyrides', description: 'Debugging a complex full-stack application.' },
        { type: 'image', url: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Tech+Talk', description: 'A celebratory moment with our graduates.' },
    ];

    // Data for team members
    const teamMembers = [
        {
            name: "John Doe",
            title: "Lead Instructor, Web Dev",
            imageUrl: "https://placehold.co/400x400/808080/FFFFFF?text=J.D.",
        },
        {
            name: "Jane Smith",
            title: "Cybersecurity Expert",
            imageUrl: "https://placehold.co/400x400/808080/FFFFFF?text=J.S.",
        },
        {
            name: "Sam Wilson",
            title: "Data Science Mentor",
            imageUrl: "https://placehold.co/400x400/808080/FFFFFF?text=S.W.",
        }
    ];

    // The currently displayed testimonial
    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
        <div className="landing-page-container">
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

                .landing-page-container {
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
                
                /* Testimonials Section */
                .testimonials-section {
                    background-color: $bg-secondary;
                }

                .testimonial-carousel {
                    position: relative;
                    max-width: 42rem;
                    margin: 0 auto;
                }

                .testimonial-card {
                    background-color: $card-bg;
                    padding: 2rem;
                    border-radius: 1.5rem;
                    transition: all 0.5s ease-in-out;
                    text-align: center;
                }

                .testimonial-quote {
                    font-size: 1.25rem;
                    font-style: italic;
                    color: #4b5563;
                    margin-bottom: 1.5rem;
                    min-height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .testimonial-author-info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .author-avatar {
                    height: 3rem;
                    width: 3rem;
                    border-radius: 9999px;
                    background-color: $text-accent;
                    flex-shrink: 0;
                    margin-right: 1rem;
                }
                
                .author-details p {
                    margin: 0;
                }
                
                .author-name {
                    font-weight: 600;
                }
                
                .author-title {
                    font-size: 0.875rem;
                    color: $text-secondary;
                }

                .testimonial-nav-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 0.5rem;
                    border-radius: 9999px;
                    background-color: $card-bg;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    color: $text-secondary;
                    border: none;
                    cursor: pointer;
                    &:hover {
                        background-color: #f3f4f6;
                    }

                    &.prev {
                        left: 0;
                    }

                    &.next {
                        right: 0;
                    }
                }
                
                /* Memories Section */
                .memories-card {
                    position: relative;
                    border-radius: 1.5rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    
                    &:hover {
                        transform: translateY(-5px);
                    }

                    .media-container {
                        width: 100%;
                        padding-bottom: 66.67%; /* 3:2 Aspect Ratio */
                        position: relative;
                        background-color: #374151;
                    }

                    .media-container img, .media-container video {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.3s ease;
                    }

                    .video-play-button {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 64px;
                        height: 64px;
                        background-color: rgba(0, 0, 0, 0.5);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        pointer-events: none;
                        transition: opacity 0.3s ease;
                    }
                    .video-play-button svg {
                        width: 32px;
                        height: 32px;
                        fill: #fff;
                    }
                    .memories-card:hover .video-play-button {
                        opacity: 0;
                    }
                }

                .memory-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 500;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                }

                .memory-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }


                /* Our Team Section */
                .team-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    background-color: $card-bg;
                    padding: 2rem;
                    border-radius: 1.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                    &:hover {
                        transform: translateY(-5px);
                    }

                    .team-image {
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        object-fit: cover;
                        margin-bottom: 1rem;
                        border: 4px solid $text-accent;
                    }

                    .team-name {
                        font-size: 1.25rem;
                        font-weight: 600;
                        margin-bottom: 0.25rem;
                    }
                    .team-title {
                        font-size: 1rem;
                        color: $text-secondary;
                    }
                }

                /* CTA Section */
                .cta-section {
                    padding: 5rem 0;
                    text-align: center;
                    background-color: #f9fafb;
                }

                .cta-button {
                    @include cta-button;
                    font-size: 1.125rem;
                    font-weight: bold;
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
                        <a href="#about">About</a>
                        <a href="#courses">Courses</a>
                        <a href="#memories">Memories</a>
                        <a href="#team">Team</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <Link href="/course" className="header-cta">Get Started</Link>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <h1 className="hero-title">
                            Launch Your Career <br className="hidden-on-mobile" /> in IT with <span className="text-gradient">Evolve</span>
                        </h1>
                        <p className="hero-description">
                            Our hands-on, project-based training programs are designed to equip you with the skills demanded by today's tech industry.
                        </p>
                        <a href="#courses" className="hero-cta">
                            Explore Courses
                        </a>
                    </div>
                </section>

                {/* About Section (Why Choose Us) */}
                <section id="about" className="section testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Why Choose Evolve?</h2>
                            <p className="section-subtitle">
                                We don't just teach theory; we build careers. Our unique approach focuses on practical skills and real-world application.
                            </p>
                        </div>
                        <div className="card-grid">
                            {whyChooseUsCards.map((card, index) => (
                                <div key={index} className="card">
                                    <div className="card-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {card.svg}
                                        </svg>
                                    </div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section id="courses" className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Our Popular Courses</h2>
                            <p className="section-subtitle">
                                Choose a path that aligns with your passion and career goals.
                            </p>
                        </div>
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
                                    <a href="#" className="card-link">
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

                {/* Memories Section */}
                <section id="memories" className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Memories from Sessions</h2>
                            <p className="section-subtitle">
                                Take a look back at some of our favorite moments with students.
                            </p>
                        </div>
                        <div className="card-grid">
                            {memories.map((media, index) => (
                                <div 
                                    key={index} 
                                    className="memories-card" 
                                    onClick={() => handleMemoryClick(index)}
                                    onMouseEnter={() => setHoveredVideoIndex(index)}
                                    onMouseLeave={() => setHoveredVideoIndex(null)}
                                >
                                    <div className="media-container">
                                        {media.type === 'video' ? (
                                            <>
                                                <video
                                                    ref={el => videoRefs.current[index] = el}
                                                    preload="none"
                                                    muted
                                                    poster={media.poster}
                                                >
                                                    <source src={media.url} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div className="video-play-button">
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </>
                                        ) : (
                                            <img src={media.url} alt={`Memory ${index + 1}`} />
                                        )}
                                        <div className={`memory-overlay ${activeMemoryIndex === index ? 'active' : ''}`}>
                                            <p>{media.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Our Team Section */}
                <section id="team" className="section testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Meet Our Team</h2>
                            <p className="section-subtitle">
                                Our passionate instructors and mentors are here to guide you on your journey.
                            </p>
                        </div>
                        <div className="card-grid">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card">
                                    <img src={member.imageUrl} alt={member.name} className="team-image" />
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-title">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section id="testimonials" className="section testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Success Stories</h2>
                            <p className="section-subtitle">
                                Don't just take our word for it. See what our graduates have to say.
                            </p>
                        </div>
                        <div className="testimonial-carousel">
                            <div className="testimonial-card">
                                <blockquote className="testimonial-quote">
                                    {`"${currentTestimonial.quote}"`}
                                </blockquote>
                                <div className="testimonial-author-info">
                                    <div className="author-avatar"></div>
                                    <div className="author-details">
                                        <p className="author-name">{currentTestimonial.name}</p>
                                        <p className="author-title">{currentTestimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={goToPreviousTestimonial} className="testimonial-nav-button prev">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={goToNextTestimonial} className="testimonial-nav-button next">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section id="contact" className="section cta-section">
                    <div className="container">
                        <h2 className="section-title">Ready to Evolve Your Career?</h2>
                        <p className="section-subtitle">
                            Contact us today to learn more about our programs and find the perfect course for you.
                        </p>
                        <button onClick={openModal} className="cta-button">
                            Contact Us
                        </button>
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
