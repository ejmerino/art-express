import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/products" className="hover:underline">Productos</Link></li>
        <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
