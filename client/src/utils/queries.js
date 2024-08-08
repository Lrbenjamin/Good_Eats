import  { gql } from '@apollo/client';

export const GET_ALL_STORES = gql`
query GetAllStores {
  getAllStores {
    _id
    address
    contact
    name
    website
    zipcode
  }
}
`;

export const GET_STORE = gql`
  query GetStore($storeId: ID!) {
    getStore(storeId: $storeId) {
      _id
      address
      contact
      name
      website
      zipcode
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
     
    }
  }
`;