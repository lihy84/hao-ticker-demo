# Simulated Stock Ticker Web App

This is a simple web app that simulates a stock ticker platform, displaying real-time price updates for a list of pre-defined tickers.

## Folder Structure

```ado
.
├── server
│ ├── index.js
│ └── package.json
├── simdaq-api
│ ├── index.js
│ ├── package.json
│ ├── prisma
│ │ ├── schema.prisma
│ │ └── migrations
│ └── seed.js
├── public
│ └── index.html
├── src
│ ├── component
│ │ ├── Ticker.js
│ │ ├── TickerList.js
│ │ ├── HistoricalData.js
│ ├── index.js
│ ├── App.js
│ └── App.css
└── package.json
```

## Running Locally

### Prerequisites

- Node.js installed
- NPM or Yarn package manager

### Steps

Clone the repository and navigate to each of the three directories (server, simdaq-api, and the root), then install the required dependencies using the following command:

```bash
npm install
```

Start the SimDAQ API by running the following command in the `/simdaq-api` directory:

```bash
npm index.js
```

Start the server API by running the following command in the `/server` directory:

```bash
npm index.js
```

Start the react-app by running the following command in the root directory:

```bash
npm start
```

Now, you can access the web app in your browser at http://localhost:3000.

### Future Improvement Ideas

- Add user authentication and allow users to create their own watchlists.
- Implement a more sophisticated price simulation algorithm.
- Allow users to select different timeframes for historical data (e.g., 1 day, 1 week, 1 month).
- Improve chart visualization with more customization options.
- Add more data points, such as volume, market cap, and percentage change.
- Integrate with a real stock API for live data.

## Pros and Cons of the Current Setup

### Pros

- Modular design, separating frontend, backend, and SimDAQ API, making it easier to maintain and scale each component independently.
- Uses popular and well-documented technologies (React, GraphQL, Node.js, Prisma, and SQLite), making it easier to find resources and support.
- GraphQL allows for efficient data fetching, minimizing over-fetching or under-fetching of data.
- Provides a clean and simple user interface for displaying stock ticker information.

### Cons

- Currently, the app uses a simplified and random price simulation, which may not accurately reflect real-world stock price changes.
- SQLite might not be the best choice for a production-level application due to its limitations (e.g., lack of support for concurrent writes). For a large-scale application, a more robust database solution like PostgreSQL might be more suitable.
- The frontend currently only supports a fixed list of stock tickers, which limits the app's flexibility.
- The app lacks advanced features and customization options that users might expect from a full-featured stock ticker platform.
