import React, { PropTypes } from 'react';
import './_app.scss';

const App = props => (<main className="c-app">Welcome{props.children}</main>);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default App;
