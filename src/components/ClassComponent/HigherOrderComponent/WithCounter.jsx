import React, { Component } from 'react';
import styled from 'styled-components';

const HigherOrderCounter = (CounterComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    clickCounterHandler = () => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: this.state.count + 5,
        };
      });
    };

    render() {
      return (
        <CounterComponent
          count={this.state.count}
          onCounterClick={this.clickCounterHandler}
        />
      );
    }
  }
  return NewComponent;
};

export default HigherOrderCounter;
