import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LandingPage from './components/LandingPage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
  </Route>
);
