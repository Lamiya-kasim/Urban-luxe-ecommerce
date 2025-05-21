import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function MenPage() {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetch('http://ecommercce.test/api/products')
      .then(res => res.json())
      .then(data => {
        // Filter products for category "men"
        const filtered = data.filter(product => product.category === 'men');
        setMenProducts(filtered);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shop Men</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {menProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
