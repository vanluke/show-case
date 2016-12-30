import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
// import App from 'shared/components/app';

const hoock = document.getElementById('container');
render(<Router history={browserHistory}>{routes()}</Router>, hoock);
