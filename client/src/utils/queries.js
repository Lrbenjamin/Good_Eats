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
    image
    rating
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
      reviews {
        _id
        text
        rating
        username
        createdAt
      }
    }
  }
`;


export const GET_REVIEWS_BY_USER = gql`
 query GetReviewsByUser {
  getReviewsByUser {
    _id
    createdAt
    rating
    store {
      name
      _id
    }
    text
    username
  }
}`;
