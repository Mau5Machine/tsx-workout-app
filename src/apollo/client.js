import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { SETTINGS } from '../config/settings';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${SETTINGS.gql_endpoint}`,
    headers: {
      'x-hasura-admin-secret': `${SETTINGS.hasura_secret}`,
    },
  }),
  cache: new InMemoryCache(),
});
