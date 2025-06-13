import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ShoesPage() {
  const [shoesProducts, setShoesProducts] = useState([]);

  useEffect(() => {
    fetch('http://ecommercce.test/api/products')
      .then(res => res.json())
      .then(data => {
        // Robust filter for category "sandals" (case and space insensitive)
        const filtered = data.filter(
          product =>
            product.category &&
            product.category.toLowerCase().trim() === 'sandals'
        );
        console.log('Sandals products:', filtered); // Debug: See what is being shown
        setShoesProducts(filtered);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shop Shoes & Sandals</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {shoesProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
