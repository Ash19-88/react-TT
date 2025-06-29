import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductForm from "../productForm/ProductForm";
import styles from "./Admin.module.css";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";
import EditProductModal from "../modals/EditProductModal";
import DeleteProductModal from "../modals/DeleteProductModal";

const Admin = () => {
  const { products, loading, error, deleteProduct, updateProduct } =
    useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 6;

  // Filtrado por nombre
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProduct(editingProduct.id, editingProduct);
    toast.success("Producto editado correctamente");
    setEditingProduct(null);
  };

  return (
    <div className={styles.mainContainer}>
      <div className="container text-center my-5 min-vh-100">
        <h2>Panel de administración</h2>
        <div className={styles.topBar}>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar por nombre..."
          />
          <button
            className={styles.addButton}
            onClick={() => setShowForm((prev) => !prev)}
            aria-label={
              showForm
                ? "Cerrar formulario de producto"
                : "Abrir formulario para agregar producto"
            }
          >
            {!showForm && <FaPlus className={styles.icon} aria-hidden="true" />}
            {showForm ? "Cerrar formulario" : "Agregar producto"}
          </button>
        </div>
        {showForm && <ProductForm />}
        <p className={styles.subtitle}>Administrar productos</p>
        {error && <p className={styles.error}>{error}</p>}
        {loading ? (
          <Loader text="Cargando productos..." />
        ) : (
          <>
            {!loading && filteredProducts.length === 0 && (
              <div
                className={styles.noResults}
                role="status"
                aria-live="polite"
              >
                No se encontraron productos.
              </div>
            )}
            {!loading && filteredProducts.length > 0 && (
              <div className={styles.gridContainer}>
                {paginatedProducts.map((prod) => (
                  <div key={prod.id} className={styles.card}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>{prod.name}</h5>
                      <p className={styles.cardPrice}>${prod.price}</p>
                      <p className={styles.cardDescription}>
                        {prod.description}
                      </p>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className={styles.editButton}
                          onClick={() => setEditingProduct(prod)}
                          aria-label="Editar producto"
                        >
                          <FaEdit className={styles.icon} />
                          Editar
                        </button>
                        <button
                          className={styles.deleteButton}
                          onClick={() => setProductToDelete(prod)}
                          aria-label="Eliminar producto"
                        >
                          <FaTrash className={styles.icon} />
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onChange={setEditingProduct}
          onSubmit={handleEditSubmit}
        />
        <DeleteProductModal
          product={productToDelete}
          onCancel={() => setProductToDelete(null)}
          onConfirm={() => {
            deleteProduct(productToDelete.id);
            setProductToDelete(null);
            toast.success("Producto eliminado correctamente");
          }}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Admin;