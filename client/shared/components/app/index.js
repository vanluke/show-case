import React, { PropTypes } from 'react';
import './_app.scss';

const App = props => (<main className="c-app">
  {React.cloneElement(props.children, {
    auth: props.route.auth,
  })}
</main>);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  route: PropTypes.object,
};

export default App;
