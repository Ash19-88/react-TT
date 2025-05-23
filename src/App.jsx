
import Header from './components/header/Header'
import Nav from './components/navBar/Nav'
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/home/Home';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [items,setItems]= useState(() => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addToCart = (item) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      setItems(items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)));
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  }

  return (
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop  addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart  items={items} setItems={setItems}/>} />
        </Routes>
        <Footer/>
      </>
  )
}

export default App