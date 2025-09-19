"use client";
import React, { useState, useEffect } from "react";
import {
  createHashRouter,
  RouterProvider,
  Route,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";

const topics = {
  subject1: {
    t1: {
      id: "t1",
      topic: "How the Internet Works (Clients, Servers)",
      content:
        "Explore the fundamental client-server model. A client, such as a web browser on your computer, sends requests to a server, a powerful computer that stores and delivers information. This communication forms the basis of all web interactions.",
    },
    t2:{
      id: "t2",
      topic: "HTTP/HTTPS Protocols",
      content:
        "Dive into the Hypertext Transfer Protocol (HTTP), the standard language for communication on the web. Learn how it's used for transferring data and how HTTPS adds a crucial layer of security and encryption to protect your data during transit.",
    },
   t3: {
      id: "t3",
      topic: "Domain Name System (DNS)",
      content:
        "Discover the 'phonebook' of the internet. The DNS translates human-readable domain names (like www.google.com) into machine-readable IP addresses (like 172.217.164.100), allowing browsers to find the correct server.",
    },
   t4: {
      id: "t4",
      topic: "Web Browsers and Rendering Engines",
      content:
        "Understand how web browsers like Chrome, Firefox, and Safari work. Learn about their rendering engines—software that processes HTML, CSS, and JavaScript files to display a visual, interactive web page on your screen.",
    },
   t5: {
      id: "t5",
      topic: "Understanding URLs and Resources",
      content:
        "Break down the components of a Uniform Resource Locator (URL). From the protocol (https://) to the domain name, path, and query parameters, each part of a URL has a specific purpose for locating a unique resource on the web.",
    },
   t6: {
      id: "t6",
      topic: "Introduction to Frontend vs. Backend",
      content:
        "Distinguish between the two major parts of a web application. Frontend refers to everything the user sees and interacts with in their browser, while backend handles the 'behind-the-scenes' logic, databases, and server-side operations.",
    },
   t7: {
      id: "t7",
      topic: "Cookies and Session Storage",
      content:
        "Learn how websites use cookies and other storage mechanisms to remember information about you. This is essential for features like maintaining login sessions, remembering items in a shopping cart, and personalizing your experience.",
    },
    t8:{
      id: "t8",
      topic: "Anatomy of a Request-Response Cycle",
      content:
        "Trace the complete journey of information on the web. A user's action triggers an HTTP request, which travels to a server. The server processes it and sends an HTTP response back to the user's browser, completing the cycle.",
    },
},
  subject2: {
    t9:{
      id: "t9",
      topic: "Introduction to HTML and the Web",
      content:
        "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It is the backbone of every web page, providing structure to the content.",
    },
    t10:{
      id: "t10",
      topic: "Semantic HTML5 Tags",
      content:
        "Semantic tags give meaning to the structure of a web page, such as `<header>`, `<nav>`, `<article>`, and `<footer>`. Using these tags helps both developers and search engines understand the content and improves accessibility.",
    },
    t11:{
      id: "t11",
      topic: "HTML Forms and Inputs",
      content:
        "Learn how to create forms to collect user data. This topic covers various input types like text fields, checkboxes, and radio buttons, and how to structure a form for data submission.",
    },
    t12:{
      id: "t12",
      topic: "Accessibility (ARIA roles and attributes)",
      content:
        "Accessibility ensures that web content is usable by everyone, including people with disabilities. This topic introduces ARIA (Accessible Rich Internet Applications) roles and attributes to make your web pages more inclusive.",
    },
    t13:{
      id: "t13",
      topic: "Image and Multimedia Elements",
      content:
        "Integrate images, videos, and audio into your web pages. Learn about the `<img>`, `<video>`, and `<audio>` tags and their attributes for displaying and controlling multimedia content.",
    },
    t14:{
      id: "t14",
      topic: "Structuring Content with Headings, Paragraphs, and Lists",
      content:
        "Organize your content logically using fundamental HTML tags. This includes using headings (`<h1>` to `<h6>`), paragraphs (`<p>`), and ordered and unordered lists (`<ol>`, `<ul>`) to improve readability and structure.",
    },
   t15: {
      id: "t15",
      topic: "Working with Tables",
      content:
        "Learn to create and style tables for displaying tabular data. This topic covers the `<table>`, `<thead>`, `<tbody>`, and `<tr>` tags for creating well-structured data grids.",
    },
   t16: {
      id: "t16",
      topic: "Introduction to Web Components",
      content:
        "Get a first look at Web Components, a set of web platform APIs that allow you to create reusable, custom elements with encapsulated functionality, which can be used in your HTML markup.",
    },
    t17:{
      id: "t17",
      topic: "Best Practices for Clean and Maintainable HTML",
      content:
        "Write clean, consistent, and well-structured HTML code. This topic covers naming conventions, commenting, and code organization to ensure your projects are easy to maintain and collaborate on.",
    },
  },
  topics: [
    {
      id: "t18",
      topic: "CSS Syntax and Selectors",
      content:
        "Understand the basic structure of CSS rules, including selectors, properties, and values. Learn to target specific HTML elements using class selectors, ID selectors, and combinators.",
    },
    {
      id: "t19",
      topic: "The Box Model, Sizing, and Spacing",
      content:
        "Master the CSS Box Model, which describes how every HTML element is represented as a box with content, padding, borders, and margins. This is fundamental for controlling layout and spacing.",
    },
    {
      id: "t20",
      topic: "Working with Colors and Backgrounds",
      content:
        "Style your elements with a wide range of colors and backgrounds. This topic covers using color names, hex codes, RGB, and HSL, as well as applying background images and gradients.",
    },
    {
      id: "t21",
      topic: "Typography and Fonts",
      content:
        "Take control of your text styling. Learn how to set font families, sizes, weights, and styles. This topic also covers importing and using custom fonts from services like Google Fonts.",
    },
    {
      id: "t22",
      topic: "Flexbox for One-Dimensional Layouts",
      content:
        "Flexbox is a powerful one-dimensional layout system for aligning items in a row or column. It's perfect for creating navigation bars, forms, and other single-axis layouts with dynamic spacing.",
    },
    {
      id: "t23",
      topic: "CSS Grid for Two-Dimensional Layouts",
      content:
        "CSS Grid is a two-dimensional layout system that lets you arrange elements in rows and columns. It's the ideal tool for building complex, full-page layouts that need precise alignment.",
    },
    {
      id: "t24",
      topic: "Responsive Design with Media Queries",
      content:
        "Make your websites look great on any device. Media queries allow you to apply different CSS rules based on a user's screen size, orientation, or other characteristics, ensuring a consistent experience.",
    },
    {
      id: "t25",
      topic: "CSS Animations and Transitions",
      content:
        "Add dynamic, engaging visual effects to your web pages. Learn how to use CSS transitions for smooth state changes and CSS animations for more complex, multi-step effects.",
    },
    {
      id: "t26",
      topic: "Introduction to Preprocessors (Sass/Less)",
      content:
        "Get a feel for CSS preprocessors like Sass and Less. These tools extend CSS with features like variables, nesting, and functions, making your stylesheets more powerful and easier to manage.",
    },
  ],
  topics: [
    {
      id: "t27",
      topic: "Variables, Data Types, and Operators",
      content:
        "Understand the fundamental building blocks of JavaScript: variables for storing data, primitive data types like strings and numbers, and operators for performing calculations and comparisons.",
    },
    {
      id: "t28",
      topic: "Control Flow and Logic",
      content:
        "Control the flow of your program's execution. Learn about `if/else` statements, `switch` statements, and loops (`for`, `while`) to make decisions and repeat actions based on conditions.",
    },
    {
      id: "t29",
      topic: "Functions and Scopes",
      content:
        "Write reusable blocks of code with functions. This topic also covers scope—the context in which variables and functions are accessible—to prevent naming conflicts and create cleaner code.",
    },
    {
      id: "t30",
      topic: "Arrays and Objects",
      content:
        "Work with collections of data. Learn how to store and manipulate lists of items using arrays and how to represent more complex data structures with key-value pairs using objects.",
    },
    {
      id: "t31",
      topic: "DOM Manipulation and Traversal",
      content:
        "The Document Object Model (DOM) is an object-oriented representation of your web page. Learn how to select, modify, and create HTML elements dynamically using JavaScript to create interactive user interfaces.",
    },
    {
      id: "t32",
      topic: "Event Handling and Listeners",
      content:
        "Make your web pages respond to user actions. Event listeners allow you to execute JavaScript code when a specific event occurs, such as a button click, a keypress, or a mouse hover.",
    },
    {
      id: "t33",
      topic: "Introduction to Asynchronous JavaScript",
      content:
        "Handle operations that take time, such as fetching data from an API. This topic introduces concepts like Promises and `async/await` to manage non-blocking operations and keep your application responsive.",
    },
    {
      id: "t34",
      topic: "Error Handling with Try/Catch",
      content:
        "Learn how to gracefully handle runtime errors in your JavaScript code. The `try...catch` block allows you to anticipate and manage potential issues without crashing your application.",
    },
  ],
  topics: [
    {
      id: "t35",
      topic: "Introduction to React and JSX",
      content:
        "Get started with React, a library for building user interfaces. Learn about JSX, a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files.",
    },
    {
      id: "t36",
      topic: "Component-Based Architecture",
      content:
        "Understand React's core philosophy of building applications with components. A component is a self-contained, reusable piece of the user interface, like a button, a form, or an entire page section.",
    },
    {
      id: "t37",
      topic: "State and Props",
      content:
        "Grasp the concepts of state and props. State is data that a component can manage and change over time, while props are a way to pass data from a parent component to a child component.",
    },
    {
      id: "t38",
      topic: "React Hooks (useState, useEffect, useContext)",
      content:
        "Master the most common React Hooks. `useState` is for managing component state, `useEffect` is for handling side effects like data fetching, and `useContext` is for sharing data throughout your component tree without props drilling.",
    },
    {
      id: "t39",
      topic: "Conditional Rendering and Lists",
      content:
        "Learn how to show or hide components based on a condition, and how to render lists of items dynamically using the `map` function.",
    },
    {
      id: "t40",
      topic: "Handling Forms in React",
      content:
        "Build controlled forms in React, where form input values are managed by React's state. This provides more control and allows for real-time validation and feedback.",
    },
    {
      id: "t41",
      topic: "Working with Third-Party Libraries",
      content:
        "Extend your React application with external libraries. Learn how to install and integrate popular packages from npm to add new functionality without reinventing the wheel.",
    },
    {
      id: "t42",
      topic: "React Router for Navigation",
      content:
        "Implement client-side routing to build a multi-page application. React Router allows you to map different URL paths to different components, creating a seamless navigation experience without page reloads.",
    },
  ],
  topics: [
    {
      id: "t43",
      topic: "Introduction to APIs and RESTful Principles",
      content:
        "An API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. RESTful principles are a standard way of structuring these APIs for web services.",
    },
    {
      id: "t44",
      topic: "Using the Fetch API for Data Requests",
      content:
        "The Fetch API provides a modern, flexible way to make network requests. Learn how to use `fetch()` to send `GET`, `POST`, and other requests to a server and handle the responses.",
    },
    {
      id: "t45",
      topic: "Asynchronous JavaScript with `async`/`await`",
      content:
        "Simplify asynchronous code with `async`/`await`. These keywords make it easier to write and read code that involves waiting for operations to complete, such as fetching data from a server.",
    },
    {
      id: "t46",
      topic: "Handling JSON Data and Response Objects",
      content:
        "JSON (JavaScript Object Notation) is a lightweight data-interchange format. Learn how to parse JSON data received from an API and work with the JavaScript objects it returns.",
    },
    {
      id: "t47",
      topic: "Error Handling for API Calls",
      content:
        "Build robust applications by handling potential network and API errors. This topic covers checking for response status codes and using `try/catch` blocks to manage failed requests.",
    },
    {
      id: "t48",
      topic: "Understanding CORS (Cross-Origin Resource Sharing)",
      content:
        "CORS is a browser security feature that restricts cross-origin HTTP requests. Understand what it is and how to configure your servers to allow requests from your frontend application.",
    },
  ],
  topics: [
    {
      id: "t49",
      topic: "Web Performance Metrics",
      content:
        "Measure and understand the speed of your website. Learn about key metrics like First Contentful Paint (FCP) and Largest Contentful Paint (LCP) that tell you how quickly your site becomes usable for users.",
    },
    {
      id: "t50",
      topic: "Code Splitting and Lazy Loading",
      content:
        "Improve initial page load times by only loading the JavaScript code that is immediately needed. Code splitting divides your code into smaller chunks, and lazy loading defers the loading of non-critical resources until they are required.",
    },
    {
      id: "t51",
      topic: "Image and Asset Optimization",
      content:
        "Optimize your images and other assets to reduce their file size without sacrificing quality. This is a crucial step for improving website performance, especially on mobile devices.",
    },
    {
      id: "t52",
      topic: "Minification and Bundling",
      content:
        "Minification is the process of removing unnecessary characters from your code. Bundling combines multiple JavaScript or CSS files into a single file to reduce the number of HTTP requests, both of which lead to faster load times.",
    },
    {
      id: "t53",
      topic: "Web Vitals and Lighthouse Audits",
      content:
        "Understand Google's Core Web Vitals and use tools like Lighthouse to analyze and improve your website's performance, accessibility, and SEO. ",
    },
    {
      id: "t54",
      topic: "Domain Name Systems (DNS) and Hosting",
      content:
        "Connect a domain name to your website. This topic covers the process of registering a domain and configuring its DNS records to point to your hosting service.",
    },
    {
      id: "t55",
      topic: "Deployment with Vercel and Netlify",
      content:
        "Learn to deploy your web projects to live servers using popular hosting platforms. Vercel and Netlify offer seamless, automated deployment for modern frontend frameworks.",
    },
    {
      id: "t56",
      topic: "Content Delivery Networks (CDNs)",
      content:
        "A CDN is a geographically distributed network of servers that caches your website's static content. Learn how a CDN improves performance by serving content from a server closest to the user.",
    },
  ],

  topics: [
    {
      id: "t57",
      topic: "Git Basics (add, commit, push)",
      content:
        "Master the three most common Git commands. `git add` stages changes, `git commit` saves a snapshot of your project, and `git push` uploads your changes to a remote repository like GitHub.",
    },
    {
      id: "t58",
      topic: "Branching and Merging",
      content:
        "Use branches to work on features or bug fixes in isolation. When your work is complete, you can merge your branch back into the main codebase, combining your changes.",
    },
    {
      id: "t59",
      topic: "Working with Remote Repositories",
      content:
        "Connect your local Git repository to a remote repository on GitHub. This allows you to share your code with others and collaborate on projects.",
    },
    {
      id: "t60",
      topic: "Handling Merge Conflicts",
      content:
        "Learn how to resolve merge conflicts that occur when two different developers modify the same lines of code. This is a crucial skill for collaborative development.",
    },
    {
      id: "t61",
      topic: "Understanding Pull Requests",
      content:
        "A pull request is a way to propose changes to a project. It allows you to describe your changes and have other team members review them before they are merged into the main branch.",
    },
    {
      id: "t62",
      topic: "Collaborative Workflows",
      content:
        "Follow a standard Git workflow for team collaboration. This involves working on feature branches, creating pull requests, and performing code reviews to ensure a smooth and organized development process.",
    },
    {
      id: "t63",
      topic: "Using `.gitignore`",
      content:
        "Prevent unwanted files from being committed to your repository. The `.gitignore` file tells Git which files or directories to ignore, such as build files, log files, or sensitive credentials.",
    },
  ],
};

// Component to display the details for a single topic.
const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics[id];
  const navigate = useNavigate();

  if (!topic) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#dc2626",
          fontWeight: "bold",
          padding: "2rem",
        }}
      >
        Topic not found or loading...
      </div>
    );
  }

  // Render the new topic details, including the subject details and project.
  return (
    <div>
      <h2 className="detail-title">{topic.title}</h2>

      <div className="detail-box content-box-light">
        <h3 className="box-title" style={{ color: "#374151" }}>
          Topic Content
        </h3>
        <p className="box-text">{topic.content}</p>
      </div>

      <div className="detail-box project-box">
        <h3 className="box-title">Project</h3>
        <p className="box-text">{topic.subjectProject}</p>
      </div>

      <button onClick={() => navigate("/")} className="back-button">
        Back to Topics
      </button>
    </div>
  );
};

// Create the router configuration.
const router = createHashRouter([
  {
    path: "/",
    element: <TopicList />,
  },
  {
    path: "/topic/:id",
    element: <TopicDetail />,
  },
]);

// The main entry point to render the app.
export default App;
