import React from 'react';
import './MensShop.css';

const mensProducts = [
  { id: 1, name: 'Men’s T-Shirt', price: '$25.00', image: 'https://images.unsplash.com/photo-1499713907394-43c9d094ac2e?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Men’s Jeans', price: '$50.00', image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Men’s Jacket', price: '$75.00', image: 'https://images.unsplash.com/photo-1556098539-3019e1bdf05e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Men’s Shoes', price: '$60.00', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Men’s Hat', price: '$20.00', image: 'https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function MensShop({ cart, setCart }) {
  const addToCart = (product) => {
    alert("Product added to Cart Successfully");
    setCart([...cart, product]);
  };

  return (
    <div className="mens-shop">
      <header>
        <h2>Men's Products</h2>
      </header>
      <div className="product-grid">
        {mensProducts.map(product => (
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

export default MensShop;
