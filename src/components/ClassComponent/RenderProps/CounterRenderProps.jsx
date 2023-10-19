import React, { Component } from 'react';

class CounterRenderProps extends Component {
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
      <React.Fragment>
        {this.props.render(this.state.count, this.clickCounterHandler)}
      </React.Fragment>
    );
  }
}

export default CounterRenderProps;
