import React, { Component } from 'react';

class UnMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount = () => {
    // Remember the timer handle
    this.timerHandle = setTimeout(() => {
      this.setState({ show: false });
      this.timerHandle = 0;
    }, 3000);
  };

  componentWillUnmount = () => {
    // Is our timer running?
    if (this.timerHandle) {
      // Yes, clear it
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.show && <div>Unmounting Component</div>}
      </React.Fragment>
    );
  }
}

export default UnMounting;
