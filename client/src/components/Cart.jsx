import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  // Calculate total price of items in cart
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0);

  // Function to remove a product from cart
  const removeFromCart = (productToRemove,idx) => {
    // setCart(prevCart => prevCart.filter(product => product.id !== productToRemove.id));
    setCart(cart.filter((item, index) => index !== idx));
    alert("Product Removed from Cart")
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  console.log(cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product,idx) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => removeFromCart(product,idx)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={() => handleCheckout()}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
