import { useQuery, gql } from "@apollo/client";

export const GET_TASKS = gql`
  query ExampleQuery($limit: Int, $offset: Int) {
    tasks(limit: $limit, offset: $offset) {
      items {
        id
        name
        postDate {
          short
        }
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query ExampleQuery {
    myProfile {
      id
      email
      name
      position
      tel
    }
  }
`;

export const GET_PERMISSION = gql`
  query ExampleQuery {
    myPermissions {
      active
      permission {
        id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      successful
      refreshToken
    }
  }
`;
