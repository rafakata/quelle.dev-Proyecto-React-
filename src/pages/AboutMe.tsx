import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const AboutMe: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-bg about-me-page">
        <div className="container-about">
          
          {/* Cabecera de la sección */}
          <section className="about-hero">
            <h1 className="about-main-title">
              Detrás del <span className="highlight-lime">código</span>
            </h1>
            <p className="about-subtitle">
              Un poco más sobre quién soy y cómo entiendo la tecnología.
            </p>
          </section>

          <div className="about-grid">
            {/* Lado Izquierdo: Datos Personales */}
            <div className="about-personal">
              <div className="personal-card">
                <img 
                  src="/assets/projects/fotoperfil.png" 
                  alt="Foto de perfil de Rafael Medina Quelle" 
                  className="personal-photo"
                />
                <h2 className="personal-title">Rafael Medina Quelle</h2>
                <ul className="personal-list">
                  <li><strong>Origen:</strong> Málaga, España</li>
                  <li><strong>Nacimiento:</strong> 11 de Enero de 2001</li>
                </ul>
              </div>
            </div>

            {/* Lado Derecho: Historia y Formación */}
            <div className="about-story">

              <div className="story-block highlight-block">
                <h3>¿Por qué quelle.dev?</h3>
                <p>
                  Quelle.dev es mi forma de decir que la tecnología no debería ser fría. Mi formación humanista me permite 
                  comunicarme con clientes de pymes malagueñas de forma clara, sin tecnicismos innecesarios, traduciendo 
                  sus necesidades de negocio a un software robusto y con visión comercial.
                </p>
              </div>
              <h2 className="section-divider-title">Estudios</h2>
              <div className="story-block">
                <h3>Grado en Historia</h3>
                <p>
                  Muchos se preguntan qué hace un, casi, historiador en el mundo del desarrollo Fullstack. La respuesta es sencilla: 
                  <strong> análisis</strong>. La carrera me enseñó a investigar fuentes masivas, encontrar patrones en el caos 
                  y, sobre todo, a entender el comportamiento humano. En el entorno tech, esto se traduce en una capacidad 
                  analítica superior para resolver bugs complejos y una sensibilidad especial para la UX/UI.
                </p>
              </div>

              <div className="story-block">
                <h3>Desarrollo de Aplicaciones Web (DAW)</h3>
                <p>
                  Aquí es donde mi capacidad de análisis se convirtió en construcción. No me limito al ecosistema de 
                  <strong> JavaScript y TypeScript</strong> con React y Node.js; mi formación abarca desde el desarrollo 
                  backend robusto con <strong>PHP</strong> hasta la gestión avanzada de bases de datos <strong>SQL (MySQL, SQLite)</strong>. 
                  He trasteado con integraciones modernas en <strong>Firebase</strong> y estructurado arquitecturas escalables bajo el patrón DAO. 
                  No solo escribo líneas de código; documento procesos y diseño soluciones pensando en su evolución técnica.
                </p>
              </div>

              <div className="story-block">
                <h3>Marketing y Transformación Digital</h3>
                <p>
                  Para complementar mi perfil técnico, me he especializado con el curso de <strong>Marketing Digital y E-Commerce</strong> 
                  y el programa de <strong>Generación Digital: Agentes del Cambio</strong>. Entiendo que una web no es un ente aislado, 
                  sino una herramienta de negocio que requiere estrategia de contenidos, análisis de KPIs y una digitalización real 
                  de los procesos para aportar valor de verdad.
                </p>
              </div>

              {/* Nueva sección: Experiencia de campo */}
              <div className="story-block">
                <h2 className="section-divider-title">Experiencia laboral</h2>
                <div className="experience-item">
                  <h4>Vendedor y Encargado • Arte y Estilo</h4>
                  <p>
                    Años de trato directo con el público y gestión de inventarios. Aquí aprendí la habilidad más importante en IT: 
                    <strong> saber escuchar al cliente</strong>. Traducir una necesidad estética en una venta real me dio la 
                    capacidad de persuasión y resolución que hoy aplico al plantear soluciones web comerciales.
                  </p>
                </div>
                <div className="experience-item">
                  <h4>Entrenador de Fútbol 7 • Olímpica Victoriana</h4>
                  <p>
                    Liderar equipos y coordinar con familias requiere <strong>planificación meticulosa y liderazgo positivo</strong>. 
                    Un equipo de fútbol y un equipo de desarrollo comparten el mismo núcleo: coordinación, estrategia bajo presión 
                    y un objetivo común claro.
                  </p>
                </div>
              </div>

              {/* Nueva sección: Más sobre mí */}
              <div className="story-block personal-section">
                <h2 className="section-divider-title">En mi tiempo libre</h2>
                <p className="desenfadado-text">
                  Si no me ves "trasteando" con alguna librería nueva o investigando el porqué de alguna cosa por pura curiosidad, 
                  probablemente me encuentres viendo al <strong>Málaga CF</strong> (sí, sufriendo, pero ahí estamos), en el gimnasio, jugando a 
                  videojuegos o leyendo algún cómic. Me pierdo por un buen libro, una serie que enganche o una película de las que 
                  te dejan pensando. Soy una persona muy sociable, de los que piensan que con buen humor se trabaja mejor. 
                  ¡Siempre con ganas de aprender algo nuevo y ver qué hay debajo del capó!
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;