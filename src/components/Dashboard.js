// src/pages/Dashboard.js
import React from 'react';
import Customers from '../components/Customers';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <Customers />
    </div>
  );
};

export default Dashboard;