import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  cCounterStart,
  cCounterStop,
} from 'auth/components/counter/action-creators.js';
import './_counter.scss';

class Counter extends PureComponent {
  static propTypes = {
    counter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    timeInterval: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    actionAfter: PropTypes.func,
    text: PropTypes.string,
    suffix: PropTypes.string,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(...props);
  }

  componentDidMount() {
    const { dispatch, timeInterval, time, actionAfter } = this.props;
    dispatch(cCounterStart({
      actionAfter,
      time,
      timeInterval,
    }));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cCounterStop());
  }

  render() {
    const { counter, text, suffix } = this.props;
    return (<div className="c-counter">
      <header className="c-counter__header">
        <h2 className="c-counter__header c-counter__header--h2">
          {text}
        </h2>
        <h3 className="c-counter__header c-counter__header--h3">
          {`${counter}${suffix}`}
        </h3>
      </header>
    </div>);
  }
}

export default connect((state, props) => {
  const { counterReducer } = state;
  return {
    ...counterReducer,
    text: props.text,
    timeInterval: props.timeInterval || 0,
    time: props.time || 0,
    actionAfter: props.actionAfter,
    suffix: props.suffix || '',
  };
})(Counter);
