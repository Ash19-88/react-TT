import styles from "./Cart.module.css";
import { BsTrash3 } from "react-icons/bs";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <tr className={styles.cartItem}>
      <td className={styles.productCart}>
        <img
          src={item.image}
          className={`d-block w-100 ${styles.productCartImage}`}
          alt={item.title || item.name}
        />
        <h2 className={styles.productCartTitle}>{item.title || item.name}</h2>
      </td>
      <td className={styles.tableData}>${item.price}</td>
      <td className={styles.tableData}>
        <div className={styles.quantityControl} role="group" aria-label={`Cantidad de ${item.title || item.name}`}>
          <button
            onClick={() => decreaseQuantity(item.id)}
            aria-label={`Disminuir cantidad de ${item.title || item.name}`}
            className={styles.quantityButton}
          >
            −
          </button>
          <span className={styles.quantityValue} aria-live="polite">
            {item.quantity || 1}
          </span>
          <button
            onClick={() => increaseQuantity(item.id)}
            aria-label={`Aumentar cantidad de ${item.title || item.name}`}
            className={styles.quantityButton}
          >
            +
          </button>
        </div>
      </td>
      <td className={styles.tableData}>
        ${item.price * (item.quantity || 1)}
      </td>
      <td className={styles.tableData}>
        <button
          onClick={() => removeItem(item.id)}
          className={styles.trashButton}
          aria-label={`Eliminar ${item.title || item.name} del carrito`}
        >
          <BsTrash3 size={18} aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
