import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product[0]} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">{product[1]}</h2> {/* Ajusta según el formato de tus datos */}
            <p className="text-gray-700 mb-4">{product[2]}</p> {/* Ajusta según el formato de tus datos */}
            <p className="text-lg font-bold">${product[3]}</p> {/* Ajusta según el formato de tus datos */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
