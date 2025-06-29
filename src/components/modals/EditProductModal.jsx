import React from "react";
import styles from "../admin/Admin.module.css";
import PropTypes from "prop-types";

const EditProductModal = ({ product, onClose, onSubmit, onChange }) => {
  if (!product) return null;

  return (
    <div
      className={`modal show d-block ${styles.modalOverlay}`}
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalEditarProducto"
    >
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <form onSubmit={onSubmit}>
            <div className={styles.modalHeader}>
              <h5 className={styles.modalTitle} id="modalEditarProducto">
                Editar producto
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Cerrar formulario de edición"
                onClick={onClose}
              ></button>
            </div>
            <div className={styles.modalBody}>
              <label htmlFor="edit-name" className="visually-hidden">Nombre</label>
              <input
                id="edit-name"
                name="name"
                className="form-control mb-2"
                type="text"
                value={product.name}
                onChange={(e) => onChange({ ...product, name: e.target.value })}
                placeholder="Nombre"
                required
                aria-label="Nombre"
                autocomplete="off"
              />
              <label htmlFor="edit-price" className="visually-hidden">Precio</label>
              <input
                id="edit-price"
                name="price"
                className="form-control mb-2"
                type="number"
                value={product.price}
                onChange={(e) => onChange({ ...product, price: e.target.value })}
                placeholder="Precio"
                required
                aria-label="Precio"
                autocomplete="off"
              />
              <label htmlFor="edit-image" className="visually-hidden">URL de imagen</label>
              <input
                id="edit-image"
                name="image"
                className="form-control mb-2"
                type="text"
                value={product.image}
                onChange={(e) => onChange({ ...product, image: e.target.value })}
                placeholder="URL de imagen"
                required
                aria-label="URL de imagen"
                autocomplete="off"
              />
              <label htmlFor="edit-description" className="visually-hidden">Descripción</label>
              <textarea
                id="edit-description"
                name="description"
                className="form-control"
                value={product.description}
                onChange={(e) => onChange({ ...product, description: e.target.value })}
                placeholder="Descripción"
                minLength={10}
                required
                aria-label="Descripción"
              />
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.deleteButton}
                onClick={onClose}
                aria-label="Cancelar edición"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={styles.editButton}
                aria-label="Guardar cambios"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

EditProductModal.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditProductModal;