import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find(item => item._id === product._id);
      const updatedCart = exists
        ? prevCart.map(item =>
            item._id === product._id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...prevCart, { ...product, qty: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
