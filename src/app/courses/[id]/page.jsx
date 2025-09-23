"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
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
  cybersecurity: {
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
    subjects: {
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
    },
  },
  frontend: {
    id: "frontend",
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
        id: "t1",
        topic: "How the Internet Works (Clients, Servers)",
        content: `The internet is a globally interconnected network of billions of computers and other electronic devices. At its core, the most fundamental interaction is the **client-server model**. Think of it as a request-and-response system. Your web browser, running on your device, is the **client**—it’s the machine that initiates a request for a resource. A **server** is a powerful computer, often located in a large data center, that stores files, data, and websites. When you want to visit a website, you are essentially asking a server to send you a copy of its files.

The process begins when you type a URL into your browser's address bar. This seemingly simple action triggers a complex series of events. First, your computer needs to figure out the numeric address of the server, which is its **IP address**. To do this, your computer sends a request to a **Domain Name System (DNS)** server. The DNS acts like the internet’s phonebook, translating the human-friendly domain name (like "www.example.com") into the machine-readable IP address (like "93.184.216.34"). Once your computer has the IP address, it knows exactly where to send its request.

Next, your browser packages up the request as a series of data packets. This is governed by the **TCP/IP protocol suite**. TCP (Transmission Transmission Control Protocol) breaks the request into smaller packets, ensuring they are sent reliably and in the correct order. IP (Internet Protocol) handles the routing, adding the source and destination IP addresses to each packet so they know where to go. The packets then begin their journey across the network. They travel through a series of **routers**, which are like traffic cops for the internet, directing the packets along the most efficient path to their destination. Each router reads the destination IP address and forwards the packet to the next router on the route.

When the packets finally arrive at the server, they are reassembled to form the original request. The server's web server software (like Apache or Nginx) receives this request and processes it. It determines which files the client is asking for (e.g., the home page, an image, or a stylesheet). The server then retrieves these files from its storage.

After gathering all the necessary files, the server creates an **HTTP response**. This response includes a status code (like **200 OK** for success) and the requested content, which is typically a bundle of HTML, CSS, and JavaScript files. The response is also broken down into packets and sent back to your computer through the same network of routers.

Once your browser receives all the response packets, it reassembles the files. The browser’s **rendering engine** then goes to work. It first reads the **HTML** to understand the structure of the webpage. Then, it applies the **CSS** to style the elements and give them color, layout, and visual appeal. Finally, it executes the **JavaScript**, which adds dynamic behavior and interactivity to the page, such as animations, form validation, and real-time updates. This entire process, from typing a URL to seeing the fully rendered page, happens in a fraction of a second, demonstrating the incredible speed and efficiency of the modern internet.`
      },
      {
        id: "t2",
        topic: "HTTP/HTTPS Protocols",
        content: "**HTTP (Hypertext Transfer Protocol)** is the fundamental set of rules for how clients and servers exchange data. It's the language they speak. All web requests are HTTP requests, and all server responses are HTTP responses. **HTTPS** is the secure version of HTTP. The 'S' stands for Secure, and it means the data exchanged between your browser and the server is encrypted using a protocol called TLS (Transport Layer Security). This encryption scrambles the data, making it unreadable to anyone who might intercept it. This is crucial for protecting sensitive information like passwords, credit card numbers, and personal details. You can always tell if a website is using HTTPS by looking for the padlock icon in the address bar."
      },
      {
        id: "t3",
        topic: "Domain Name System (DNS)",
        content: "The **Domain Name System (DNS)** is often called the 'phonebook of the internet.' Computers communicate using **IP addresses**, which are long strings of numbers (like `192.0.2.1`). However, humans find it much easier to remember names like `www.google.com`. The DNS's job is to translate these human-friendly domain names into the machine-friendly IP addresses that computers need to find the right server. When you type a domain name, your computer sends a query to a DNS server, which finds the correct IP address and sends it back, allowing the client to connect to the right server. "
      },
      {
        id: "t4",
        topic: "Web Browsers and Rendering Engines",
        content: "A web browser is the software application you use to access the internet. It has a **rendering engine** (also known as a browser engine or layout engine) at its core. This engine is responsible for processing the raw HTML, CSS, and JavaScript files received from a server. It constructs the page layout, paints the elements, and executes the code to display a visual and interactive web page on your screen. Different browsers have their own rendering engines; for example, Chrome uses Blink and Firefox uses Gecko. The `document` and `window` objects that JavaScript interacts with are created by this rendering engine."
      },
      {
        id: "t5",
        topic: "Understanding URLs and Resources",
        content: "A **URL (Uniform Resource Locator)** is the complete address for a specific resource on the web. It has several distinct parts: `protocol://subdomain.domain.tld/path/to/resource?query=value`. The **protocol** (`https://`) defines how to communicate. The **domain name** (`example.com`) is the human-readable address. The **path** (`/about/us`) specifies the exact location of a resource on the server. The **query** (`?user=123`) passes additional data to the server. Understanding these components is key to navigating the web and building web applications that fetch specific data."
      },
      {
        id: "t6",
        topic: "Introduction to Frontend vs. Backend",
        content: "**Frontend development** focuses on everything the user sees and interacts with. It's the client-side of the application, built with HTML for structure, CSS for style, and JavaScript for interactivity. The goal of frontend is to create a great user experience. **Backend development** handles the server-side logic, databases, and application data. It's the 'behind-the-scenes' engine that powers the frontend, dealing with user authentication, data storage, and business logic. The frontend and backend communicate via APIs."
      },
      {
        id: "t7",
        topic: "Cookies and Session Storage",
        content: "**Cookies** are small pieces of data that a server sends to a client, and the client's browser stores them. They are used for purposes like maintaining a user's logged-in status, remembering items in a shopping cart, or personalizing content. Cookies are sent back to the server with every subsequent request. **Session Storage** and **Local Storage** are other modern ways to store data in the browser. They are more secure and can store more information, but unlike cookies, they are not automatically sent back to the server with every request."
      },
      {
        id: "t8",
        topic: "Anatomy of a Request-Response Cycle",
        content: "The **request-response cycle** is the fundamental process of web communication. It begins when a user's action (e.g., clicking a link) triggers an **HTTP request**. This request is sent from the client to the server, asking for a resource. The server receives, processes the request, and finds the requested data. It then sends an **HTTP response** back to the client. This response contains the status of the request (e.g., `200 OK` for success) and the requested data. Finally, the client's browser renders the data, completing the cycle. This entire process happens in a fraction of a second for most modern websites."
      },
    ],
  },
  "HTML Fundamentals": {
    details:
      "Master the foundational language of the web. This section covers semantic HTML5 for structuring content, accessibility standards, and modern best practices for building robust and well-organized web pages.",
    project:
      "Build a multi-page portfolio website using only semantic HTML5. The site must include a home page, about page, and projects page, and must pass an accessibility checker.",
    topics: [
      { id: "t9", topic: "Introduction to HTML and the Web", content: "**HTML (Hypertext Markup Language)** is the foundational language of the web. It provides the structure and meaning for web content. Think of it as the skeleton of a webpage. An HTML document is made up of elements, which are defined by tags. For example, the `<p>` tag defines a paragraph, and the `<h1>` tag defines a main heading. All HTML documents begin with a `<!DOCTYPE html>` declaration and are contained within `<html>` tags. The content is then split between the `<head>` (for metadata) and `<body>` (for visible content) sections." },
      { id: "t10", topic: "Semantic HTML5 Tags", content: "**Semantic HTML** is the practice of using HTML tags that convey meaning about the content they contain. For example, instead of using a generic `<div>` tag for a navigation bar, you should use the `<nav>` tag. This makes the code easier for both humans and computers (like screen readers and search engines) to understand. Other important semantic tags include `<header>`, `<main>`, `<article>`, `<section>`, and `<footer>`. Using them improves accessibility, code readability, and search engine optimization (SEO)." },
      { id: "t11", topic: "HTML Forms and Inputs", content: "HTML forms are used to collect user data, such as login information, contact details, or survey responses. The `<form>` tag is the container for all form elements. The most common element is `<input>`, which can have different types like `text`, `email`, `password`, `checkbox`, and `radio`. You can also use other elements like `<textarea>` for multi-line text and `<select>` for dropdown lists. The `action` and `method` attributes of the `<form>` tag determine where and how the form data is sent to a server." },
      { id: "t12", topic: "Accessibility (ARIA roles and attributes)", content: "**Accessibility** means making websites usable for everyone, including people with disabilities. **ARIA (Accessible Rich Internet Applications)** is a set of attributes that you can add to HTML elements to provide additional context for assistive technologies like screen readers. For example, if you have a custom button created with a `<div>`, you can add `role=\"button\"` and `aria-label=\"Close\"` to tell a screen reader what the element is and what it does. Accessibility is a crucial part of modern web development and a legal requirement in many countries." },
      { id: "t13", topic: "Image and Multimedia Elements", content: "HTML provides tags to embed images, videos, and audio. The `<img>` tag is used for images and requires a `src` attribute (the path to the image file) and an `alt` attribute (alternative text for screen readers). The `<video>` and `<audio>` tags are used for embedding media files and can be customized with attributes like `controls`, `autoplay`, and `loop`. Properly using these tags and attributes is essential for creating rich and engaging web content." },
      { id: "t14", topic: "Structuring Content with Headings, Paragraphs, and Lists", content: "Good content structure is essential for readability and SEO. **Headings** (`<h1>` to `<h6>`) create a clear content hierarchy, with `<h1>` being the most important. **Paragraphs** (`<p>`) are used for blocks of body text. For a list of items, you can use an **unordered list** (`<ul>`) which uses bullet points, or an **ordered list** (`<ol>`) which uses numbers. Each item in the list is defined by an `<li>` tag. These simple tags are the building blocks of almost all written content on the web." },
      { id: "t15", topic: "Working with Tables", content: "HTML tables are used to display tabular data, such as a company's financial report or a sports schedule. The basic structure includes a `<table>` tag, a `<thead>` for the table's header row, a `<tbody>` for the body of the data, and `<tr>` for each table row. `<th>` is used for header cells, and `<td>` is used for standard data cells. While tables were once used for page layout, modern practice dictates using them only for their intended purpose: displaying structured data." },
      { id: "t16", topic: "Introduction to Web Components", content: "Web Components are a set of three web platform APIs that allow you to create custom, reusable, and encapsulated HTML elements. These are **Custom Elements**, which let you create new HTML tags (`<my-component>`); the **Shadow DOM**, which encapsulates a component's styles and markup so they don't interfere with the rest of the page; and **HTML Templates**, which let you define reusable markup. Together, these APIs allow developers to create truly modular and reusable UI components without needing a framework." },
      { id: "t17", topic: "Best Practices for Clean and Maintainable HTML", content: "Writing clean code is crucial for collaboration and long-term maintenance. Best practices include: 1) Using clear and descriptive class names (`.user-profile-card` instead of `.card`); 2) Indenting your code consistently to improve readability; 3) Adding comments to complex sections to explain their purpose; and 4) Using semantic HTML tags to convey meaning. These habits ensure your projects are easy to understand and work on for yourself and for other developers." },
    ],
  },
  "CSS Fundamentals": {
    details:
      "Dive into the language of web styling. This module covers modern CSS3 for creating visually stunning interfaces. You will learn about the box model, responsive design with media queries, and advanced layout techniques using Flexbox and CSS Grid.",
    project:
      "Take a basic HTML page and style it to match a provided design mockup. You will create a fully responsive layout and implement custom fonts and animations using CSS.",
    topics: [
      { id: "t18", topic: "CSS Syntax and Selectors", content: "CSS (**Cascading Style Sheets**) is the language used to style HTML documents. A CSS rule consists of a **selector**, which specifies which HTML elements to style. It's followed by a set of declarations in curly braces. A declaration has a **property** (`color`, `font-size`) and a **value** (`blue`, `16px`). There are many types of selectors, including element selectors (`p`), class selectors (`.my-class`), and ID selectors (`#my-id`). The cascading nature of CSS means that rules from different stylesheets can be combined, and a rule's specificity determines which one wins if there's a conflict." },
      { id: "t19", topic: "The Box Model, Sizing, and Spacing", content: "The **CSS Box Model** is a foundational concept that describes how every HTML element is rendered as a box. The box has four parts: the **content** itself (the actual text or image), **padding** (space between the content and the border), a **border**, and **margin** (space outside the border that separates it from other elements). Understanding this model is essential for controlling the layout and spacing of all elements on a page. " },
      { id: "t20", topic: "Working with Colors and Backgrounds", content: "CSS provides a wide range of ways to style colors and backgrounds. You can use color names (`red`), hexadecimal codes (`#ff0000`), or `rgb()` and `hsl()` values. You can apply these to text with the `color` property and to backgrounds with `background-color`. You can also add background images, repeat them, or position them. You can even use `linear-gradient()` and `radial-gradient()` to create smooth color transitions." },
      { id: "t21", topic: "Typography and Fonts", content: "Typography is the art of arranging type to make it readable and visually appealing. In CSS, you can control the font family with `font-family`, the size with `font-size`, the thickness with `font-weight`, and the style with `font-style` (`italic`). You can also control line height and letter spacing. To use custom fonts, you can use the `@font-face` rule or import them from a service like Google Fonts." },
      { id: "t22", topic: "Flexbox for One-Dimensional Layouts", content: "**Flexbox** is a powerful one-dimensional layout system. It's designed to align and distribute space among items in a single row or column. You define a container as a flexbox with `display: flex;` and then use properties like `justify-content` and `align-items` to control the alignment of the items inside. Flexbox is perfect for creating responsive navigation bars, component cards, and other layouts where items need to be aligned along a single axis." },
      { id: "t23", topic: "CSS Grid for Two-Dimensional Layouts", content: "**CSS Grid** is a two-dimensional layout system that lets you arrange elements in both rows and columns at the same time. You define a container as a grid with `display: grid;` and then use properties like `grid-template-columns` and `grid-template-rows` to create your grid structure. It's the ideal tool for building complex, full-page layouts with precise alignment, such as a magazine-style grid or an entire website's structure." },
      { id: "t24", topic: "Responsive Design with Media Queries", content: "**Responsive design** means making a website look great on any device. **Media queries** are the core of this approach in CSS. They allow you to apply different CSS rules based on a device's characteristics, like its screen width, height, or orientation. This lets you adapt your layout, font sizes, and other styles to ensure an optimal user experience whether the user is on a mobile phone, tablet, or large desktop monitor." },
      { id: "t25", topic: "CSS Animations and Transitions", content: "CSS **transitions** and **animations** add motion and life to a website. A **transition** is a simple, smooth change from one state to another, such as a button smoothly changing color on hover. An **animation** allows for more complex, multi-step effects. You define keyframes using `@keyframes` to control the style at different points in the animation, and then apply the animation to an element. Both are fully hardware-accelerated, ensuring smooth performance." },
      { id: "t26", topic: "Introduction to Preprocessors (Sass/Less)", content: "CSS preprocessors like Sass and Less are scripting languages that extend CSS with powerful features like **variables**, **nesting**, and **functions**. They are not directly understood by browsers and must be compiled into standard CSS. Using a preprocessor can make your stylesheets more organized, reusable, and easier to maintain for large projects. For example, you can define a color once in a variable and reuse it everywhere in your stylesheet." },
    ],
  },
  "JavaScript & DOM": {
    details:
      "Dive into the core logic of web applications. This module focuses on modern JavaScript (ES6+), teaching you how to manipulate the Document Object Model (DOM) to create interactive and dynamic user experiences. You will also learn about event handling and asynchronous operations.",
    project:
      "Create a fully functional to-do list application that allows users to add, remove, and mark tasks as complete, all without reloading the page.",
    topics: [
      { id: "t27", topic: "Variables, Data Types, and Operators", content: "JavaScript is the programming language of the web, and it's essential for creating interactivity. **Variables** are used to store data, like a name or a number, and are declared with `let`, `const`, or `var`. JavaScript has several **data types**, including strings, numbers, booleans, arrays, and objects. **Operators** are symbols that perform actions on these data types, such as addition (`+`), subtraction (`-`), comparison (`===`), and assignment (`=`)." },
      { id: "t28", topic: "Control Flow and Logic", content: "**Control flow** dictates the order in which a program's code is executed. You can use `if/else` statements to make decisions based on conditions (`if (score > 90) { // do something }`). **Loops** (`for` or `while`) allow you to repeat a block of code multiple times. This logic is what allows applications to react to different scenarios and data, making them dynamic and useful." },
      { id: "t29", topic: "Functions and Scopes", content: "A **function** is a reusable block of code that performs a specific task. They are essential for organizing your code and avoiding repetition. **Scope** refers to where variables and functions can be accessed. Variables defined inside a function are **local** to that function and can't be accessed from outside, which helps prevent unintended conflicts and keeps your code organized. **Global** variables are accessible from anywhere in your code." },
      { id: "t30", topic: "Arrays and Objects", content: "JavaScript provides built-in data structures for working with collections of data. An **array** is an ordered list of items (`let colors = ['red', 'green', 'blue']`). An **object** is a collection of key-value pairs, perfect for representing more complex data (`let person = { name: 'Jane', age: 30 }`). You can access array items by their index and object properties by their key. These are the workhorses of JavaScript data handling." },
      { id: "t31", topic: "DOM Manipulation and Traversal", content: "The **Document Object Model (DOM)** is a tree-like representation of your HTML page. JavaScript can be used to manipulate the DOM, allowing you to change the content, styling, and structure of a page after it has loaded. You can use methods like `document.getElementById()`, `document.querySelector()`, `element.innerHTML = 'New text'`, and `element.classList.add('new-class')` to make dynamic changes. This is the foundation of all client-side interactivity." },
      { id: "t32", topic: "Event Handling and Listeners", content: "Events are actions that happen on a web page, like a button click, a keypress, a mouse hover, or a page load. An **event listener** is a function that waits for a specific event to occur on a specific element. When the event is detected, the listener executes a specific block of code, allowing your web page to respond to user interactions. For example, `button.addEventListener('click', function() { alert('Clicked!'); })`." },
      { id: "t33", topic: "Introduction to Asynchronous JavaScript", content: "**Asynchronous JavaScript** handles tasks that might take time to complete, such as fetching data from a server or waiting for a timer to finish. Instead of freezing the entire application, these tasks run in the background. **Promises** and the `async/await` syntax are modern ways to manage these operations in a clean, readable way. They ensure that your code doesn't block the main thread and that your application remains responsive." },
      { id: "t34", topic: "Error Handling with Try/Catch", content: "When a piece of code might fail (e.g., a network request to an API), it's important to gracefully handle the error. You can use a `try...catch` block to do this. The code in the `try` block is executed, and if it throws an error, the code in the `catch` block is executed instead. This prevents your entire application from crashing and allows you to display a user-friendly error message." },
    ],
  },
  "Modern Frameworks (React)": {
    details:
      "Build scalable and complex single-page applications using the React library. You will learn about component-based architecture, state management with hooks (useState, useEffect), and efficient data flow to create reusable UI components.",
    project:
      "Develop a simple e-commerce product gallery with a shopping cart. The application should use React components and manage state with hooks.",
    topics: [
      { id: "t35", topic: "Introduction to React and JSX", content: "React is a popular JavaScript library for building user interfaces. Instead of writing HTML and JavaScript in separate files, React uses **JSX**, a syntax extension for JavaScript that looks a lot like HTML. This allows you to write your markup and your logic in the same file. It makes building dynamic user interfaces much more intuitive. For example, you can write `const element = <h1>Hello, {name}</h1>;` directly in your JavaScript code." },
      { id: "t36", topic: "Component-Based Architecture", content: "The core philosophy of React is building UIs with **components**. A component is a self-contained, reusable piece of a UI. Think of a web page broken down into smaller parts: a `Header` component, a `Button` component, or a `UserProfile` component. Each component has its own logic and can be used on its own or nested inside other components, allowing for modular and organized code. This approach makes large applications much easier to manage." },
      { id: "t37", topic: "State and Props", content: "In React, **props** (short for properties) are a way to pass data from a parent component down to a child component. They are read-only and immutable. **State** is data that a component can manage and change over time. When a component's state changes, React automatically re-renders the component to reflect the new state. This simple principle of unidirectional data flow is key to how React works." },
      { id: "t38", topic: "React Hooks (useState, useEffect, useContext)", content: "**Hooks** are special functions that let you 'hook into' React features from your functional components. `useState` is for managing state within a component. `useEffect` is for handling side effects like fetching data or setting up event listeners, and it runs after the component renders. `useContext` provides a way to pass data through the component tree without having to manually pass props down at every level, which is known as prop drilling. Hooks are the modern way to write React code." },
      { id: "t39", topic: "Conditional Rendering and Lists", content: "**Conditional rendering** allows you to show or hide components based on a condition, using standard JavaScript logic (`if/else` or the ternary operator). To render a list of items, you can use the `.map()` array method to iterate over an array of data and return a list of components for each item. This is a powerful feature for building dynamic UIs, such as a list of search results or a to-do list." },
      { id: "t40", topic: "Handling Forms in React", content: "In React, forms are often managed as **controlled components.** This means that the form's input values are stored in the component's state, and their values are updated with an event handler (e.g., `onChange`). This provides more control over the form data and allows for real-time validation and feedback. It prevents the DOM from holding its own state and keeps the data consistent with your component's state." },
      { id: "t41", topic: "Working with Third-Party Libraries", content: "A key part of modern development is leveraging existing code. You can easily add functionality to your React app by installing and integrating third-party libraries, available from package managers like npm. This can save you a lot of time and effort by providing pre-built components, utility functions, or data-fetching helpers. For example, you might use a charting library to easily display data or an animation library to add dynamic effects." },
      { id: "t42", topic: "React Router for Navigation", content: "For single-page applications, you need a way to handle navigation without reloading the entire page. **React Router** is a popular library that allows you to create different 'routes' or paths (like `/about` or `/contact`) that correspond to different components. It manages the browser's URL and the component that is rendered, creating a seamless multi-page experience while staying on a single page." },
    ],
  },
  "APIs & Asynchronous Data": {
    details:
      "Connect your frontend applications to backend services. This part of the course teaches you how to fetch data from RESTful APIs using the Fetch API and `async/await`. You will also learn to handle data and display it dynamically in your application.",
    project:
      "Create a weather application that fetches and displays current weather data for a user-entered city using a public weather API.",
    topics: [
      { id: "t43", topic: "Introduction to APIs and RESTful Principles", content: "An **API (Application Programming Interface)** is a set of rules that allows different software applications to communicate with each other. A **RESTful API** is a popular style of web API that uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to perform operations on data, such as fetching user information or creating a new post. It allows a frontend application to request data from a backend server and display it dynamically." },
      { id: "t44", topic: "Using the Fetch API for Data Requests", content: "The **Fetch API** is a modern, built-in JavaScript function for making network requests. It returns a `Promise`, which makes it easy to handle success and failure cases. You can use it to fetch data from an API endpoint. The most common use case is a `GET` request to retrieve data, for example: `fetch('https://api.example.com/users').then(response => response.json())`." },
      { id: "t45", topic: "Asynchronous JavaScript with `async`/`await`", content: "Asynchronous operations can be difficult to manage. The `async/await` syntax makes working with Promises much simpler and more readable. An `async` function always returns a Promise, and the `await` keyword pauses the function's execution until the Promise is settled (either resolved or rejected). This allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to reason about." },
      { id: "t46", topic: "Handling JSON Data and Response Objects", content: "Most web APIs return data in a format called **JSON (JavaScript Object Notation)**. It's a lightweight, human-readable format for data exchange. When you get a response from an API, you'll need to parse the JSON string into a JavaScript object that you can work with. The `response.json()` method of the Fetch API automatically parses the JSON data for you, turning it into a usable JavaScript object." },
      { id: "t47", topic: "Error Handling for API Calls", content: "When making an API call, it's important to handle potential errors. This includes network failures or server errors (like a 404 Not Found response). You can use a `try...catch` block around your `await fetch()` call to catch any errors and display a user-friendly message, preventing your app from crashing. It's also important to check the `response.ok` property to see if the request was successful." },
      { id: "t48", topic: "Understanding CORS (Cross-Origin Resource Sharing)", content: "**CORS (Cross-Origin Resource Sharing)** is a browser security feature that prevents a web page from making a request to a server that is hosted on a different domain unless the server explicitly allows it. This is a crucial security measure to prevent malicious websites from stealing your data. If you get a CORS error, it means the server's configuration is blocking your request, and the server administrator needs to add your domain to a list of trusted origins." },
    ],
  },
  "Performance & Deployment": {
    details:
      "Learn to optimize your code for speed and efficiency. This section covers techniques for reducing page load times, lazy loading, and code splitting. You will also learn how to deploy your projects to platforms like Vercel and Netlify.",
    project:
      "Optimize a sample website by compressing images, lazy-loading content, and deploying it to a free hosting service to achieve a high PageSpeed Insights score.",
    topics: [
      { id: "t49", topic: "Web Performance Metrics", content: "Web performance is all about how fast a website loads and becomes interactive. Key metrics to measure include **First Contentful Paint (FCP)**, the time it takes for the first piece of content to appear, and **Largest Contentful Paint (LCP)**, the time it takes for the largest content element to be rendered. Optimizing these metrics improves user experience and SEO. Google's **Lighthouse** tool can help you audit your website and identify areas for improvement." },
      { id: "t50", topic: "Code Splitting and Lazy Loading", content: "**Code splitting** is a technique that divides your JavaScript bundle into smaller, more manageable chunks. **Lazy loading** is a type of code splitting that defers the loading of these chunks until they are needed. This significantly reduces the initial page load time by only loading the code required to render the first view of the application. It's especially useful for large applications with many pages or features." },
      { id: "t51", topic: "Image and Asset Optimization", content: "Images are often the largest files on a webpage. Optimizing them is crucial for performance. Techniques include **compressing images** to reduce their file size without sacrificing quality, using **modern formats** like WebP, and **lazy-loading** images so they only load when they are visible on the screen. Properly sizing images for different devices also helps a lot." },
      { id: "t52", topic: "Minification and Bundling", content: "**Minification** is the process of removing all unnecessary characters from code (like whitespace, comments, and line breaks) without changing its functionality. **Bundling** combines multiple JavaScript or CSS files into a single file to reduce the number of network requests. Both of these processes are automated by build tools and are essential for modern web performance, leading to faster load times." },
      { id: "t53", topic: "Web Vitals and Lighthouse Audits", content: "Core **Web Vitals** are a set of metrics from Google that measure a website's user experience, including loading performance, interactivity, and visual stability. Tools like **Lighthouse** audit a webpage and provide a score based on these metrics, as well as accessibility and SEO. A high Lighthouse score indicates a well-optimized website. Consistently checking and improving these scores is a key part of web development." },
      { id: "t54", topic: "Domain Name Systems (DNS) and Hosting", content: "Once your project is ready, you need to host it on a server so it can be accessed by others. A **domain name** is the easy-to-remember address for your site. You will need to configure your domain's **DNS records** to point to your **hosting service** (e.g., Vercel, Netlify) so that when someone types your domain, their browser knows where to find your website. The DNS essentially directs traffic to your server." },
      { id: "t55", topic: "Deployment with Vercel and Netlify", content: "Vercel and Netlify are popular platforms for deploying modern web applications. They offer a seamless, automated deployment process that can connect directly to your GitHub repository. Every time you push new code to your repository, the platform automatically builds and deploys your website to a live URL. They also provide features like automatic SSL certificates and a global CDN, making them an excellent choice for modern frontend projects." },
      { id: "t56", topic: "Content Delivery Networks (CDNs)", content: "A **CDN (Content Delivery Network)** is a geographically distributed network of servers that caches your website's static content (like images, CSS, and JavaScript files). When a user requests your site, the content is delivered from the server closest to them, which drastically reduces latency and improves load times. CDNs are essential for global-facing websites and are often a built-in feature of modern hosting platforms like Vercel and Netlify." },
    ],
  },
  "Git & GitHub": {
    details:
      "Understand the essential tools for professional software development. This module introduces you to Git for version control and GitHub for collaborative development. You will learn how to create repositories, make commits, handle branches, and work in a team.",
    project:
      "Collaborate with peers on a small web project, managing all code changes using Git commands and submitting pull requests on GitHub.",
    topics: [
      { id: "t57", topic: "Git Basics (add, commit, push)", content: "**Git** is a version control system. You use it to track changes in your code. `git add` stages your changes, preparing them to be saved. This is like putting files into a box before sealing it. `git commit` saves a permanent snapshot of the staged changes, along with a descriptive message. This is like sealing the box and labeling it. `git push` uploads your local commits to a remote repository on a service like GitHub, making them available to others. This is like shipping your box of changes to the cloud." },
      { id: "t58", topic: "Branching and Merging", content: "**Branching** allows you to work on new features or bug fixes in isolation from the main codebase. You can create a new branch, make your changes without affecting the `main` branch, and when you are finished, you can **merge** that branch back into the main branch. This is a core part of collaborative development as it allows multiple people to work on the same project without interfering with each other's work." },
      { id: "t59", topic: "Working with Remote Repositories", content: "A **remote repository** is a version of your project hosted on a service like GitHub. It serves as a central hub or a single source of truth for your team. You `git pull` changes from the remote to get the latest updates from your collaborators, and `git push` your changes to the remote to share them with others. This allows a distributed team to stay in sync and work together seamlessly." },
      { id: "t60", topic: "Handling Merge Conflicts", content: "A **merge conflict** occurs when two developers have changed the same line of code in different ways. Git doesn't know which version to keep, so it stops the merge and asks for your help. You must manually resolve the conflict by editing the file to include the correct changes, then staging and committing the resolved file. Learning to handle conflicts is a crucial skill for collaborative development." },
      { id: "t61", topic: "Understanding Pull Requests", content: "A **pull request (PR)** is a way to propose a set of changes to a project. It serves as a formal review process. You submit a PR from your feature branch to the main branch, and other developers can review your changes, leave comments, and suggest improvements before the changes are officially merged into the project. This ensures code quality and provides an opportunity for feedback and discussion." },
      { id: "t62", topic: "Collaborative Workflows", content: "A common Git workflow for teams involves creating a new branch for every new feature or bug fix, working on the changes, creating a pull request for a code review, and then merging the changes into the main branch. This structured approach helps teams maintain code quality, avoid conflicts, and keep the project organized and stable. It's the standard for professional software development." },
      { id: "t63", topic: "Using `.gitignore`", content: "The `.gitignore` file is a plain text file where you list the files and directories that Git should ignore and not track. This is useful for preventing sensitive information (like API keys) or temporary files (like build directories) from being committed to your repository. It keeps your repository clean and prevents you from accidentally sharing private data." },
    ],
  },
}
  },
  backend: {
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
  dataai: {
    id: "dataai",
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
  clouddevops: {
    id: "clouddevops",
    title: "Cloud & DevOps",
    overview: "Cloud & DevOps Course Overview",
    intro: {
      title: "What is Cloud & DevOps?",
      description: (
        <p className="intro-description">
          <strong>Cloud computing</strong> delivers computing services—servers,
          storage, databases, networking, software—over the internet, enabling
          faster innovation and flexible resources. <strong>DevOps</strong> is a
          set of practices that combines software development and IT operations
          to shorten the development lifecycle and deliver high-quality software
          continuously.
        </p>
      ),
    },
    why: {
      title: "Why Cloud & DevOps Matter",
      description: (
        <p className="intro-description mb-4">
          Cloud platforms like AWS, Azure, and Google Cloud have become the
          backbone of modern IT infrastructure. DevOps practices such as
          automation, CI/CD, and Infrastructure as Code help teams deliver
          reliable software at scale, reduce downtime, and respond quickly to
          business needs.
        </p>
      ),
    },
    tools: {
      title: "Essential Tools for Cloud & DevOps Engineers",
      description: (
        <p className="intro-description mb-4">
          Cloud & DevOps engineers use tools like <strong>Terraform</strong>,{" "}
          <strong>Docker</strong>, <strong>Kubernetes</strong>,{" "}
          <strong>Git</strong>, and CI/CD platforms such as{" "}
          <strong>GitHub Actions</strong> or <strong>Jenkins</strong>.
          Monitoring tools like <strong>Prometheus</strong> and{" "}
          <strong>Grafana</strong> are also crucial for maintaining healthy
          systems.
        </p>
      ),
      description2: (
        <p className="intro-description">
          Our course provides a step-by-step <strong>roadmap</strong> to help
          you become a skilled Cloud & DevOps engineer. You'll build real
          projects and gain the skills needed to manage cloud infrastructure and
          automate deployments.
        </p>
      ),
    },
    subjects: {
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
    },
  },
  mobileapp: {
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
                        <Link
                          key={index}
                          className="topic-link-card"
                          href={`/courses/${course.id}/${topic.id}`}
                          // href={`/courses/${course.id}/`}
                        >
                          <span>{topic.topic}</span>
                        </Link>
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
        <main className="single-course">
          <h1>Course Not found</h1>
        </main>
      )}
    </>
  );
};

export default SingleCourse;
