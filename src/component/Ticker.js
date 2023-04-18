import React from 'react';
import HistoricalData from './HistoricalData';

const Ticker = ({ name, price, historicalData }) => {
  return (
    <div className="ticker">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <HistoricalData data={historicalData} />
    </div>
  );
};

export default Ticker;
