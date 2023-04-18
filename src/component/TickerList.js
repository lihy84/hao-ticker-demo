import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Ticker from './Ticker';

/**
 * GraphQL query
 */
const GET_TICKERS = gql`
  query GetTickers {
    tickers {
      name
      price
      historicalData
    }
  }
`;

/**
 * TickerList component
 */
const TickerList = () => {
  const { loading, error, data } = useQuery(GET_TICKERS, {
    pollInterval: 1000,
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }

  return (
    <div className="ticker-list">
      {data.tickers.map(({ name, price, historicalData }) => (
        <Ticker key={name} name={name} price={price} historicalData={JSON.parse(historicalData)} />
      ))}
    </div>
  );
};

export default TickerList;
