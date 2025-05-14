import React from 'react';
import ProductCard from '../components/ProductCard';

const menProducts = [
  {
    id: 1,
    name: 'Classic Blue Shirt',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80'
  },
  // Add more products as needed
];

export default function MenPage() {
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
