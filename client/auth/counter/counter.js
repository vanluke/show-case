import React, { PropTypes } from 'react';
import './_counter.scss';

const Counter = ({ counter, suffix, text }) =>
  (<div className="c-counter">
    <header className="c-counter__header">
      <h2 className="c-counter__header c-counter__header--h2">
        {text}
      </h2>
      <h3 className="c-counter__header c-counter__header--h3">
        {`${counter}${suffix}`}
      </h3>
    </header>
  </div>);

Counter.propTypes = {
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  counter: PropTypes.number.isRequired,
};

export default Counter;
