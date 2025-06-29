import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Pagination.module.css";
import { useEffect, useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (totalPages <= 1) return null;

  let pages = [];
  if (isMobile && totalPages > 3) {
    // Solo muestra la página actual y una antes/después
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);
    if (currentPage === 1) end = 3;
    if (currentPage === totalPages) start = totalPages - 2;
    pages = [];
    for (let i = start; i <= end; i++) {
      if (i > 0 && i <= totalPages) pages.push(i);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  return (
    <nav className={styles.paginationNav} aria-label="Paginación de productos">
      <ul className={styles.paginationList}>
        <li>
          <button
            className={styles.pageButton}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            <FaChevronLeft />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ""}`}
              onClick={() => onPageChange(page)}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={styles.pageButton}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;