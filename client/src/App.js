import React,{useState} from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import MensShop from "./components/shop/MensShop";
import WomenShop from "./components/shop/WomenShop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Checkout from "./components/Checkout";


function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
    <Router>
    <Navbar cart={cart} isLoggedIn={isLoggedIn} removeLogin={() => setIsLoggedIn(false)}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setLogin={() => setIsLoggedIn(true)}/>}/>
        <Route path="/login" element={<Login setLogin={() => setIsLoggedIn(true)}/>}/>
        {isLoggedIn && <Route path="/shop" element={<Shop />} />}
        {isLoggedIn && <Route path="/shop/mens" element={<MensShop cart={cart} setCart={setCart}/>} />}
        {isLoggedIn && <Route path="/shop/women" element={<WomenShop cart={cart} setCart={setCart} />} />}
        {isLoggedIn && <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />}
        {isLoggedIn && <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>} />}
        
      </Routes>
    </Router>
  );
}

export default App;
