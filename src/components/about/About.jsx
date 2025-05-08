import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={`container ${styles.aboutContainer}`}>
        <h1 className={styles.aboutTitle}>Sobre Nosotros</h1>
        <p className={styles.aboutDescription}>
          {" "}
          Somos una empresa dedicada a brindar productos de calidad y servicio
          excepcional a nuestros clientes. Nuestra misión es ofrecer una
          experiencia única en cada compra, garantizando la satisfacción y
          bienestar de nuestros consumidores. Nos esforzamos por mejorar cada
          día y adaptarnos a las necesidades del mercado y nuestros clientes
        </p>
        <section className={styles.valuesSection}>
          <h2 className={styles.valuesTitle}>Nuestros Valores</h2>
          <div className={styles.valueItem}>
            <h4>Compromiso</h4>
            <p>
              {" "}
              Nos comprometemos a brindar lo mejor en cada aspecto de nuestro
              negocio, desde la selección de productos hasta la atención al
              cliente
            </p>
          </div>
          <div className={styles.valueItem}>
            <h4>Calidad</h4>
            <p>
              La calidad es nuestra prioridad, asegurándonos de que cada
              producto cumpla con los estándares más altos.
            </p>
          </div>
          <div className={styles.valueItem}>
            <h4>Innovación</h4>
            <p>
              Buscamos innovar y mejorar continuamente para ofrecer lo mejor y
              adelantarnos a las necesidades de nuestros clientes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
