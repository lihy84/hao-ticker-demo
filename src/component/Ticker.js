import React from 'react';
import HistoricalData from './HistoricalData';

// Helper function to determine the color of the price
const priceColor = (price, historicalData) => {
  // If there is no historical data, return black
  const previousPrice = historicalData[historicalData.length - 2].price;
  switch (true) {
    case price > previousPrice:
      return 'green';
    case price < previousPrice:
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
