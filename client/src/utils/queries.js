import  { gql } from '@apollo/client';

export const GET_ALL_STORES = gql`
  query {
    stores {
      _id
      name
      zipcode
      website
      address
      contact
    }
  }
`;

export const GET_STORE = gql`
  query GetStore($storeId: ID!) {
    store(storeId: $storeId) {
      _id
      name
      zipcode
      website
      address
      contact
    }
  }
`;

export const GET_REVIEWS_FOR_STORE = gql`
  query GetReviewsForStore($storeId: ID!) {
    reviewsByStore(storeId: $storeId) {
      _id
      rating
      text
      username
      createdAt
    }
  }
`;

export const GET_REVIEWS_BY_USER = gql`
  query GetReviewsByUser($username: String!) {
    reviewsByUser(username: $username) {
      _id
      rating
      text
      createdAt
      // Add any other fields you want to retrieve for each review
    }
  }
`;