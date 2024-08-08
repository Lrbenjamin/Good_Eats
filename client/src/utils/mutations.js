import  { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($rating: Int!, $text: String!) {
    addReview(rating: $rating, text: $text) {
      _id
      createdAt
      rating
      text
      username
    }
  }
`;

export const EDIT_REVIEW = gql`
  mutation editReview($reviewId: ID!, $rating: Int!, $text: String!) {
    editReview(reviewId: $reviewId, rating: $rating, text: $text) {
      _id
      rating
      text
      username
      createdAt
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId: ID!) {
    deleteReview(reviewId: $reviewId) {
      _id
      rating
      text
      username
      createdAt
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout {
      message
    }
  }
`;