import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function KidsPage() {
  const [kidsProducts, setKidsProducts] = useState([]);

  useEffect(() => {
    fetch('http://ecommercce.test/api/products')
      .then(res => res.json())
      .then(data => {
        // Filter products for category "kids"
       const filtered = data.filter(product => product.category && product.category.toLowerCase().trim() === 'kids');

        setKidsProducts(filtered);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shop Kids</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {kidsProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
