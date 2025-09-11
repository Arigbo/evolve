"use client";
import { Context } from "@/components/content";
import React, { useState, useRef, useEffect, useContext } from "react";
export default function Home() {
  // State to track the active testimonial index for the carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  // State to manage the index of the memory item with an active text overlay
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(null);
  // New state to track which video is hovered for playback control
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);
  const [about, setAbout] = useState();
  // Ref to hold the timeout ID for the overlay text
  const timeoutRef = useRef(null);
  // Refs to hold the video elements
  const videoRefs = useRef([]);
  const { setIsModalOpen, isModalOpen } = useContext(Context);

  // Function to navigate to the next testimonial
  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    );
  };

  // Function to navigate to the previous testimonial
  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
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
          video.play().catch((error) => {
            console.log("Video playback error:", error);
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
      description:
        "Master modern front-end and back-end frameworks to build and deploy dynamic web applications.",
      svg: (
        <g>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </g>
      ),
      link: "/course/frontend",
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
    },
  ];

  // Data for the "Why Choose Us" cards, including SVG icon JSX
  const whyChooseUsCards = [
    {
      title: "Expert Instructors",
      description:
        "Learn from seasoned professionals with years of industry experience and a passion for teaching.",
      svg: (
        <g>
          <path d="M12 11h.01M17 11h.01M19 11h.01M5 11h.01M7 11h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
          <path d="M9 16c0 2 2 3 3 3s3-1 3-3" />
        </g>
      ),
    },
    {
      title: "Hands-On Projects",
      description:
        "Apply what you learn by building real-world projects that you can showcase to potential employers.",
      svg: (
        <g>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </g>
      ),
    },
    {
      title: "Career Support",
      description:
        "From resume reviews to interview prep, we'll help you land your dream job after graduation.",
      svg: (
        <g>
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.186 0-6.239-.773-9-2.245M12 14v7m-7 0h14a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-12 0H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v-4" />
        </g>
      ),
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      quote:
        "The Evolve team helped me transition from a non-technical role into a web development job in just six months. The curriculum was challenging yet manageable, and the career support was invaluable.",
      name: "Alex Johnson",
      title: "Web Developer, Tech Innovators",
    },
    {
      quote:
        "I gained the confidence and skills needed to pass my CompTIA Security+ exam, thanks to Evolve's comprehensive cybersecurity course. I landed a job as a junior security analyst soon after.",
      name: "Maria Rodriguez",
      title: "Security Analyst, Global Solutions",
    },
    {
      quote:
        "I highly recommend Evolve for anyone looking to switch careers. The instructors are top-notch and the community support is fantastic. The data science program was a game-changer for me.",
      name: "David Chen",
      title: "Data Scientist, DataForge",
    },
  ];

  // Data for previous sessions and memories with videos and images
  const memories = [
    {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Big+Buck+Bunny",
      description: "A clip from our Python for Data Science workshop.",
    },
    {
      type: "image",
      url: "https://placehold.co/600x400/94A3B8/FFFFFF?text=Coding+Session",
      description: "Team building after a successful session.",
    },
    {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      poster: "https://placehold.co/600x400/9333EA/FFFFFF?text=Sintel",
      description: "A quick look at our UI/UX design class.",
    },
    {
      type: "image",
      url: "https://placehold.co/600x400/6B7280/FFFFFF?text=Group+Work",
      description: "Brainstorming new projects with our students.",
    },
    {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster:
        "https://placehold.co/600x400/F97316/FFFFFF?text=For+Bigger+Joyrides",
      description: "Debugging a complex full-stack application.",
    },
    {
      type: "image",
      url: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Tech+Talk",
      description: "A celebratory moment with our graduates.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Evelyn Reed",
      role: "Head of Curriculum",
      bio: "A Ph.D. in Computer Science with over 15 years of experience in technical education. She designs our roadmaps to be both comprehensive and accessible.",
      image: "/course-hero.png",
      socials: [
        {
          socialIcon: "fa-facebook",
          link: "",
        },
      ],
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Lead Instructor, Frontend",
      bio: "A seasoned software engineer with a passion for clean code and beautiful user interfaces. He leads our frontend workshops and mentors aspiring developers.",
      image: "/home-hero2.png",
      socials: [
        {
          socialIcon: "fa-facebook",
          link: "",
        },
      ],
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Community & Mentorship Lead",
      bio: "A champion of collaborative learning. She manages our mentor program and ensures every student feels supported on their journey.",
      image: "/home-hero.png",
      socials: [
        {
          socialIcon: "fa-facebook",
          link: "",
        },
      ],
    },
  ];

  // The currently displayed testimonial
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero home-hero">
          <div className="hero-inner">
            <h1 className="hero-title">
              Launch Your Career <br className="hidden-on-mobile" /> in IT with{" "}
              <span className="text-gradient">Evolve</span>
            </h1>
            <p className="hero-description">
              Our hands-on, project-based training programs are designed to
              equip you with the skills demanded by today's tech industry.
            </p>
            <a href="#courses" className="btn cta-button">
              Explore Courses
            </a>
          </div>
        </section>

        {/* About Section (Why Choose Us) */}
        <section id="about" className="section">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="text-gradient">Evolve?</span>
            </h2>
            <p className="section-subtitle">
              We don't just teach theory; we build careers. Our unique approach
              focuses on practical skills and real-world application.
            </p>
          </div>
          <div className="card-grid">
            {whyChooseUsCards.map((card, index) => (
              <div key={index} className="card">
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
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="section">
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
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Memories Section */}
        <section id="memories" className="section">
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
                  {media.type === "video" ? (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        preload="none"
                        muted
                        poster={media.poster}
                      >
                        <source src={media.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-play-button">
                        <svg viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img src={media.url} alt={`Memory ${index + 1}`} />
                  )}
                  <div
                    className={`memory-overlay ${
                      activeMemoryIndex === index ? "active" : ""
                    }`}
                  >
                    <p>{media.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">
              Meet the Architects of{" "}
              <span className="text-gradient">Evolve</span>
            </h2>
          </div>
          <div className="card-grid">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`team-card ${about ? `hide` : ""}`}
              >
                <div className="team-card-inner">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="team-image"
                  />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-title">{member.role}</p>
                  <h2
                    className="about"
                    onClick={() => {
                      setAbout(true);
                    }}
                  >
                    More<i className="fas fa-arrow-right"></i>
                  </h2>
                </div>
                <div className="team-description">
                  <div className="team-description-inner">
                    <div className="top">
                      <div className="top-header">
                        {" "}
                        <h2>
                          About{" "}
                          <span className="text-gradient">{member.name}</span>
                        </h2>
                        <i
                          className="fas fa-x"
                          onClick={() => {
                            setAbout(false);
                          }}
                        ></i>
                      </div>
                      <p>{member.bio}</p>
                    </div>
                    <div className="bottom">
                      {member.socials.map((item) => {
                        return (
                          <a>
                            <i className={`fab ${item.socialIcon}`}></i>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="section testimonials-section">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Don't just take our word for it. See what our graduates have to
              say.
            </p>
          </div>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                {`"${currentTestimonial.quote}"`}
              </blockquote>
              <div className="testimonial-author-info">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-details">
                  <p className="author-name">{currentTestimonial.name}</p>
                  <p className="author-title">{currentTestimonial.title}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-nav">
              {" "}
              <button
                onClick={goToPreviousTestimonial}
                className="testimonial-nav-button prev"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={goToNextTestimonial}
                className="testimonial-nav-button next"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="section cta-section">
          <div className="section-header">
            <h2 className="section-title">
              Ready to <span className="text-gradient">Evolve </span>Your
              Career?
            </h2>
          </div>
          <p className="section-subtitle">
            Contact us today to learn more about our programs and find the
            perfect course for you.
          </p>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="btn cta-button"
          >
            Contact Us
          </button>
        </section>
      </main>
    </>
  );
}
