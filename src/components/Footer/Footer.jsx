import React from "react";
import "./Footer.css";
import Dither from "./Dither";

function Footer() {
  return (
    <footer className="footer">
      {/* Dither animirana pozadina */}
      <div className="footer-background">
        <Dither
          colors={[0.1, 0.05, 0]}
          mouseRadius={0.15}
          colorNum={8.3}
          waveAmplitude={0.4}
          waveFrequency={3.8}
          waveSpeed={0.02}
          disableAnimation={false}
          enableMouseInteraction={true}
        />
      </div>

      {/* Footer sadržaj */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Gornji dio */}
          <div className="footer-top">
            <div className="footer-info">
              <h3 className="footer-logo">Vatroservis Centar</h3>
              <p className="footer-tagline">
                Protivpožarna zaštita i tehnička sigurnost objekata
              </p>
            </div>

            <div className="footer-contact">
              <h4>Kontakt informacije</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+387 65-623-892</span>
                </div>
                <div className="contact-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>prodaja@vatroserviscentar.org</span>
                </div>
                <div className="contact-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>M4 bb Ramići, Banjaluka, 78000</span>
                </div>
              </div>
            </div>

            <div className="footer-hours">
              <h4>Radno vrijeme</h4>
              <div className="hours-grid">
                <div className="hour-item">
                  <span className="day">Ponedjeljak – petak:</span>
                  <span className="time">07:00 – 17:00</span>
                </div>
                <div className="hour-item">
                  <span className="day">Subota:</span>
                  <span className="time">Zatvoreno</span>
                </div>
                <div className="hour-item">
                  <span className="day">Nedjelja:</span>
                  <span className="time">Zatvoreno</span>
                </div>
              </div>
            </div>
          </div>

          {/* Srednji dio - Linkovi */}
          <div className="footer-middle">
            <div className="footer-links-section">
              <h4>Naše usluge</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Protivpožarna zaštita</a>
                </li>
                <li>
                  <a href="#services">Zaštita na radu</a>
                </li>
                <li>
                  <a href="#services">Ispitivanje opreme</a>
                </li>
                <li>
                  <a href="#services">Tehnička dokumentacija</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4>Ovlaštenja i licence</h4>
              <ul className="footer-links">
                <li>
                  <a href="#certifications">Ovlaštenja</a>
                </li>
                <li>
                  <a href="#certifications">Dokumentacija</a>
                </li>
                <li>
                  <a href="#certifications">Certifikati</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4>Kompanija</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">Naša misija</a>
                </li>
                <li>
                  <a href="#about">Tim stručnjaka</a>
                </li>
                <li>
                  <a href="#about">Reference</a>
                </li>
                <li>
                  <a href="#contact">Kontakt</a>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Društvene mreže</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Donji dio */}
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Vatroservis Centar. Sva prava su
              zadržana.
            </p>

            <div className="footer-legal">
              <a href="#privacy" className="legal-link">
                Politika privatnosti
              </a>
              <a href="#terms" className="legal-link">
                Uslovi korištenja
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
