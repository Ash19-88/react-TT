import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";
import Loader from "../loader/Loader";

const ProductDetails = () => {
  const { addToCart, increaseQuantity, decreaseQuantity, removeItem, items } =
    useCart();
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let data;
        if (id.startsWith("fake-")) {
          // Producto de FakeStoreAPI
          const realId = id.replace("fake-", "");
          const response = await fetch(
            `https://fakestoreapi.com/products/${realId}`
          );
          if (!response.ok) throw new Error("Error fetching product");
          data = await response.json();
          data.name = data.title;
        } else {
          // Producto de MockAPI
          const response = await fetch(
            `https://685c7c7a769de2bf085ce002.mockapi.io/api/v1/products/${id}`
          );
          if (!response.ok) throw new Error("Error fetching product");
          data = await response.json();
          data.title = data.name;
        }
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const cartItem = product ? items.find((i) => i.id === product.id) : null;
  const quantity = cartItem ? cartItem.quantity : 0;

  if (error) return <div className="p-10 text-red-600">Error: {error}</div>;
  return (
    <div className={styles.mainContainer}>
      <Link
        to="/shop"
        aria-label="Seguir comprando"
        className={styles.keepShoppingButton}
      >
        <i className="fas fa-chevron-left"></i>
        Seguir Comprando <RiArrowRightSLine />
      </Link>
      <div className="container text-center my-5">
        {loading ? (
          <Loader text="Cargando detalle..." />
        ) : (
          <div className={styles.productsContainer}>
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productDetails}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>${product.price}</span>
                {quantity > 0 ? (
                  <div className={styles.counterBox}>
                    <button
                      className={styles.counterBtn}
                      onClick={() => {
                        if (quantity === 1) {
                          removeItem(product.id);
                        } else {
                          decreaseQuantity(product.id);
                        }
                      }}
                      aria-label="Disminuir cantidad"
                    >
                      -
                    </button>
                    <span className={styles.counterQty}>{quantity}</span>
                    <button
                      className={styles.counterBtn}
                      onClick={() => increaseQuantity(product.id)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={styles.addToCartButton}
                    onClick={() => addToCart(product)}
                    aria-label="Agregar al carrito"
                  >
                    <FaCartPlus /> Agregar al carrito
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
