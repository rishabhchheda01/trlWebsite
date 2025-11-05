import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from "../assets/nav_logo.png";

export default function Navbar() {
  const links = [
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Eboard", href: "/eboard" },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="TRL logo" />
        </Link>
        <nav className="nav-links">
          <ul className="link-list">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn" href="/contact">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
