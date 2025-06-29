import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "../admin/Admin.module.css";
import PropTypes from "prop-types";

const DeleteProductModal = ({ product, onCancel, onConfirm }) => {
  if (!product) return null;

  return (
    <div
      className={`modal show d-block ${styles.modalOverlay}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h5 className={styles.modalTitle}>¿Eliminar producto?</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Cerrar modal de eliminación"
              onClick={onCancel}
            ></button>
          </div>
          <div className={styles.modalBody}>
            <p>
              ¿Estás seguro de que deseas eliminar <b>{product.name}</b>?
            </p>
          </div>
          <div className={styles.modalFooter}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
              aria-label="Cancelar eliminación"
            >
              Cancelar
            </button>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={onConfirm}
              aria-label={`Eliminar producto ${product.name} definitivamente`}
            >
              <FaTrash className={styles.icon} aria-hidden="true" />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteProductModal.propTypes = {
  product: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteProductModal;