import React from 'react';
import './MensShop.css';

const womensProducts = [
  { id: 1, name: 'Women’s TShirt', price: '$40.00', image: 'https://images.unsplash.com/photo-1485218126466-34e6392ec754?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Women’s Jeans', price: '$30.00', image: 'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Women’s Hat', price: '$70.00', image: 'https://plus.unsplash.com/premium_photo-1671571592084-1fef547e09b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Women’s Jacket', price: '$60.00', image: 'https://images.unsplash.com/photo-1545885785-910f3bbf07a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Women’s Shoes', price: '$25.00', image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function WomenShop({ cart, setCart }) {
  const addToCart = (product) => {
    alert("Product added to Cart Successfully");
    setCart([...cart, product]);
  };

  return (
    <div className="women-shop">
      <header>
        <h2>Women's Products</h2>
      </header>
      <div className="product-grid">
        {womensProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenShop;
