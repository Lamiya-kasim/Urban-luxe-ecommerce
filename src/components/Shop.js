import React, { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://ecommercce.test/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const womenProducts = products.filter(p => p.category === "women");
  const menProducts = products.filter(p => p.category === "men");
  const kidsProducts = products.filter(p => p.category === "kids");
  const sandalsProducts = products.filter(p => p.category === "sandals");

  return (
    <div>
      <h2>Shop Women</h2>
      <ul>
        {womenProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
            <br />
            {product.description}
            <br />
            {product.image && (
              <img
                src={`http://ecommercce.test/storage/${product.image}`}
                alt={product.name}
                width={120}
              />
            )}
          </li>
        ))}
      </ul>

      <h2>Shop Men</h2>
      <ul>
        {menProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
            <br />
            {product.description}
            <br />
            {product.image && (
              <img
                src={`http://ecommercce.test/storage/${product.image}`}
                alt={product.name}
                width={120}
              />
            )}
          </li>
        ))}
      </ul>

      <h2>Shop Kids</h2>
      <ul>
        {kidsProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
            <br />
            {product.description}
            <br />
            {product.image && (
              <img
                src={`http://ecommercce.test/storage/${product.image}`}
                alt={product.name}
                width={120}
              />
            )}
          </li>
        ))}
      </ul>

      <h2>Shoes & Sandals</h2>
      <ul>
        {sandalsProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
            <br />
            {product.description}
            <br />
            {product.image && (
              <img
                src={`http://ecommercce.test/storage/${product.image}`}
                alt={product.name}
                width={120}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
