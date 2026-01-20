import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Services.css";

const Services = () => {
  const containerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Ugradnja opreme",
      description:
        "Stručna ugradnja svih vrsta protivpožarne opreme u skladu s važećim propisima.",
      features: [
        "Montaža aparata za gašenje",
        "Hidrantske instalacije",
        "Vatrodojavni sistemi",
        "Završna provjera ispravnosti",
      ],
      number: "01",
    },
    {
      id: 2,
      title: "Servis i održavanje",
      description:
        "Redovno održavanje i servisiranje postojeće protivpožarne opreme.",
      features: [
        "Periodični pregledi",
        "Zamjena punjenja",
        "Popravke i ispitivanja",
        "Brza servisna intervencija",
      ],
      number: "02",
    },
    {
      id: 3,
      title: "Projektovanje sistema",
      description:
        "Izrada kompletnih projektnih rješenja za sisteme zaštite od požara.",
      features: [
        "Analiza i procjena rizika",
        "Tehnička dokumentacija",
        "Projektna rješenja",
        "Usklađenost sa propisima",
      ],
      number: "03",
    },
    {
      id: 4,
      title: "Obuka zaposlenih",
      description:
        "Obuka zaposlenih za pravilno rukovanje protivpožarnom opremom i evakuaciju.",
      features: [
        "Teorijska nastava",
        "Praktična obuka",
        "Simulacije požara",
        "Izdavanje potvrda",
      ],
      number: "04",
    },
    {
      id: 5,
      title: "Stručne ekspertize",
      description:
        "Izrada stručnih mišljenja, pregleda i procjena stanja protivpožarne zaštite.",
      features: [
        "Pregled objekata",
        "Stručni izvještaji",
        "Preporuke za unapređenje",
        "Priprema za inspekcije",
      ],
      number: "05",
    },
    {
      id: 6,
      title: "Hitne intervencije",
      description:
        "Dostupnost 24/7 za hitne intervencije i zamjenu neispravne opreme.",
      features: [
        "Dostupnost 24/7",
        "Brza zamjena opreme",
        "Hitne intervencije",
        "Mobilne servisne ekipe",
      ],
      number: "06",
    },
  ];

  return (
    <section id="services" ref={containerRef} className="services-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="label-container">
              <motion.div
                className="label-dot"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="label">NAŠE USLUGE</span>
            </div>

            <h2 className="title">
              Kompletne protivpožarne
              <br />
              <span className="title-accent">usluge po mjeri</span>
            </h2>

            <p className="subtitle">
              Profesionalna zaštita vaših objekata u skladu s najvišim
              standardima sigurnosti
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="service-card"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="card-glow"
        style={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="card-header">
        <motion.span
          className="service-number"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {service.number}
        </motion.span>
        <motion.div
          className="card-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <div className="features-list">
        {service.features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="feature-item"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
          >
            <motion.div
              className="feature-dot"
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="feature-text">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
