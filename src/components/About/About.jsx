import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="background-grid" />
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="label-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="label-dot"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="label">O NAMA</span>
          </motion.div>

          <h2 className="section-title">
            Vodeći u protivpožarnoj{" "}
            <span className="title-accent">zaštiti</span>
          </h2>
          <p className="section-subtitle">
            Od 2015. godine gradimo sigurnost vaših objekata
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Vatroservis centar</h3>
            <div className="text-reveal">
              <p>
                Sa više od 10 godina iskustva u oblasti protivpožarne zaštite,
                Vatroservis centar je prepoznat kao pouzdan partner u očuvanju
                imovine i zaštiti ljudskih života. Naš rad temelji se na
                stručnosti, odgovornosti i dosljednom poštovanju važećih propisa
                i standarda.
              </p>
              <p>
                Specijalizovani smo za kompletna rješenja iz oblasti
                protivpožarne zaštite, od projektovanja i ugradnje sistema, do
                redovnog održavanja, kontrole i servisa svih vrsta protivpožarne
                opreme.
              </p>
              <p>
                Naš tim čine stručno osposobljeni i certificirani kadrovi koji
                kontinuirano unapređuju svoje znanje kroz edukacije i seminare
                domaćih i inostranih proizvođača, kako bismo klijentima uvijek
                obezbijedili najviši nivo zaštite.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            style={{ y: smoothY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            <motion.div
              className="about-image"
              ref={imageRef}
              style={{
                rotateX: mousePosition.y * 0.5,
                rotateY: mousePosition.x * 0.5,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="image-overlay" />
              <img
                src="/images/about.png"
                alt="Logo Vatroservis centra 2"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
