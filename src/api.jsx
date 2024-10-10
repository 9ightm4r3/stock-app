import axios from 'axios';

const API_KEY = 'BsuzDKUa12R79Hp8GJxlgw==NA7VfPkqFm8xMNby';  // Replace with your actual API key
const BASE_URL = 'https://api.api-ninjas.com/v1/stockprice';

export const getStockPrice = async (ticker) => {
  try {
    const response = await axios.get(`${BASE_URL}?ticker=${ticker}`, {
      headers: { 'X-Api-Key': API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return null;
  }
};
