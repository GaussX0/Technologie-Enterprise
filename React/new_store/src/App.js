import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} filter={filter} setFilter={setFilter}/>
    },
    {
      path: "/details/:id",
      element: <ProductDetail products={products} />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App