import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Auth0Service from 'auth/service';
import App from 'shared/components/app';
import Home from 'home/components/home';
import Dashboard from 'dashboard/components/user-panel';
import Spends from 'spends/components/spends';
import Login from 'auth/components/login/login';
import Logout from 'auth/components/logout/logout';
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
    <Route path="login" component={Login} />
    <Route path="Logout" component={Logout} />
    <Route component={Home} auth={auth}>
      <Route path="home" component={Dashboard} onEnter={requireAuth} />
      <Route path="spends" component={Spends} onEnter={requireAuth} />
    </Route>
  </Route>);


export default routes;
