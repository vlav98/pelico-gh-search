import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const githubToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

if (!githubToken) {
  throw new Error(
    "GitHub personal access token is not defined in environment variables."
  );
}

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${githubToken}`, // Replace with your actual token
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
