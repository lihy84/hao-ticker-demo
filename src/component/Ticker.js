import React from 'react';
import HistoricalData from './HistoricalData';

const priceColor = (price, historicalData) => {
  console.log('priceColor', price, historicalData[historicalData.length - 2].price);
  switch (true) {
    case price > historicalData[historicalData.length - 2].price:
      return 'green';
    case price < historicalData[historicalData.length - 2].price:
      return 'red';
    default:
      return 'black';
  }
};

// Ticker component - displays a single ticker  (name, price, and historical data)
const Ticker = ({ name, price, historicalData }) => {
  return (
    <div className="ticker">
      <h3>{name}</h3>
      <p style={{ color: priceColor(price, historicalData) }}>Price: ${price.toFixed(2)}</p>
      <HistoricalData data={historicalData} />
    </div>
  );
};

export default Ticker;
