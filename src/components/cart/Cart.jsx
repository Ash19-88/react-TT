import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = ({ items, setItems }) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const clearCart = (id) => {
    const updatedCart = items.filter((item) => item.id !== id);
    setItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.mainCartContainer}>
      <div className="container text-center my-5">
        <section id="cart" className={styles.cartContainer}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity || 1}</td>
                <td>${item.price * (item.quantity || 1)}</td>
                <td>
                  <button onClick={() => clearCart(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </table>
          <h3 className={styles.totalBox}>
            Total: $<span id="cart-total">{total.toFixed(2)}</span>
          </h3>
          <div className={styles.cartSummary}>
            <button id="checkout-button" className={styles.checkoutButton}>
              Pagar
            </button>
            <Link to="/shop" className={styles.keepShoppingButton}>
              <i className="fas fa-chevron-left"></i>
              Seguir Comprando
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
