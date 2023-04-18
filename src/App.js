import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import TickerList from './component/TickerList';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Simple Ticker List</h1>
        <TickerList />
      </div>
    </ApolloProvider>
  );
}

export default App;
