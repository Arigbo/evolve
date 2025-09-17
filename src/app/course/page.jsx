"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Context } from "@/components/content";
const Courses = () => {
  const { setIsModalOpen } = useContext(Context);

  // Data for the course cards, including SVG icon JSX
  const courseCards = [
    {
      title: "Frontend Web Development",
      description:
        "Master modern front-end frameworks to build and deploy dynamic web applications.",
      svg: (
        <g>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </g>
      ),
      link: "/courses/frontend",
    },
    {
      title: "Backend Web Development",
      description:
        "Master modern back-end frameworks to build and deploy dynamic web applications.",
      svg: (
        <g>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </g>
      ),
      link: "/courses/backend",
    },
    {
      title: "Cybersecurity Analyst",
      description:
        "Become a digital protector. Learn to identify vulnerabilities, defend against threats, and secure networks.",
      svg: (
        <g>
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
          <path d="M12 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </g>
      ),
      link: "/courses/cybersecurity",
    },
    {
      title: "Data Science & AI",
      description:
        "Unlock the power of data. Learn machine learning, statistical analysis, and Python to make data-driven decisions.",
      svg: (
        <g>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </g>
      ),
      link: "/courses/data-science",
    },

    {
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
      svg: (
        <g>
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <path d="M17 2v5"></path>
          <path d="M7 2v5"></path>
          <path d="M12 12h.01"></path>
          <path d="M12 16h.01"></path>
        </g>
      ),
      link: "/courses/mobile-development",
    },
    {
      title: "Cloud Computing & DevOps",
      description:
        "Manage and deploy applications on the cloud. Master services like AWS, Azure, and Google Cloud.",
      svg: (
        <g>
          <path d="M12 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
          <path d="M12 12v10" />
          <path d="M7 17l-5-5" />
          <path d="M17 17l5-5" />
        </g>
      ),
      link: "/courses/cloud-computing",
    },
    {
      title: "UI/UX Design",
      description:
        "Create stunning and user-friendly interfaces. Learn design principles, wireframing, and prototyping.",
      svg: (
        <g>
          <path d="M12 20s-8-4-8-12a8 8 0 1116 0c0 8-8 12-8 12z" />
          <circle cx="12" cy="12" r="3" />
        </g>
      ),
      link: "/courses/ui-ux-design",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero course-hero">
        <div className="hero-inner">
          <h1 className="hero-title">Our Courses</h1>
          <p className="hero-description">
            Find the right path for your career. We offer a wide range of
            training programs led by industry experts.
          </p>
          <Link href="/course" className="btn cta-button">
            {" "}
            Explore All Courses
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section id="course-list" className="section">
        <div className="section-header">
          <h2 className="section-title">Our Courses</h2>
        </div>
        <div className="card-grid">
          {courseCards.map((card, index) => (
            <div key={index} className="card course-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.svg}
                </svg>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <a href={card.link} className="card-link">
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  width="1rem"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="section cta-section">
        <div className="section-header">
          <h2 className="section-title">
            Ready to <span className="text-gradient">Evolve</span> Your Career?
          </h2>
        </div>
        <p className="section-subtitle">
          Contact us today to learn more about our programs and find the perfect
          course for you.
        </p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="cta-button"
        >
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Courses;
