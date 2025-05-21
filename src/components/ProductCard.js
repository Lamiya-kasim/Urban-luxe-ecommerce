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
      <div
        style={{
          width: '100%',
          height: '220px',
          overflow: 'hidden',
          borderRadius: '6px',
          marginBottom: '1rem'
        }}
      >
        <img
          src={`http://ecommercce.test/storage/${product.image}`}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
      <h3 style={{ fontWeight: 'bold' }}>{product.name}</h3>
      <p>₹{Number(product.price).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
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

