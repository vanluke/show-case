import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  cCounterStart,
  cCounterStop,
} from 'auth/counter/epic';
import Counter from 'auth/counter/counter';

export class CounterContainer extends PureComponent {
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
    const { dispatch, time, timeInterval, actionAfter } = this.props;
    dispatch(cCounterStart({
      counterFinished: actionAfter,
      timeInterval,
      time,
    }));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cCounterStop());
  }

  render() {
    const { text, counter, suffix = '' } = this.props;
    return (<Counter
      text={text}
      suffix={suffix}
      counter={counter}
    />);
  }
}

export default connect((state, props) => {
  const { counterReducer } = state;
  return {
    ...counterReducer,
    ...props,
  };
})(CounterContainer);
