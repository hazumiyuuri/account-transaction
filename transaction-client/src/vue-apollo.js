import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const getHeaders = () => {
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

// Create an http link:
const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
  fetch,
  headers: getHeaders()
});

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

export default apolloClient;
