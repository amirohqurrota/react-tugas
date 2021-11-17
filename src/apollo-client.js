import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  

const client = new ApolloClient({
    uri: 'https://task-react-apollo.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'v38Oc6xqwP6okQUzL4eYjREPUOrjD3l7yFVOKVlJLYK6c9EdUm7M4kTGTXQbZ8a9'
    },
    cache: new InMemoryCache()
  });
  
export default client