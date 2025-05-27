import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { BsTrash3 } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const Cart = ({ items, setItems, increaseQuantity, decreaseQuantity }) => {
  const total = items.reduce((acc, item) => {
    if (!item || !item.price) return acc;
    return acc + item.price * (item.quantity || 1);
  }, 0);

  const clearCart = (id) => {
    const updatedCart = items.filter((item) => item.id !== id);
    setItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles.mainCartContainer}>
      <Link to="/shop" className={styles.keepShoppingButton}>
        <i className="fas fa-chevron-left"></i>
        Seguir Comprando <RiArrowRightSLine />
      </Link>
      <div className="container text-center my-5">
        <h1 className={styles.cartTitle}>Tu carrito de compras</h1>
        <section id="cart" className={styles.cartContainer}>
          <table className="table">
            <thead>
              <tr>
                <th className={styles.tableHead} scope="col">
                  Producto
                </th>
                <th className={styles.tableHead} scope="col">
                  Precio
                </th>
                <th className={styles.tableHead} scope="col">
                  Cantidad
                </th>
                <th className={styles.tableHead} scope="col">
                  Subtotal
                </th>
                <th className={styles.tableHead} scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={styles.cartItem}>
                  <td className={styles.productCart}>
                    <img
                      src={item.image}
                      className={`d-block w-100 ${styles.productCartImage}`}
                      alt={item.title}
                    />
                    <h2 className={styles.productCartTitle}>{item.title}</h2>
                  </td>
                  <td className={styles.tableData}>${item.price}</td>
                  <td className={styles.tableData}>
                    {" "}
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className={styles.quantityButton}
                    >
                      −
                    </button>
                    <span className={styles.quantityValue}>
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                    
                  </td>
                  <td className={styles.tableData}>
                    ${item.price * (item.quantity || 1)}
                  </td>
                  <td className={styles.tableData}>
                    <button
                      onClick={() => clearCart(item.id)}
                      className={styles.trashButton}
                    >
                      <BsTrash3 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className={styles.totalBox}>
            Total: $<span id="cart-total">{total.toFixed(2)}</span>
          </h3>
          <div className={styles.cartSummary}>
            <button id="checkout-button" className={styles.checkoutButton}>
              Pagar ahora ({items.length})
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
