import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
function Shop() {
  return (
  <>
  
    <section className="featured">
        
        <div className="product-grid">
          <Link to="/shop/mens">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1624378441287-7cd7d7aac84f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Men's Clothing" />
            <h3>Men's Clothing</h3>
            <p>Explore our latest collection of men's fashion</p>
          </div>
          </Link>
        <Link to={"/shop/women"}>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women's Clothing" />
            <h3>Women's Clothing</h3>
            <p>Discover the newest trends in women's wear</p>
          </div>
          </Link>
          <Link to={"/shop/kids"}>
          <div className="product-card">
            <img src="https://plus.unsplash.com/premium_photo-1682091309560-7efd86a53af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Children's Clothing" />
            <h3>Children's Clothing</h3>
            <p>Find stylish and comfortable clothes for kids</p>
          </div>
          </Link>
        </div>
      </section>
      </>
  )
}

export default Shop