import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar({ cart, isLoggedIn, removeLogin }) {
  console.log(isLoggedIn);
  return (
    <header className="navbarHeader">
      <Link style={{textDecoration:"none"}} to="/"><div className="logo">P-Kart</div></Link>
      <nav className="nav">
        {/* <Link to="/shop">Shop</Link> */}
        {/* <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        { !isLoggedIn && <Link to="/signup">Signup</Link>}
        { !isLoggedIn && <Link to="/login">Login</Link>}
        <div className="cart-icon">
        <Link to="/cart">Cart ({cart ? cart.length : 0})</Link>
        </div>
        { isLoggedIn && <Link onClick={() => removeLogin()} to="/">Logout</Link>}
      </nav>
    </header>
  );
}

export default Navbar;
