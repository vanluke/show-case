import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'store';

const hoock = document.getElementById('container');
render(<Provider store={store}>
  <Router history={browserHistory}>{routes()}</Router>
</Provider>, hoock);
