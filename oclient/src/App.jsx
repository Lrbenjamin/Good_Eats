import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';
// import MainContent from './pages/MainContent';
import React from 'react';
import { Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from './components/Home';
// import Profile from './components/Profile';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import ErrorPage from './components/ErrorPage';
// import Donate from './components/Donate';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    {/* <ApolloProvider client={client}> */}
      <Home/>
      <Router>
        {/* <div>
          <Header />
          <div className="content"> */}
            {/* <MainContent /> */}
          
      <Route path="/home" component={Home} />
      {/* <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile/:profileId" component={Profile} />
      <Route path="/donate" component={Donate} />
      <Route component={ErrorPage} /> */}
          {/* </div>
          <Footer />
        </div> */}
      </Router>
    {/* </ApolloProvider> */}
    </>
  );
}

export default App;