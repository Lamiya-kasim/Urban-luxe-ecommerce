import React from 'react';
import ProductCard from '../components/ProductCard';

// Dummy product data (replace with real data or API later)
const womenProducts = [
  {
    id: 1,
    name: "Minimalist Summer Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Elegant Black Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Casual White Dress",
    price: 999,
    image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Floral Maxi Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Satin Slip Dress",
    price: 1899,
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Boho Chic Dress",
    price: 1399,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Off-Shoulder Dress",
    price: 1499,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Wrap Dress",
    price: 1699,
    image: "https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    name: "Pleated Midi Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Lace Cocktail Dress",
    price: 1999,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    name: "Denim Shirt Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Bodycon Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    name: "T-shirt Dress",
    price: 999,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Evening Gown",
    price: 2999,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Shirt Dress",
    price: 1399,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 16,
    name: "Ruffle Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 17,
    name: "Knit Dress",
    price: 1499,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 18,
    name: "Denim Overall Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 19,
    name: "Sweater Dress",
    price: 1399,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 20,
    name: "Shift Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 21,
    name: "Halter Neck Dress",
    price: 1699,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 22,
    name: "Peplum Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 23,
    name: "Denim Mini Dress",
    price: 1399,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 24,
    name: "Tiered Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 25,
    name: "Smocked Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 26,
    name: "Bodycon Midi Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 27,
    name: "Bohemian Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 28,
    name: "Maxi Dress",
    price: 1999,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 29,
    name: "Sundress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 30,
    name: "Wrap Maxi Dress",
    price: 1799,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
  }
];


export default function WomenPage() {
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
