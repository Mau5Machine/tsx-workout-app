import { gql } from '@apollo/client';

// Retrieve full list of all users
export const USERS = gql`
  query Users {
    users {
      id
      name
      dob
      email
    }
  }
`;
