import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main>
      <div className={`container ${styles.contactContainer}`}>
        <h1 className={styles.contactTitle}>Contáctanos</h1>
        <form
          id="contact-form"
          action="https://formspree.io/f/xanyjlan"
          method="POST"
          role="form"
        >
          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="name"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
            />
          </div>

          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className={`form-control ${styles.formControl}`}
              id="email"
              name="email"
              required
              aria-required="true"
              autoComplete="email"
            />
          </div>

          <div className={`form-group ${styles.formGroup}`}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              className={`form-control ${styles.formControl}`}
              id="message"
              name="message"
              rows="4"
              required
              aria-required="true"
              autoComplete="off"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`btn ${styles.submitButton}`}
            aria-label="Enviar mensaje de contacto"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className={styles.mapContainer}>
          <h3 className={styles.contactTitle}>También puedes visitarnos aquí</h3>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419398.833502436!2d-58.76389890429312!3d-34.79201698561431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd72c1e32989b%3A0xf170863e06431d0a!2sPlaza%20Las%20Heras!5e0!3m2!1ses-419!2sar!4v1731532468696!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
