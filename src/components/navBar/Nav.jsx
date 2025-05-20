import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.nav}`}>
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler1"
          aria-controls="navbarToggler1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler1">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navList}`}>
            <li>
              <Link to="/shop">Tienda</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/cart">Mi carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
