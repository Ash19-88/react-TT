import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchbar/SearchBar";

const MOCKAPI_URL =
  "https://685c7c7a769de2bf085ce002.mockapi.io/api/v1/products";

const Shop = () => {
  const { addToCart, increaseQuantity, decreaseQuantity, removeItem, items } =
    useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Trae productos de FakeStoreAPI
      const responseFake = await fetch("https://fakestoreapi.com/products");
      if (!responseFake.ok) throw new Error("Error en FakeStoreAPI");
      const fakeProducts = await responseFake.json();
      const filteredFake = fakeProducts
        .filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing" ||
            product.category === "jewelery"
        )
        .map((p) => ({
          id: `fake-${p.id}`,
          name: p.title,
          price: p.price,
          description: p.description,
          image: p.image,
          source: "fakeapi",
        }));

      // 2. Trae productos de MockAPI
      const responseMock = await fetch(MOCKAPI_URL);
      if (!responseMock.ok) throw new Error("Error en MockAPI");
      const mockProducts = await responseMock.json();
      const mappedMock = mockProducts.map((p) => ({
        ...p,
        source: "mockapi",
      }));

      // 3. Combina ambos arrays
      setProducts([...mappedMock, ...filteredFake]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error)
    return (
      <div className="flex min-h-[60vh] justify-center items-center">
        Error: {error}
      </div>
    );

  // Filtrado solo por nombre
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.shopContainer}>
      <div className="container text-center my-5">
        <div className={styles.productsContainer}>
          <h1 className={styles.productsTitle}>
            Descubre nuestras mejores selecciones
          </h1>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Buscar por nombre..."
          />
          {loading ? (
            <Loader text="Cargando productos..." />
          ) : (
            <>
              {!loading && filteredProducts.length === 0 && (
                <div
                  className={styles.noResults}
                  role="status"
                  aria-live="polite"
                >
                  No se encontraron productos.
                </div>
              )}
              {!loading && filteredProducts.length > 0 && (
                <div className={styles.apiProductsContainer}>
                  {paginatedProducts.map((product) => {
                    const cartItem = items.find(
                      (item) => item.id === product.id
                    );
                    const quantity = cartItem ? cartItem.quantity : 0;
                    return (
                      <div key={product.id} className={styles.productCard}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`${styles.productImage} ${
                            product.source === "fakeapi" ? styles.contain : ""
                          }`}
                        />
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <p className={styles.price}>${product.price}</p>
                        <div className={styles.productButtons}>
                          <button
                            className={styles.viewDescription}
                            title="Ver detalles"
                            aria-label={`Ver detalles de ${product.name}`}
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            Descripción
                          </button>
                          {quantity > 0 ? (
                            <div className={styles.counterBox}>
                              <button
                                className={styles.counterBtn}
                                onClick={() => {
                                  if (quantity === 1) {
                                    removeItem(product.id);
                                  } else {
                                    decreaseQuantity(product.id);
                                  }
                                }}
                                aria-label={`Disminuir cantidad de ${product.name}`}
                              >
                                -
                              </button>
                              <span className={styles.counterQty}>
                                {quantity}
                              </span>
                              <button
                                className={styles.counterBtn}
                                onClick={() => increaseQuantity(product.id)}
                                aria-label={`Aumentar cantidad de ${product.name}`}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              className={styles.shopButton}
                              onClick={() => addToCart(product)}
                              title="Agregar al carrito"
                              aria-label={`Agregar ${product.name} al carrito`}
                            >
                              <FaCartPlus size={24} aria-hidden="true" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
