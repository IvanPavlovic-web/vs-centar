import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setIsSubmitting(false);
      setSubmitMessage(
        "Hvala vam! Vaša poruka je uspješno poslana. Kontaktiraćemo vas u najkraćem mogućem roku."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Telefon",
      info: "+387 65-623-892",
      subInfo: "Pon–Pet: 07:00–17:00",
      link: "tel:+38765623892",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "prodaja@vatroserviscentar.org",
      subInfo: "Odgovaramo u roku od 24 sata",
      link: "mailto:prodaja@vatroserviscentar.org",
    },
    {
      icon: <MapPin size={24} />,
      title: "Adresa",
      info: "M4 bb Ramići, Banjaluka, 78000",
      subInfo: "Bosna i Hercegovina",
      link: "https://www.google.com/maps/place/Vatroservis+centar/@44.8505618,17.1687475,17z/data=!3m1!4b1!4m6!3m5!1s0x4760aa73dc577d21:0x2f01c79191d34f12!8m2!3d44.8505618!4d17.1687475!16s%2Fg%2F11cjkppgts?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    },
    {
      icon: <Clock size={24} />,
      title: "Radno vrijeme",
      info: "Pon–Pet: 07:00–17:00",
      subInfo: "Sub-Ned: Zatvoreno",
      link: null,
    },
  ];

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <CheckCircle size={16} />
            <span>Kontakt</span>
          </div>

          <h2 className="contact-title">
            Pošaljite nam <span className="contact-highlight">upit</span>
          </h2>

          <p className="contact-subtitle">
            Stojimo vam na raspolaganju za sva pitanja vezana za protivpožarnu
            zaštitu, servis i obuke
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="contact-content-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-label">Ime i prezime *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Unesite ime i prezime"
                    className="contact-input"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">Email adresa *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ime@domena.com"
                    className="contact-input"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-label">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+387 65 123 456"
                    className="contact-input"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">Predmet *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-select"
                    required
                  >
                    <option value="">Odaberite predmet</option>
                    <option value="ponuda">Zahtjev za ponudu</option>
                    <option value="servis">Zahtjev za servis</option>
                    <option value="obuka">Informacije o obukama</option>
                    <option value="ostalo">Ostalo</option>
                  </select>
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">Poruka *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Detaljno opišite vaš zahtjev..."
                  className="contact-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`contact-submit-btn ${
                  isSubmitting ? "submitting" : ""
                }`}
              >
                <Send size={20} />
                <span>{isSubmitting ? "Slanje..." : "Pošalji poruku"}</span>
              </button>

              {submitMessage && (
                <div className="contact-success-message">
                  <CheckCircle size={20} />
                  <span>{submitMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="contact-sidebar">
            <h3 className="contact-sidebar-title">Kontakt informacije</h3>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-info-link">
                        {info.info}
                      </a>
                    ) : (
                      <p className="contact-info-text">{info.info}</p>
                    )}
                    {info.subInfo && (
                      <p className="contact-info-subtext">{info.subInfo}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="contact-emergency-card">
              <div className="contact-emergency-icon">
                <AlertCircle size={32} />
              </div>
              <div className="contact-emergency-content">
                <h4 className="contact-emergency-title">Hitne intervencije</h4>
                <p className="contact-emergency-text">
                  Dostupni smo 24/7 za hitne intervencije
                </p>
                <a href="tel:+38765623892" className="contact-emergency-btn">
                  +387 65-623-892
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
