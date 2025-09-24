"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FooterCrumbs } from "@/components/footerCrumb";

const topics = {
  t1: {
    id: "t1",
    topic: "How the Internet Works (Clients, Servers)",
    paragraph1: (
      <p>
        The internet operates on the <strong>client-server model</strong>, a
        foundational architecture for web communication. A{" "}
        <strong>client</strong> is any device or software (e.g., a web browser,
        mobile app, or another server) that initiates a request for data or
        services. For example, when you visit a website like{" "}
        <strong>example.com</strong>, your browser (the client) sends a request
        to the website’s server. Clients are active agents, responsible for user
        interaction and rendering content.
      </p>
    ),
    paragraph2: (
      <p>
        A <strong>server</strong> is a specialized computer designed to handle
        multiple client requests, storing data, running applications, or
        processing logic. For instance, a server hosting{" "}
        <strong>example.com</strong> might store HTML files, images, or a
        database. When it receives a client’s request, it processes it (e.g.,
        querying a database for user data) and sends back a response, such as an
        HTML page or JSON data. Servers are passive, always listening for
        requests on specific ports (e.g., port 80 for HTTP, 443 for HTTPS).
      </p>
    ),
    paragraph3: (
      <p>
        This interaction forms the <strong>request-response cycle</strong>, the
        heartbeat of the internet. When you enter a URL, your browser constructs
        an <strong>HTTP request</strong> (e.g.,{" "}
        <code>GET /index.html HTTP/1.1</code>) containing headers, the requested
        resource, and metadata like the user agent. This request travels through
        networks, routers, and DNS servers to reach the target server. The
        server responds with an <strong>HTTP response</strong>, including a
        status code (e.g., <code>200 OK</code> or <code>404 Not Found</code>),
        headers, and the requested resource (e.g., a webpage or API data). For
        example, fetching a user profile might return JSON like{" "}
        <code>"name": "Alice", "email": "alice@example.com"</code>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: Imagine a weather app. The client
        (your phone) sends a <code>GET</code> request to a server’s API endpoint
        (<code>api.weather.com/v1/forecast</code>). The server queries its
        database, processes the request, and responds with JSON data, which the
        app renders as a forecast. This cycle happens in milliseconds, enabling
        seamless interaction.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Modern web apps often use{" "}
        <strong>WebSockets</strong> for real-time communication (e.g., chat
        apps), extending the client-server model to maintain persistent
        connections. Performance is critical—optimizing server response times
        (e.g., using CDNs) and minimizing request payloads improves user
        experience. <strong>Pitfall</strong>: Overloading servers with too many
        requests can lead to bottlenecks; tools like load balancers or caching
        (e.g., Redis) help mitigate this. <strong>Accessibility Note</strong>:
        Ensure server responses include proper headers (e.g.,{" "}
        <code>Content-Type</code>) to support assistive technologies.
      </p>
    ),
    image: (
      <Image
        src="/journey.png"
        alt="Illustration of a client-server network with a laptop sending a request to a server, connected by data streams."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t2: {
    id: "t2",
    topic: "HTTP/HTTPS Protocols",
    paragraph1: (
      <p>
        The <strong>HTTP</strong> (Hypertext Transfer Protocol) is the
        foundation of data communication on the web, enabling clients and
        servers to exchange information. <strong>HTTPS</strong> adds a layer of
        security using SSL/TLS encryption, ensuring data privacy and integrity.
        For example, when you visit <strong>https://example.com</strong>, your
        browser uses HTTPS to securely request the webpage.
      </p>
    ),
    paragraph2: (
      <p>
        HTTP operates as a stateless protocol, meaning each request is
        independent and doesn’t retain prior interaction data unless explicitly
        managed (e.g., via cookies). It uses methods like <code>GET</code>,{" "}
        <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> to define
        actions. For instance, a <code>POST</code> request might submit form
        data to a server, while a <code>GET</code> retrieves a resource like an
        HTML file.
      </p>
    ),
    paragraph3: (
      <p>
        HTTPS encrypts the data exchanged between client and server, protecting
        against eavesdropping and tampering. When a browser connects to a server
        via HTTPS, it verifies the server’s identity using a digital certificate
        issued by a trusted Certificate Authority (CA). For example, visiting{" "}
        <strong>onlinebank.com</strong> ensures your financial data is
        encrypted, with the browser displaying a padlock icon to confirm
        security.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: Submitting a login form on{" "}
        <strong>myapp.com</strong> sends a <code>POST</code> request over HTTPS
        to the server’s endpoint (<code>api.myapp.com/login</code>). The server
        authenticates the credentials and responds with a JSON token, like{" "}
        <code>{`{"token":"xyz123"}`}</code>, ensuring secure data transfer.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: HTTPS is now the web standard, with
        browsers flagging HTTP sites as “Not Secure.” Performance optimizations
        like HTTP/2 improve speed with multiplexing and header compression.{" "}
        <strong>Pitfall</strong>: Misconfigured SSL certificates can cause
        connection errors. <strong>Accessibility Note</strong>: Use HTTPS to
        ensure secure data transfer for assistive technologies accessing
        sensitive content.
      </p>
    ),
    image: (
      <Image
        src="/http-https.png"
        alt="Diagram showing HTTP vs HTTPS communication, with HTTPS including an encryption layer between client and server."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t3: {
    id: "t3",
    topic: "Domain Name System (DNS)",
    paragraph1: (
      <p>
        The <strong>Domain Name System (DNS)</strong> is the internet’s address
        book, translating human-readable domain names like{" "}
        <strong>example.com</strong> into IP addresses (e.g.,{" "}
        <code>192.0.2.1</code>) that computers use to locate servers. When you
        enter a URL in your browser, DNS resolves the domain to connect you to
        the correct server.
      </p>
    ),
    paragraph2: (
      <p>
        DNS operates through a distributed network of servers, including
        recursive resolvers, root servers, TLD (top-level domain) servers, and
        authoritative name servers. For example, resolving{" "}
        <strong>example.com</strong> involves querying the <code>.com</code> TLD
        server, which directs to the authoritative server holding the domain’s
        IP address.
      </p>
    ),
    paragraph3: (
      <p>
        The process, called <strong>DNS resolution</strong>, typically completes
        in milliseconds. Your device first checks its local cache, then queries
        a recursive resolver (often provided by your ISP or services like
        Google’s <code>8.8.8.8</code>). If the resolver doesn’t have the IP, it
        queries root and TLD servers to find the authoritative server, which
        returns the IP address for the requested domain.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: Typing <strong>newsite.com</strong>{" "}
        in your browser triggers a DNS query. The resolver contacts the{" "}
        <code>.com</code> TLD server, which points to{" "}
        <strong>newsite.com</strong>’s authoritative server, returning an IP
        like <code>203.0.113.10</code>. The browser then uses this IP to send an
        HTTP request to the server.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: DNS over HTTPS (DoH) and DNS over TLS
        (DoT) enhance privacy by encrypting DNS queries.{" "}
        <strong>Pitfall</strong>: DNS misconfigurations can lead to unreachable
        websites or slow resolution times. <strong>Accessibility Note</strong>:
        Ensure DNS responses are fast to avoid delays for users relying on
        assistive technologies.
      </p>
    ),
    image: (
      <Image
        src="/dns-resolution.png"
        alt="Illustration of DNS resolution process, showing a client querying DNS servers to resolve a domain to an IP address."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t4: {
    id: "t4",
    topic: "Web Browsers and Rendering Engines",
    paragraph1: (
      <p>
        <strong>Web browsers</strong> are software applications (e.g., Chrome,
        Firefox, Safari) that allow users to access and interact with the web.
        They send HTTP requests, retrieve resources, and render content using a{" "}
        <strong>rendering engine</strong>, which interprets HTML, CSS, and
        JavaScript to display webpages.
      </p>
    ),
    paragraph2: (
      <p>
        Rendering engines like Blink (Chrome), Gecko (Firefox), and WebKit
        (Safari) parse HTML to build the Document Object Model (DOM) and CSS to
        create the CSS Object Model (CSSOM). These models combine to form the
        render tree, which the browser uses to calculate layout and paint pixels
        on the screen. For example, Chrome’s Blink engine processes{" "}
        <strong>example.com</strong>’s HTML and CSS to display its homepage.
      </p>
    ),
    paragraph3: (
      <p>
        Browsers also execute JavaScript using engines like V8 (Chrome) or
        SpiderMonkey (Firefox) to enable dynamic content, such as updating a
        page without reloading. The rendering process involves parsing, layout,
        painting, and compositing. For instance, a CSS animation on{" "}
        <strong>example.com</strong> is handled by the rendering engine, while
        JavaScript updates are processed by the JavaScript engine.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: When you visit{" "}
        <strong>socialmedia.com</strong>, the browser’s rendering engine parses
        the HTML to build the DOM, applies CSS for styling, and executes
        JavaScript to load dynamic posts. The result is a fully rendered webpage
        with interactive elements like buttons and feeds.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Modern browsers optimize performance
        with techniques like lazy loading and GPU-accelerated rendering.{" "}
        <strong>Pitfall</strong>: Inconsistent rendering across browsers can
        cause layout issues; testing on multiple browsers is essential.{" "}
        <strong>Accessibility Note</strong>: Browsers must support ARIA
        attributes to ensure content is accessible to screen readers.
      </p>
    ),
    image: (
      <Image
        src="/browser-rendering.png"
        alt="Diagram of a browser rendering process, showing HTML, CSS, and JavaScript being processed to display a webpage."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t5: {
    id: "t5",
    topic: "Understanding URLs and Resources",
    paragraph1: (
      <p>
        A <strong>URL</strong> (Uniform Resource Locator) is the address used to
        locate resources on the internet, such as webpages, images, or APIs. It
        follows a standard format:{" "}
        <code>protocol://domain/path?query#fragment</code>. For example, in{" "}
        <code>https://example.com/blog?post=123#comments</code>,{" "}
        <code>https</code> is the protocol, <code>example.com</code> is the
        domain, <code>/blog</code> is the path, <code>?post=123</code> is the
        query, and <code>#comments</code> is the fragment.
      </p>
    ),
    paragraph2: (
      <p>
        The <strong>protocol</strong> defines how data is transferred (e.g.,{" "}
        <code>http</code>, <code>https</code>, <code>ftp</code>). The{" "}
        <strong>domain</strong> identifies the server, resolved via DNS to an IP
        address. The <strong>path</strong> specifies the resource location on
        the server, like a file or API endpoint. Query parameters pass data to
        the server, and fragments point to specific sections of a resource.
      </p>
    ),
    paragraph3: (
      <p>
        URLs are critical for navigation and resource retrieval. When you enter{" "}
        <code>https://store.com/products?category=books</code>, the browser
        sends a request to the server’s <code>/products</code> endpoint with the
        query parameter <code>category=books</code>. The server processes this
        and returns a list of books, often in HTML or JSON format.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: In a shopping app, entering{" "}
        <code>https://shop.com/cart?item=shirt</code> requests the cart page
        with a specific item. The server responds with HTML or JSON data, which
        the client renders as a cart view. Fragments like <code>#checkout</code>{" "}
        might scroll to the checkout section.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: URLs are optimized for SEO with clean,
        descriptive paths (e.g., <code>/blog/how-to-code</code> instead of{" "}
        <code>/blog?id=123</code>). <strong>Pitfall</strong>: Malformed URLs or
        unencoded characters can cause 404 errors.{" "}
        <strong>Accessibility Note</strong>: Ensure URLs are descriptive for
        screen readers, avoiding cryptic query parameters.
      </p>
    ),
    image: (
      <Image
        src="/url-structure.png"
        alt="Illustration breaking down the components of a URL, including protocol, domain, path, query, and fragment."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t6: {
    id: "t6",
    topic: "Introduction to Frontend vs. Backend",
    paragraph1: (
      <p>
        Web development is divided into <strong>frontend</strong> and{" "}
        <strong>backend</strong>. The frontend is the user-facing part of a
        website or app, handling what users see and interact with, like buttons,
        layouts, and animations. For example, the visual design of{" "}
        <strong>example.com</strong> is managed by frontend code in HTML, CSS,
        and JavaScript.
      </p>
    ),
    paragraph2: (
      <p>
        The <strong>backend</strong> manages the server-side logic, databases,
        and APIs that power the frontend. It processes requests, handles data
        storage, and ensures security. For instance, when a user logs into{" "}
        <strong>example.com</strong>, the backend verifies credentials against a
        database and sends a response to the frontend.
      </p>
    ),
    paragraph3: (
      <p>
        Frontend and backend communicate via APIs, often using HTTP requests.
        The frontend sends a request (e.g., <code>GET /api/user</code>), and the
        backend responds with data (e.g., JSON like{" "}
        <code>{`{"id": 1, "name": "Alice"}`}</code>). Frameworks like React
        (frontend) and Node.js (backend) streamline development by providing
        reusable tools.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: In a todo app, the frontend displays
        a list of tasks using React, while the backend, built with Express,
        stores tasks in a database. When a user adds a task, the frontend sends
        a <code>POST</code> request to the backend, which saves it and returns
        the updated list.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Full-stack frameworks like Next.js blur
        the line between frontend and backend, enabling server-side rendering.{" "}
        <strong>Pitfall</strong>: Poor communication between frontend and
        backend can lead to data mismatches. <strong>Accessibility Note</strong>
        : Frontend code must include ARIA attributes to ensure accessibility for
        all users.
      </p>
    ),
    image: (
      <Image
        src="/frontend-backend.png"
        alt="Diagram showing frontend (browser) and backend (server) interaction, with data flowing via HTTP requests."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t7: {
    id: "t7",
    topic: "Cookies and Session Storage",
    paragraph1: (
      <p>
        <strong>Cookies</strong> are small text files stored by the browser to
        save data across sessions, like user preferences or login tokens. For
        example, a cookie on <strong>example.com</strong> might store{" "}
        <code>user_id=123</code> to keep you logged in. They’re sent with every
        HTTP request to the server.
      </p>
    ),
    paragraph2: (
      <p>
        <strong>Session Storage</strong> is a browser feature that stores data
        for a single session, cleared when the tab closes. Unlike cookies,
        session storage data stays client-side and isn’t sent to the server. For
        instance, a form’s draft data might be stored in session storage to
        persist during a session.
      </p>
    ),
    paragraph3: (
      <p>
        Cookies are set by the server via the <code>Set-Cookie</code> header in
        an HTTP response and can include attributes like <code>Expires</code> or{" "}
        <code>Secure</code>. Session storage is managed via JavaScript’s{" "}
        <code>sessionStorage.setItem()</code> and{" "}
        <code>sessionStorage.getItem()</code>. Both enable stateful interactions
        on the stateless web.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: On <strong>ecommerce.com</strong>, a
        cookie stores your cart ID (<code>cart_id=xyz</code>), allowing the
        server to retrieve your cart. Session storage might save your filter
        preferences (e.g., <code>filter=price-low</code>) for the current
        browsing session.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Local storage is an alternative to
        session storage for persistent client-side data.{" "}
        <strong>Pitfall</strong>: Overusing cookies can slow requests due to
        header bloat; use session storage for temporary data.{" "}
        <strong>Accessibility Note</strong>: Ensure cookie consent mechanisms
        are accessible to screen readers.
      </p>
    ),
    image: (
      <Image
        src="/cookies-storage.png"
        alt="Illustration comparing cookies sent to a server and session storage kept in the browser."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t8: {
    id: "t8",
    topic: "Anatomy of a Request-Response Cycle",
    paragraph1: (
      <p>
        The <strong>request-response cycle</strong> is the core mechanism of web
        communication, where a client sends a request to a server, which
        processes it and returns a response. For example, loading{" "}
        <strong>example.com</strong> involves your browser sending an HTTP
        request and receiving an HTML response.
      </p>
    ),
    paragraph2: (
      <p>
        An <strong>HTTP request</strong> includes a method (e.g.,{" "}
        <code>GET</code>, <code>POST</code>), a URL, headers (e.g.,{" "}
        <code>Accept: text/html</code>), and sometimes a body (e.g., form data).
        The server processes this, querying databases or running logic, and
        returns an <strong>HTTP response</strong> with a status code, headers,
        and a body (e.g., HTML or JSON).
      </p>
    ),
    paragraph3: (
      <p>
        Status codes indicate the outcome: <code>200 OK</code> for success,{" "}
        <code>404 Not Found</code> for missing resources, or{" "}
        <code>500 Internal Server Error</code> for server issues. Headers
        provide metadata, like <code>Content-Type: application/json</code>. For
        instance, fetching <code>api.example.com/user</code> might return{" "}
        <code>{`{"id": 1, "name": "Bob"}`}</code>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: Clicking “Search” on{" "}
        <strong>searchapp.com</strong> sends a <code>GET</code> request to{" "}
        <code>api.searchapp.com/results?q=cat</code>. The server queries its
        database and responds with JSON data, which the client renders as search
        results.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Technologies like GraphQL optimize the
        request-response cycle by allowing clients to request specific data.{" "}
        <strong>Pitfall</strong>: Large payloads or slow server responses can
        degrade performance; caching helps. <strong>Accessibility Note</strong>:
        Ensure error messages in responses are clear for assistive technologies.
      </p>
    ),
    image: (
      <Image
        src="/request-response.png"
        alt="Diagram of the request-response cycle, showing a client sending an HTTP request and receiving a server response."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t9: {
    id: "t9",
    topic: "Introduction to HTML and the Web",
    paragraph1: (
      <p>
        <strong>HTML</strong> (HyperText Markup Language) is the backbone of the
        web, defining the structure and content of webpages. Tags like{" "}
        <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, and{" "}
        <code>&lt;img&gt;</code> create elements that browsers render. For
        example, <strong>example.com</strong> uses HTML to structure its
        homepage.
      </p>
    ),
    paragraph2: (
      <p>
        HTML documents start with a <code>&lt;!DOCTYPE html&gt;</code>{" "}
        declaration, followed by an <code>&lt;html&gt;</code> root element
        containing <code>&lt;head&gt;</code> (metadata) and{" "}
        <code>&lt;body&gt;</code> (visible content). Tags can have attributes,
        like <code>&lt;img src="logo.png" alt="Logo"&gt;</code>, to specify
        behavior or metadata.
      </p>
    ),
    paragraph3: (
      <p>
        HTML is hierarchical, forming a tree-like structure called the Document
        Object Model (DOM). Browsers parse HTML to build the DOM, which
        JavaScript can manipulate for interactivity. For instance, a{" "}
        <code>&lt;button&gt;</code> element on <strong>example.com</strong>{" "}
        might trigger a JavaScript function when clicked.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A blog page on{" "}
        <strong>myblog.com</strong> uses <code>&lt;article&gt;</code> for posts,{" "}
        <code>&lt;h1&gt;</code> for titles, and <code>&lt;p&gt;</code> for text.
        The browser renders this HTML into a styled, readable page based on
        accompanying CSS.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: HTML5 introduces semantic tags (e.g.,{" "}
        <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>) and APIs for
        multimedia and graphics. <strong>Pitfall</strong>: Invalid HTML (e.g.,
        unclosed tags) can break rendering. <strong>Accessibility Note</strong>:
        Use semantic tags and ARIA attributes for screen reader compatibility.
      </p>
    ),
    image: (
      <Image
        src="/html-structure.png"
        alt="Illustration of an HTML document structure, showing the DOM tree with head and body elements."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t10: {
    id: "t10",
    topic: "Semantic HTML5 Tags",
    paragraph1: (
      <p>
        <strong>Semantic HTML5 tags</strong> provide meaning to webpage
        structure, improving readability and accessibility. Tags like{" "}
        <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
        <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> describe
        their content’s purpose, unlike generic <code>&lt;div&gt;</code>.
      </p>
    ),
    paragraph2: (
      <p>
        Semantic tags help search engines and assistive technologies understand
        content. For example, a <code>&lt;nav&gt;</code> tag on{" "}
        <strong>example.com</strong> indicates a navigation menu, while{" "}
        <code>&lt;article&gt;</code> wraps a blog post, making it clear to
        screen readers what each section represents.
      </p>
    ),
    paragraph3: (
      <p>
        Common semantic tags include <code>&lt;section&gt;</code> for thematic
        content, <code>&lt;aside&gt;</code> for sidebars, and{" "}
        <code>&lt;figure&gt;</code> for images with captions. These tags create
        a logical structure, improving SEO and maintainability. For instance,{" "}
        <code>&lt;main&gt;</code> contains the primary content of a page.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A portfolio site on{" "}
        <strong>mysite.com</strong> uses <code>&lt;header&gt;</code> for a logo
        and menu, <code>&lt;main&gt;</code> for project showcases, and{" "}
        <code>&lt;footer&gt;</code> for contact info. This structure helps users
        and bots navigate the site efficiently.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Semantic HTML5 is critical for modern
        web standards, reducing reliance on non-semantic{" "}
        <code>&lt;div&gt;</code> soup. <strong>Pitfall</strong>: Overusing
        semantic tags (e.g., multiple <code>&lt;main&gt;</code> elements) can
        confuse browsers. <strong>Accessibility Note</strong>: Pair semantic
        tags with ARIA landmarks for optimal screen reader support.
      </p>
    ),
    image: (
      <Image
        src="/semantic-html.png"
        alt="Diagram of a webpage layout using semantic HTML5 tags like header, nav, main, and footer."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t11: {
    id: "t11",
    topic: "HTML Forms and Inputs",
    paragraph1: (
      <p>
        <strong>HTML forms</strong> allow users to submit data to servers, using
        elements like <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, and{" "}
        <code>&lt;button&gt;</code>. For example, a login form on{" "}
        <strong>example.com</strong> collects a username and password, sending
        them to the server via a <code>POST</code> request.
      </p>
    ),
    paragraph2: (
      <p>
        The <code>&lt;form&gt;</code> element includes attributes like{" "}
        <code>action</code> (the URL to send data to) and <code>method</code>{" "}
        (e.g., <code>GET</code> or <code>POST</code>). Input types like{" "}
        <code>text</code>, <code>password</code>, <code>checkbox</code>, and{" "}
        <code>radio</code> define user interaction. For instance,{" "}
        <code>&lt;input type="email"&gt;</code> validates email formats.
      </p>
    ),
    paragraph3: (
      <p>
        Forms can include labels (<code>&lt;label&gt;</code>) for accessibility
        and elements like <code>&lt;select&gt;</code> for dropdowns or{" "}
        <code>&lt;textarea&gt;</code> for multiline text. JavaScript can enhance
        forms, validating input before submission. For example, a form on{" "}
        <strong>signup.com</strong> might check for a valid email before
        sending.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A contact form on{" "}
        <strong>myapp.com/contact</strong> uses{" "}
        <code>&lt;input type="text" name="name"&gt;</code> and{" "}
        <code>&lt;textarea name="message"&gt;</code>. Submitting sends a{" "}
        <code>POST</code> request to <code>api.myapp.com/submit</code>, with the
        server responding with a success message.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: HTML5 input types (e.g.,{" "}
        <code>date</code>, <code>range</code>) improve usability on mobile
        devices. <strong>Pitfall</strong>: Missing <code>required</code>{" "}
        attributes can lead to incomplete submissions.{" "}
        <strong>Accessibility Note</strong>: Use{" "}
        <code>&lt;label for="id"&gt;</code> to link labels to inputs for screen
        readers.
      </p>
    ),
    image: (
      <Image
        src="/html-form.png"
        alt="Illustration of an HTML form with inputs, labels, and a submit button, styled for user interaction."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t12: {
    id: "t12",
    topic: "Accessibility (ARIA roles and attributes)",
    paragraph1: (
      <p>
        <strong>ARIA</strong> (Accessible Rich Internet Applications) roles and
        attributes enhance web accessibility, ensuring content is usable by
        people with disabilities. For example, adding <code>role="button"</code>{" "}
        to a custom button on <strong>example.com</strong> helps screen readers
        identify it as interactive.
      </p>
    ),
    paragraph2: (
      <p>
        ARIA roles like <code>navigation</code>, <code>dialog</code>, or{" "}
        <code>alert</code> define the purpose of elements, while attributes like{" "}
        <code>aria-label</code> or <code>aria-hidden</code> provide additional
        context. For instance, <code>aria-label="Close menu"</code> describes a
        button’s function for assistive technologies.
      </p>
    ),
    paragraph3: (
      <p>
        ARIA complements semantic HTML but doesn’t replace it. A{" "}
        <code>&lt;nav role="navigation"&gt;</code> reinforces the navigation
        landmark, while <code>aria-live="polite"</code> ensures dynamic updates
        (e.g., new chat messages) are announced by screen readers. Testing with
        tools like VoiceOver is critical.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: On <strong>myapp.com</strong>, a
        modal dialog uses{" "}
        <code>role="dialog" aria-labelledby="modal-title"</code> to indicate its
        purpose and link to its title, ensuring screen readers can navigate it.
        A custom slider might use <code>aria-valuenow</code> to convey its
        current value.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: ARIA is essential for single-page apps
        built with frameworks like React, where dynamic content is common.{" "}
        <strong>Pitfall</strong>: Overusing ARIA can confuse assistive
        technologies; rely on native HTML where possible.{" "}
        <strong>Accessibility Note</strong>: Regularly test with screen readers
        to ensure ARIA attributes work as intended.
      </p>
    ),
    image: (
      <Image
        src="/aria-accessibility.png"
        alt="Illustration of a webpage with ARIA roles and attributes applied to elements for screen reader compatibility."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t13: {
    id: "t13",
    topic: "Image and Multimedia Elements",
    paragraph1: (
      <p>
        HTML supports <strong>image and multimedia elements</strong> like{" "}
        <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, and{" "}
        <code>&lt;audio&gt;</code> to embed visual and auditory content. For
        example, <code>&lt;img src="photo.jpg" alt="Sunset"&gt;</code> displays
        an image on <strong>example.com</strong>.
      </p>
    ),
    paragraph2: (
      <p>
        The <code>&lt;img&gt;</code> element requires a <code>src</code>{" "}
        attribute for the image URL and an <code>alt</code> attribute for
        accessibility. The <code>&lt;video&gt;</code> and{" "}
        <code>&lt;audio&gt;</code> elements support attributes like{" "}
        <code>controls</code> for playback and <code>poster</code> for video
        thumbnails. For instance,{" "}
        <code>&lt;video src="clip.mp4" controls&gt;</code> embeds a playable
        video.
      </p>
    ),
    paragraph3: (
      <p>
        Multimedia elements can include fallback content (e.g.,{" "}
        <code>&lt;source&gt;</code> for multiple formats) to ensure
        compatibility across browsers. The <code>&lt;picture&gt;</code> element
        allows responsive images with different sources based on screen size,
        improving performance on mobile devices.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A gallery page on{" "}
        <strong>photos.com</strong> uses <code>&lt;picture&gt;</code> to serve
        smaller images on mobile and <code>&lt;video controls&gt;</code> for a
        tutorial video, with <code>alt</code> text describing each image for
        accessibility.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: HTML5 multimedia elements reduce
        reliance on plugins like Flash. <strong>Pitfall</strong>: Large media
        files can slow page loads; use compression and lazy loading.{" "}
        <strong>Accessibility Note</strong>: Always provide <code>alt</code>{" "}
        text and captions for videos to support screen readers and deaf users.
      </p>
    ),
    image: (
      <Image
        src="/multimedia-elements.png"
        alt="Illustration of a webpage with images, videos, and audio elements embedded using HTML tags."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t14: {
    id: "t14",
    topic: "Structuring Content with Headings, Paragraphs, and Lists",
    paragraph1: (
      <p>
        <strong>Headings</strong>, <strong>paragraphs</strong>, and{" "}
        <strong>lists</strong> are fundamental HTML elements for organizing
        content. Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>)
        define hierarchy, <code>&lt;p&gt;</code> holds text, and lists (
        <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) structure related
        items.
      </p>
    ),
    paragraph2: (
      <p>
        Headings establish content importance, with <code>&lt;h1&gt;</code> for
        main titles and lower levels for subsections. Paragraphs contain blocks
        of text, while <code>&lt;ul&gt;</code> (unordered) and{" "}
        <code>&lt;ol&gt;</code> (ordered) lists organize items, like a menu on{" "}
        <strong>example.com</strong> using <code>&lt;ul&gt;</code>.
      </p>
    ),
    paragraph3: (
      <p>
        Proper structure improves readability and SEO. For example, a blog post
        might use <code>&lt;h1&gt;</code> for the title, <code>&lt;h2&gt;</code>{" "}
        for section headers, <code>&lt;p&gt;</code> for content, and{" "}
        <code>&lt;ol&gt;</code> for steps in a tutorial. Nesting lists is also
        common for subcategories.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A recipe page on{" "}
        <strong>cook.com</strong> uses <code>&lt;h1&gt;</code> for the dish
        name, <code>&lt;p&gt;</code> for the description, and{" "}
        <code>&lt;ol&gt;</code> for preparation steps, ensuring clear
        organization for users and search engines.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Semantic structuring with headings and
        lists is critical for modern SEO and accessibility.{" "}
        <strong>Pitfall</strong>: Skipping heading levels (e.g.,{" "}
        <code>&lt;h1&gt;</code> to <code>&lt;h3&gt;</code>) confuses assistive
        technologies. <strong>Accessibility Note</strong>: Use logical heading
        order for screen reader navigation.
      </p>
    ),
    image: (
      <Image
        src="/content-structure.png"
        alt="Illustration of a webpage with headings, paragraphs, and lists organized hierarchically."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t15: {
    id: "t15",
    topic: "Working with Tables",
    paragraph1: (
      <p>
        HTML <strong>tables</strong> organize data in rows and columns using{" "}
        <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (table row),{" "}
        <code>&lt;th&gt;</code> (table header), and <code>&lt;td&gt;</code>{" "}
        (table data). For example, a table on <strong>example.com</strong> might
        display product prices.
      </p>
    ),
    paragraph2: (
      <p>
        Tables use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and{" "}
        <code>&lt;tfoot&gt;</code> to structure headers, body, and footers.
        Attributes like <code>scope="col"</code> on <code>&lt;th&gt;</code>{" "}
        improve accessibility by defining header relationships. For instance, a
        sales report table might use{" "}
        <code>&lt;th scope="col"&gt;Month&lt;/th&gt;</code>.
      </p>
    ),
    paragraph3: (
      <p>
        Tables can span rows or columns using <code>rowspan</code> or{" "}
        <code>colspan</code>. CSS enhances table styling, like adding borders or
        zebra striping. However, tables should be used for data, not layout, as
        divs and CSS Grid are better for layout purposes.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A dashboard on{" "}
        <strong>stats.com</strong> uses a table to display user data, with{" "}
        <code>&lt;th&gt;</code> for column headers (e.g., Name, Email) and{" "}
        <code>&lt;td&gt;</code> for values, styled with CSS for readability.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Responsive tables use CSS techniques
        like horizontal scrolling on mobile. <strong>Pitfall</strong>: Overly
        complex tables can be hard to navigate on small screens.{" "}
        <strong>Accessibility Note</strong>: Use <code>scope</code> and{" "}
        <code>aria-describedby</code> to make tables accessible to screen
        readers.
      </p>
    ),
    image: (
      <Image
        src="/html-table.png"
        alt="Illustration of an HTML table displaying data with headers, rows, and columns, styled with CSS."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t16: {
    id: "t16",
    topic: "Introduction to Web Components",
    paragraph1: (
      <p>
        <strong>Web Components</strong> are a set of web standards allowing
        developers to create reusable, custom HTML elements with encapsulated
        functionality. For example, a custom <code>&lt;my-button&gt;</code>{" "}
        element on <strong>example.com</strong> can include its own styles and
        behavior.
      </p>
    ),
    paragraph2: (
      <p>
        Web Components use three main technologies:{" "}
        <strong>Custom Elements</strong> for defining new HTML tags,{" "}
        <strong>Shadow DOM</strong> for encapsulating styles and markup, and{" "}
        <strong>HTML Templates</strong> for reusable content. For instance, a
        Shadow DOM ensures <code>&lt;my-button&gt;</code>’s styles don’t leak to
        the rest of the page.
      </p>
    ),
    paragraph3: (
      <p>
        Developers define a custom element with JavaScript (e.g.,{" "}
        <code>class MyButton extends HTMLElement</code>) and attach a Shadow DOM
        to isolate its content. Templates (<code>&lt;template&gt;</code>) store
        markup for reuse. This creates modular, maintainable components, similar
        to React or Vue components.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A widget on{" "}
        <strong>myapp.com</strong> uses a custom <code>&lt;user-card&gt;</code>{" "}
        element to display user profiles, with encapsulated CSS for styling and
        JavaScript for interactivity, reusable across multiple pages.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Web Components are supported natively
        in modern browsers, reducing reliance on frameworks.{" "}
        <strong>Pitfall</strong>: Limited browser support for older versions
        requires polyfills. <strong>Accessibility Note</strong>: Ensure custom
        elements include ARIA roles for screen reader compatibility.
      </p>
    ),
    image: (
      <Image
        src="/web-components.png"
        alt="Diagram of a Web Component with Custom Element, Shadow DOM, and HTML Template structure."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t17: {
    id: "t17",
    topic: "Best Practices for Clean and Maintainable HTML",
    paragraph1: (
      <p>
        Writing <strong>clean and maintainable HTML</strong> ensures code is
        readable, scalable, and accessible. Using semantic tags, proper
        indentation, and consistent naming improves collaboration. For example,{" "}
        <strong>example.com</strong> uses semantic HTML to structure content
        logically.
      </p>
    ),
    paragraph2: (
      <p>
        Key practices include using semantic tags (e.g.,{" "}
        <code>&lt;article&gt;</code> instead of <code>&lt;div&gt;</code>),
        minimizing nested elements, and avoiding inline styles. Comments and
        consistent formatting (e.g., lowercase tags) make code easier to
        maintain. For instance, <code>&lt;!-- Header Section --&gt;</code>{" "}
        clarifies structure.
      </p>
    ),
    paragraph3: (
      <p>
        Validate HTML using tools like the W3C Markup Validator to catch errors.
        Keep HTML focused on structure, delegating styling to CSS and behavior
        to JavaScript. Avoid deprecated tags like <code>&lt;font&gt;</code> and
        ensure attributes like <code>alt</code> are included for accessibility.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A page on <strong>myapp.com</strong>{" "}
        uses <code>&lt;main&gt;</code> for content, properly indented{" "}
        <code>&lt;section&gt;</code> elements, and no inline styles, making it
        easy for developers to update and maintain.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Tools like Prettier enforce consistent
        formatting, while linters catch potential issues.{" "}
        <strong>Pitfall</strong>: Over-nesting elements can complicate
        debugging. <strong>Accessibility Note</strong>: Ensure semantic HTML and
        ARIA attributes support assistive technologies.
      </p>
    ),
    image: (
      <Image
        src="/clean-html.png"
        alt="Illustration of clean HTML code with semantic tags, proper indentation, and comments."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t18: {
    id: "t18",
    topic: "CSS Syntax and Selectors",
    paragraph1: (
      <p>
        <strong>CSS</strong> (Cascading Style Sheets) defines the presentation
        of HTML elements, controlling layout, colors, and fonts. Its syntax
        includes selectors, properties, and values, like{" "}
        <code>p {`{ color: blue; }`}</code>. For example, styling{" "}
        <strong>example.com</strong>’s paragraphs uses CSS selectors.
      </p>
    ),
    paragraph2: (
      <p>
        <strong>Selectors</strong> target elements: element selectors (e.g.,{" "}
        <code>p</code>), class selectors (<code>.class</code>), ID selectors (
        <code>#id</code>), and attribute selectors (<code>[type="text"]</code>).
        Combinators like <code>&gt;</code> or <code>~</code> refine targeting,
        such as <code>nav &gt; a</code> for direct child links.
      </p>
    ),
    paragraph3: (
      <p>
        CSS specificity determines which styles apply when rules conflict. For
        instance, <code>#header{` { color: red; }`}</code> overrides{" "}
        <code>p {`{ color: blue; }`}</code> due to higher specificity. The
        cascade prioritizes styles based on source (e.g., user vs. author) and
        importance (<code>!important</code>).
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: On <strong>myapp.com</strong>, CSS
        like <code>.button {`{ background: green; padding: 10px; }`}</code>{" "}
        styles all buttons with the class <code>button</code>, ensuring
        consistent appearance across pages.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: CSS custom properties (e.g.,{" "}
        <code>--main-color: blue;</code>) enable reusable styles.{" "}
        <strong>Pitfall</strong>: Overly specific selectors can make maintenance
        difficult. <strong>Accessibility Note</strong>: Ensure sufficient color
        contrast (e.g., WCAG guidelines) for readability.
      </p>
    ),
    image: (
      <Image
        src="/css-selectors.png"
        alt="Diagram showing CSS selectors targeting HTML elements with different styles applied."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t19: {
    id: "t19",
    topic: "The Box Model, Sizing, and Spacing",
    paragraph1: (
      <p>
        The <strong>CSS Box Model</strong> defines how elements are sized and
        spaced, consisting of content, padding, border, and margin. For example,
        a button on <strong>example.com</strong> with{" "}
        <code>padding: 10px; margin: 20px;</code> has internal and external
        spacing.
      </p>
    ),
    paragraph2: (
      <p>
        The content area is defined by <code>width</code> and{" "}
        <code>height</code>. <strong>Padding</strong> adds space inside the
        border, <strong>border</strong> surrounds the padding, and{" "}
        <strong>margin</strong> creates space outside. The total size includes
        all components (e.g., <code>width + padding + border</code>).
      </p>
    ),
    paragraph3: (
      <p>
        CSS properties like <code>box-sizing: border-box</code> include padding
        and border in the element’s width, simplifying calculations. Units like{" "}
        <code>px</code>, <code>rem</code>, and <code>%</code> control sizing.
        For instance, <code>margin: 0 auto;</code> centers an element
        horizontally.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A card on <strong>myapp.com</strong>{" "}
        uses{" "}
        <code>
          box-sizing: border-box; width: 300px; padding: 15px; margin: 10px;
        </code>{" "}
        to ensure consistent sizing and spacing, creating a clean layout.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Flexible units like <code>vw</code> and{" "}
        <code>vh</code> adapt to viewport size. <strong>Pitfall</strong>:
        Ignoring box-sizing can lead to unexpected element sizes.{" "}
        <strong>Accessibility Note</strong>: Ensure sufficient spacing for touch
        targets to support users with motor impairments.
      </p>
    ),
    image: (
      <Image
        src="/box-model.png"
        alt="Diagram of the CSS Box Model, showing content, padding, border, and margin layers."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t20: {
    id: "t20",
    topic: "Working with Colors and Backgrounds",
    paragraph1: (
      <p>
        CSS <strong>colors</strong> and <strong>backgrounds</strong> enhance
        visual design, using properties like <code>color</code>,{" "}
        <code>background-color</code>, and <code>background-image</code>. For
        example, <strong>example.com</strong> might use{" "}
        <code>background-color: #f0f0f0;</code> for a light gray background.
      </p>
    ),
    paragraph2: (
      <p>
        Colors can be specified as hex (<code>#ff0000</code>), RGB (
        <code>rgb(255, 0, 0)</code>), HSL, or named colors (<code>red</code>).
        Backgrounds support gradients (e.g.,{" "}
        <code>background: linear-gradient(blue, white);</code>) and images, with
        properties like <code>background-size</code> controlling display.
      </p>
    ),
    paragraph3: (
      <p>
        Opacity and RGBA colors allow transparency (e.g.,{" "}
        <code>rgba(0, 0, 255, 0.5)</code>). Background properties like{" "}
        <code>background-position</code> and <code>background-repeat</code>{" "}
        fine-tune image placement. For instance, a hero section might use{" "}
        <code>background-image: url('hero.jpg');</code>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A landing page on{" "}
        <strong>myapp.com</strong> uses{" "}
        <code>
          color: white; background: linear-gradient(to right, blue, purple);
        </code>{" "}
        for a vibrant header, ensuring text readability with high contrast.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: CSS custom properties store reusable
        colors (e.g., <code>--primary: blue;</code>). <strong>Pitfall</strong>:
        Low-contrast colors harm readability.{" "}
        <strong>Accessibility Note</strong>: Follow WCAG contrast ratios (e.g.,
        4.5:1 for text) for accessibility.
      </p>
    ),
    image: (
      <Image
        src="/colors-backgrounds.png"
        alt="Illustration of a webpage with colorful backgrounds and text, showing gradients and images."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t21: {
    id: "t21",
    topic: "Typography and Fonts",
    paragraph1: (
      <p>
        CSS <strong>typography</strong> controls text appearance using
        properties like <code>font-family</code>, <code>font-size</code>, and{" "}
        <code>line-height</code>. For example, <strong>example.com</strong>{" "}
        might use <code>font-family: Arial, sans-serif;</code> for clean text.
      </p>
    ),
    paragraph2: (
      <p>
        Fonts can be system fonts (e.g., <code>Helvetica</code>), web-safe
        fonts, or custom fonts loaded via <code>@font-face</code> or services
        like Google Fonts. Properties like <code>font-weight</code> (e.g.,{" "}
        <code>bold</code>) and <code>text-transform</code> (e.g.,{" "}
        <code>uppercase</code>) enhance styling.
      </p>
    ),
    paragraph3: (
      <p>
        Responsive typography uses units like <code>rem</code> or{" "}
        <code>vw</code> to scale with screen size. For instance,{" "}
        <code>font-size: 1.5rem;</code> ensures text adjusts relative to the
        root font size. Line height and letter spacing improve readability,
        especially for long paragraphs.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A blog on{" "}
        <strong>myblog.com</strong> uses{" "}
        <code>
          font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 1.6;
        </code>{" "}
        to ensure clear, readable text across devices.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Variable fonts allow dynamic
        adjustments to weight and style, reducing file sizes.{" "}
        <strong>Pitfall</strong>: Overusing custom fonts can slow page loads.{" "}
        <strong>Accessibility Note</strong>: Ensure text is legible with
        sufficient size and contrast for all users.
      </p>
    ),
    image: (
      <Image
        src="/typography.png"
        alt="Illustration of a webpage with styled text, showing different font families, sizes, and line heights."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t22: {
    id: "t22",
    topic: "Flexbox for One-Dimensional Layouts",
    paragraph1: (
      <p>
        <strong>CSS Flexbox</strong> is a layout model for arranging elements in
        a single direction (row or column), ideal for responsive designs. For
        example, a navigation bar on <strong>example.com</strong> uses{" "}
        <code>display: flex;</code> to align links horizontally.
      </p>
    ),
    paragraph2: (
      <p>
        Flexbox uses a flex container (<code>display: flex</code>) and flex
        items. Properties like <code>flex-direction</code> (e.g.,{" "}
        <code>row</code> or <code>column</code>), <code>justify-content</code>,
        and <code>align-items</code> control layout. For instance,{" "}
        <code>justify-content: space-between;</code> spaces items evenly.
      </p>
    ),
    paragraph3: (
      <p>
        Flex items can grow or shrink with properties like{" "}
        <code>flex-grow</code> and <code>flex-shrink</code>. The{" "}
        <code>flex</code> shorthand (e.g., <code>flex: 1;</code>) simplifies
        sizing. Flexbox is perfect for components like card layouts or centered
        content.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A gallery on{" "}
        <strong>myapp.com</strong> uses{" "}
        <code>display: flex; flex-wrap: wrap;</code> to create a responsive grid
        of images that adjusts to screen size, aligning items with{" "}
        <code>justify-content: center</code>.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Flexbox is widely supported and
        simplifies layouts compared to floats. <strong>Pitfall</strong>:
        Overusing nested flex containers can complicate debugging.{" "}
        <strong>Accessibility Note</strong>: Ensure flex reordering doesn’t
        disrupt logical tab order for keyboard navigation.
      </p>
    ),
    image: (
      <Image
        src="/flexbox-layout.png"
        alt="Diagram of a Flexbox layout with items aligned in a row or column, showing spacing and alignment."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t23: {
    id: "t23",
    topic: "CSS Grid for Two-Dimensional Layouts",
    paragraph1: (
      <p>
        <strong>CSS Grid</strong> is a powerful layout system for creating
        two-dimensional layouts, controlling both rows and columns. For example,
        a dashboard on <strong>example.com</strong> uses{" "}
        <code>display: grid;</code> to arrange widgets in a grid.
      </p>
    ),
    paragraph2: (
      <p>
        Grid containers use <code>grid-template-columns</code> and{" "}
        <code>grid-template-rows</code> to define structure. Properties like{" "}
        <code>gap</code> add spacing, and <code>grid-area</code> assigns items
        to specific cells. For instance,{" "}
        <code>grid-template-columns: 1fr 2fr;</code> creates two columns with a
        1:2 ratio.
      </p>
    ),
    paragraph3: (
      <p>
        Grid items can span multiple rows or columns using{" "}
        <code>grid-column</code> or <code>grid-row</code>. The{" "}
        <code>auto-fit</code> and <code>minmax()</code> functions enable
        responsive grids. For example,{" "}
        <code>
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        </code>{" "}
        creates flexible columns.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A portfolio on{" "}
        <strong>myapp.com</strong> uses CSS Grid to create a responsive layout
        with <code>grid-template-areas: "header header" "sidebar main";</code>,
        placing a header, sidebar, and main content in a clean structure.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: CSS Grid complements Flexbox for
        complex layouts, like magazine-style pages. <strong>Pitfall</strong>:
        Overlapping grid items can cause accessibility issues.{" "}
        <strong>Accessibility Note</strong>: Ensure grid layouts maintain
        logical order for screen readers and keyboard navigation.
      </p>
    ),
    image: (
      <Image
        src="/css-grid.png"
        alt="Diagram of a CSS Grid layout with rows, columns, and grid areas for a webpage structure."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t24: {
    id: "t24",
    topic: "Responsive Design with Media Queries",
    paragraph1: (
      <p>
        <strong>Responsive design</strong> ensures websites adapt to different
        screen sizes using CSS <strong>media queries</strong>. For example,{" "}
        <strong>example.com</strong> uses <code>@media (max-width: 600px)</code>{" "}
        to adjust styles for mobile devices.
      </p>
    ),
    paragraph2: (
      <p>
        Media queries apply styles based on conditions like screen width,
        height, or device type. For instance,{" "}
        <code>
          @media (min-width: 768px){` { .container { width: 80%; } }`}
        </code>{" "}
        sets a wider container for tablets and desktops. Breakpoints target
        common device sizes (e.g., 768px for tablets).
      </p>
    ),
    paragraph3: (
      <p>
        Techniques like fluid layouts (using <code>%</code> or <code>vw</code>)
        and relative units (<code>rem</code>, <code>em</code>) enhance
        responsiveness. Mobile-first design starts with base styles and adds
        media queries for larger screens, improving performance.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A blog on <strong>myapp.com</strong>{" "}
        uses{" "}
        <code>
          @media (max-width: 600px) {`{ .sidebar { display: none; } }`}
        </code>{" "}
        to hide the sidebar on mobile, ensuring a single-column layout for
        smaller screens.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Frameworks like Tailwind CSS simplify
        responsive design with utility classes. <strong>Pitfall</strong>: Too
        many breakpoints can bloat CSS. <strong>Accessibility Note</strong>:
        Ensure responsive layouts maintain readable font sizes and
        touch-friendly elements.
      </p>
    ),
    image: (
      <Image
        src="/responsive-design.png"
        alt="Illustration of a webpage adapting to different screen sizes using media queries."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t25: {
    id: "t25",
    topic: "CSS Animations and Transitions",
    paragraph1: (
      <p>
        <strong>CSS animations</strong> and <strong>transitions</strong> add
        dynamic effects to webpages, enhancing user experience. Transitions
        smoothly change property values, while animations define complex
        keyframes. For example, a button on <strong>example.com</strong> might
        fade in using a transition.
      </p>
    ),
    paragraph2: (
      <p>
        Transitions use properties like{" "}
        <code>transition: background-color 0.3s ease;</code> to animate changes,
        such as a button changing color on hover. Animations use{" "}
        <code>@keyframes</code> to define steps, like{" "}
        <code>
          @keyframes slide {`{ from { left: 0; } to { left: 100px; } }`}
        </code>
        .
      </p>
    ),
    paragraph3: (
      <p>
        Properties like <code>transition-timing-function</code> (e.g.,{" "}
        <code>ease-in</code>) and <code>animation-duration</code> control
        behavior. Animations can loop with{" "}
        <code>animation-iteration-count: infinite;</code>. For instance, a
        loading spinner might use a continuous rotation animation.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A card on <strong>myapp.com</strong>{" "}
        uses <code>transition: transform 0.2s;</code> to scale up on hover, and
        an <code>@keyframes fadeIn</code> animation to fade in when loaded,
        creating a smooth effect.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: CSS animations are GPU-accelerated for
        performance but should be used sparingly. <strong>Pitfall</strong>:
        Overusing animations can distract users or slow performance.{" "}
        <strong>Accessibility Note</strong>: Respect{" "}
        <code>prefers-reduced-motion</code> media queries to disable animations
        for sensitive users.
      </p>
    ),
    image: (
      <Image
        src="/css-animations.png"
        alt="Illustration of a webpage with animated elements, like buttons scaling and spinners rotating."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t26: {
    id: "t26",
    topic: "Introduction to Preprocessors (Sass/Less)",
    paragraph1: (
      <p>
        <strong>CSS preprocessors</strong> like Sass and Less extend CSS with
        features like variables, nesting, and mixins, making stylesheets more
        maintainable. For example, <strong>example.com</strong> might use Sass
        to define reusable color variables.
      </p>
    ),
    paragraph2: (
      <p>
        Sass uses syntax like <code>$primary: blue;</code> for variables and
        supports nesting (e.g., <code>.nav {`{ a { color: $primary; } }`}</code>
        ). Less is similar but uses <code>@primary</code>. Mixins allow reusable
        style blocks, reducing repetition across stylesheets.
      </p>
    ),
    paragraph3: (
      <p>
        Preprocessors compile to standard CSS for browser compatibility. Tools
        like <code>node-sass</code> or <code>lessc</code> handle compilation.
        For instance, a Sass file with nested rules compiles to flat CSS for use
        on <strong>myapp.com</strong>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A site on <strong>myapp.com</strong>{" "}
        uses Sass to define <code>$font-stack: Arial, sans-serif;</code> and a
        mixin for buttons, applying consistent styles across components with
        less code.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: CSS-in-JS and frameworks like Tailwind
        reduce preprocessor reliance, but Sass remains popular for large
        projects. <strong>Pitfall</strong>: Over-nesting can produce bloated
        CSS. <strong>Accessibility Note</strong>: Ensure compiled CSS maintains
        accessible contrast and sizes.
      </p>
    ),
    image: (
      <Image
        src="/sass-preprocessor.png"
        alt="Diagram showing Sass code with variables and nesting compiling to standard CSS."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t27: {
    id: "t27",
    topic: "Variables, Data Types, and Operators",
    paragraph1: (
      <p>
        JavaScript <strong>variables</strong> store data using <code>let</code>,{" "}
        <code>const</code>, or <code>var</code>. Data types include primitives
        (e.g., <code>number</code>, <code>string</code>, <code>boolean</code>)
        and objects (e.g., arrays, functions). For example,{" "}
        <code>let name = "Alice";</code> stores a string.
      </p>
    ),
    paragraph2: (
      <p>
        Operators perform actions on variables, like arithmetic (<code>+</code>,{" "}
        <code>-</code>), comparison (<code>==</code>, <code>===</code>), or
        logical (<code>&&</code>, <code>||</code>). For instance,{" "}
        <code>let sum = 5 + 3;</code> computes <code>8</code>, used in
        calculations on <strong>example.com</strong>.
      </p>
    ),
    paragraph3: (
      <p>
        JavaScript is dynamically typed, meaning variables can change types
        (e.g., <code>let x = 5; x = "text";</code>). Strict equality (
        <code>===</code>) checks value and type, unlike loose equality (
        <code>==</code>). Understanding types prevents errors in operations like{" "}
        <code>"2" + 2</code> (returns <code>"22"</code>).
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A form on <strong>myapp.com</strong>{" "}
        uses <code>let age = 25;</code> and <code>if {`(age >= 18)`}</code> to
        check eligibility, updating the UI based on comparison results.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: ES6 introduced <code>let</code> and{" "}
        <code>const</code> for block-scoped variables, improving over{" "}
        <code>var</code>. <strong>Pitfall</strong>: Misusing loose equality can
        cause bugs. <strong>Accessibility Note</strong>: Ensure dynamic content
        updates are announced to screen readers.
      </p>
    ),
    image: (
      <Image
        src="/js-variables.png"
        alt="Illustration of JavaScript variables and operators, showing data types and calculations."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t28: {
    id: "t28",
    topic: "Control Flow and Logic",
    paragraph1: (
      <p>
        JavaScript <strong>control flow</strong> manages program execution using
        conditionals (<code>if</code>, <code>else</code>) and loops (
        <code>for</code>, <code>while</code>). For example,{" "}
        <strong>example.com</strong> might use an <code>if</code> statement to
        show a login prompt.
      </p>
    ),
    paragraph2: (
      <p>
        Conditionals evaluate expressions to execute code blocks. For instance,{" "}
        <code>{`if (userLoggedIn) { showDashboard(); } else { showLogin(); }`}</code>{" "}
        directs users based on login status. Loops like{" "}
        <code>{`for (let i = 0; i < 5; i++)`}</code> iterate over data, such as
        rendering a list.
      </p>
    ),
    paragraph3: (
      <p>
        Logical operators (<code>&&</code>, <code>||</code>, <code>!</code>)
        combine conditions. The <code>switch</code> statement handles multiple
        cases, like <code>{`switch (day) { case "Monday": ... }`}</code>. Break
        and continue control loop behavior, skipping or exiting iterations.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A todo app on{" "}
        <strong>myapp.com</strong> uses a <code>for</code> loop to display tasks
        and an <code>if</code> statement to highlight overdue items, ensuring
        dynamic UI updates.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: ES6 features like <code>for...of</code>{" "}
        and <code>forEach</code> simplify iteration. <strong>Pitfall</strong>:
        Infinite loops can crash applications.{" "}
        <strong>Accessibility Note</strong>: Ensure conditional UI changes are
        accessible via ARIA attributes.
      </p>
    ),
    image: (
      <Image
        src="/control-flow.png"
        alt="Diagram of JavaScript control flow with conditionals and loops directing program execution."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t29: {
    id: "t29",
    topic: "Functions and Scopes",
    paragraph1: (
      <p>
        JavaScript <strong>functions</strong> are reusable code blocks that
        perform tasks, defined with <code>function</code> or arrow syntax{" "}
        {`(<code>=></code>)`}. For example,{" "}
        <code>{`function greet(name) { return \`Hello, \${name}\`; }`}</code> is
        used on <strong>example.com</strong> to generate greetings.
      </p>
    ),
    paragraph2: (
      <p>
        <strong>Scope</strong> determines variable accessibility. Global scope
        is available everywhere, while block scope (<code>let</code>,{" "}
        <code>const</code>) limits variables to blocks like functions or loops.
        For instance, a variable inside{" "}
        <code>{`function calc() { let x = 10; }`}</code> isn’t accessible
        outside.
      </p>
    ),
    paragraph3: (
      <p>
        Functions can take parameters, return values, and use closures to retain
        access to outer variables. Arrow functions{" "}
        {`(<code>const add = (a, b) => a + b;</code>)`} are concise and inherit{" "}
        <code>this</code> from their context, useful for event handlers.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A calculator on{" "}
        <strong>myapp.com</strong> uses{" "}
        <code>{`function multiply(x, y) { return x * y; }`}</code> to compute
        results, with variables scoped to the function to avoid conflicts.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: ES6 arrow functions and modules improve
        function usability and scoping. <strong>Pitfall</strong>: Global
        variables can cause naming conflicts.{" "}
        <strong>Accessibility Note</strong>: Ensure function-driven UI updates
        are announced to assistive technologies.
      </p>
    ),
    image: (
      <Image
        src="/functions-scope.png"
        alt="Illustration of JavaScript functions and scope, showing global and block-scoped variables."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t30: {
    id: "t30",
    topic: "Arrays and Objects",
    paragraph1: (
      <p>
        JavaScript <strong>arrays</strong> and <strong>objects</strong> store
        complex data. Arrays are ordered lists (e.g.,{" "}
        <code>let fruits = ["apple", "banana"];</code>), while objects are
        key-value pairs (e.g.,{" "}
        <code>let user = {` name: "Alice", age: 25 `};</code>). Both are used on{" "}
        <strong>example.com</strong>.
      </p>
    ),
    paragraph2: (
      <p>
        Arrays support methods like <code>push()</code>, <code>pop()</code>,{" "}
        <code>map()</code>, and <code>filter()</code> for manipulation. Objects
        use dot notation (<code>user.name</code>) or bracket notation (
        <code>user["name"]</code>) to access properties. For instance,{" "}
        <code>{`fruits.map(item => item.toUpperCase())`}</code> transforms array
        items.
      </p>
    ),
    paragraph3: (
      <p>
        Arrays and objects can be nested, enabling complex data structures. For
        example, an array of objects like{" "}
        <code>{`[{ id: 1, name: "Bob" }, { id: 2, name: "Alice" }]`}</code>{" "}
        might store user data for a leaderboard on <strong>myapp.com</strong>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A shopping cart on{" "}
        <strong>store.com</strong> uses an array{" "}
        <code>{`let cart = [{ item: "shirt", price: 20 }, { item: "hat", price: 15 }]`}</code>{" "}
        and maps it to display items, calculating totals with object properties.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: ES6 destructuring and spread operators
        simplify array and object manipulation. <strong>Pitfall</strong>:
        Mutating arrays or objects unintentionally can cause bugs.{" "}
        <strong>Accessibility Note</strong>: Ensure dynamic data updates are
        reflected in the UI for screen readers.
      </p>
    ),
    image: (
      <Image
        src="/arrays-objects.png"
        alt="Diagram of JavaScript arrays and objects, showing list and key-value data structures."
        width="600"
        height="600"
      ></Image>
    ),
  },
  t31: {
    id: "t31",
    topic: "DOM Manipulation and Traversal",
    paragraph1: (
      <p>
        The <strong>Document Object Model (DOM)</strong> represents a webpage’s
        structure as a tree of objects, manipulable via JavaScript. For example,{" "}
        <strong>example.com</strong> uses{" "}
        <code>document.querySelector(".btn")</code> to select and modify a
        button.
      </p>
    ),
    paragraph2: (
      <p>
        DOM methods like <code>getElementById()</code>,{" "}
        <code>querySelectorAll()</code>, and <code>createElement()</code> access
        or create elements. Properties like <code>innerHTML</code> or{" "}
        <code>style</code> update content or appearance. For instance,{" "}
        <code>element.innerHTML = "New text";</code> changes text content.
      </p>
    ),
    paragraph3: (
      <p>
        Traversal methods like <code>parentNode</code>, <code>children</code>,
        or <code>nextSibling</code> navigate the DOM tree. For example,{" "}
        <code>element.parentNode.style.display = "none";</code> hides a parent
        element, useful for dynamic UI updates on <strong>myapp.com</strong>.
      </p>
    ),
    paragraph4: (
      <p>
        <strong>Practical Example</strong>: A todo app on{" "}
        <strong>myapp.com</strong> uses{" "}
        <code>document.createElement("li")</code> to add tasks and{" "}
        <code>querySelector(".task")</code> to toggle completion styles,
        updating the DOM dynamically.
      </p>
    ),
    paragraph5: (
      <p>
        <strong>Modern Context</strong>: Frameworks like React abstract DOM
        manipulation for efficiency. <strong>Pitfall</strong>: Excessive DOM
        updates can slow performance; use virtual DOM or batch updates.{" "}
        <strong>Accessibility Note</strong>: Ensure DOM changes are announced to
        screen readers.
      </p>
    ),
    image: (
      <Image
        src="/dom-manipulation.png"
        alt="Diagram of DOM manipulation methods and properties."
        width="600"
        height="600"
      ></Image>
    ),
  },
};

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics[id];

  // Render the new topic details, including the subject details and project.
  return (
    <>
      {topic ? (
        <main className="single-course">
          <section className="hero">
            <div className="hero-inner">
              <h2 className="hero-title">{topic.topic}</h2>
            </div>
          </section>
          <section className="intro">
            <div className="intro-1">{topic.paragraph1}</div>
            <div className="intro-1">{topic.paragraph2}</div>
            <div className="intro-1">{topic.paragraph3}</div>
            <div className="intro-1">{topic.paragraph4}</div>
            <div className="intro-1">{topic.paragraph5}</div>
          </section>
          <section className="image-section">
            <div className="image-container">{topic.image}</div>
          </section>
          <FooterCrumbs />
        </main>
      ) : (
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
      )}
    </>
  );
};
export default TopicDetail;
