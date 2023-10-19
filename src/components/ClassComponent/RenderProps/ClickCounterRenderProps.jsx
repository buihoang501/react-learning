import React, { Component } from 'react';
import CounterRenderProps from './CounterRenderProps';

class ClickCounterRenderProps extends Component {
  render() {
    const { count, clickCounterHandler } = this.props;
    return (
      <div>
        <button onClick={clickCounterHandler}>Click counter!</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default ClickCounterRenderProps;
