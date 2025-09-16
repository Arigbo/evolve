"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Dessert } from "lucide-react";

const courseData = {
  "computer-appreciation": {
    id: "computer-appreciation",
    title: "Computer Appreciation",
    overview: "Computer Appreciation Course Overview",
    intro: {
      title: "What is Computer Appreciation?",
      description:
        "Computer Appreciation introduces you to the world of computers, their history, basic concepts, and practical uses in everyday life. You'll learn about hardware, software, and how computers help us work, learn, and communicate.",
    },
    why: {
      title: "Why Learn Computer Appreciation?",
      description:
        "Understanding computers is essential in today's digital world. This course gives you the foundational knowledge to use computers confidently, whether for school, work, or personal projects.",
    },
    tools: {
      title: "Tools and Skills You'll Gain",
      description:
        "You'll get hands-on experience with word processors, spreadsheets, and presentation software. You'll also learn about safe internet use, basic troubleshooting, and ethical computer practices. Our course provides a step-by-step roadmap to help you become comfortable with computers and digital tools, preparing you for further studies or the workplace.",
    },
    subjects: {
      "Introduction to Computers": {
        details:
          "Learn the basics of what computers are, their history, and their impact on society. Understand the difference between hardware and software.",
        project:
          "Write a short essay on the evolution of computers and their importance in modern life.",
        topics: [
          { topic: "Definition of a Computer" },
          { topic: "History and Generations of Computers" },
          { topic: "Types of Computers" },
          { topic: "Basic Computer Operations" },
          { topic: "Computer Applications in Daily Life" },
        ],
      },
      "Computer Hardware": {
        details:
          "Explore the physical components of a computer system, including input, output, processing, and storage devices.",
        project:
          "Create a labeled diagram of a computer system and its main hardware components.",
        topics: [
          { topic: "Input Devices" },
          { topic: "Output Devices" },
          { topic: "Central Processing Unit (CPU)" },
          { topic: "Memory and Storage Devices" },
          { topic: "Peripheral Devices" },
        ],
      },
      "Computer Software": {
        details:
          "Understand the difference between system software and application software, and learn about operating systems and common applications.",
        project:
          "List and describe five software applications you use in daily life.",
        topics: [
          { topic: "System Software vs Application Software" },
          { topic: "Operating Systems" },
          { topic: "Popular Application Software" },
          { topic: "Installing and Uninstalling Software" },
        ],
      },
      "Introduction to the Internet": {
        details:
          "Learn what the Internet is, how it works, and how to use web browsers and search engines safely and effectively.",
        project:
          "Research and present on the history of the Internet and its impact on communication.",
        topics: [
          { topic: "What is the Internet?" },
          { topic: "Web Browsers and Search Engines" },
          { topic: "Basic Internet Safety" },
          { topic: "Email and Online Communication" },
        ],
      },
      "Word Processing Basics": {
        details:
          "Get hands-on experience with word processing software to create, edit, and format documents.",
        project: "Create a formatted letter using a word processor.",
        topics: [
          { topic: "Introduction to Word Processors" },
          { topic: "Creating and Saving Documents" },
          { topic: "Formatting Text and Paragraphs" },
          { topic: "Inserting Images and Tables" },
        ],
      },
      "Spreadsheets and Data": {
        details:
          "Learn how to use spreadsheet software for organizing, analyzing, and presenting data.",
        project:
          "Design a simple budget spreadsheet and use formulas to calculate totals.",
        topics: [
          { topic: "Spreadsheet Basics" },
          { topic: "Entering and Formatting Data" },
          { topic: "Simple Formulas and Functions" },
          { topic: "Creating Charts and Graphs" },
        ],
      },
      Presentations: {
        details:
          "Discover how to create engaging presentations using presentation software.",
        project:
          "Prepare a short presentation about your favorite technology topic.",
        topics: [
          { topic: "Introduction to Presentation Software" },
          { topic: "Creating Slides" },
          { topic: "Adding Text, Images, and Media" },
          { topic: "Design and Layout Tips" },
        ],
      },
      "Computer Ethics and Safety": {
        details:
          "Understand the importance of ethical computer use, privacy, and staying safe online.",
        project:
          "Create a poster or infographic about safe and ethical computer practices.",
        topics: [
          { topic: "Digital Citizenship" },
          { topic: "Cyberbullying and Online Safety" },
          { topic: "Protecting Personal Information" },
          { topic: "Copyright and Plagiarism" },
        ],
      },
      "Basic Troubleshooting": {
        details:
          "Learn simple troubleshooting steps for common computer problems.",
        project:
          "Write a troubleshooting guide for a common computer issue (e.g., printer not working).",
        topics: [
          { topic: "Identifying Common Problems" },
          { topic: "Basic Maintenance Tips" },
          { topic: "When to Seek Help" },
        ],
      },
      // Additional subject example
      "Emerging Technologies": {
        details:
          "Explore new trends in computing such as cloud computing, IoT, and artificial intelligence.",
        project:
          "Research and present on an emerging technology and its potential impact.",
        topics: [
          { topic: "Cloud Computing Basics" },
          { topic: "Internet of Things (IoT)" },
          { topic: "Introduction to Artificial Intelligence" },
        ],
      },
    },
  },
  "cyberSecurity": {
    id: "cybersecurity",
    title: "Cybersecurity",
    overview: "Cybersecurity Course Overview",
    intro: {
      title: "What is Cybersecurity?",
      description: (
        <p className="intro-description">
          <strong>Cybersecurity</strong> is the practice of protecting systems,
          networks, and data from digital attacks. It involves implementing
          technologies, processes, and controls to defend against unauthorized
          access, data breaches, and other cyber threats. Cybersecurity
          professionals work to ensure the confidentiality, integrity, and
          availability of information in an increasingly connected world.
        </p>
      ),
    },
    why: {
      title: "Why is Cybersecurity Important?",
      description: (
        <p className="intro-description mb-4">
          In today's digital age, cyber threats are constantly evolving and can
          have serious consequences for individuals, businesses, and
          governments. Effective cybersecurity protects sensitive data,
          maintains trust, and ensures the smooth operation of critical
          infrastructure.
        </p>
      ),
      description2: (
        <p className="intro-description mb-4">
          Cybersecurity is not just about technology—it's also about people and
          processes. Understanding how to identify risks, respond to incidents,
          and comply with regulations is essential for anyone pursuing a career
          in this field.
        </p>
      ),
    },
    tools: {
      title: "Essential Tools for Cybersecurity Professionals",
      description: (
        <p className="intro-description mb-4">
          Cybersecurity experts use a variety of tools, including network
          scanners, vulnerability assessment tools, firewalls, SIEM platforms,
          and encryption utilities. Familiarity with operating systems,
          scripting languages, and cloud security solutions is also important.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a structured <strong>roadmap</strong> to help you
          build the skills needed to protect digital assets and respond to cyber
          threats. You'll work on real-world projects and gain hands-on
          experience with industry-standard tools.
        </p>
      ),
    },
  },
  "frontend": {
    id: "frontend-web-development",
    title: "Frontend Web Development",
    overview: "Frontend Web Development Course Overview",
    intro: {
      title: "What is Frontend Web Development?",
      description: (
        <p className="intro-description">
          <strong>Frontend development</strong> is the practice of building the
          visual and interactive parts of a website that users see and interact
          with directly. It involves using languages and frameworks like HTML,
          CSS, and JavaScript to create everything from the page layout and
          design to animations and functionality. The goal is to deliver a
          smooth, responsive, and visually appealing user experience.
        </p>
      ),
    },
    why: {
      title: "What is Frontend vs. Backend Development?",
      description: (
        <p className="intro-description mb-4">
          <strong>Frontend</strong> development is all about the{" "}
          <strong>client-side</strong> of a web application. It's the part the
          user can see and interact with in their web browser. This includes
          everything from the layout and fonts to buttons, forms, and
          animations. Frontend developers work with languages like HTML, CSS,
          and JavaScript to bring designs to life and ensure a seamless user
          experience.
        </p>
      ),
      description2: (
        <p className="intro-description mb-4">
          <strong>Backend</strong> development, on the other hand, is the{" "}
          <strong>server-side</strong>
          of a web application. It's the logic and functionality that happens
          behind the scenes. This includes databases, APIs, server scripts, and
          the business logic that makes the application work. While users don't
          see the backend directly, it is essential for storing data, processing
          requests, and authenticating users.
        </p>
      ),
    },
    tools: {
      title: "Essential Tools for Frontend Developers",
      description: (
        <p className="intro-description mb-4">
          To build modern web applications, frontend developers use a variety of
          tools. The core tools include a <strong>code editor</strong> like
          Visual Studio Code, a <strong>version control system</strong> like Git
          for tracking changes, and a <strong>package manager</strong> such as
          npm or Yarn for managing project dependencies. You will also use the{" "}
          <strong>browser's developer tools</strong> for debugging and a{" "}
          <strong>build tool</strong> like Webpack or Vite for bundling your
          code.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a structured <strong>roadmap</strong> designed to
          take you from a complete beginner to a confident developer. You'll
          learn the core skills needed to build modern web applications and
          create a portfolio of real projects along the way.
        </p>
      ),
    },
    subjects: {
      "Internet & the Web": {
        details:
          "This module demystifies how the internet works, from browsers to servers. You will learn about key concepts like DNS, HTTP/HTTPS, and how client-side applications communicate with the backend.",
        project:
          "Write a simple report explaining the journey of a webpage from a user clicking a link to it appearing on their screen, detailing each step and technology involved.",
        topics: [
          {
            topic: "How the Internet Works (Clients, Servers)",
          },
          {
            topic: "HTTP/HTTPS Protocols",
          },
          {
            topic: "Domain Name System (DNS)",
          },
          {
            topic: "Web Browsers and Rendering Engines",
          },
          {
            topic: "Understanding URLs and Resources",
          },
          {
            topic: "Introduction to Frontend vs. Backend",
          },
          {
            topic: "Cookies and Session Storage",
          },
          {
            topic: "Anatomy of a Request-Response Cycle",
          },
        ],
      },
      "HTML Fundamentals": {
        details:
          "Master the foundational language of the web. This section covers semantic HTML5 for structuring content, accessibility standards, and modern best practices for building robust and well-organized web pages.",
        project:
          "Build a multi-page portfolio website using only semantic HTML5. The site must include a home page, about page, and projects page, and must pass an accessibility checker.",
        topics: [
          {
            topic: "Introduction to HTML and the Web",
          },
          {
            topic: "Semantic HTML5 Tags",
          },
          {
            topic: "HTML Forms and Inputs",
          },
          {
            topic: "Accessibility (ARIA roles and attributes)",
          },
          {
            topic: "Image and Multimedia Elements",
          },
          {
            topic: "Structuring Content with Headings, Paragraphs, and Lists",
          },
          {
            topic: "Working with Tables",
          },
          {
            topic: "Introduction to Web Components",
          },
          { topic: "Best Practices for Clean and Maintainable HTML" },
        ],
      },
      "CSS Fundamentals": {
        details:
          "Dive into the language of web styling. This module covers modern CSS3 for creating visually stunning interfaces. You will learn about the box model, responsive design with media queries, and advanced layout techniques using Flexbox and CSS Grid.",
        project:
          "Take a basic HTML page and style it to match a provided design mockup. You will create a fully responsive layout and implement custom fonts and animations using CSS.",
        topics: [
          {
            topic: "CSS Syntax and Selectors",
          },
          {
            topic: "The Box Model, Sizing, and Spacing",
          },
          {
            topic: "Working with Colors and Backgrounds",
          },
          {
            topic: "Typography and Fonts",
          },
          {
            topic: "Flexbox for One-Dimensional Layouts",
          },
          {
            topic: "CSS Grid for Two-Dimensional Layouts",
          },
          {
            topic: "Responsive Design with Media Queries",
          },
          {
            topic: "CSS Animations and Transitions",
          },
          {
            topic: "Introduction to Preprocessors (Sass/Less)",
          },
        ],
      },
      "JavaScript & DOM": {
        details:
          "Dive into the core logic of web applications. This module focuses on modern JavaScript (ES6+), teaching you how to manipulate the Document Object Model (DOM) to create interactive and dynamic user experiences. You will also learn about event handling and asynchronous operations.",
        project:
          "Create a fully functional to-do list application that allows users to add, remove, and mark tasks as complete, all without reloading the page.",
        topics: [
          {
            topic: "Variables, Data Types, and Operators",
          },
          {
            topic: "Control Flow and Logic",
          },
          {
            topic: "Functions and Scopes",
          },
          {
            topic: "Arrays and Objects",
          },
          {
            topic: "DOM Manipulation and Traversal",
          },
          {
            topic: "Event Handling and Listeners",
          },
          {
            topic: "Introduction to Asynchronous JavaScript",
          },
          {
            topic: "Error Handling with Try/Catch",
          },
        ],
      },
      "Modern Frameworks (React)": {
        details:
          "Build scalable and complex single-page applications using the React library. You will learn about component-based architecture, state management with hooks (useState, useEffect), and efficient data flow to create reusable UI components.",
        project:
          "Develop a simple e-commerce product gallery with a shopping cart. The application should use React components and manage state with hooks.",
        topics: [
          {
            topic: "Introduction to React and JSX",
          },
          {
            topic: "Component-Based Architecture",
          },
          {
            topic: "State and Props",
          },
          {
            topic: "React Hooks (useState, useEffect, useContext)",
          },
          {
            topic: "Conditional Rendering and Lists",
          },
          {
            topic: "Handling Forms in React",
          },
          {
            topic: "Working with Third-Party Libraries",
          },
          {
            topic: "React Router for Navigation",
          },
        ],
      },
      "APIs & Asynchronous Data": {
        details:
          "Connect your frontend applications to backend services. This part of the course teaches you how to fetch data from RESTful APIs using the Fetch API and `async/await`. You will also learn to handle data and display it dynamically in your application.",
        project:
          "Create a weather application that fetches and displays current weather data for a user-entered city using a public weather API.",
        topics: [
          {
            topic: "Introduction to APIs and RESTful Principles",
          },
          {
            topic: "Using the Fetch API for Data Requests",
          },
          {
            topic: "Asynchronous JavaScript with `async`/`await`",
          },
          {
            topic: "Handling JSON Data and Response Objects",
          },
          {
            topic: "Error Handling for API Calls",
          },
          {
            topic: "Understanding CORS (Cross-Origin Resource Sharing)",
          },
        ],
      },
      "Performance & Deployment": {
        details:
          "Learn to optimize your code for speed and efficiency. This section covers techniques for reducing page load times, lazy loading, and code splitting. You will also learn how to deploy your projects to platforms like Vercel and Netlify.",
        project:
          "Optimize a sample website by compressing images, lazy-loading content, and deploying it to a free hosting service to achieve a high PageSpeed Insights score.",
        topics: [
          {
            topic: "Web Performance Metrics",
          },
          {
            topic: "Code Splitting and Lazy Loading",
          },
          {
            topic: "Image and Asset Optimization",
          },
          {
            topic: "Minification and Bundling",
          },
          {
            topic: "Web Vitals and Lighthouse Audits",
          },
          {
            topic: "Domain Name Systems (DNS) and Hosting",
          },
          {
            topic: "Deployment with Vercel and Netlify",
          },
          {
            topic: "Content Delivery Networks (CDNs)",
          },
        ],
      },
      "Git & GitHub": {
        details:
          "Understand the essential tools for professional software development. This module introduces you to Git for version control and GitHub for collaborative development. You will learn how to create repositories, make commits, handle branches, and work in a team.",
        project:
          "Collaborate with peers on a small web project, managing all code changes using Git commands and submitting pull requests on GitHub.",
        topics: [
          {
            topic: "Git Basics (add, commit, push)",
          },
          {
            topic: "Branching and Merging",
          },
          {
            topic: "Working with Remote Repositories",
          },
          {
            topic: "Handling Merge Conflicts",
          },
          {
            topic: "Understanding Pull Requests",
          },
          {
            topic: "Collaborative Workflows",
          },
          {
            topic: "Using `.gitignore`",
          },
        ],
      },
    },
  },
 "backend": {
    id: "backend",
    title: "Backend Web Development",
    overview: "Backend Web Development Course Overview",
    intro: {
      title: "What is Backend Web Development?",
      description: (
        <p className="intro-description">
          <strong>Backend development</strong> is the practice of building the
          server-side logic and infrastructure that power web and mobile
          applications. It involves working with languages and frameworks such
          as Node.js, Express, Python, or Java, and managing databases like
          MongoDB, PostgreSQL, or MySQL. Backend developers handle
          authentication, data storage, APIs, and business logic, ensuring that
          applications are secure, scalable, and efficient for users and
          clients.
        </p>
      ),
    },
    why: {
      title: "Why Learn Backend Web Development?",
      description: (
        <p className="intro-description">
          Backend skills are crucial for building scalable, secure, and
          efficient web applications. This course prepares you for backend
          developer roles and full-stack development.
        </p>
      ),
    },
    tools: {
      title: "Tools and Skills You'll Gain",
      description: (
        <p className="intro-description mb-4">
          Backend developers rely on a variety of tools to build robust systems.
          Key tools include a <strong>code editor</strong> like Visual Studio
          Code, a <strong>version control system</strong> such as Git for
          tracking changes, and a <strong>package manager</strong> like npm or
          Yarn for managing dependencies. You'll also use{" "}
          <strong>API testing tools</strong> (Postman, Insomnia),{" "}
          <strong>database clients</strong> for managing data, and{" "}
          <strong>deployment platforms</strong> (Vercel, Heroku, or cloud
          services) to launch your applications.
        </p>
      ),
      description2: (
        <p className="intro-description">
          This course provides a structured <strong>roadmap</strong> to guide
          you from the basics of backend development to building and deploying
          real-world projects. You'll gain the skills needed to create secure
          APIs, connect to databases, and deploy scalable backend services.
        </p>
      ),
    },
    subjects: {
      "Internet & the Web": {
        details:
          "This module demystifies how the internet works, focusing on the backend perspective. You'll learn about protocols, servers, DNS, and how backend systems communicate with clients and other services.",
        project:
          "Write a technical report explaining the journey of an HTTP request from a browser to a backend server and back, detailing each step and technology involved.",
        topics: [
          { topic: "How the Internet Works (Clients, Servers, Backend Focus)" },
          { topic: "HTTP/HTTPS Protocols & Methods" },
          { topic: "Domain Name System (DNS) for Backend Routing" },
          { topic: "Web Servers (Nginx, Apache, Node.js)" },
          { topic: "Request-Response Lifecycle" },
          { topic: "RESTful APIs and Endpoints" },
          { topic: "Cookies, Sessions, and Authentication" },
          { topic: "Status Codes and Error Handling" },
        ],
      },
      "Node.js & JavaScript": {
        details:
          "Master backend development with Node.js and modern JavaScript (ES6+). Learn about the event loop, asynchronous programming, and how to build scalable server-side applications.",
        project:
          "Build a RESTful API for a simple blog platform using Node.js and Express, supporting CRUD operations for posts.",
        topics: [
          { topic: "Node.js Runtime & Architecture" },
          { topic: "Modules, npm, and Dependency Management" },
          {
            topic:
              "Asynchronous Programming (Callbacks, Promises, async/await)",
          },
          { topic: "Express.js Basics" },
          { topic: "Routing and Middleware" },
          { topic: "Environment Variables & Configuration" },
          { topic: "Error Handling in Node.js" },
          { topic: "Serving Static Files" },
        ],
      },
      "Databases (SQL & NoSQL)": {
        details:
          "Explore how to store and manage data using both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Learn about data modeling, querying, and integrating databases with backend applications.",
        project:
          "Design and implement a user management system with authentication, using MongoDB or PostgreSQL as the database.",
        topics: [
          { topic: "Relational Databases (PostgreSQL/MySQL) Basics" },
          { topic: "NoSQL Databases (MongoDB) Basics" },
          { topic: "Data Modeling & Relationships" },
          { topic: "CRUD Operations" },
          { topic: "ORMs & ODMs (Sequelize, Mongoose)" },
          { topic: "Database Connections in Node.js" },
          { topic: "Indexes and Performance" },
          { topic: "Database Security Best Practices" },
        ],
      },
      "Authentication & Security": {
        details:
          "Learn how to secure your backend applications. Topics include user authentication (JWT, OAuth), password hashing, authorization, and common security vulnerabilities.",
        project:
          "Implement secure user authentication and authorization in your blog API, using JWT tokens and password hashing.",
        topics: [
          { topic: "User Authentication (Sessions, JWT, OAuth)" },
          { topic: "Password Hashing (bcrypt)" },
          { topic: "Authorization & Access Control" },
          { topic: "CORS and Security Headers" },
          { topic: "Common Vulnerabilities (SQL Injection, XSS, CSRF)" },
          { topic: "Environment Variables for Secrets" },
          { topic: "HTTPS and SSL/TLS" },
        ],
      },
      "APIs & RESTful Design": {
        details:
          "Design and build robust RESTful APIs. Learn about API versioning, documentation (OpenAPI/Swagger), and best practices for scalable API development.",
        project:
          "Document and test your blog API using Swagger (OpenAPI), and implement versioning for future updates.",
        topics: [
          { topic: "RESTful Principles & Resource Modeling" },
          { topic: "API Versioning" },
          { topic: "Request Validation & Error Responses" },
          { topic: "API Documentation (Swagger/OpenAPI)" },
          { topic: "Testing APIs (Postman, Jest, Supertest)" },
          { topic: "Rate Limiting & Throttling" },
          { topic: "Pagination & Filtering" },
        ],
      },
      "DevOps & Deployment": {
        details:
          "Deploy and manage backend applications in production. Learn about environment management, CI/CD, cloud platforms (Heroku, Vercel, AWS), and monitoring.",
        project:
          "Deploy your blog API to a cloud platform (Heroku, Vercel, or AWS) with environment variables and automated deployment.",
        topics: [
          { topic: "Environment Variables & Config Management" },
          { topic: "Process Managers (PM2, nodemon)" },
          { topic: "Continuous Integration/Deployment (CI/CD)" },
          { topic: "Cloud Deployment (Heroku, Vercel, AWS)" },
          { topic: "Logging & Monitoring (Winston, Loggly)" },
          { topic: "Scaling & Load Balancing" },
          { topic: "Backups & Disaster Recovery" },
        ],
      },
      "Version Control (Git & GitHub)": {
        details:
          "Understand the essential tools for backend collaboration. Learn Git for version control and GitHub for code hosting, collaboration, and workflow management.",
        project:
          "Collaborate with peers on your backend project using Git branches, pull requests, and code reviews on GitHub.",
        topics: [
          { topic: "Git Basics (init, add, commit, push)" },
          { topic: "Branching, Merging, and Pull Requests" },
          { topic: "Resolving Merge Conflicts" },
          { topic: "GitHub Actions for CI/CD" },
          { topic: "Managing Issues and Projects" },
          { topic: "Using .gitignore and Environment Files" },
        ],
      },
    },
  },
  "dataAi": {
    id: "data&ai",
    title: "Data Science & AI",
    overview: "Data Science & AI Course Overview",
    intro: {
      title: "What is Data Science & AI?",
      description: (
        <p className="intro-description">
          <strong>Data science</strong> is the field of extracting insights and
          knowledge from data using scientific methods, algorithms, and systems.
          It combines programming, statistics, and domain expertise to analyze
          and interpret complex data for decision-making and predictions.
        </p>
      ),
    },
    why: {
      title: "What is Data Science vs. Artificial Intelligence?",
      description: (
        <p className="intro-description mb-4">
          <strong>Data Science</strong> focuses on collecting, cleaning,
          analyzing, and visualizing data to extract insights and inform
          decisions. It uses statistical and computational techniques to
          understand patterns and trends in data.
        </p>
      ),
      description2: (
        <p className="intro-description mb-4">
          <strong>Artificial Intelligence (AI)</strong> is a broader field that
          aims to create systems capable of performing tasks that typically
          require human intelligence, such as learning, reasoning, and
          problem-solving. Machine learning and deep learning are key subfields
          of AI, often powered by data science techniques.
        </p>
      ),
    },
    tools: {
      title: "Tools and Skills You'll Gain",
      description: (
        <p className="intro-description mb-4">
          Data scientists and AI engineers use a range of tools, including{" "}
          <strong>Python</strong> for programming,{" "}
          <strong>Jupyter Notebooks</strong> for interactive analysis,{" "}
          <strong>Pandas</strong> and <strong>NumPy</strong> for data
          manipulation, <strong>scikit-learn</strong> for machine learning, and{" "}
          <strong>TensorFlow</strong> or <strong>PyTorch</strong> for deep
          learning. Visualization libraries like <strong>Matplotlib</strong> and{" "}
          <strong>Seaborn</strong> are also essential.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a structured <strong>roadmap</strong> to help you
          master the core skills of data science and AI, guiding you from
          beginner to advanced projects and real-world applications.
        </p>
      ),
    },
    subjects: {
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
    },
  },
  "ui-ux": {
    id: "ui-ux",
    title: "ui-ux",
    overview: "UI/UX Design Course Overview",
    intro: {
      title: "What is UI/UX Design?",
      description: (
        <p className="intro-description">
          <strong>UI/UX design</strong> is the art and science of creating
          digital products that are both visually appealing and easy to use. UI
          (User Interface) focuses on the look and layout, while UX (User
          Experience) ensures products are intuitive, accessible, and enjoyable.
        </p>
      ),
    },
    why: {
      title: " Why is UI/UX Important?",
      description: (
        <p className="intro-description mb-4">
          Great UI/UX design leads to happier users, higher engagement, and
          better business outcomes. It helps products stand out in a crowded
          market and ensures users can achieve their goals efficiently and
          delightfully.
        </p>
      ),
    },
    tools: {
      title: " Essential Tools for UI/UX Designers",
      description: (
        <p className="intro-description mb-4">
          UI/UX designers use tools like <strong>Figma</strong>,{" "}
          <strong>Adobe XD</strong>, and <strong>Sketch</strong> for designing
          and prototyping. User research tools, whiteboarding apps, and
          collaboration platforms are also key for effective design workflows.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a step-by-step <strong>roadmap</strong> to help
          you become a confident UI/UX designer. You'll build real projects and
          gain the skills needed to launch your own portfolio or join a
          professional team.
        </p>
      ),
    },
    subjects: {
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
    },
  },
"mobileapp": {
    id: "mobileapp",
    title: "Mobile App Development",
    overview: "Mobile App Development Course Overview",
    intro: {
      title: "What is Mobile App Development?",
      description: (
        <p className="intro-description">
          <strong>Mobile app development</strong> is the process of creating
          software applications that run on mobile devices like smartphones and
          tablets. It involves designing user interfaces, implementing features,
          and ensuring performance across different platforms such as iOS and
          Android.
        </p>
      ),
    },
    why: {
      title: "Native vs. Cross-Platform Development",
      description: (
        <p className="intro-description mb-4">
          <strong>Native development</strong> uses platform-specific languages
          and tools (like Swift for iOS or Kotlin for Android) to build apps
          that fully leverage device features.
        </p>
      ),
      description2: (
        <p className="intro-description">
          {" "}
          <strong>Cross-platform development</strong> uses frameworks like React
          Native or Flutter to create apps that work on multiple platforms from
          a single codebase, speeding up development and reducing costs.
        </p>
      ),
    },
    tools: {
      title: "Tools and Skills You'll Gain",
      description: (
        <p className="intro-description mb-4">
          Mobile developers use tools like <strong>Android Studio</strong>,{" "}
          <strong>Xcode</strong>, or <strong>Expo</strong> for building and
          testing apps. Version control with <strong>Git</strong>, design tools
          like <strong>Figma</strong>, and package managers such as{" "}
          <strong>npm</strong> are also essential for efficient development and
          collaboration.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a step-by-step <strong>roadmap</strong> to help
          you become a confident mobile app developer. You'll build real
          projects and gain the skills needed to launch your own apps or join a
          professional team.
        </p>
      ),
    },
    subjects: {
      "Introduction to Mobile Development": {
        details:
          "Get started with the basics of mobile app development. Learn about the mobile ecosystem, platforms (iOS & Android), and the differences between native and cross-platform development.",
        project:
          "Write a short report comparing native and cross-platform mobile development, including pros and cons of each approach.",
        topics: [
          { topic: "Mobile Platforms Overview (iOS, Android)" },
          { topic: "Native vs. Cross-Platform Development" },
          { topic: "App Store & Play Store Basics" },
          { topic: "Development Tools & IDEs" },
          { topic: "Mobile App Lifecycle" },
        ],
      },
      "UI/UX Design Principles": {
        details:
          "Learn the fundamentals of designing intuitive and attractive mobile interfaces. Explore mobile design patterns, usability, and accessibility best practices.",
        project:
          "Design wireframes for a simple mobile app using Figma or a similar tool, focusing on user flow and accessibility.",
        topics: [
          { topic: "Mobile UI Patterns" },
          { topic: "Touch Interactions & Gestures" },
          { topic: "Responsive Layouts" },
          { topic: "Accessibility in Mobile Apps" },
          { topic: "Prototyping Tools (Figma, Sketch)" },
        ],
      },
      "React Native Fundamentals": {
        details:
          "Dive into React Native, a popular framework for building cross-platform mobile apps using JavaScript and React. Learn about components, navigation, and styling.",
        project:
          "Build a simple 'To-Do List' app in React Native that allows users to add, complete, and delete tasks.",
        topics: [
          { topic: "Setting Up React Native Environment" },
          { topic: "JSX & Components" },
          { topic: "Props & State" },
          { topic: "Styling with StyleSheet" },
          { topic: "Navigation (React Navigation)" },
          { topic: "Handling User Input" },
        ],
      },
      "Working with APIs & Data": {
        details:
          "Connect your mobile app to external data sources. Learn how to fetch data from REST APIs, handle asynchronous operations, and manage app state.",
        project:
          "Create a weather app that fetches and displays weather data for a user-entered city using a public API.",
        topics: [
          { topic: "Fetching Data with Fetch/Axios" },
          { topic: "Async/Await in React Native" },
          { topic: "State Management (useState, useEffect)" },
          { topic: "Displaying Lists & Data" },
          { topic: "Error Handling" },
        ],
      },
      "Device Features & Permissions": {
        details:
          "Explore how to access device features such as camera, location, and notifications. Learn about requesting permissions and handling user privacy.",
        project:
          "Build a photo capture app that uses the device camera and saves images to the gallery.",
        topics: [
          { topic: "Accessing Camera & Media Library" },
          { topic: "Geolocation & Maps" },
          { topic: "Push Notifications" },
          { topic: "Permissions API" },
          { topic: "Handling User Data Securely" },
        ],
      },
      "App Performance & Optimization": {
        details:
          "Learn techniques to optimize your mobile app for speed and efficiency. Cover topics like lazy loading, optimizing images, and reducing app size.",
        project:
          "Profile and optimize a sample app to improve its load time and responsiveness.",
        topics: [
          { topic: "Performance Profiling Tools" },
          { topic: "Optimizing Images & Assets" },
          { topic: "Reducing App Bundle Size" },
          { topic: "Lazy Loading Components" },
          { topic: "Memory Management" },
        ],
      },
      "Testing & Debugging": {
        details:
          "Understand how to test and debug your mobile apps. Learn about unit testing, UI testing, and using debugging tools.",
        project:
          "Write unit tests for a React Native component and debug a sample app using React Native Debugger.",
        topics: [
          { topic: "Debugging Tools (React Native Debugger, Flipper)" },
          { topic: "Unit Testing with Jest" },
          { topic: "UI Testing with Detox" },
          { topic: "Error Tracking & Crash Reporting" },
        ],
      },
      "Publishing & Deployment": {
        details:
          "Prepare your app for release. Learn about app signing, building for production, and publishing to the App Store and Google Play.",
        project:
          "Package and deploy a sample app to the Google Play Store (test track) or App Store (TestFlight).",
        topics: [
          { topic: "App Signing & Certificates" },
          { topic: "Building for Production" },
          { topic: "App Store & Play Store Submission" },
          { topic: "Versioning & Updates" },
          { topic: "Monitoring & Analytics" },
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
    },
  },
};

const SingleCourse = () => {
  const { id } = useParams();
  const course = courseData[id];

  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isMentorRedirectModalOpen, setIsMentorRedirectModalOpen] =
    useState(false);
  const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      details: course.subjects[subjectTitle].details,
      project: course.subjects[subjectTitle].project,
      topics: course.subjects[subjectTitle].topics,
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
      {course ? (
        <main className="single-course">
          <section className="hero">
            <div className="hero-inner">
              <h2 className="hero-title">{course.overview}</h2>
            </div>
          </section>
          <section className="intro">
            <div className="intro-1">
              <h1 className="intro-title">{course.intro.title}</h1>
              {course.intro.description}
            </div>
            <div className="intro-2">
              <h2 className="intro-title">{course.why.title}</h2>
              {course.why.description}
              {course.why.description2}
            </div>
            <div className="intro-3">
              <h2 className="intro-title">{course.tools.title}</h2>
              {course.tools.description}
              {course.tools.description2}
            </div>
          </section>
          <section>
            <div className="section-header">
              <h2 className="section-title">Course Subjects</h2>
            </div>
            <div className="grid-container">
              {Object.keys(course.subjects).map((subject, index) => (
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
                    {course.subjects[subject].details.split(".")[0] + "."}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="section cta-section">
            <div className="section-header">
              <h2 className="section-title">
                Are you an expert in {course.title}?
              </h2>
            </div>
            <p className="section-subtitle">
              Join our team of experienced mentors and help others build their
              digital literacy skills.
            </p>
            <button onClick={openMentorModal} className="cta-button">
              Work with Us
            </button>
          </section>
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
                  Fill out the form below to apply to our course. You can choose
                  to be a general student or a mentee for more personalized
                  guidance.
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
                    <select
                      id="role"
                      name="role"
                      required
                      className="form-select"
                    >
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
                      <strong>About this Subject:</strong>{" "}
                      {currentSubject.details}
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
                      <strong>Project to Work On:</strong>{" "}
                      {currentSubject.project}
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
                  Thank you for your application! A member of our team will
                  contact you shortly to confirm your enrollment and discuss
                  your next steps.
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
                  Thank you for your interest in becoming a mentor! Please
                  contact us at <strong>mentors@evolve.com</strong> with your
                  resume and a brief description of your experience to get
                  started.
                </p>
                <div className="text-right mt-4">
                  <button onClick={closeModal} className="cta-button">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        <div className="single-course">
          <h1>Course Not found</h1>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
