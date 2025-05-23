import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";

const Shop = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }

      const apiProducts = await response.json();
      const filteredProducts = apiProducts.filter(
        (product) =>
          product.category === "men's clothing" ||
          product.category === "women's clothing" ||
          product.category === "jewelery"
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <div className="flex min-h-[60vh] justify-center items-center">Error: {error}</div>;

  return (
    <div className={styles.shopContainer}>
      <div class="container text-center my-5">
        <div className={styles.productsContainer}>
          <h1 className={styles.productsTitle}>
            Descubre nuestras mejores selecciones
          </h1>
          {loading ? (
            <div className="flex justify-center items-center min-h-[60vh]">
              <div className="spinner-border" role="status">
                <span className="visually-hidden my-48">Loading...</span>
              </div>
            </div>
          ) : (
            <div className={styles.apiProductsContainer}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <p className={styles.productPrice}>${product.price}</p>
                  <button className={styles.viewDescription}>
                    Ver descripción
                  </button>
                  <button className={styles.shopButton} onClick={() => addToCart(product)}>
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
