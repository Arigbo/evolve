"use client";
import Link from "next/link";
import React, { useState } from "react";

const App = () => {
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  const [isCourseRedirectModalOpen, setIsCourseRedirectModalOpen] =
    useState(false);

  const openMentorModal = () => {
    setIsMentorRedirectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const openCourseModal = () => {
    setIsCourseRedirectModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsMentorRedirectModalOpen(false);
    setIsCourseRedirectModalOpen(false);
    document.body.style.overflow = "";
  };

  const teamMembers = [
    {
      name: "Dr. Evelyn Reed",
      role: "Head of Curriculum",
      bio: "A Ph.D. in Computer Science with over 15 years of experience in technical education. She designs our roadmaps to be both comprehensive and accessible.",
      image: "https://placehold.co/128x128/9CA3AF/ffffff?text=ER",
    },
    {
      name: "Alex Chen",
      role: "Lead Instructor, Frontend",
      bio: "A seasoned software engineer with a passion for clean code and beautiful user interfaces. He leads our frontend workshops and mentors aspiring developers.",
      image: "https://placehold.co/128x128/9CA3AF/ffffff?text=AC",
    },
    {
      name: "Maria Rodriguez",
      role: "Community & Mentorship Lead",
      bio: "A champion of collaborative learning. She manages our mentor program and ensures every student feels supported on their journey.",
      image: "https://placehold.co/128x128/9CA3AF/ffffff?text=MR",
    },
  ];

  const services = [
    {
      title: "Project-Based Learning",
      description:
        "Our core philosophy. Build real-world applications from scratch, guided by a clear roadmap and senior developers. This is how you learn to think like a professional.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-600 mb-4 mx-auto"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      title: "Expert-Led Workshops",
      description:
        "Go deeper with weekly workshops on advanced topics like system design, cloud infrastructure, and modern frameworks. Stay ahead of the curve with cutting-edge skills.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-600 mb-4 mx-auto"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: "Personalized Mentorship",
      description:
        "Work with a dedicated mentor who guides you through complex challenges, reviews your code, and offers career advice. This is your secret weapon for accelerated growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-600 mb-4 mx-auto"
        >
          <path d="M12 2a5 5 0 1 0 5 5v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7a5 5 0 1 0 5 5" />
          <line x1="12" y1="12" x2="12" y2="22" />
          <path d="M18 12a6 6 0 0 1-6 6" />
          <path d="M6 12a6 6 0 0 0 6 6" />
          <path d="M12 2v20" />
        </svg>
      ),
    },
  ];

  const memories = [
    {
      caption: "Building community at the Fall 2024 college hackathon.",
      image:
        "https://placehold.co/600x400/9CA3AF/ffffff?text=College+Hackathon",
    },
    {
      caption:
        "A vibrant Q&A session with a guest speaker from a leading tech firm.",
      image: "https://placehold.co/600x400/9CA3AF/ffffff?text=Q%26A+Session",
    },
    {
      caption:
        "Our annual project showcase, where students present their final creations.",
      image: "https://placehold.co/600x400/9CA3AF/ffffff?text=Project+Showcase",
    },
    {
      caption:
        "Mentors providing one-on-one code reviews during a weekend workshop.",
      image: "https://placehold.co/600x400/9CA3AF/ffffff?text=Mentor+Review",
    },
    {
      caption:
        "Students celebrating their course completion and new career paths.",
      image: "https://placehold.co/600x400/9CA3AF/ffffff?text=Graduation",
    },
    {
      caption: "Our team leading a hands-on session at the university campus.",
      image: "https://placehold.co/600x400/9CA3AF/ffffff?text=Campus+Event",
    },
  ];

  return (
    <>
      <div className="app-container">
        {/* Main Content */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero about-hero">
            <div className="hero-inner">
              <h1 className="hero-title">Crafting Tomorrow's Innovators</h1>
              <p className="hero-description">
                We go beyond tutorials to provide a truly transformative,
                project-based learning experience. At Evolve, you don't just
                learn to code—you learn to build, collaborate, and thrive.
              </p>
              <Link href="/course" className="btn cta-button">
                Discover Your Path
              </Link>
            </div>
          </section>

          {/* Our Journey Section with image */}
          <section className="section ">
            <div className="journey">
              <div className="journey-left">
                <h2 className="section-title">
                  How We <span className="text-gradient">Evolve</span>
                </h2>
                <div className="journey-left-text">
                  <p className="">
                    Evolve was born from a simple idea: to fix online education.
                    We were tired of passive video tutorials and outdated
                    curricula that left learners with a certificate but no
                    practical skills. Our founders, a group of seasoned software
                    engineers, wanted to create a platform that mimicked the
                    real-world experience of a development team.
                  </p>
                  <p className="">
                    Today, our courses are centered around building a single,
                    challenging project from start to finish. We provide direct
                    mentorship, a vibrant community, and a roadmap that prepares
                    you for a real-world career.
                  </p>
                </div>
              </div>
              <div className="journey-image">
                <img
                  src="/team.png"
                  alt="Image of Evolve team collaborating"
                  className=""
                />
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="section">
            <h2 className="section-heading">How We Transform Careers</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  {service.icon}
                  <h3 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Memories & Events Section */}
          <section className="section">
            <h2 className="section-heading">Memories from Our Community</h2>
            <div className="gallery-grid">
              {memories.map((memory, index) => (
                <div key={index} className="gallery-card">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 text-center">
                      {memory.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Team Section */}
          <section className="section">
            <h2 className="section-heading">Meet the Architects of Evolve</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.image} alt={`Photo of ${member.name}`} />
                  <h4 className="font-semibold text-xl text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="text-sm mt-4 text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="final-cta">
            <h2>Ready to make an impact?</h2>
            <p>
              Join Evolve and turn your passion into a profession. Our community
              is waiting to build with you.
            </p>
            <button onClick={openCourseModal}>Get Started Today</button>
          </section>
        </main>

        {/* Mentor Redirect Modal */}
        {isMentorRedirectModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Work with Us
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                Thank you for your interest in becoming a mentor! Please contact
                us at **mentors@evolve.com** with your resume and a brief
                description of your experience to get started.
              </p>
              <div className="text-right">
                <button
                  onClick={closeModal}
                  className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all duration-200 hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Course Redirect Modal */}
        {isCourseRedirectModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Course Information
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                This would link you to the courses page. Since this is a sample,
                you can imagine you've been redirected to the main course page.
              </p>
              <div className="text-right">
                <button
                  onClick={closeModal}
                  className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all duration-200 hover:bg-indigo-700"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
