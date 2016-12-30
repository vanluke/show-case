import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Auth0Service from 'auth/service';
import App from 'shared/components/app';
import Home from 'shared/components/landing-page';
import Dashboard from 'dashboard/components/user-panel';
import Login from 'auth/components/login/login';
import config from 'shared/config';

const auth = new Auth0Service(config.auth.clientId,
  config.auth.domain);

const requireAuth = (nextState, replace) => {
  if (!Auth0Service.loggedIn()) {
    replace({ pathname: config.routes.login });
  }
};

export const routes = () => (
  <Route path="/" component={App} auth={auth}>
    <IndexRedirect to={config.routes.home} />
    <Route path="home" component={Home} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Dashboard} />
  </Route>);


export default routes;
