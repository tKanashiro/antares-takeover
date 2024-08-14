// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/graphql",
  cache: new InMemoryCache(),
});

export default client;
