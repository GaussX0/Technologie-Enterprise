import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList
        products={filteredProducts}
        filter={filter}
        setFilter={setFilter}
      />,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
