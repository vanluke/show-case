import React, { PropTypes } from 'react';
import './_button.scss';

const Button = props =>
  (<button className={`c-button c-button--${props.type}`}>{props.text}</button>);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
