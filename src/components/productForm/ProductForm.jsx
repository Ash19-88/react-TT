import styles from "./ProductForm.module.css";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  price: "",
  description: "",
  image: "",
};

export default function ProductForm() {
  const { createProduct, loading } = useProducts();
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "El nombre es obligatorio.";
    if (!form.price || Number(form.price) <= 0)
      return "El precio debe ser mayor a 0.";
    if (form.description.trim().length < 10)
      return "La descripción debe tener al menos 10 caracteres.";
    if (!form.image.trim()) return "La URL de la imagen es obligatoria.";
    // Valido formato de URL de imagen
    const urlPattern = /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i;
    if (!urlPattern.test(form.image.trim()))
      return "La URL de la imagen no es válida (debe terminar en .jpg, .jpeg, .png, .webp o .gif)";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    try {
      await createProduct(form);
      setForm(initialState);
      toast.success("Producto agregado correctamente");
    } catch {
      toast.error("Error al agregar el producto");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}
      role="form"
      aria-busy={loading}
    >
      <label htmlFor="name" className="visually-hidden">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className={styles.input}
        required
        aria-label="Nombre del producto"
        autoComplete="off"
      />
      <label htmlFor="price" className="visually-hidden">
        Precio
      </label>
      <input
        id="price"
        name="price"
        type="number"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        className={styles.input}
        required
        aria-label="Precio del producto"
      />
      <label htmlFor="description" className="visually-hidden">
        Descripción
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        className={styles.textarea}
        required
        aria-label="Descripción del producto"
      />
      <label htmlFor="image" className="visually-hidden">
        URL de la imagen
      </label>
      <input
        id="image"
        name="image"
        placeholder="URL de la imagen"
        value={form.image}
        onChange={handleChange}
        className={styles.input}
        required
        aria-label="URL de la imagen del producto"
      />
      <button
        type="submit"
        className={styles.button}
        disabled={loading}
        aria-label="Agregar producto"
      >
        Agregar producto
      </button>
    </form>
  );
}
