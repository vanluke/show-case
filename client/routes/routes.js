import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Auth0Service from 'auth/service';
import Auth0Lock from 'auth0-lock';
import App from 'shared/components/app';
import Home from 'home/components/home';
import Dashboard from 'dashboard/components/user-panel';
import Spends from 'spends/components/spends';
import Login from 'auth/login/login';
import Logout from 'auth/logout/logout';
import config from 'shared/config';
import AuthService from 'auth/service/auth.service';

const authService = new AuthService(config.server.baseUrl);

const lock = new Auth0Lock(config.auth.clientId,
  config.auth.domain, {
    auth: {
      redirectUrl: config.auth.redirectUrl,
      responseType: config.auth.type,
    },
  });

const auth = new Auth0Service(lock, authService);

const requireAuth = (nextState, replace) => {
  if (!Auth0Service.loggedIn()) {
    replace({ pathname: config.routes.login });
  }
};

export const routes = () => (
  <Route path="/" component={App} auth={auth}>
    <IndexRedirect to={config.routes.home} />
    <Route path="login" component={Login} />
    <Route path="Logout" component={Logout} />
    <Route component={Home} auth={auth}>
      <Route path="home" component={Dashboard} onEnter={requireAuth} />
      <Route path="spends" component={Spends} onEnter={requireAuth} />
    </Route>
  </Route>);


export default routes;
