"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  {
    name: "courses",
    link: "/course",
    extras: [
      "/courses",
      "/courses/frontend",
      "/courses/backend",
      "/courses/fullstack",
      "/courses/data-science",
      "/courses/mobile",
      "/courses/devops",
      "/courses/design",
      "/courses/ai",
      "/courses/security",
      // add more as needed
    ],
  },
];

function isActive(link, extras, pathname) {
  if (link === pathname) return true;
  if (extras && extras.includes(pathname)) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [signup, setSignup] = useState(true);
  const [nav, setNav] = useState(false);

  const renderLinks = (onClick) =>
    navLinks.map(({ name, link, extras }) => (
      <Link
        href={link}
        key={name}
        className={`nav-link${isActive(link, extras, pathname) ? " active" : ""}`}
        onClick={onClick}
      >
        {name}
      </Link>
    ));

  const SignupButton = (
    <a
      href="#"
      className="btn cta-button"
      onClick={() => setSignup(true)}
    >
      Signup
    </a>
  );

  const UserIcon = (
    <i
      className="fas fa-user"
      onClick={() => setSignup(false)}
      aria-label="User"
      tabIndex={0}
    ></i>
  );

  return (
    <header className="header">
      <a href="#" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logo-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="logo-text text-gradient">Evolve</span>
      </a>
      <nav className="header-nav">
        <div className="nav-links">{renderLinks()}</div>
      </nav>
      <nav className={`header-nav-mobile${nav ? " show" : ""}`}>
        <div className="nav-links">{renderLinks(() => setNav(false))}</div>
        {signup ? UserIcon : SignupButton}
      </nav>
      {signup ? UserIcon : SignupButton}
      {nav ? (
        <i className="fas fa-arrow-left back" onClick={() => setNav(false)}></i>
      ) : (
        <i className="fas fa-bars" onClick={() => setNav(true)}></i>
      )}
    </header>
  );
}
