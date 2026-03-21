import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);



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

            {/* Formulario extraído como componente */}
            <div className="contact-form-shell">
              <ContactForm />
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