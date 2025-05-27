import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { toast } from "react-toastify";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAdd = () => {
  if (!product) return;
  addToCart(product);
};

  if (error) return <div className="p-10 text-red-600">Error: {error}</div>;
  if (loading) return <div className="flex justify-center items-center min-h-[60vh]">
              <div className="spinner-border" role="status">
                <span className="visually-hidden my-48">Loading...</span>
              </div>
            </div>
  return (
    <div className={styles.mainContainer}>
      <Link to="/shop" className={styles.keepShoppingButton}>
        <i className="fas fa-chevron-left"></i>
        Seguir Comprando <RiArrowRightSLine />
      </Link>
      <div className="container text-center my-5">
        <div className={styles.productsContainer}>
          <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
          </div>
            <div className={styles.productDetails}>
              <div>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>${product.price}</p>
                <button
                  className={styles.addToCartButton}
                  onClick={() => {
                    handleAdd();
                    toast.success("Producto agregado al carrito 🛒");
                  }}
                >
                  <FaCartPlus /> Agregar al carrito
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
