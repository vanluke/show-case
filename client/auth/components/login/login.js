import React, { PropTypes } from 'react';
import AuthService from 'auth/service';

const login = auth => () => auth.loginToAuth0();

const Login = ({ auth }) => (
  <div className="c-login">
    <h2>Login using auth0</h2>
    <button
      onClick={login(auth)}
      className="c-login__button c-login__button--login"
    >Login</button>
  </div>);

Login.propTypes = {
  auth: PropTypes.instanceOf(AuthService),
};

export default Login;
