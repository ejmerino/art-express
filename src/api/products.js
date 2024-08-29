import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // URL del backend

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};
