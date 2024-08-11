import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainContent;