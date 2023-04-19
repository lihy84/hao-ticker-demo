const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

/**
 * SimDAQ API
 */
const app = express();
const PORT = 4001;
app.use(cors()); // Allow cross-origin requests

/**
 * Update the price of each ticker by a random amount.  This is a background  process that runs every second.
 */
const updateTickers = async () => {
  const tickers = await prisma.ticker.findMany();

  for (const ticker of tickers) {
    const updatedPrice = ticker.price * (1 + (Math.random() * 0.1 - 0.05));
    const historicalData = JSON.parse(ticker.historicalData);
    const newHistoricalData = [...historicalData, { timestamp: Date.now(), price: updatedPrice }];

    await prisma.ticker.update({
      where: { id: ticker.id },
      data: { price: updatedPrice, historicalData: JSON.stringify(newHistoricalData) },
    });
  }
};

setInterval(updateTickers, 1000); // Update every second (1000 ms)

/**
 * Get all tickers.
 */
app.get('/tickers', async (req, res) => {
  const tickers = await prisma.ticker.findMany();
  res.json(tickers);
});

app.listen(PORT, () => {
  console.info(`SimDAQ API listening at http://localhost:${PORT}`);
});
