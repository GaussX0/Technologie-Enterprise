import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, filter, setFilter }) {
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>List of products</h1>
      <label>
        Filter by product title:{" "}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <ul>
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            brand={product.brand}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
