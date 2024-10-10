import { useState, useEffect } from "react";
import StockPriceCard from "../components/StockPriceCard";

const App = () => {
  const [stockTicker, setStockTicker] = useState("NVDA"); 
  const [stockData, setStockData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStockData = async (ticker) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/stockprice?ticker=${ticker}`, {
        headers: { "X-Api-Key": "YOUR_API_KEY_HERE" },
      });
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      setStockData(data);
    } catch (error) {
      setError(`Failed to fetch stock data: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStockData(stockTicker);
  };

  useEffect(() => {
    fetchStockData(stockTicker); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Stock Price Tracker</h1>
      <p className="mb-4 text-center text-gray-500">

        Looking for the current price of a stock? 
      </p>
      <p className="mb-4 text-center text-gray-500">
    
        Enter the stock ticker symbol (e.g., AAPL, TSLA) in the input field below and click Get Stock Price.
      </p>
      
      <p className="mb-4 text-center text-gray-500">

        This app will then fetch the latest information and display the stock's name, price and  exchange.
      </p>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Enter stock ticker"
          value={stockTicker}
          onChange={(e) => setStockTicker(e.target.value)}
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="ml-4 p-2 bg-green-600 rounded-md hover:bg-green-500 transition-all"
        >
          Get Stock Price
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        stockData && <StockPriceCard stockData={stockData} />
      )}
    </div>
  );
};

export default App;