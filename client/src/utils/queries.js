import  { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      username
      firstName
      email
      reviews {
        _id
        // Include other fields for the review if needed
      }
      createdAt
      updatedAt
    }
  }
`;