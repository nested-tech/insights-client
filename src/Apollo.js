// @flow

import ApolloClient from "apollo-boost";

const onError = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
};

export const client = new ApolloClient({
  uri: "http://nested.test:4000/api",
  onError,
});
