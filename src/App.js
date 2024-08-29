import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
