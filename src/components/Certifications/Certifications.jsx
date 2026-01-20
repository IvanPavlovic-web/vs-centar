import React from "react";
import {
  Award,
  Shield,
  FileCheck,
  Wrench,
  Flame,
  Zap,
  Thermometer,
} from "lucide-react";
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Ovlaštenje za poslove zaštite i zdravlja na radu",
      description: "Ispitivanje sredstava za rad i opreme za ličnu zaštitu",
      issuer: "Ministarstvo rada i socijalne politike",
      validity: "Važeće",
      icon: <Shield size={32} />,
      category: "ovlaštenje",
    },
    {
      id: 2,
      title: "Ovlaštenje za ispitivanje uslova radne sredine",
      description:
        "Hemijske, biološke i fizičke štetnosti, uključujući mikroklimu",
      issuer: "Ministarstvo zdravlja Republike Srpske",
      validity: "Važeće",
      icon: <Thermometer size={32} />,
      category: "ovlaštenje",
    },
    {
      id: 3,
      title: "Licenca za elektro i mašinske radove",
      description:
        "Izvođenje radova na objektima u nadležnosti Ministarstva za prostorno uređenje Republike Srpske",
      issuer: "Ministarstvo za prostorno uređenje Republike Srpske",
      validity: "Važeće",
      icon: <Zap size={32} />,
      category: "licenca",
    },
    {
      id: 4,
      title: "Licenca za izradu tehničke dokumentacije",
      description: "Mašinska faza, postrojenja i metalne konstrukcije",
      issuer: "Ministarstvo privrede Republike Srpske",
      validity: "Važeće",
      icon: <Wrench size={32} />,
      category: "licenca",
    },
    {
      id: 5,
      title: "Ovlaštenje za ispitivanje i servisiranje sistema",
      description: "Vatrodojavni i stabilni sistemi za dojavu i gašenje požara",
      issuer: "Ministarstvo unutrašnjih poslova Republike Srpske",
      validity: "Važeće",
      icon: <Flame size={32} />,
      category: "ovlaštenje",
    },
    {
      id: 6,
      title: "Ovlaštenje za pregled i ispitivanje sigurnosnih ventila",
      description:
        "Servisiranje i ispitivanje sigurnosnih ventila na opremi pod pritiskom",
      issuer: "Uprava za mjeriteljstvo i dragocjene metale",
      validity: "Važeće",
      icon: <Wrench size={32} />,
      category: "ovlaštenje",
    },
  ];

  return (
    <div className="certifications-wrapper">
      <div className="certifications-container">
        {/* Header */}
        <div className="certifications-header">
          <div className="certifications-badge">
            <Award size={18} />
            <span>Licence i ovlaštenja</span>
          </div>

          <h2 className="certifications-title">
            Naše <span className="certifications-highlight">licence</span> i
            ovlaštenja
          </h2>

          <p className="certifications-subtitle">
            Posjedujemo sve ključne licence i ovlaštenja potrebna za zakonito,
            stručno i odgovorno izvođenje poslova iz oblasti zaštite od požara,
            zaštite na radu, ispitivanja opreme i izrade tehničke dokumentacije.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className={`cert-type-badge ${cert.category}`}>
                    {cert.category === "licenca" ? "Licenca" : "Ovlaštenje"}
                  </div>
                </div>

                <div className="cert-status">
                  <div className="cert-status-indicator active"></div>
                  <span className="cert-status-text">{cert.validity}</span>
                </div>
              </div>

              <div className="cert-content">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-details">
                  <div className="cert-detail-item">
                    <span className="cert-detail-label">Izdavač:</span>
                    <span className="cert-detail-value">{cert.issuer}</span>
                  </div>

                  <div className="cert-detail-item">
                    <span className="cert-detail-label">Kategorija:</span>
                    <span className="cert-detail-value">
                      <span className={`cert-category ${cert.category}`}>
                        {cert.category === "licenca" ? "Licenca" : "Ovlaštenje"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
