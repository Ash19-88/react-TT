import { Link, useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Cart = () => {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    total,
    clearCart,
    emptyCart,
  } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      emptyCart();
      toast.success("¡Pago realizado con éxito! Gracias por tu compra.");
    }
  };

  return (
    <div className={styles.mainCartContainer}>
      <Link
        to="/shop"
        className={styles.keepShoppingButton}
        aria-label="Seguir comprando"
      >
        Seguir Comprando <RiArrowRightSLine aria-hidden="true" />
      </Link>
      <div className="container text-center my-5">
        <h1 className={styles.cartTitle} id="cart-title">
          Tu carrito de compras
        </h1>
        <section
          className={styles.cartContainer}
          role="region"
          aria-labelledby="cart-title"
        >
          <table
            className="table"
            aria-label="Lista de productos en el carrito"
          >
            <thead>
              <tr>
                <th className={styles.tableHead}>Producto</th>
                <th className={styles.tableHead}>Precio</th>
                <th className={styles.tableHead}>Cantidad</th>
                <th className={styles.tableHead}>Subtotal</th>
                <th className={styles.tableHead}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeItem={removeItem}
                />
              ))}
            </tbody>
          </table>
          <h3 className={styles.totalBox} aria-live="polite">
            Total: $<span>{total.toFixed(2)}</span>
          </h3>
          <div className={styles.cartSummary}>
            <button
              className={styles.checkoutButton}
              onClick={handleCheckout}
              disabled={items.length === 0}
              aria-label="Pagar ahora"
            >
              Pagar ahora ({items.length})
            </button>
            <button
              className={styles.clearCartButton}
              onClick={() => clearCart(true)}
              disabled={items.length === 0}
              aria-label="Vaciar carrito"
            >
              Vaciar carrito
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
