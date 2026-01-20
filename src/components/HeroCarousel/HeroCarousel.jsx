import React, { useState, useRef, useEffect, useCallback } from "react";
import "./HeroCarousel.css";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const timerRef = useRef(null);
  const slideDuration = 6000;

  const slides = [
    {
      image: "/../../../public/images/0.jpg",
      title: "Protivpožarna",
      subtitle: "zaštita",
      category: "SISTEMI ZAŠTITE",
      description:
        "Projektovanje i primjena protivpožarnih sistema u skladu sa važećim propisima i standardima",
    },
    {
      image: "/../../../public/images/1.jpg",
      title: "Aparati",
      subtitle: "za gašenje",
      category: "OPREMA",
      description:
        "Isporuka, kontrola i održavanje aparata i opreme za efikasno gašenje požara",
    },
    {
      image: "/../../../public/images/3.jpg",
      title: "Instalacije",
      subtitle: "i servis",
      category: "USLUGE",
      description:
        "Ugradnja, servisiranje i redovno ispitivanje protivpožarnih instalacija",
    },
    {
      image: "/../../../public/images/4.jpg",
      title: "Obuke",
      subtitle: "i certifikati",
      category: "PREVENTIVA",
      description:
        "Stručna obuka zaposlenih i izdavanje potrebne dokumentacije iz oblasti zaštite od požara",
    },
  ];

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          goToSlide((currentSlide + 1) % slides.length);
          return 0;
        }
        return prevProgress + 1;
      });
    }, slideDuration / 100);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const slideWidth = carouselRef.current.offsetWidth;
    const newSlide = Math.round(carouselRef.current.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
    setProgress(0);
    carouselRef.current.scrollTo({
      left: newSlide * slideWidth,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const slideWidth = carouselRef.current.offsetWidth;
    const newSlide = Math.round(carouselRef.current.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
    setProgress(0);
    carouselRef.current.scrollTo({
      left: newSlide * slideWidth,
      behavior: "smooth",
    });
  };

  const handleIndicatorClick = (index) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    goToSlide(index);
  };

  const handleTextSelect = (e) => {
    e.preventDefault();
  };

  return (
    <div id="home" className="hero-carousel">
      <div
        ref={carouselRef}
        className="carousel-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="slide-overlay"></div>

            <div
              className="slide-content"
              onMouseDown={handleTextSelect}
              onSelect={handleTextSelect}
            >
              <p className="slide-category">{slide.category}</p>
              <h1 className="slide-title">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="progress-timeline-container">
        <div className="progress-timeline">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="progress-track-wrapper"
            >
              <div className="progress-track">
                <div
                  className={`progress-fill ${
                    currentSlide === index ? "active" : ""
                  }`}
                  style={{
                    width: currentSlide === index ? `${progress}%` : "0%",
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
