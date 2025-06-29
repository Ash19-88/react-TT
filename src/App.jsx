import Header from "./components/header/Header";
import Nav from "./components/navBar/Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/admin/Admin";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
