import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">InvestaWise</Link>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link to="/modules" className="nav-link">
            Modules
          </Link>
          <Link to="/learn" className="nav-link">
            Learning
          </Link>
          <button className="button-square" onClick={() => navigate("/signup")}>
            <Link to="/Signup">Get Started</Link>
          </button>
          <Link
            to="/login"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
