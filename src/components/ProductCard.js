import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{
      border: '1px solid #eee',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      background: '#fff'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button style={{
        padding: '0.5rem 1rem',
        background: '#222',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
