
const StockPriceCard = ({ stockData }) => {
  const { ticker, name, price, exchange } = stockData;

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-gray-800 p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-400">{ticker} | {exchange}</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-green-400">${price.toFixed(2)}</p>

      </div>
    </div>
  );
};

export default StockPriceCard;
