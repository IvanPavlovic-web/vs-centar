import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (scrolled) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <About />
      <Products />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
