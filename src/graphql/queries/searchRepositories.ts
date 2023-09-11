import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES_QUERY = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      nodes {
        __typename
        ... on Repository {
          id
          name
          description
        }
      }
    }
  }
`;
