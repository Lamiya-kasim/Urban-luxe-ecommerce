import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function WomenPage() {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    fetch('http://ecommercce.test/api/products')
      .then(res => res.json())
      .then(data => {
        // Filter products for category "women"
        const filtered = data.filter(product => product.category === 'women');
        setWomenProducts(filtered);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shop Women</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {womenProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
