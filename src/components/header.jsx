"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const navLink = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "courses",
      link: "/course",
    },
  ];
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
        <div className="nav-links">
          {navLink.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.name}
                className={item.link == pathname ? "active" : ""}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <a href="" className="btn cta-button">
        Signup
      </a>
      <i className="fas fa-bars"></i>
    </header>
  );
}
