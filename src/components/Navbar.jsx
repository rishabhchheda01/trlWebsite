import React from "react";
import "./Navbar.css";
import logo from "/Users/manan/trl-website/trlWebsite/src/assets/trlTapeLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Terrapin Logo" className="navbar-logo" />
        {/* <h1 className="navbar-title">Terrapin Record Label</h1> */}
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/artists">Artists</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}
