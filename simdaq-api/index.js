const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");

const app = express();
const PORT = 4001;
app.use(cors()); // Allow cross-origin requests

app.get("/tickers", async (req, res) => {
  const tickers = await prisma.ticker.findMany();
  const updatedTickers = [];

  for (const ticker of tickers) {
    const updatedPrice = ticker.price * (1 + (Math.random() * 0.1 - 0.05));
    const historicalData = JSON.parse(ticker.historicalData);
    const newHistoricalData = [
      ...historicalData,
      { timestamp: Date.now(), price: updatedPrice },
    ];

    await prisma.ticker.update({
      where: { id: ticker.id },
      data: {
        price: updatedPrice,
        historicalData: JSON.stringify(newHistoricalData),
      },
    });

    updatedTickers.push({
      ...ticker,
      price: updatedPrice,
      historicalData: JSON.stringify(newHistoricalData),
    });
  }

  res.json(updatedTickers);
});

app.listen(PORT, () => {
  console.log(`SimDAQ API listening at http://localhost:${PORT}`);
});
