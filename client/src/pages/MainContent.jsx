// The main and only page in the website which imports components and establishes routes for the website
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';
import ErrorPage from './ErrorPage';
import Donate from './Donate';
import Store from './Store';
import StoreEdit from './StoreEdit';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/store/:storeId/editReview/:reviewId" element={<StoreEdit />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainContent;