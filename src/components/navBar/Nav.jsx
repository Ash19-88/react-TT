import React, { useRef, useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";

const Nav = () => {
  const { items } = useCart();
  const { isAuthenticated, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const totalQuantity = items.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  // Cierra el menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú al hacer click en un link
  const handleNavItemClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg ${styles.nav}`} ref={navRef}>
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler1"
          aria-controls="navbarToggler1"
          aria-expanded={menuOpen}
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarToggler1"
        >
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navList}`}>
            <li>
              <Link to="/shop" aria-label="Ir a tienda" onClick={handleNavItemClick}>
                Tienda
              </Link>
            </li>
            <li>
              <Link to="/about" aria-label="Sobre Nosotros" onClick={handleNavItemClick}>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Contacto" onClick={handleNavItemClick}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/cart" aria-label="Ver carrito" onClick={handleNavItemClick}>
                <FaShoppingCart className={styles.icon} aria-hidden="true" />
                {totalQuantity > 0 && `(${totalQuantity})`}
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                {user?.role === "admin" && (
                  <li>
                    <Link
                      to="/admin"
                      className="nav-link"
                      aria-label="Panel de administración"
                      onClick={handleNavItemClick}
                    >
                      <FaUserShield className={styles.icon} aria-hidden="true" />
                      Admin
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={logout}
                    className={styles.btnLogout}
                    aria-label="Cerrar sesión"
                  >
                    <FaSignOutAlt className={styles.icon} aria-hidden="true" />
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="nav-link"
                  aria-label="Iniciar sesión"
                  onClick={handleNavItemClick}
                >
                  <FaSignInAlt className={styles.icon} aria-hidden="true" />
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
