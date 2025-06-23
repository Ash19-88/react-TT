import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./providers/CartProvider";
import AuthProvider from "./providers/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
