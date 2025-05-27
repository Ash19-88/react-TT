import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Página no encontrada</p>
      <Link to="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;