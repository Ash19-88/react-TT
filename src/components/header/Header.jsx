import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/navLogo.png";

const Header = () => {
  return (
    <header className={styles.header} role="banner" aria-label="Ash Market encabezado">
      <section className={styles.headerSection}>
        <img
          src={logo}
          alt="Logo de Ash Market"
          width="80"
        />
        <div className={styles.headerTitle}>
          <h1>Ash Market</h1>
          <p className={styles.clothing}>Clothing</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
