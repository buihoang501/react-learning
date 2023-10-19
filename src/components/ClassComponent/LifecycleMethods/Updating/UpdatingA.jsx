import React, { Component } from 'react';
import UpdatingB from './UpdatingB';

class UpdatingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component Did Mount A');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived State From Props A');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Should Component Update A');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snap Shot Before Update A');
    return 'Từ Yêu Đại Sư';
  }

  componentDidUpdate(props, state, snapshot) {
    console.log('Component Did Update A', snapshot);
  }

  clickCounterHandler() {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: this.state.count + 2,
      };
    });
  }

  render() {
    console.log('Render A');
    return (
      <div>
        <button onClick={this.clickCounterHandler.bind(this)}>
          Add count!
        </button>
        <p>Count: {this.state.count}</p>
        <UpdatingB />
      </div>
    );
  }
}

export default UpdatingA;
