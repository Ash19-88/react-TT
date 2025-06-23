import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import CartContext from "../context/CartContext";


export default function CartProvider({children}) {
   const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addToCart = (item) => {
    if (!item || !item.id || !item.price) {
      console.warn("Item inválido al intentar agregar al carrito:", item);
      return;
    }

    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
    toast.success("Producto agregado al carrito");
  };

  const increaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      )
    );
  };

   const removeItem = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto eliminará el producto del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      const updatedCart = items.filter((item) => item.id !== id);
      setItems(updatedCart);
      toast.info("Producto eliminado del carrito");
    }
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Carrito vaciado");
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}