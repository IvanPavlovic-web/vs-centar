import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

function Products() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const triggerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "CO₂ aparat za gašenje",
      description: "Aparat za gašenje požara električnih instalacija i uređaja",
      image: "/vs-centar/images/11.webp",
      features: ["Kapacitet: 6 kg", "CE certifikat", "Garancija: 10 godina"],
    },
    {
      id: 2,
      name: "Praškasti aparat ABC",
      description: "Univerzalni aparat za gašenje požara",
      image: "/vs-centar/images/22.webp",
      features: [
        "Namijenjen za klase požara A, B i C",
        "Precizan manometar",
        "Jednostavno rukovanje",
      ],
    },
    {
      id: 3,
      name: "Zidni hidrant",
      description: "Kompletan zidni hidrant set s pripadajućom opremom",
      image: "/vs-centar/images/33.webp",
      features: [
        "Crijevo dužine 30 m",
        "Standardna spojnica",
        "Materijal otporan na koroziju",
      ],
    },
    {
      id: 4,
      name: "Požarni alarm",
      description: "Bežični sistem za rano otkrivanje požara",
      image: "/vs-centar/images/44.webp",
      features: [
        "Sirena jačine 120 dB",
        "Baterija trajnosti do 10 godina",
        "Bežična instalacija",
      ],
    },
    {
      id: 5,
      name: "Zaštitna odijela",
      description: "Vatrootporna zaštitna odijela za profesionalnu upotrebu",
      image: "/vs-centar/images/55.webp",
      features: [
        "Aramidna vlakna",
        "Reflektirajuće trake",
        "Višekratna upotreba",
      ],
    },
    {
      id: 6,
      name: "Aparat za pjenu",
      description: "Specijalizirani aparat za gašenje zapaljivih tečnosti",
      image: "/vs-centar/images/66.webp",
      features: [
        "Namijenjen za klasu požara B",
        "Kapacitet: 25 L",
        "Automatsko punjenje",
      ],
    },
    {
      id: 7,
      name: "Podzemni hidrant",
      description: "Hidrant za vanjske površine i parkirališta",
      image: "/vs-centar/images/77.webp",
      features: [
        "Čelična konstrukcija",
        "Zaštita od smrzavanja",
        "Diskretna zaštitna boja",
      ],
    },
    {
      id: 8,
      name: "Detektor dimа",
      description: "Optički detektor dima s baterijskim napajanjem",
      image: "/vs-centar/images/88.webp",
      features: ["Optička tehnologija detekcije", "9V baterija", "Test dugme"],
    },
    {
      id: 9,
      name: "Zaštitne kacige",
      description: "Termootporne kacige s vizirima",
      image: "/vs-centar/images/99.webp",
      features: [
        "Vizir od polikarbonata",
        "Podesiva veličina",
        "Ventilacijski sistem",
      ],
    },
    {
      id: 10,
      name: "Zaštitne rukavice",
      description: "Vatrootporne rukavice od Kevlara",
      image: "/vs-centar/images/110.webp",
      features: [
        "Kevlar materijal",
        "Višeslojna zaštita",
        "Očuvana pokretljivost šake",
      ],
    },
  ];

  useEffect(() => {
    let scrollTween = null;

    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const trigger = triggerRef.current;

    if (!section || !scrollContainer || !trigger) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    // Značajno povećan delay pre početka horizontalnog skrola
    const delayDistance = viewportWidth * 1.2; // 120% viewport width kao delay

    scrollTween = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "bottom bottom",
        end: () => `+=${scrollDistance + viewportWidth}`,
        scrub: 1,
        pin: section,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      if (scrollTween) {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      }
    };
  }, [products]);

  return (
    <section id="products" className="products-section" ref={sectionRef}>
      <div ref={triggerRef} className="scroll-trigger" />

      <div className="products-header">
        <div className="header-content">
          <motion.div
            className="label-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="label-dot"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="label">NAŠI PROIZVODI</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visokokvalitetna protivpožarna{" "}
            <span className="title-accent">oprema po mjeri</span>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Profesionalna zaštita vaših objekata u skladu s najvišim standardima
            sigurnosti
          </motion.p>
        </div>
      </div>

      <div className="scroll-wrapper">
        <div ref={scrollContainerRef} className="products-container">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="product-image-container"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="product-overlay" />
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
