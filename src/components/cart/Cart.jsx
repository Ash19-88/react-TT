import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { RiArrowRightSLine } from "react-icons/ri";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart";

const Cart = () => {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    total,
  } = useCart();

  return (
    <div className={styles.mainCartContainer}>
      <Link to="/shop" className={styles.keepShoppingButton}>
        Seguir Comprando <RiArrowRightSLine />
      </Link>
      <div className="container text-center my-5">
        <h1 className={styles.cartTitle}>Tu carrito de compras</h1>
        <section className={styles.cartContainer}>
          <table className="table">
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
          <h3 className={styles.totalBox}>
            Total: $<span>{total.toFixed(2)}</span>
          </h3>
          <div className={styles.cartSummary}>
            <button className={styles.checkoutButton}>
              Pagar ahora ({items.length})
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
