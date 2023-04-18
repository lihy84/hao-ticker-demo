const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const tickers = [
    { name: "AAPL", price: 150.0, historicalData: JSON.stringify([]) },
    { name: "GOOGL", price: 2500.0, historicalData: JSON.stringify([]) },
    { name: "AMZN", price: 3500.0, historicalData: JSON.stringify([]) },
    { name: "MSFT", price: 300.0, historicalData: JSON.stringify([]) },
    { name: "TSLA", price: 800.0, historicalData: JSON.stringify([]) },
  ];
  await prisma.ticker.deleteMany();
  for (const ticker of tickers) {
    await prisma.ticker.create({ data: ticker });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
