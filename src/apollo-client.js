import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
  } from "@apollo/client";

import {WebSocketLink} from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'https://task-react-apollo.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'v38Oc6xqwP6okQUzL4eYjREPUOrjD3l7yFVOKVlJLYK6c9EdUm7M4kTGTXQbZ8a9'
  },
});

const wsLink = new WebSocketLink({
  uri: 'wss://task-react-apollo.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams:{
      headers: {
        'x-hasura-admin-secret': 'v38Oc6xqwP6okQUzL4eYjREPUOrjD3l7yFVOKVlJLYK6c9EdUm7M4kTGTXQbZ8a9'
      },

    }
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);



const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});



  
export default client