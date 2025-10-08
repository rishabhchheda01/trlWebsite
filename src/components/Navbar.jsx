import React from "react";
import "./Navbar.css";
import logo from "../assets/nav-logo.png";

// Navbar displays the top navigation with a left-aligned logo and right-aligned links.
// Links are defined in an array so it's easy to add/remove without editing markup.
export default function Navbar() {
  const links = [
    { label: "About Us", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Artists", href: "#artists" },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <img className="logo" src={logo} alt="TRL logo" />
        <nav className="nav-links">
          <ul className="link-list">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn" href="#contact">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
