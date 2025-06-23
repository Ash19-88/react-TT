import styles from "./Cart.module.css";
import { BsTrash3 } from "react-icons/bs";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <tr className={styles.cartItem}>
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
        <button
          onClick={() => decreaseQuantity(item.id)}
          className={styles.quantityButton}
        >
          −
        </button>
        <span className={styles.quantityValue}>{item.quantity || 1}</span>
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
          onClick={() => removeItem(item.id)}
          className={styles.trashButton}
        >
          <BsTrash3 size={18} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
