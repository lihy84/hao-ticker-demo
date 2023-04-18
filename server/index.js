const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const fetch = require("node-fetch");
const cors = require("cors");

const typeDefs = gql`
  type Ticker {
    name: String!
    price: Float!
    historicalData: String!
  }

  type Query {
    tickers: [Ticker]!
  }
`;

const resolvers = {
  Query: {
    tickers: async () => {
      const response = await fetch("http://localhost:4001/tickers");
      const tickers = await response.json();
      return tickers;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const PORT = 3001;
app.use(cors()); // Allow cross-origin requests

(async () => {
  await server.start(); // Wait for the Apollo server to start
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
})();
