// src/HistoricalData.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const HistoricalData = ({ data }) => {
  const dataWithTimestamp = data.map(d => ({ ...d, timestamp: new Date(d.timestamp).toLocaleTimeString() }));
  return (
    <LineChart width={250} height={100} data={dataWithTimestamp}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis type="number" tickFormatter={value => value.toFixed(2)} domain={['dataMin', 'dataMax']} allowDecimals={true} />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
    </LineChart>
  );
};

export default HistoricalData;
