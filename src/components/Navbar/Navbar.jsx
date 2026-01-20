import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className="logo">VATROSERVIS CENTAR</div>

      <a href="#products" className="products-btn">
        PROIZVODI
      </a>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
            <ul>
              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Početna
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => setMenuOpen(false)}>
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Usluge
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={() => setMenuOpen(false)}>
                  Certifikati
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  O nama
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
