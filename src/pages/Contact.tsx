import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '../components/Navbar';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [state, handleSubmit] = useForm("xbdzbeqz");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <main className="main-bg contact-page">
        <div className="container-contact">
          
          <section className="contact-header">
            <h1 className="contact-main-title">
              ¿Nos ponemos en <span className="highlight-lime">contacto?</span>
            </h1>
            <p className="contact-subtitle">
              Para cualquier consulta o idea, no dudes en contactar conmigo.
            </p>
          </section>

          <div className="contact-grid">
            {/* Info de contacto rápido */}
            <div className="contact-info">
              <div className="info-item">
                <h3 className="highlight-lime">Ubicación</h3>
                <p>Málaga, España</p>
              </div>
              <div className="info-item">
                <h3 className="highlight-lime">Email</h3>
                <p>
                  <a href="mailto:rafa.medina.quelle@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                    rafa.medina.quelle@gmail.com
                  </a>
                </p>
              </div>
              <div className="info-item">
                <h3 className="highlight-lime">Teléfono</h3>
                <p>
                  <a href="tel:+34622871101" style={{ color: '#fff', textDecoration: 'none' }}>+34 622 871 101</a>
                </p>
              </div>
              <div className="info-item">
                <h3 className="highlight-lime">Redes</h3>
                <div className="contact-socials">
                  <a href="https://www.linkedin.com/in/rafael-medina-quelle/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/rafakata" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://x.com/quelledev" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="contact-form-shell">
              <form className={`contact-form ${state.succeeded ? 'contact-form--hidden' : ''}`} onSubmit={e => { handleSubmit(e); setFormData({ ...formData, name: '', email: '', subject: '', message: '' }); }}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                  <ValidationError prefix="Nombre" field="name" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                  />
                  <ValidationError prefix="Asunto" field="subject" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame un poco sobre tu idea..."
                    required
                  ></textarea>
                  <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={state.submitting}>
                  {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
              {state.succeeded && (
                <div className="contact-success-overlay" role="status" aria-live="polite">
                  <i className="bi bi-check-circle-fill contact-success-icon" aria-hidden="true"></i>
                  <p className="contact-success-title">Correo enviado correctamente</p>
                  <p className="contact-success-text">Gracias por contactar, te responderé pronto.</p>
                </div>
              )}
            </div>
          </div>

          <section className="contact-map-section" aria-label="Mapa de Málaga">
            <h2 className="contact-map-title">Dónde estoy</h2>
            <MapContainer
              center={[36.7213, -4.4214]}
              zoom={13}
              scrollWheelZoom={false}
              className="contact-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> & <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <CircleMarker center={[36.7213, -4.4214]} radius={10} pathOptions={{ color: '#cbff31', fillColor: '#cbff31', fillOpacity: 0.9 }}>
              </CircleMarker>
            </MapContainer>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;