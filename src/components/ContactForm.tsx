import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    setFormData({ name: '', email: '', subject: '', message: '' });
    if (onSuccess) onSuccess();
  };

  return (
    <>
      <form className={`contact-form ${state.succeeded ? 'contact-form--hidden' : ''}`} onSubmit={onSubmit}>
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
    </>
  );
};

export default ContactForm;
