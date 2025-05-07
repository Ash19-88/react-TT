import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/navlogo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <img src={logo} alt="Ash Market Logo" width="80" />
        <div className={styles.headerTitle}>
          <h1>Ash Market</h1>
          <p className={styles.clothing}>Clothing</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
