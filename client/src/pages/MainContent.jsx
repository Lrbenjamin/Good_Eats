import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Signup from '../components/Signup';
import Login from '../components/Login';
import ErrorPage from '../components/ErrorPage';
import Donate from '../components/Donate';

const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile/:profileId" component={Profile} />
      <Route path="/donate" component={Donate} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default MainContent;