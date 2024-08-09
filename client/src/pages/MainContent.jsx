import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Signup from '../components/Signup';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';
import Donate from '../components/Donate';
import Store from '../components/Store';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainContent;

