// src/ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return null;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width="200" />
      <br />
      <Link to="/">Back to product list</Link>
    </div>
  );
};

export default ProductDetail;