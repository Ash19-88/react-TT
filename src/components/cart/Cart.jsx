import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
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
            <tbody id="cart-items"></tbody>
          </table>
          <h3 className={styles.totalBox}>
            Total: $<span id="cart-total">0.00</span>
          </h3>
          <div className={styles.cartSummary}>
            <button id="checkout-button" className={styles.checkoutButton}>
              Pagar
            </button>
            <Link to="shop.html" className={styles.keepShoppingButton}>
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
