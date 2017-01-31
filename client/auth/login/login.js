import React, { PropTypes } from 'react';
import Auth0Service from 'auth/service/auth0.service';
import { login } from 'auth/login/actions';
import './_login.scss';

const Login = ({ auth }) => (
  <div className="c-login">
    <section className="c-login__section">
      <h1 className="c-login__header c-login__header--main">Welcome to garage</h1>
      <h2 className="c-login__header c-login__header--secondary">Login using auth0</h2>
      <button
        onClick={login(auth)}
        className="c-login__button c-login__button--primary"
      >Login</button>
    </section>
  </div>);

Login.propTypes = {
  auth: PropTypes.instanceOf(Auth0Service),
};

export default Login;
