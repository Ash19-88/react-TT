import React from "react";
import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; <span>{new Date().getFullYear()}</span> Ash Market{" "}
        <span>- All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
