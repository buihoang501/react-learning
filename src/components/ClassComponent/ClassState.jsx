import React, { Component } from 'react';

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  clickCounterHandler() {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: this.state.count + 1,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.clickCounterHandler.bind(this)}>
            Click counter!
          </button>
          <p>Count: {this.state.count}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ClassState;
