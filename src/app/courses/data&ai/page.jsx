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

    // Updated subjectDetails for Data Science & AI
    const subjectDetails = {
        "Introduction to Data Science": {
            details:
                "Get an overview of the data science field, its applications, and the typical workflow. Learn about the roles, tools, and skills required to become a data scientist.",
            project:
                "Write a report on a real-world problem that can be solved with data science, outlining the steps you would take to approach it.",
            topics: [
                { topic: "What is Data Science?" },
                { topic: "Data Science Workflow" },
                { topic: "Roles in Data Science" },
                { topic: "Popular Tools & Languages" },
                { topic: "Applications of Data Science" },
            ],
        },
        "Python for Data Science": {
            details:
                "Learn Python programming from scratch with a focus on data science applications. Cover essential syntax, data structures, and libraries like NumPy and Pandas.",
            project:
                "Analyze a dataset using Python and Pandas to extract insights and visualize basic statistics.",
            topics: [
                { topic: "Python Basics & Syntax" },
                { topic: "Data Structures (Lists, Dicts, etc.)" },
                { topic: "Working with Jupyter Notebooks" },
                { topic: "NumPy for Numerical Computing" },
                { topic: "Pandas for Data Manipulation" },
                { topic: "Data Visualization with Matplotlib & Seaborn" },
            ],
        },
        "Statistics & Probability": {
            details:
                "Build a strong foundation in statistics and probability, which are essential for analyzing data and building models.",
            project:
                "Perform exploratory data analysis on a dataset, summarizing key statistics and visualizing distributions.",
            topics: [
                { topic: "Descriptive Statistics" },
                { topic: "Probability Theory" },
                { topic: "Distributions (Normal, Binomial, etc.)" },
                { topic: "Hypothesis Testing" },
                { topic: "Correlation & Covariance" },
                { topic: "Statistical Inference" },
            ],
        },
        "Data Wrangling & Cleaning": {
            details:
                "Learn techniques for cleaning, transforming, and preparing data for analysis. Handle missing values, outliers, and inconsistent data.",
            project:
                "Clean and preprocess a messy real-world dataset to make it ready for analysis or modeling.",
            topics: [
                { topic: "Handling Missing Data" },
                { topic: "Data Transformation" },
                { topic: "Dealing with Outliers" },
                { topic: "Feature Engineering" },
                { topic: "Data Normalization & Scaling" },
                { topic: "Data Encoding (Categorical Variables)" },
            ],
        },
        "Exploratory Data Analysis (EDA)": {
            details:
                "Explore datasets to uncover patterns, trends, and relationships using visualization and summary statistics.",
            project:
                "Conduct EDA on a public dataset, create visualizations, and summarize findings in a report.",
            topics: [
                { topic: "Data Visualization Techniques" },
                { topic: "Univariate & Multivariate Analysis" },
                { topic: "Correlation Analysis" },
                { topic: "Using Pandas Profiling" },
                { topic: "Interactive Visualizations" },
            ],
        },
        "Machine Learning Fundamentals": {
            details:
                "Understand the basics of machine learning, including supervised and unsupervised learning, model evaluation, and key algorithms.",
            project:
                "Build and evaluate a simple classification or regression model using scikit-learn.",
            topics: [
                { topic: "What is Machine Learning?" },
                { topic: "Supervised vs. Unsupervised Learning" },
                { topic: "Train/Test Split & Cross-Validation" },
                { topic: "Regression & Classification Algorithms" },
                { topic: "Model Evaluation Metrics" },
                { topic: "Overfitting & Underfitting" },
            ],
        },
        "Deep Learning & Neural Networks": {
            details:
                "Dive into the fundamentals of deep learning, neural networks, and frameworks like TensorFlow or PyTorch.",
            project:
                "Train a simple neural network to classify images or text using Keras or PyTorch.",
            topics: [
                { topic: "Introduction to Neural Networks" },
                { topic: "Activation Functions" },
                { topic: "Forward & Backpropagation" },
                { topic: "Convolutional Neural Networks (CNNs)" },
                { topic: "Recurrent Neural Networks (RNNs)" },
                { topic: "Using TensorFlow/Keras or PyTorch" },
            ],
        },
        "AI Ethics & Responsible AI": {
            details:
                "Explore the ethical considerations in AI, including bias, fairness, transparency, and the societal impact of AI systems.",
            project:
                "Analyze a case study where AI ethics played a critical role and propose solutions for responsible AI deployment.",
            topics: [
                { topic: "Bias & Fairness in AI" },
                { topic: "Explainability & Transparency" },
                { topic: "Privacy & Data Protection" },
                { topic: "Societal Impact of AI" },
                { topic: "Regulations & Guidelines" },
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
                        <h2 className="hero-title">Data Science & AI Course Overview</h2>
                    </div>
                </section>
                {/* Introduction Section */}
                <section className="intro">
                    <div className="intro-1">
                        <h1 className="intro-title">What is Data Science?</h1>
                        <p className="intro-description">
                            <strong>Data science</strong> is the field of extracting insights and knowledge from data using scientific methods, algorithms, and systems. It combines programming, statistics, and domain expertise to analyze and interpret complex data for decision-making and predictions.
                        </p>
                    </div>

                    <div className="intro-2">
                        <h2 className="intro-title">
                            What is Data Science vs. Artificial Intelligence?
                        </h2>
                        <p className="intro-description mb-4">
                            <strong>Data Science</strong> focuses on collecting, cleaning, analyzing, and visualizing data to extract insights and inform decisions. It uses statistical and computational techniques to understand patterns and trends in data.
                        </p>
                        <p className="intro-description mb-4">
                            <strong>Artificial Intelligence (AI)</strong> is a broader field that aims to create systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, and problem-solving. Machine learning and deep learning are key subfields of AI, often powered by data science techniques.
                        </p>
                    </div>

                    <div className="intro-3">
                        <h2 className="intro-title">
                            Essential Tools for Data Scientists & AI Engineers
                        </h2>
                        <p className="intro-description mb-4">
                            Data scientists and AI engineers use a range of tools, including <strong>Python</strong> for programming, <strong>Jupyter Notebooks</strong> for interactive analysis, <strong>Pandas</strong> and <strong>NumPy</strong> for data manipulation, <strong>scikit-learn</strong> for machine learning, and <strong>TensorFlow</strong> or <strong>PyTorch</strong> for deep learning. Visualization libraries like <strong>Matplotlib</strong> and <strong>Seaborn</strong> are also essential.
                        </p>

                        <p className="intro-description">
                            Our course provides a structured <strong>roadmap</strong> to help you master the core skills of data science and AI, guiding you from beginner to advanced projects and real-world applications.
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
                            Are you an expert in Data Science or AI?
                        </h2>
                    </div>
                    <p className="section-subtitle">
                        Join our team of experienced mentors and help shape the next
                        generation of data scientists and AI engineers.
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
