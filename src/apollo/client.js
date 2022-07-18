import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_HASURA_ENDPOINT,
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET,
    },
  }),
  cache: new InMemoryCache(),
});
