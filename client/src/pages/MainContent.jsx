// The main and only page in the website which imports components and establishes routes for the website
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Signup from '../components/Signup';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';
import Donate from '../components/Donate';
import Store from '../components/Store';
import StoreEdit from '../components/StoreEdit';

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