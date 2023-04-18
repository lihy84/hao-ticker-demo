import React from 'react';
import HistoricalData from './HistoricalData';

// Ticker component - displays a single ticker  (name, price, and historical data)
const Ticker = ({ name, price, historicalData }) => {
  // If the price is greater than the previous price, display the price in green
  const color = price > historicalData[historicalData.length - 2]?.price ? 'green' : 'red';
  return (
    <div className="ticker">
      <h3>{name}</h3>
      <p style={{ color }}>Price: ${price.toFixed(2)}</p>
      <HistoricalData data={historicalData} />
    </div>
  );
};

export default Ticker;
