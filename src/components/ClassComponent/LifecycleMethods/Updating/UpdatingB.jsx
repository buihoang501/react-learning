import React, { Component } from 'react';

class UpdatingB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component Did Mount B');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Get Derived State From Props B');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Should Component Update B');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snap Shot Before Update B');
    return null;
  }

  componentDidUpdate() {
    console.log('Component Did Update B');
  }

  render() {
    console.log('Render B');
    return <div>Component Updating B</div>;
  }
}

export default UpdatingB;
