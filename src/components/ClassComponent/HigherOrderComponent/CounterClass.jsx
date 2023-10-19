import React, { Component } from 'react';
import HigherOrderCounter from './WithCounter';

class CounterClass extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onCounterClick}>Click counter!</button>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

export default HigherOrderCounter(CounterClass);
