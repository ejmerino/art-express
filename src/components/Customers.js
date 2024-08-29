// src/components/Customers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Clientes</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map(customer => (
            <li key={customer.id} className="border-b py-2">
              <h3 className="text-xl font-semibold">{customer.name}</h3>
              <p>Email: {customer.email}</p>
              <p>Teléfono: {customer.phone}</p>
              {/* Agrega otros campos según tu estructura de datos */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay clientes disponibles.</p>
      )}
    </div>
  );
};

export default Customers;
