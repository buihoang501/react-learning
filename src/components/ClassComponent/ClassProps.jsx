import React, { Component } from 'react';

class ClassPropsChild extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.props.onClickCounter}>Click counter!</button>
          <p>Count: {this.props.count}</p>
        </div>
      </React.Fragment>
    );
  }
}

class ClassProps extends Component {
  constructor() {
    super();
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
      <ClassPropsChild
        count={this.state.count}
        onClickCounter={this.clickCounterHandler.bind(this)}
      />
    );
  }
}

export default ClassProps;
